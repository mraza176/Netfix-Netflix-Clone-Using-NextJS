import styles from "./about.module.css";
import Image from "next/image";
import Button from "../components/Button";

const About = () => {
  return (
    <>
      <main className={styles.about}>
        <div className={styles["about-content"]}>
          <h1>OUR STORY</h1>
          <p>
            From award-winning dramas to blockbuster action movies, we've got
            you covered. Browse our selection of the latest and greatest movies,
            and find your new favourite today.
          </p>
          <Button link="/movie" text="Explore Movies" />
        </div>
        <div>
          <Image src="/about1.svg" width={400} height={400} />
        </div>
        <div className={styles["custom-shape-divider-bottom-1717248302"]}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className={styles["shape-fill"]}
            ></path>
          </svg>
        </div>
      </main>
    </>
  );
};

export default About;
