import styles from "./movie.module.css";
import MovieCard from "../components/MovieCard";

const Movie = async () => {
  const url = process.env.RAPID_URL;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_KEY,
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const data = result.titles;

  return (
    <>
      <main className={styles.movie}>
        <h1>Series & Movies</h1>
        <div>
          {data.map((elem) => {
            return <MovieCard key={elem.id} {...elem} />;
          })}
        </div>
      </main>
    </>
  );
};

export default Movie;
