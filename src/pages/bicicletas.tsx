import { GetStaticProps } from 'next'
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../services/firebase";

import { DocumentTitle } from "../components/DocumentTitle"

import Header from "../components/patterns/Header"
import HeaderTitle from "../components/patterns/HeaderTitle";
import Footer from "../components/patterns/Footer"

import styles from "../styles/Bikes.module.scss";
import Button from "../components/Button";

import { BikeListDTO } from "../dtos/BikeDto";

interface PageProps {
  bikes: BikeListDTO[];
}

export default function Bikes({
  bikes
}: PageProps) {
  return (
    <>
      <DocumentTitle
        title="Bicicletas | Bikcraft"
        description="Bicicletas"
      />
      <Header />

      <main>
        <HeaderTitle
          subtitle="Escolha a melhor para você"
          title="nossas bicicletas"
        />
        {bikes.map(bike => (
          <div className={styles.bikesBg} key={bike.slug}>
            <div className={styles.bikesContainer}>
              <div className={styles.bikesImage}>
                <img src={`./img/bicicletas/${bike.foto}`} alt={bike.alt} />
                <span>R$ {bike.preco}</span>
              </div>
              <div className={styles.bikesContent}>
                <h2>{bike.nome}</h2>
                <p>{bike.descricao}</p>
                <ul>
                  <li>
                    <img src="./img/icones/eletrica.svg" alt="" />
                    {bike.caracteristicas.motor}
                  </li>
                  <li>
                    <img src="./img/icones/carbono.svg" alt="" />
                    {bike.caracteristicas.material}
                  </li>
                  <li>
                    <img src="./img/icones/velocidade.svg" alt="" />
                    {bike.caracteristicas.velocidade} km/h
                  </li>
                  <li>
                    <img src="./img/icones/rastreador.svg" alt="" />
                    {bike.caracteristicas.outros}
                  </li>
                </ul>
                <Button arrow href={`/bicicletas/${bike.slug}`}>Mais Sobre</Button>
              </div>
            </div>
          </div>
        ))};
      </main>

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  let data: BikeListDTO[] = [];

  const q = query(collection(db, "bicicletas"), orderBy("preco", "desc"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data() as BikeListDTO });
  });

  return {
    props: {
      bikes: data
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}