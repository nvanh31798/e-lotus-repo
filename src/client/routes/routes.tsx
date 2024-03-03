import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import { MovieList } from "../features/MovieList/MovieList";
import { Path } from "./Path";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { NowPlayingMovie } from "../features/NowPlayingMovie/NowPlayingMovie";
import { MovieDetail } from "../features/MovieDetail/MovieDetail";
import { TopRatedMovie } from "../features/TopRatedMovie/TopRatedMovie";

export const generateRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <NowPlayingMovie />,
          errorElement: <ErrorPage />,
        },
        {
          path: Path.NOW_PLAYING_MOVIE,
          element: <NowPlayingMovie />,
          errorElement: <ErrorPage />,
        },
        {
          path: Path.TOP_RATED_MOVIE,
          element: <TopRatedMovie />,
          errorElement: <ErrorPage />,
        },
        {
          path: `${Path.MOVIE_DETAILS}/:movieId`,
          element: <MovieDetail />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);

  return { router };
};
