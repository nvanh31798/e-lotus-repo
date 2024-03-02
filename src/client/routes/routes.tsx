import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import { MovieList } from "../features/MovieList/MovieList";
import { Path } from "./Path";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

export const generateRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <MovieList label={"Now playing"} />,
          errorElement: <ErrorPage />,
        },
        {
          path: Path.NOW_PLAYING_MOVIE,
          element: <MovieList label={"Now playing"} />,
          errorElement: <ErrorPage />,
        },
        {
          path: Path.TOP_RATED_MOVIE,
          element: <MovieList label={"Top rated"} />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);

  return { router };
};
