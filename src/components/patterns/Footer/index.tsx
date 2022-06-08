import { Link } from "../../Link";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footerBg}>
      <div className={styles.footerContainer}>
        <img src="/img/bikcraft.svg" width="136" height="32" alt="Bikcraft" />
        <div className={styles.footerContact}>
          <h3>Contato</h3>
          <ul>
            <li><a href="tel:+556199999999">+55 61 9999-9999</a></li>
            <li><a href="mailto:contato@bikcraft.com">contato@bikcraft.com</a></li>
            <li>Aquela Rua, 42 - Guará II</li>
            <li>Brasília - DF</li>
          </ul>
          <div className={styles.footerSocialNetworks}>
            <a href="https://www.instagram.com/fabiof2x/" target="_blank">
              <img src="/img/redes/instagram.svg" width="32" height="32" alt="Instagram" />
            </a>
            <a href="https://facebook.com/fabiof2x/" target="_blank">
              <img src="/img/redes/facebook.svg" width="32" height="32" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/img/redes/youtube.svg" width="32" height="32" alt="Youtube" />
            </a>
          </div>
        </div>
        <div className={styles.footerInfo}>
          <h3>Informações</h3>
          <nav>
            <ul>
              <li><Link href="/bicicletas">Bicicletas</Link></li>
              <li><Link href="/seguros">Seguros</Link></li>
              <li><Link href="/contato">Contato</Link></li>
              <li><Link href="/termos">Termos e Condições</Link></li>
            </ul>
          </nav>
        </div>
        <p className={styles.footerCopy}>Bikcraft © Alguns direitos reservados.</p>
      </div>
    </footer>
  );
}