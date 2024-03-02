import { combineReducers, configureStore } from "@reduxjs/toolkit";
import movieReducer from "../slices/movie/movieSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const preloadedState = {
  movie: undefined,
};

const rootReducer = combineReducers({
  movie: movieReducer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
  });
}

export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export type UseAppDispatch = ReturnType<typeof useAppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AsyncThunkAppConfig<RejectType = any> = {
  state: RootState;
  rejectValue: RejectType;
};
