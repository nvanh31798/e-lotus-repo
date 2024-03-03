import React, { FormEvent, useState } from "react";
import { useAppDispatch } from "../../../core/redux/store/store";
import { searchMovie } from "../../../core";
import { useNavigate } from "react-router-dom";
import { Path } from "../../../client/routes/Path";

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [searchString, setSearchString] = useState("");

  const handleChange = (textValue?: string) => {
    setSearchString(textValue ?? "");
  };

  const handleSearching = (event: FormEvent) => {
    event.preventDefault();
    if (!searchString) {
      return;
    }
    dispatch(searchMovie({ queryString: searchString })).then(() =>
      navigate(`../${Path.SEARCH_MOVIES}/${searchString}`)
    );
  };

  return (
    <div>
      <form onSubmit={(e) => handleSearching(e)}>
        <input
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search"
          type="text"
        />
        <input type="submit" />
      </form>
    </div>
  );
};
