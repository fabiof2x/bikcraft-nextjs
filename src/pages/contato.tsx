import { DocumentTitle } from "../components/DocumentTitle"
import Header from "../components/patterns/Header"
import HeaderTitle from "../components/patterns/HeaderTitle";
import Footer from "../components/patterns/Footer"

import styles from "../styles/Contact.module.scss";
import form from "../styles/Form.module.scss";
import Button from "../components/Button";
import { SocketAddress } from "net";

export default function Contact() {
  return (
    <>
      <DocumentTitle
        title="Contato | Bikcraft"
        description="Contato"
      />
      <Header />

      <main>
        <div className={styles.contactBg}>
          <HeaderTitle
            subtitle="Respostas em até 24h"
            title="nosso contato"
          />
          <div className={styles.contactContainer}>
            <section className={styles.contactData} aria-label="Endereço">
              <h2>Loja Online</h2>
              <div className={styles.contactAddress}>
                <p>Aquela Rua, 42 - Guará II</p>
                <p>Brasília - DF</p>
                <p>Brasil - Terra - Vita Láctea</p>
              </div>
              <address className={styles.contactMeans}>
                <a href="mailto:contato@bikcraft.com">contato@bikcraft.com</a>
                <a href="mailto:assistencia@bikcraft.com">assistencia@bikcraft.com</a>
                <a href="tel:+556199999999">+55 61 9999-9999</a>
              </address>
              <div className={styles.contactSocial}>
                <a href="./">
                  <img src="./img/redes/instagram-p.svg" width="32" height="32" alt="Instagram" />
                </a>
                <a href="./">
                  <img src="./img/redes/facebook-p.svg" width="32" height="32" alt="Facebook" />
                </a>
                <a href="./">
                  <img src="./img/redes/youtube-p.svg" width="32" height="32" alt="Youtube" />
                </a>
              </div>
            </section>
            <section className={styles.contactForm} aria-label="Formulário">
              <form className={form.form} action="./contato.html">
                <div>
                  <label htmlFor="nome">Nome</label>
                  <input type="text" id="nome" name="nome" placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="telefone">Telefone</label>
                  <input type="text" id="telefone" name="telefone" placeholder="(61) 9999-9999" />
                </div>
                <div className={form.col2}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="contato@email.com" />
                </div>
                <div className={form.col2}>
                  <label htmlFor="mensagem">Mensagem</label>
                  <textarea rows={5} id="mensagem" name="mensagem" placeholder="O que você precisa?"></textarea>
                </div>
                {/* <button className="botao col-2">Enviar Mensagem</button> */}
                <Button>Enviar Mensagem</Button>
              </form>
            </section>
          </div>
        </div>
      </main>

      <article className={styles.storesBg}>
        <div className={styles.storesContainer}>
          <h2>lojas locais<span>.</span></h2>

          <div className={styles.storesItem}>
            <img src="./img/lojas/df.jpg" width="560" height="260" alt="mapa marcando o endereço em Aquela Rua, 42 - Guará II - Brasília - DF" />
            <div className={styles.storesContent}>
              <h3>Brasília</h3>
              <div className={styles.storesData}>
                <p>Aquela Rua, 42 - Guará II</p>
                <p>Brasília - DF</p>
              </div>
              <div className={styles.storesData}>
                <a href="mailto:df@bikcraft.com">df@bikcraft.com</a>
                <a href="tel:+556199999999">+55 61 9999-9999</a>
              </div>
              <p className={styles.storesTime}><img src="./img/icones/horario.svg" width="20" height="20" alt="" />08-18h de seg à dom</p>
            </div>
          </div>

          <div className={styles.storesItem}>
            <img src="./img/lojas/rj.jpg" width="560" height="260" alt="mapa marcando o endereço em Rua Ali Perto, 25 - Rio de Janeiro - RJ" />
            <div className={styles.storesContent}>
              <h3>Rio de Janeiro</h3>
              <div className={styles.storesData}>
                <p>Rua Ali Perto, 25</p>
                <p>Rio de Janeiro - RJ</p>
              </div>
              <div className={styles.storesData}>
                <a href="mailto:rj@bikcraft.com">rj@bikcraft.com</a>
                <a href="tel:+552199999999">+55 21 9999-9999</a>
              </div>
              <p className={styles.storesTime}><img src="./img/icones/horario.svg" width="20" height="20" alt="" />08-18h de seg à dom</p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}