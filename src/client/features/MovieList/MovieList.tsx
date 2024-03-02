import { Movie } from "src/core/api/models/MovieList";
import styles from "./style.module.scss";

export interface MovieListProps {
  label?: string;
  movieList?: Movie[];
}

export const MovieList = ({ label, movieList }: MovieListProps) => {
  return (
    <div className={styles.movieListContainer}>{label && <p>{label}</p>}</div>
  );
};
