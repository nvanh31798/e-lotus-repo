import { PropsWithChildren, createContext } from "react";

export const ToastContext = createContext("Error");

export const ToastContextProvider = ({ children }: PropsWithChildren) => {
  return <ToastContext.Provider value={"Error"}>{children}</ToastContext.Provider>;
};
