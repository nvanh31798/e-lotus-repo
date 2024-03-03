import { Link, useLocation } from "react-router-dom";
import { Path } from "../../routes/Path";
import styles from "./style.module.scss";

export const TabBar = () => {
  const { pathname } = useLocation();
  const movieMenuOptions = [
    {
      title: "Now Playing Movie",
      path: Path.NOW_PLAYING_MOVIE,
    },
    {
      title: "Top rated Moview",
      path: Path.TOP_RATED_MOVIE,
    },
  ];

  return (
    <div className={styles.dropDownMenu}>
      {movieMenuOptions.map((option) => (
        <div
          className={
            `/${option.path}` === pathname
              ? styles.activatedButton
              : styles.optionContainer
          }
        >
          <Link
            className={
              `/${option.path}` === pathname
                ? styles.activatedText
                : styles.menuOption
            }
            to={option.path}
          >
            {option.title}
          </Link>
        </div>
      ))}
    </div>
  );
};
