import React, { useEffect } from "react";
import { getMovieDetail, useAppDispatch, useAppSelector } from "../../..//core";
import { useParams } from "react-router-dom";
import { getImageURL } from "../../../client/helper/imageHelper";
import styles from "./style.module.scss";

export const MovieDetail = () => {
  const { movieId } = useParams();
  const movieDetail = useAppSelector((state) => state.movie.movieDetails);
  const dispatch = useAppDispatch();

  console.log("movieDetail", movieDetail);
  useEffect(() => {
    dispatch(getMovieDetail({ id: movieId ?? "" }));
  }, []);

  return (
    <div className={styles.container}>
      <img src={getImageURL(movieDetail?.backdrop_path ?? "")} alt="" />
      {movieDetail?.title}
    </div>
  );
};
