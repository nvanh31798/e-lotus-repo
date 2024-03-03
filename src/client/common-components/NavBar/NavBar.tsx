import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { TabBar } from "../TabBar/TabBar";
import styles from "./style.module.scss";
import { Divider } from "../Divider/Divider";

export const NavBar = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>ELotus interview test</h1>
        <div>
          <SearchBar />
        </div>
      </div>
      <TabBar />
      <Divider />
    </>
  );
};
