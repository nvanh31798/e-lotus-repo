import React, { useEffect } from "react";
import { MovieList } from "../MovieList/MovieList";
import styles from "./style.module.scss";
import {
  ActionStatusEnum,
  getNowPlayingMovies,
  useAppDispatch,
  useAppSelector,
} from "../../../core";

export const NowPlayingMovie = () => {
  const dispatch = useAppDispatch();
  const { movieList, totalPage, loadingStatus } = useAppSelector(
    (state) => state.movie
  );

  useEffect(() => {
    dispatch(getNowPlayingMovies({ page: 1 }));
  }, []);

  const handlePageChange = (page: number) => {
    dispatch(getNowPlayingMovies({ page: page }));
  };

  return (
    <div className={styles.container}>
      <MovieList
        onPageChanged={handlePageChange}
        movieList={movieList}
        label="Now Playing"
        totalPage={totalPage}
        isLoading={loadingStatus === ActionStatusEnum.Pending}
      />
    </div>
  );
};
