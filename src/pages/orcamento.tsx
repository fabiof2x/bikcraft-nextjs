import React from 'react';
import { GetStaticProps } from 'next'
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../services/firebase";

import { DocumentTitle } from "../components/DocumentTitle"
import Header from "../components/patterns/Header"
import HeaderTitle from "../components/patterns/HeaderTitle";
import Footer from "../components/patterns/Footer"

import styles from "../styles/Budget.module.scss";
import form from "../styles/Form.module.scss";
import button from "../styles/components/Button.module.scss";

import { BikeListDTO } from "../dtos/BikeDto";

interface PageProps {
  bikes: BikeListDTO[];
}

export default function Budget({
  bikes
}: PageProps) {
  return (
    <>
      <DocumentTitle
        title="Orçamento | Bikcraft"
        description="Orçamento"
      />
      <Header />

      <main>
        <div className={styles.budgetBg}>
          <HeaderTitle
            subtitle="Cotações no seu email"
            title="solicite um orçamento"
          />

          <form className={styles.budgetContainer}>
            <div className={styles.budgetProduct}>
              <h2>Bikcraft ou Seguro?</h2>

              <input type="radio" name="tipo" value="bikcraft" id="bikcraft" />
              <label htmlFor="bikcraft">Bikcraft</label>

              <input type="radio" name="tipo" value="seguro" id="seguro" />
              <label htmlFor="seguro">Seguro</label>

              <div className={styles.budgetContent} id="orcamento-bikcraft">
                <h2>Escolha a sua</h2>

                {bikes.map(bike => (
                  <React.Fragment key={bike.id}>
                    <input type="radio" name="produto" value={bike.slug} id={bike.slug} />
                    <label htmlFor={bike.slug}>{bike.nome} <span>R$ {bike.preco}</span></label>
                    <div className={styles.budgetDetails}>
                      <ul>
                        <li><img src="/img/icones/eletrica.svg" width="16" height="16" alt="" /> {bike.caracteristicas.motor}</li>
                        <li><img src="/img/icones/carbono.svg" width="16" height="16" alt="" /> {bike.caracteristicas.material}</li>
                        <li><img src="/img/icones/velocidade.svg" width="16" height="16" alt="" /> {bike.caracteristicas.velocidade} km/h</li>
                        <li><img src="/img/icones/rastreador.svg" width="16" height="16" alt="" /> {bike.caracteristicas.outros}</li>
                      </ul>
                      <img src={`/img/bicicletas/${bike.foto}`} width="1120" height="680" alt={bike.alt} />
                    </div>
                  </React.Fragment>
                ))}
              </div>

              <div className={styles.budgetContent} id="orcamento-seguro">
                <h2>Escolha o plano</h2>

                <input type="radio" name="produto" value="prata" id="prata" />
                <label htmlFor="prata">Prata <span>R$ 199</span></label>

                <input type="radio" name="produto" value="ouro" id="ouro" />
                <label htmlFor="ouro">Ouro <span>R$ 299</span></label>
              </div>
            </div>
            <div className={`${styles.budgetData} ${form.form}`} >
              <h2 className={form.col2}>dados pessoais</h2>
              <div>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" />
              </div>
              <div>
                <label htmlFor="sobrenome">Sobrenome</label>
                <input type="text" id="sobrenome" name="sobrenome" />
              </div>
              <div className={form.col2}>
                <label htmlFor="cpf">CPF</label>
                <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" />
              </div>
              <div className={form.col2}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
              <h2 className={form.col2}>entrega</h2>
              <div>
                <label htmlFor="cep">CEP</label>
                <input type="text" id="cep" name="cep" />
              </div>
              <div>
                <label htmlFor="numero">Número</label>
                <input type="text" id="numero" name="numero" />
              </div>
              <div>
                <label htmlFor="logradouro">Logradouro</label>
                <input type="text" id="logradouro" name="logradouro" />
              </div>
              <div>
                <label htmlFor="bairro">Bairro</label>
                <input type="text" id="bairro" name="bairro" />
              </div>
              <div>
                <label htmlFor="cidade">Cidade</label>
                <input type="text" id="cidade" name="cidade" />
              </div>
              <div>
                <label htmlFor="estado">Estado</label>
                <input type="text" id="estado" name="estado" />
              </div>
              <button className={`${button.buttonContainer} ${form.col2}`} type='submit'>Solicitar Orçamento</button>
            </div>
          </form>
        </div>
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