import { createAsyncThunk } from "@reduxjs/toolkit";
import { MovieApi } from "../../../api";
import { AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { Movie, QueryMovieRequest, QueryMovieResponse } from "src/core/api/models/MovieList";

export const getNowPlayingMovies = createAsyncThunk<
  QueryMovieResponse,
  QueryMovieRequest,
  AsyncThunkConfig
>(
  "movies/getNowPlayingMovies",
  async (
    { language = "en-US", page = 1 }: QueryMovieRequest,
    { rejectWithValue }
  ) => {
    const response = await MovieApi().getNowPlayingMovies({
      page: page,
      language: language,
    } as QueryMovieRequest);
    if (response.status !== 200) {
      return rejectWithValue("Invalid response status: " + response.status);
    }

    return await response
      .json()
      .then((res) => {
        return {
          movies: res.results as Movie[],
          totalPages: res.total_pages as number,
        };
      })
      .catch((error) => rejectWithValue("Invalid response" + error));
  }
);

export const getTopRatedMovies = createAsyncThunk<
  QueryMovieResponse,
  QueryMovieRequest,
  AsyncThunkConfig
>(
  "movies/getTopRatedMovies",
  async (
    { language = "en-US", page = 1 }: QueryMovieRequest,
    { rejectWithValue }
  ) => {
    const response = await MovieApi().getTopRatedMovies({
      page: page,
      language: language,
    } as QueryMovieRequest);
    if (response.status !== 200) {
      return rejectWithValue("Invalid response status: " + response.status);
    }

    return await response
      .json()
      .then((res) => {
        return {
          movies: res.results as Movie[],
          totalPages: res.total_pages as number,
        };
      })
      .catch((error) => rejectWithValue("Invalid response" + error));
  }
);