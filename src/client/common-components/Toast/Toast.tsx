import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { useAppDispatch, useAppSelector } from "../../../core";
import { setToastInitSuccess } from "../../../core/redux/slices/toast/toastSlice";

export const Toast = () => {
  const dispatch = useAppDispatch();
  const [show, setshow] = useState(false);
  const {message, triggerToast, toastInitiated } = useAppSelector(
    (state) => state.toast
  );

  useEffect(() => {
    dispatch(setToastInitSuccess());
  }, []);

  useEffect(() => {
    if (!toastInitiated) {
      return;
    }
    setshow(true);
    setTimeout(() => {
      setshow(false);
    }, 3000);
  }, [triggerToast]);

  return (
    <>
      {show && (
        <div className={styles.container}>
          <p>{message}</p>
        </div>
      )}
    </>
  );
};
