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
      <div>
        <img
          src={getImageURL("original", movieDetail?.backdrop_path ?? "")}
          loading="lazy"
          alt=""
        />
      </div>
      {movieDetail?.title}
      <div>
        <p>{movieDetail?.budget}</p>
        <p>{movieDetail?.homepage}</p>
        <p>{movieDetail?.status}</p>
        <p>{movieDetail?.vote_average}</p>
        <p>{movieDetail?.vote_count}</p>
        <p>{movieDetail?.revenue}</p>
        <p>{movieDetail?.genres[0].name}</p>
        <p>{movieDetail?.genres[1].name}</p>
        <p>{movieDetail?.overview}</p>
        <p>{movieDetail?.original_title}</p>
        <p>{movieDetail?.original_language}</p>
      </div>
    </div>
  );
};
