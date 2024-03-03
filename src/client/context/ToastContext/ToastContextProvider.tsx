import React from "react";
import { ToastContext } from "./ToastContext";
import { Toast } from "src/client/common-components/Toast/Toast";

export const ToastContextProvider = () => {
  return (
    <ToastContext.Provider value={"value"}>
      <Toast />
    </ToastContext.Provider>
  );
};
