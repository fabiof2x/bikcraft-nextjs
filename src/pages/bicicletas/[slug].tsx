import { GetStaticPaths, GetStaticProps } from 'next'
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../services/firebase";

import { ParsedUrlQuery } from 'querystring';

import { DocumentTitle } from "../../components/DocumentTitle"
import Header from "../../components/patterns/Header"
import HeaderTitle from "../../components/patterns/HeaderTitle";
import Footer from "../../components/patterns/Footer"

import styles from "../../styles/Bike.module.scss";
import Button from "../../components/Button";
import { Link } from "../../components/Link";
import { BikeDetailsDTO } from '../../dtos/BikeDto';
import { getAllBikes } from '../../../lib/db';

interface IParams extends ParsedUrlQuery {
  slug: string
}

interface PageProps {
  thisPageBike: BikeDetailsDTO;
  otherBikes: BikeDetailsDTO[];
}

export default function Bike({
  thisPageBike,
  otherBikes
}: PageProps) {
  return (
    <>
      <DocumentTitle
        title={`${thisPageBike.nome} | Bikcraft`}
        description={thisPageBike.descricao}
      />
      <Header />

      <main className={styles.bikeBg}>
        <HeaderTitle
          subtitle={`R$ ${thisPageBike.preco}`}
          title={thisPageBike.nome}
        />
        <div className={styles.bikeContainer}>
          <div className={styles.bikeImages}>
            <img src="/img/bicicleta/nimbus2.jpg" width="1120" height="880" alt="" />
            <img src="/img/bicicleta/nimbus1.jpg" width="1120" height="880" alt="" />
            <img src="/img/bicicleta/nimbus3.jpg" width="1120" height="880" alt="" />
          </div>
          <div className={styles.bikeContent}>
            <p>{thisPageBike.descricao}</p>
            <div className={styles.bikeBuy}>
              <Button href="/orcamento">Comprar Agora</Button>
              <span><img src="/img/icones/entrega.svg" width="16" height="16" alt="" /> entrega em 5 dias</span>
              <span><img src="/img/icones/estoque.svg" width="16" height="16" alt="" /> 18 em estoque</span>
            </div>

            <h2>Informações</h2>
            <ul className={styles.bikeInfo}>
              <li>
                <img src="/img/icones/eletrica.svg" width="24" height="24" alt="" />
                <h3>{thisPageBike.caracteristicas.motor}</h3>
                <p>{thisPageBike.caracteristicas.motorDescricao}</p>
              </li>
              <li>
                <img src="/img/icones/velocidade.svg" width="24" height="24" alt="" />
                <h3>{thisPageBike.caracteristicas.velocidade} km/h</h3>
                <p>{thisPageBike.caracteristicas.velocidadeDescricao}</p>
              </li>
              <li>
                <img src="/img/icones/rastreador.svg" width="24" height="24" alt="" />
                <h3>{thisPageBike.caracteristicas.outros}</h3>
                <p>{thisPageBike.caracteristicas.outrosDescricao}</p>
              </li>
              <li>
                <img src="/img/icones/carbono.svg" width="24" height="24" alt="" />
                <h3>{thisPageBike.caracteristicas.material}</h3>
                <p>{thisPageBike.caracteristicas.materialDescricao}</p>
              </li>
            </ul>
            <h2>Ficha Técnica</h2>
            <ul className={styles.bikeDataSheet}>
              <li>Peso <span>{thisPageBike.fichaTecnica.peso} kg</span></li>
              <li>Altura <span>{thisPageBike.fichaTecnica.altura} cm</span></li>
              <li>Largura <span>{thisPageBike.fichaTecnica.largura} cm</span></li>
              <li>Profundidade <span>{thisPageBike.fichaTecnica.profundidade} cm</span></li>
              <li>Marchas <span>{thisPageBike.fichaTecnica.marchas}</span></li>
              <li>Roda <span>{thisPageBike.fichaTecnica.roda}</span></li>
            </ul>
          </div>
        </div>
      </main >

      <article className={styles.bikesList}>
        <h2>escolha a sua<span>.</span></h2>

        <ul>
          {otherBikes.map(bike => (
            <li key={bike.id}>
              <Link href={`/bicicletas/${bike.slug}`}>
                <img src={`/img/bicicletas/${bike.foto}`} alt={bike.alt} width="920" height="1040" />
                <h3>{bike.nome}</h3>
                <span>R$ {bike.preco}</span>
              </Link>
            </li>
          ))}
        </ul>
      </article>

      <article className={styles.insuranceBg}>
        <div className={styles.insuranceContainer}>
          <div className={styles.insuranceImg}>
            <img src="/img/fotos/seguros.jpg" width="1360" height="1512" alt="Pessoa parada em cima de uma bicicleta." />
          </div>
          <div className={styles.insuranceContent}>
            <h2>Pedale mais tranquilo com o nosso <span>seguro.</span></h2>
            <p>Inscreva-se em um dos planos do nosso seguro Bikcraft e aproveite diversos benefícios.</p>
            <Button href="/seguros">Conheça Mais</Button>
          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking' // false or 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams;
  const bikes = await getAllBikes();

  let data: BikeDetailsDTO[] = [];

  bikes.forEach(bike => {
    data.push({
      id: bike.id,
      nome: bike.nome,
      descricao: bike.descricao,
      preco: bike.preco,
      foto: bike.foto,
      alt: bike.alt,
      slug: bike.slug,
      caracteristicas: {
        motor: bike.motor,
        motorDescricao: bike.motor_descricao,
        material: bike.material,
        materialDescricao: bike.material_descricao,
        velocidade: bike.velocidade,
        velocidadeDescricao: bike.velocidade_descricao,
        outros: bike.outros,
        outrosDescricao: bike.outros_descricao,
      },
      fichaTecnica: {
        peso: bike.peso,
        altura: bike.altura,
        largura: bike.largura,
        profundidade: bike.profundidade,
        marchas: bike.marchas,
        roda: bike.roda,
      }
    });
  });

  const response: BikeDetailsDTO[] = data.filter((item: BikeDetailsDTO) => item.slug === slug);
  const otherBikes: BikeDetailsDTO[] = data.filter((item: BikeDetailsDTO) => item.slug !== slug);

  const thisPageBike: BikeDetailsDTO = {
    id: response[0].id,
    nome: response[0].nome,
    preco: response[0].preco,
    slug: response[0].slug,
    foto: response[0].foto,
    alt: response[0].alt,
    descricao: response[0].descricao,
    caracteristicas: {
      material: response[0].caracteristicas.material,
      materialDescricao: response[0].caracteristicas.materialDescricao,
      motor: response[0].caracteristicas.motor,
      motorDescricao: response[0].caracteristicas.motorDescricao,
      outros: response[0].caracteristicas.outros,
      outrosDescricao: response[0].caracteristicas.outrosDescricao,
      velocidade: response[0].caracteristicas.velocidade,
      velocidadeDescricao: response[0].caracteristicas.velocidadeDescricao
    },
    fichaTecnica: {
      altura: response[0].fichaTecnica.altura,
      largura: response[0].fichaTecnica.largura,
      marchas: response[0].fichaTecnica.marchas,
      peso: response[0].fichaTecnica.peso,
      profundidade: response[0].fichaTecnica.profundidade,
      roda: response[0].fichaTecnica.roda
    }
  }

  return {
    props: {
      thisPageBike,
      otherBikes
    },
    // revalidate: 60 * 60 * 24, // 24 hours
  }
}