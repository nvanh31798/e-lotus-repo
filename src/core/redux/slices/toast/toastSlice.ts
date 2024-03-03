import { createSlice } from "@reduxjs/toolkit";
import { ActionStatusEnum } from "../../models/ActionStatusEnum";
import {
  getMovieDetail,
  getNowPlayingMovies,
  getTopRatedMovies,
} from "../../thunks";

export interface ToastState {
  toastInitiated: boolean;
  triggerToast: boolean;
  message: string;
}

const isUsingMock = process.env.REACT_APP_USING_MOCK;

const mockInitialProductState = {
  toastInitiated: false,
  triggerToast: false,
  message: "Something went wrong",
} as ToastState;

const initialState: ToastState = isUsingMock
  ? mockInitialProductState
  : {
      toastInitiated: false,
      triggerToast: false,
      message: "Something went wrong",
    };

export const toastSlice = createSlice({
  name: "action/toast",
  initialState,
  reducers: {
    setToastInitSuccess(state) {
      state.toastInitiated = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getNowPlayingMovies.rejected, (state, action) => {
      state.message = action.payload as string;
      state.triggerToast = !state.triggerToast;
    });

    builder.addCase(getTopRatedMovies.rejected, (state, action) => {
      state.message = action.payload as string;
      state.triggerToast = !state.triggerToast;
    });

    builder.addCase(getMovieDetail.rejected, (state, action) => {
      state.message = action.payload as string;
      state.triggerToast = !state.triggerToast;
    });
  },
});

export const { setToastInitSuccess } = toastSlice.actions;

export default toastSlice.reducer;
