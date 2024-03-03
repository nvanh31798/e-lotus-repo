import { Link } from "react-router-dom";
import { Path } from "../../routes/Path";
import styles from "./style.module.scss";

export const TabBar = () => {


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
    <div className={styles.container}>
      <nav>
        <ul>
          <li className={styles.dropDown}>
            Movie
          </li>
            <div className={styles.dropDownMenu}>
              {movieMenuOptions.map((option) => (
                <button>
                  <Link className={styles.menuOption} to={option.path}>{option.title}</Link>
                </button>
              ))}
            </div>
        </ul>
      </nav>
    </div>
  );
};
