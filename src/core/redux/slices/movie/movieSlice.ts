import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ActionStatusEnum } from "../../models/ActionStatusEnum";
import { getNowPlayingMovies } from "../../thunks";
import { Movie } from "src/core/api/models/MovieList";

export interface MovieState {
  movieList: Movie[];
}

const isUsingMock = process.env.REACT_APP_USING_MOCK;

const mockInitialProductState = {
  movieList: [],
} as MovieState;

const initialState: MovieState = isUsingMock
  ? mockInitialProductState
  : {
      movieList: [],
    };

export const movieSlice = createSlice({
  name: "action/movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNowPlayingMovies.fulfilled, (state, action) => {
      state.movieList = action.payload.movies;
    });
  },
});

// Action creators are generated for each case reducer function
// export const {} = movieSlice.actions;

export default movieSlice.reducer;
