import React, { PropsWithChildren } from "react";
import { ToastContextProvider } from "../context/ToastContext/ToastContext";

const AppContainer = ({ children }: PropsWithChildren) => {
  return <ToastContextProvider>{children}</ToastContextProvider>;
};

export default AppContainer;
