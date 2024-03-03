import React from "react";
import styles from "./style.module.scss";

export const LoadingIndicator = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
      Loading...
    </div>
  );
};
