import { DocumentTitle } from "../components/DocumentTitle"
import Header from "../components/patterns/Header"
import HeaderTitle from "../components/patterns/HeaderTitle";
import Footer from "../components/patterns/Footer"

import styles from "../styles/Bikes.module.scss";
import Button from "../components/Button";

export default function Bikes() {
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

        <div className={styles.bikesBg}>
          <div className={styles.bikesContainer}>
            <div className={styles.bikesImage}>
              <img src="./img/bicicletas/nimbus.jpg" alt="Bicicleta preta" />
              <span>R$ 4999</span>
            </div>
            <div className={styles.bikesContent}>
              <h2>Nimbus Stark</h2>
              <p>A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.</p>
              <ul>
                <li>
                  <img src="./img/icones/eletrica.svg" alt="" />
                  Motor Elétrico
                </li>
                <li>
                  <img src="./img/icones/carbono.svg" alt="" />
                  Fibra de Carbono
                </li>
                <li>
                  <img src="./img/icones/velocidade.svg" alt="" />
                  50 km/h
                </li>
                <li>
                  <img src="./img/icones/rastreador.svg" alt="" />
                  Rastreador
                </li>
              </ul>
              <Button arrow href="./bicicletas/nimbus.html">Mais Sobre</Button>
            </div>
          </div>
        </div>

        <div className={styles.bikesBg}>
          <div className={styles.bikesContainer}>
            <div className={styles.bikesImage}>
              <img src="./img/bicicletas/nimbus.jpg" alt="Bicicleta preta" />
              <span>R$ 4999</span>
            </div>
            <div className={styles.bikesContent}>
              <h2>Nimbus Stark</h2>
              <p>A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.</p>
              <ul>
                <li>
                  <img src="./img/icones/eletrica.svg" alt="" />
                  Motor Elétrico
                </li>
                <li>
                  <img src="./img/icones/carbono.svg" alt="" />
                  Fibra de Carbono
                </li>
                <li>
                  <img src="./img/icones/velocidade.svg" alt="" />
                  50 km/h
                </li>
                <li>
                  <img src="./img/icones/rastreador.svg" alt="" />
                  Rastreador
                </li>
              </ul>
              <Button arrow href="./bicicletas/nimbus.html">Mais Sobre</Button>
            </div>
          </div>
        </div>

        <div className={styles.bikesBg}>
          <div className={styles.bikesContainer}>
            <div className={styles.bikesImage}>
              <img src="./img/bicicletas/nimbus.jpg" alt="Bicicleta preta" />
              <span>R$ 4999</span>
            </div>
            <div className={styles.bikesContent}>
              <h2>Nimbus Stark</h2>
              <p>A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.</p>
              <ul>
                <li>
                  <img src="./img/icones/eletrica.svg" alt="" />
                  Motor Elétrico
                </li>
                <li>
                  <img src="./img/icones/carbono.svg" alt="" />
                  Fibra de Carbono
                </li>
                <li>
                  <img src="./img/icones/velocidade.svg" alt="" />
                  50 km/h
                </li>
                <li>
                  <img src="./img/icones/rastreador.svg" alt="" />
                  Rastreador
                </li>
              </ul>
              <Button arrow href="./bicicletas/nimbus.html">Mais Sobre</Button>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </>
  )
}