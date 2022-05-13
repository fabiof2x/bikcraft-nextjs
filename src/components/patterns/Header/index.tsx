import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.headerBg}>
      <div className={styles.headerContainer}>
        <a href="./">
          <img src="./img/bikcraft.svg" width="136" height="32" alt="Bikcraft" />
        </a>

        <nav aria-label="primaria">
          <ul className={styles.headerMenu}>
            <li><a href="/bicicletas">Bicicletas</a></li>
            <li><a href="/seguros">Seguros</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}