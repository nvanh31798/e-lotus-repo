import { useEffect } from "react";
import styles from "./style.module.scss";

export interface MovieListProps {
  label?: string;
}

export const MovieList = ({ label }: MovieListProps) => {

  useEffect(() => {}, []);

  return (
    <div className={styles.movieListContainer}>
      Movie List
      {label && <p>{label}</p>}
    </div>
  );
};
