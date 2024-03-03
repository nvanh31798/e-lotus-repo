import { IMAGE_BASE_URL } from "../../core";

export const getImageURL = (
  size: "400" | "500" | "original",
  posterPath: string
): string => {
  switch (size) {
    case "500":
      return `${IMAGE_BASE_URL}/w500${posterPath}`;
    case "original":
      return `${IMAGE_BASE_URL}/original${posterPath}`;

    default:
      return `${IMAGE_BASE_URL}/w400${posterPath}`;
  }
};
