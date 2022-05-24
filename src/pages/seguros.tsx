import { GetStaticProps } from 'next'
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../services/firebase";

import { Disclosure } from "@headlessui/react";
import { DocumentTitle } from "../components/DocumentTitle"

import Footer from "../components/patterns/Footer"
import Header from "../components/patterns/Header"
import HeaderTitle from "../components/patterns/HeaderTitle";
import InsurancePlans from "../components/patterns/InsurancePlans";
import { QuestionDTO } from "../dtos/QuestionDTO";

import styles from "../styles/Insurance.module.scss";

interface PageProps {
  faq: QuestionDTO[];
}

export default function Insurance({
  faq
}: PageProps) {
  return (
    <>
      <DocumentTitle
        title="Seguros | Bikcraft"
        description="Seguros"
      />
      <Header />

      <main className={styles.insuranceBg}>
        <HeaderTitle
          subtitle="Escolha o seguro"
          title="você seguro"
        />

        <InsurancePlans />
      </main>

      <article className={styles.advantagesBg}>
        <div className={styles.advantagesContainer}>
          <h2>vantagens<span>.</span></h2>
          <ul>
            <li>
              <img src="./img/icones/eletrica.svg" width="32" height="32" alt="" />
              <h3>Reparo Elétrico</h3>
              <p>Garantimos o reparo completo do seu motor em caso de falhas. Sabemos que falhas são raras, mas estamos aqui para caso ocorra.</p>
            </li>
            <li>
              <img src="./img/icones/carbono.svg" width="32" height="32" alt="" />
              <h3>Carbono</h3>
              <p>Nossos quadros são feitos para durar para sempre. Mas caso algo ocorra, ficamos felizes em reparar.</p>
            </li>
            <li>
              <img src="./img/icones/sustentavel.svg" width="32" height="32" alt="" />
              <h3>Sustentável</h3>
              <p>Trabalhamos com a filosofia de desperdício zero. Qualquer parte defeituosa é reciclada e reutilizada em outro projeto.</p>
            </li>
            <li>
              <img src="./img/icones/rastreador.svg" width="32" height="32" alt="" />
              <h3>Rastreador</h3>
              <p>Utilizamos o GPS da sua Bikcraft em conjunto com especialistas em segurança para efetuarmos a recuperação.</p>
            </li>
            <li>
              <img src="./img/icones/seguro.svg" width="32" height="32" alt="" />
              <h3>Segurança</h3>
              <p>Com o seguro Bikcraft você pode ficar tranquilo em saber que o seu dinheiro não será perdido em casos de roubo.</p>
            </li>
            <li>
              <img src="./img/icones/velocidade.svg" width="32" height="32" alt="" />
              <h3>Rapidez</h3>
              <p>A sua Bikcraft ficará pronta para uso no mesmo dia, caso você traga ela para ser reparada em uma das filiais.</p>
            </li>
          </ul>
        </div>
      </article>

      <article className={styles.faqContainer}>
        <h2>perguntas frequentes<span>.</span></h2>

        <dl>
          {faq.map(question => (
            <Disclosure key={question.id}>
              {({ open }) => (
                <div>
                  <dt>
                    <Disclosure.Button>
                      <span>{question.question}</span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd">
                    {question.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </dl>

      </article>

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  let data: QuestionDTO[] = [];

  const q = query(collection(db, "faq"), orderBy("id"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data() as QuestionDTO });
  });

  return {
    props: {
      faq: data
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}