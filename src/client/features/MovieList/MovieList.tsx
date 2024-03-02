import React from "react";

export interface MovieListProps {
  label?: string;
}

export const MovieList = ({ label }: MovieListProps) => {
  return (
    <div>
      MovieList
      {label && <p>{label}</p>}
    </div>
  );
};
