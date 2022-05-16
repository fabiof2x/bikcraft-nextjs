import { DocumentTitle } from "../components/DocumentTitle"

import styles from "../styles/Home.module.scss";

import Footer from "../components/patterns/Footer"
import Header from "../components/patterns/Header"
import Button from "../components/Button";
import { BikeDTO } from "../dtos/BikeDto";
import { Link } from "../components/Link";

function HomePage() {
  //Temp Bikes Data
  const bikes: BikeDTO[] = [
    {
      id: "1",
      nome: "Magic Might",
      preco: "2499",
      slug: "magic-might",
      fotoHome: "magic-home.jpg",
      alt: "Bicicleta preta",
    },
    {
      id: "2",
      nome: "Nimbus Stark",
      preco: "4999",
      slug: "nimbus-stark",
      fotoHome: "nimbus-home.jpg",
      alt: "Bicicleta preta",
    },
    {
      id: "3",
      nome: "Nebula Cosmic",
      preco: "3999",
      slug: "nebula-cosmic",
      fotoHome: "nebula-home.jpg",
      alt: "Bicicleta preta",
    },
  ];

  return (
    <>
      <DocumentTitle
        title="Bikcraft - Bicicletas Elétricas"
        description="Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para você. Explore o mundo na sua velocidade com a Bikcraft."
      />
      <Header />

      <main className={styles.introBg}>
        <div className={styles.introContainer}>
          <div className={styles.introContent}>
            <h1>Bicicletas feitas sob medida<span>.</span></h1>
            <p>Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para você. Explore o mundo na sua velocidade com a Bikcraft.</p>
            <Button href="/bicicletas">Escolha a sua</Button>
          </div>
          <picture>
            <source media="(max-width: 800px)" srcSet="./img/bicicletas/nimbus.jpg" />
            <img src="./img/fotos/introducao.jpg" width="1280" height="1600" alt="Bicicleta elétrica preta." />
          </picture>
        </div>
      </main >

      <article className={styles.bikesList}>
        <h2>escolha a sua<span>.</span></h2>

        <ul>
          {bikes.map(bike => (
            <li key={bike.id}>
              <Link href={`/bicicletas/${bike.slug}`}>
                <img src={`/img/bicicletas/${bike.fotoHome}`} alt={bike.alt} width="920" height="1040" />
                <h3>{bike.nome}</h3>
                <span>R$ {bike.preco}</span>
              </Link>
            </li>
          ))}
        </ul>
      </article>

      <article className={styles.technologyBg}>
        <div className={styles.technologyContainer}>
          <div className={styles.technologyContent}>
            <span>Tecnologia Avançada</span>
            <h2>você escolhe as suas cores e componentes<span>.</span></h2>
            <p>Cada Bikcraft é única e possui a sua identidade. As medidas serão exatas para o seu corpo e altura, garantindo maior conforto e ergonomia na sua pedalada. Você pode também personalizar completamente as suas cores.</p>
            <Link href="/bicicletas">Escolha um modelo</Link>
            <div className={styles.technologyAdvantages}>
              <div>
                <img src="./img/icones/eletrica.svg" width="24" height="24" alt="" />
                <h3>Motor Elétrico</h3>
                <p>Toda Bikcraft é equipada com um motor elétrico que possui duração de até 120h. A bateria é recarregada com a sua energia gasta ao pedalar.</p>
              </div>
              <div>
                <img src="./img/icones/rastreador.svg" width="24" height="24" alt="" />
                <h3>Rastreador</h3>
                <p>Sabemos o quão preciosa é a sua Bikcraft, por isso adicionamos rastreadores e sistemas anti-furto para garantir o seu sossego.</p>
              </div>
            </div>
          </div>
          <div className={styles.technologyImage}>
            <img src="./img/fotos/tecnologia.jpg" width="1200" height="1920" alt="" />
          </div>
        </div>
      </article>

      <section className={styles.partners} aria-label="Nossos Parceiros">
        <h2>nossos parceiros<span>.</span></h2>

        <ul>
          <li><img src="./img/parceiros/caravan.svg" alt="Caravan" width="140" height="38" /></li>
          <li><img src="./img/parceiros/ranek.svg" alt="Ranek" width="149" height="36" /></li>
          <li><img src="./img/parceiros/handel.svg" alt="Handel" width="140" height="50" /></li>
          <li><img src="./img/parceiros/dogs.svg" alt="Dogs" width="152" height="39" /></li>
          <li><img src="./img/parceiros/lescone.svg" alt="LeScone" width="208" height="41" /></li>
          <li><img src="./img/parceiros/flexblog.svg" alt="FlexBlog" width="165" height="38" /></li>
          <li><img src="./img/parceiros/wildbeast.svg" alt="Wildbeast" width="196" height="34" /></li>
          <li><img src="./img/parceiros/surfbot.svg" alt="Surfbot" width="200" height="49" /></li>
        </ul>
      </section>

      <section className={styles.testimonial} aria-label="Depoimento">
        <div>
          <img src="./img/fotos/depoimento.jpg" width="1560" height="1360" alt="Pessoa pedalando uma bicicleta Bikcraft" />
        </div>
        <div className={styles.testimonialContent}>
          <blockquote>
            <p>Pedalar sempre foi a minha paixão, o que o pessoal da Bikcraft fez foi intensificar o meu amor por esta atividade. Recomendo à todos que amo.</p>
          </blockquote>
          <span>Ana Júlia</span>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default HomePage