import { createSlice } from "@reduxjs/toolkit";
import { ActionStatusEnum } from "../../models/ActionStatusEnum";
import {
  getMovieDetail,
  getNowPlayingMovies,
  getTopRatedMovies,
  searchMovie,
} from "../../thunks";
import { Movie, MovieDetails } from "src/core/api/models/MovieList";

export interface MovieState {
  loadingStatus: ActionStatusEnum;
  detailLoadingStatus: ActionStatusEnum;
  totalPage: number;
  movieList: Movie[];
  movieDetails?: MovieDetails;
}

const isUsingMock = process.env.REACT_APP_USING_MOCK;

const mockInitialProductState = {
  movieList: [],
  totalPage: 0,
  loadingStatus: ActionStatusEnum.Idle,
  detailLoadingStatus: ActionStatusEnum.Idle,
} as MovieState;

const initialState: MovieState = isUsingMock
  ? mockInitialProductState
  : {
      movieList: [],
      totalPage: 0,
      loadingStatus: ActionStatusEnum.Idle,
      detailLoadingStatus: ActionStatusEnum.Idle,
    };

export const movieSlice = createSlice({
  name: "action/movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNowPlayingMovies.fulfilled, (state, action) => {
      state.movieList = action.payload.movies;
      state.totalPage = action.payload.totalPages;
      state.loadingStatus = ActionStatusEnum.Success;
    });
    builder.addCase(getNowPlayingMovies.pending, (state) => {
      state.loadingStatus = ActionStatusEnum.Pending;
    });
    builder.addCase(getNowPlayingMovies.rejected, (state) => {
      state.loadingStatus = ActionStatusEnum.Failed;
    });
    builder.addCase(getTopRatedMovies.fulfilled, (state, action) => {
      state.movieList = action.payload.movies;
      state.totalPage = action.payload.totalPages;
      state.loadingStatus = ActionStatusEnum.Success;
    });
    builder.addCase(getTopRatedMovies.pending, (state) => {
      state.loadingStatus = ActionStatusEnum.Pending;
    });
    builder.addCase(getTopRatedMovies.rejected, (state) => {
      state.loadingStatus = ActionStatusEnum.Failed;
    });

    builder.addCase(getMovieDetail.fulfilled, (state, action) => {
      state.movieDetails = action.payload;
      state.detailLoadingStatus = ActionStatusEnum.Success;
    });
    builder.addCase(getMovieDetail.pending, (state) => {
      state.detailLoadingStatus = ActionStatusEnum.Pending;
    });
    builder.addCase(getMovieDetail.rejected, (state) => {
      state.detailLoadingStatus = ActionStatusEnum.Failed;
    });
    builder.addCase(searchMovie.fulfilled, (state, action) => {
      state.movieList = action.payload.movies;
      state.totalPage = action.payload.totalPages;
      state.loadingStatus = ActionStatusEnum.Success;
    });
    builder.addCase(searchMovie.pending, (state) => {
      state.loadingStatus = ActionStatusEnum.Pending;
    });
    builder.addCase(searchMovie.rejected, (state) => {
      state.loadingStatus = ActionStatusEnum.Failed;
    });
  },
});

// Action creators are generated for each case reducer function
// export const {} = movieSlice.actions;

export default movieSlice.reducer;
