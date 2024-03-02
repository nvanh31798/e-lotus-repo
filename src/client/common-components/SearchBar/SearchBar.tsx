import React, { useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../core/redux/store/store";
import { searchProducts } from "../../../core/redux/thunks";
import { setSearchValue } from "../../../core/redux/slices";

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const currentSearchValue = useAppSelector(
    (state) => state.product.searchValue
  );
  const [IsDebounce, setIsDebounce] = useState(true);
  const [searchString, setSearchString] = useState("");

  const handleSearching = (value?: string) => {
    setSearchString(value ?? "");
  };

  useEffect(() => {
    if (!searchString) {
      setIsDebounce(false);
      dispatch(setSearchValue(""));
    }
    setTimeout(() => setIsDebounce(!IsDebounce), 500);
  }, [IsDebounce, searchString]);

  useEffect(() => {
    if (
      !searchString ||
      !searchString.length ||
      currentSearchValue === searchString ||
      !IsDebounce
    ) {
      return;
    }
    dispatch(setSearchValue(searchString));
    dispatch(searchProducts({ value: searchString }));
  }, [searchString, IsDebounce, currentSearchValue]);

  return (
    <div>
      <input placeholder="Search" type="text" />
    </div>
  );
};
