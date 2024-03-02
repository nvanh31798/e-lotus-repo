import React, { useEffect, useState } from "react";
import {
  useAppDispatch,
} from "../../../core/redux/store/store";

export const SearchBar = () => {
  const dispatch = useAppDispatch();

  const [IsDebounce, setIsDebounce] = useState(true);
  const [searchString, setSearchString] = useState("");

  const handleSearching = (value?: string) => {
    setSearchString(value ?? "");
  };

  useEffect(() => {
    if (!searchString) {
      setIsDebounce(false);
    }
    setTimeout(() => setIsDebounce(!IsDebounce), 500);
  }, [IsDebounce, searchString]);

  useEffect(() => {
    if (!searchString || !searchString.length || !IsDebounce) {
      return;
    }
  }, [searchString, IsDebounce]);

  return (
    <div>
      <input placeholder="Search" type="text" />
    </div>
  );
};
