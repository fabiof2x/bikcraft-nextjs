import { DocumentTitle } from "../components/DocumentTitle"

import Footer from "../components/patterns/Footer"
import Header from "../components/patterns/Header"
import HeaderTitle from "../components/patterns/HeaderTitle";
import InsurancePlans from "../components/patterns/InsurancePlans";

import styles from "../styles/Insurance.module.scss";

export default function Insurance() {
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


      <Footer />
    </>
  )
}