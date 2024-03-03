import React from "react";
import { useNavigate } from "react-router-dom";
import { Path } from "../../../client/routes/Path";
import styles from "./style.module.scss";
import { LoadingIndicator } from "../../../client/common-components/LoadingIdicator/LoadingIdicator";

interface MovieCardProps {
  movieId: number;
  title: string;
  posterImageURL: string;
  description?: string;
  movieDate?: string;
  isLoading?: boolean;
  movieRate?: number;
  totalRate?: number;
}

export const MovieCard = ({
  movieId,
  title,
  posterImageURL,
  description,
  isLoading,
  movieDate,
  movieRate,
  totalRate,
}: MovieCardProps) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`../${Path.MOVIE_DETAILS}/movieId=${movieId}`);
  };

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <div className={styles.cardContainer} onClick={handleCardClick}>
      <div className={styles.imageContainer}>
        <img className={styles.center} src={posterImageURL} loading="lazy" />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.titleContainer}>
          <h4 className={styles.cardTitle}>{title}</h4>
          {movieDate && <p className={styles.chipText}>{movieDate}</p>}
        </div>
        {movieRate && (
          <p className={styles.chipText}>
            <span className={styles.ratingText}>{`${Math.round(movieRate * 100) / 100}/10`}</span>
            {` (${totalRate} votes)`}
          </p>
        )}
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
