import React, { useEffect } from "react";
import { MovieList } from "../MovieList/MovieList";
import { getNowPlayingMovies, useAppDispatch } from "../../../core";

export const NowPlayingMovie = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNowPlayingMovies({ page: 1 }));
  }, []);

  return (
    <div>
      <MovieList label="Now Playing" />
    </div>
  );
};
