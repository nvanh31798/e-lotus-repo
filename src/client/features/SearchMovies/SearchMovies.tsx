import { MovieList } from "../MovieList/MovieList";
import styles from "./style.module.scss";
import {
  ActionStatusEnum,
  searchMovie,
  useAppDispatch,
  useAppSelector,
} from "../../../core";
import { useParams } from "react-router-dom";

export const SearchMovies = () => {
  const dispatch = useAppDispatch();
  const { queryString } = useParams();
  const { movieList, totalPage, loadingStatus } = useAppSelector(
    (state) => state.movie
  );

  const handlePageChange = (page: number) => {
    dispatch(searchMovie({ page: page, queryString: queryString }));
  };

  return (
    <div className={styles.container}>
      <MovieList
        onPageChanged={handlePageChange}
        movieList={movieList}
        label="Your Search Results"
        totalPage={totalPage}
        isLoading={loadingStatus === ActionStatusEnum.Pending}
      />
    </div>
  );
};
