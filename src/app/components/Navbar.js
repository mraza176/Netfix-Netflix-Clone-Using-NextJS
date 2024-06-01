import Link from "next/link";
import styles from "@/app/styles/navbar.module.css";

const Navbar = () => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          Netfix
        </Link>
        <nav className={styles.navbar}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/movie">Movie</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
