import React, { useEffect } from "react";
import {
  ActionStatusEnum,
  getMovieDetail,
  useAppDispatch,
  useAppSelector,
} from "../../..//core";
import { useParams } from "react-router-dom";
import { getImageURL } from "../../../client/helper/imageHelper";
import styles from "./style.module.scss";
import { LoadingIndicator } from "../../../client/common-components/LoadingIdicator/LoadingIdicator";

export const MovieDetail = () => {
  const { movieId } = useParams();
  const { movieDetails, detailLoadingStatus } = useAppSelector(
    (state) => state.movie
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    dispatch(getMovieDetail({ id: movieId }));
  }, [movieId]);

  if (
    detailLoadingStatus === ActionStatusEnum.Pending ||
    parseInt(movieId ?? "") !== movieDetails?.id
  ) {
    return (
      <div className={styles.container}>
        <LoadingIndicator />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={getImageURL("original", movieDetails?.backdrop_path ?? "")}
          loading="lazy"
          alt={movieDetails?.original_title}
        />
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.posterContainer}>
          <a href={movieDetails?.homepage}>
            <img
              src={getImageURL("200", movieDetails?.poster_path ?? "")}
              loading="lazy"
              alt={movieDetails?.original_title}
            />
          </a>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.textWrapper}>
            <div>
              <p className={styles.title}>
                {`${movieDetails?.title}`}
                {" ( "}
                {movieDetails?.genres.map((genre) => (
                  <span>{genre.name} </span>
                ))}
                {")"}
                <span> {movieDetails?.status}</span>
              </p>
              <p>
                <strong>Budget:</strong> ${movieDetails?.budget.toLocaleString('en-US',{currency: 'USD'})}
              </p>
              <p>
                <strong>Revenue:</strong> ${movieDetails?.revenue.toLocaleString('en-US',{currency: 'USD'})}
              </p>
              <p>
                <strong>Language:</strong> {movieDetails?.original_language}
              </p>
              <p className={styles.chipText}>
                <strong>Rating: </strong> 
                <span className={styles.ratingText}>{`${
                  Math.round(movieDetails?.vote_average * 100) / 100
                }/10`}</span>
                {` (${movieDetails?.vote_count} votes)`}
              </p>
            </div>
            <div className={styles.description}>
              <p>{movieDetails?.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
