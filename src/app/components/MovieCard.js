import styles from "@/app/styles/moviecard.module.css";
import Image from "next/image";
import Link from "next/link";

const MovieCard = (elem) => {
  const { id, type, title, synopsis } = elem.jawSummary;
  return (
    <>
      <div className={styles.card}>
        <Image
          src={elem.jawSummary.backgroundImage.url}
          width={230}
          height={180}
        />
        <h2>{title.substring(0, 15)}</h2>
        <p>{`${synopsis.substring(0, 70)} ...`}</p>
        <Link
          style={{
            backgroundColor: "black",
            color: "white",
            width: "100%",
            textAlign: "center",
            borderRadius: 10,
          }}
          href={`/movie/${id}`}
        >
          Read More
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
