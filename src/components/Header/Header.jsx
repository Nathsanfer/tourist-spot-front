import styles from "./header.module.css";

import Link from "next/link";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Explorer’s Paradise</h1>
      <nav className={styles.nav}>
        <Link href="/" className={styles.linkNav}>Home</Link>
        <Link href="/pontosTuristicos" className={styles.linkNav}>Pontos Turísticos</Link>
        <Link href="#" className={styles.linkNav}>Sobre Mim</Link>
        <Link href="#" className={styles.linkNav}>Contato</Link>
      </nav>
    </header>
  )
}

export default Header;