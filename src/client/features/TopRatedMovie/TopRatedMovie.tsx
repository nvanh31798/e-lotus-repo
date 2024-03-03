import React, { useEffect } from "react";
import { MovieList } from "../MovieList/MovieList";
import styles from "./style.module.scss";
import {
  ActionStatusEnum,
  getNowPlayingMovies,
  getTopRatedMovies,
  useAppDispatch,
  useAppSelector,
} from "../../../core";

export const TopRatedMovie = () => {
  const dispatch = useAppDispatch();
  const { movieList, totalPage, loadingStatus } = useAppSelector(
    (state) => state.movie
  );

  useEffect(() => {
    dispatch(getTopRatedMovies({ page: 1 }));
  }, []);

  const handlePageChange = (page: number) => {
    dispatch(getTopRatedMovies({ page: page }));
  };

  return (
    <div className={styles.container}>
      <MovieList
        onPageChanged={handlePageChange}
        movieList={movieList}
        label="Top Rated Movie"
        totalPage={totalPage}
        isLoading={loadingStatus === ActionStatusEnum.Pending}
      />
    </div>
  );
};
