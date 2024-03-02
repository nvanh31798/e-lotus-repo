import React from "react";
import { Link } from "react-router-dom";
import { Path } from "../../routes/Path";

export const TabBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={Path.NOW_PLAYING_MOVIE}>Playing Movie</Link>
          </li>
          <li>
            <Link to={Path.TOP_RATED_MOVIE}>Top rated Moview</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
