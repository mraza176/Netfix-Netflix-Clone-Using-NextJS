import Image from "next/image";
import styles from "./moviedetails.module.css";

const MovieDetails = async ({ params }) => {
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}lang=en`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_KEY,
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const data = result[0].details;

  return (
    <>
      <main className={styles.main}>
        <div className={styles["main-content"]}>
          <h2>
            Netflix \ <span>{data.type}</span>
          </h2>
          <Image src={data.backgroundImage.url} width={600} height={300} />
          <h1>{data.title}</h1>
          <p>{data.synopsis}</p>
        </div>
      </main>
    </>
  );
};

export default MovieDetails;
