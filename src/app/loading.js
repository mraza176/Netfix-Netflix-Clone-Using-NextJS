import styles from "./loading.module.css";

const Loading = () => {
  return (
    <>
      <main className={styles.loading}>
        <div className={styles["lds-hourglass"]}></div>
      </main>
    </>
  );
};

export default Loading;
