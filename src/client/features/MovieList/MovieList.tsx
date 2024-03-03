import { Movie } from "src/core/api/models/MovieList";
import styles from "./style.module.scss";
import { MovieCard } from "../MovieCard/MovieCard";
import { Pagination } from "../..//common-components/Pagination/Pagination";
import { useState } from "react";
import { LoadingIndicator } from "../../../client/common-components/LoadingIdicator/LoadingIdicator";
import { getImageURL } from "../../../client/helper/imageHelper";

export interface MovieListProps {
  label?: string;
  movieList?: Movie[];
  totalPage?: number;
  onPageChanged?: (page: number) => void;
  isLoading?: boolean;
}

export const MovieList = ({
  label,
  movieList,
  totalPage = 1,
  onPageChanged,
  isLoading,
}: MovieListProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChanged?.(page);
  };

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <div className={styles.movieListContainer}>
      {label && <h2>{label}</h2>}
      <Pagination
        setPageCallback={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPage ?? 1}
      />
      <div className={styles.movieListGrid}>
        {movieList?.map((movie) => (
          <MovieCard
            movieDate={movie.release_date}
            movieId={movie.id}
            title={movie.title}
            posterImageURL={getImageURL(movie.poster_path)}
            description={movie.overview}
            movieRate={movie.vote_average}
            totalRate={movie.vote_count}
          />
        ))}
      </div>
    </div>
  );
};
