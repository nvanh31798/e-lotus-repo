import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ActionStatusEnum } from "../../models/ActionStatusEnum";
import { getNowPlayingMovies, getTopRatedMovies } from "../../thunks";
import { Movie } from "src/core/api/models/MovieList";

export interface MovieState {
  loadingStatus: ActionStatusEnum;
  totalPage: number;
  movieList: Movie[];
}

const isUsingMock = process.env.REACT_APP_USING_MOCK;

const mockInitialProductState = {
  movieList: [],
  totalPage: 0,
  loadingStatus: ActionStatusEnum.Idle,
} as MovieState;

const initialState: MovieState = isUsingMock
  ? mockInitialProductState
  : {
      movieList: [],
      totalPage: 0,
      loadingStatus: ActionStatusEnum.Idle,
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
    builder.addCase(getNowPlayingMovies.rejected, (state, action) => {
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
    builder.addCase(getTopRatedMovies.rejected, (state, action) => {
      state.loadingStatus = ActionStatusEnum.Failed;
    });
  },
});

// Action creators are generated for each case reducer function
// export const {} = movieSlice.actions;

export default movieSlice.reducer;
