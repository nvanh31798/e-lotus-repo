import {
  MOVIE_SERVICE_URL,
  MOVIE_SERVICE_ACCESS_TOKEN,
} from "../../constant/constant";
import { QueryMovieRequest } from "../models/MovieList";

export const MovieApi = () => {
  const defaultLang = "en-US";
  const defaultPage = 1;

  const getNowPlayingMovies = async (requestParams: QueryMovieRequest) => {
    const requestParamURI = `now_playing`;
    const languageURI = `language=${requestParams.language ?? defaultLang}`;
    const pageURI = `page=${requestParams.page ?? defaultPage}`;

    return await fetch(
      `${MOVIE_SERVICE_URL}/${requestParamURI}?${languageURI}&${pageURI}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          AUTHORIZATION: "Bearer " + MOVIE_SERVICE_ACCESS_TOKEN,
        },
      }
    );
  };

  return {
    getNowPlayingMovies: getNowPlayingMovies,
  };
};
