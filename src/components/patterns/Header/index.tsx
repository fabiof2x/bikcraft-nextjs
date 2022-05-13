import { Link } from "../../Link";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.headerBg}>
      <div className={styles.headerContainer}>
        <Link href="./">
          <img src="./img/bikcraft.svg" width="136" height="32" alt="Bikcraft" />
        </Link>

        <nav aria-label="primaria">
          <ul className={styles.headerMenu}>
            <li><Link href="/bicicletas">Bicicletas</Link></li>
            <li><Link href="/seguros">Seguros</Link></li>
            <li><Link href="/contato">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}