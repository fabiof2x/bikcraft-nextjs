import { DocumentTitle } from "../../components/DocumentTitle"
import Header from "../../components/patterns/Header"
import HeaderTitle from "../../components/patterns/HeaderTitle";
import Footer from "../../components/patterns/Footer"

import styles from "../../styles/Bike.module.scss";
import Button from "../../components/Button";

export default function Bike() {
  return (
    <>
      <DocumentTitle
        title=""
        description=""
      />
      <Header />

      <main className={styles.bikeBg}>
        <HeaderTitle
          subtitle="R$ 2499"
          title="Magic Might"
        />
        <div className={styles.bikeContainer}>
          <div className={styles.bikeImages}>
            <img src="/img/bicicleta/nimbus2.jpg" width="1120" height="880" alt="" />
            <img src="/img/bicicleta/nimbus1.jpg" width="1120" height="880" alt="" />
            <img src="/img/bicicleta/nimbus3.jpg" width="1120" height="880" alt="" />
          </div>
          <div className={styles.bikeContent}>
            <p>A Magic Might é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.</p>
            <div className={styles.bikeBuy}>
              <Button href="/orcamento">Comprar Agora</Button>
              <span><img src="/img/icones/entrega.svg" width="16" height="16" alt="" /> entrega em 5 dias</span>
              <span><img src="/img/icones/estoque.svg" width="16" height="16" alt="" /> 18 em estoque</span>
            </div>

            <h2>Informações</h2>
            <ul className={styles.bikeInfo}>
              <li>
                <img src="/img/icones/eletrica.svg" width="24" height="24" alt="" />
                <h3>Motor Elétrico</h3>
                <p>Permite você viajar distâncias inimaginaveis com a sua bike.</p>
              </li>
              <li>
                <img src="/img/icones/velocidade.svg" width="24" height="24" alt="" />
                <h3>45 km/h</h3>
                <p>A mais rápida bicicleta elétrica disponível hoje no mercado.</p>
              </li>
              <li>
                <img src="/img/icones/rastreador.svg" width="24" height="24" alt="" />
                <h3>Rastreador</h3>
                <p>Rastreador e sistema anti-furto para garantir o seu sossego.</p>
              </li>
              <li>
                <img src="/img/icones/carbono.svg" width="24" height="24" alt="" />
                <h3>Fibra de Carbono</h3>
                <p>Maior proteção possível para a sua Bikcraft com fibra de carbono.</p>
              </li>
            </ul>
            <h2>Ficha Técnica</h2>
            <ul className={styles.bikeDataSheet}>
              <li>Peso <span>9 kg</span></li>
              <li>Altura <span>60 cm</span></li>
              <li>Largura <span>120 cm</span></li>
              <li>Profundidade <span>10 cm</span></li>
              <li>Marchas <span>16</span></li>
              <li>Roda <span>29</span></li>
            </ul>
          </div>
        </div>
      </main >
      <Footer />
    </>
  )
}