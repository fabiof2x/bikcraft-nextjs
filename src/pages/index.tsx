import { PageTitle } from "../components/PageTitle"

import styles from "../styles/Home.module.scss";

import Footer from "../components/patterns/Footer"
import Header from "../components/patterns/Header"

function HomePage() {
  return (
    <>
      <PageTitle
        title="Bikcraft - Bicicletas Elétricas"
        description="Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para você. Explore o mundo na sua velocidade com a Bikcraft."
      />
      <Header />

      <main className={styles.introBg}>
        <div className={styles.introContainer}>
          <div className={styles.introContent}>
            <h1>Bicicletas feitas sob medida<span>.</span></h1>
            <p>Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para você. Explore o mundo na sua velocidade com a Bikcraft.</p>
            <a href="/bicicletas">Escolha a sua</a>
          </div>
          <picture>
            <source media="(max-width: 800px)" srcSet="./img/bicicletas/nimbus.jpg" />
            <img src="./img/fotos/introducao.jpg" width="1280" height="1600" alt="Bicicleta elétrica preta." />
          </picture>
        </div>
      </main >

      <Footer />
    </>
  )
}

export default HomePage