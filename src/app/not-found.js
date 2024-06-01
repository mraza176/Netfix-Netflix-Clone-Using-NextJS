import styles from "./notfound.module.css";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className={styles["not-found"]}>
      <h1>404 - Page Not Found</h1>
      <Link href="/">Home</Link>
    </main>
  );
};

export default NotFound;
