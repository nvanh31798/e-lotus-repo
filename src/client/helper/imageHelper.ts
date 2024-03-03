import { IMAGE_BASE_URL } from "../../core";

export const getImageURL = (
  size: "200"| "300"| "400" | "500" | "original",
  posterPath: string
): string => {
  switch (size) {
    case "500":
      return `${IMAGE_BASE_URL}/w500${posterPath}`;
    case "200":
      return `${IMAGE_BASE_URL}/w200${posterPath}`;
    case "300":
      return `${IMAGE_BASE_URL}/w300${posterPath}`;
    case "original":
      return `${IMAGE_BASE_URL}/original${posterPath}`;

    default:
      return `${IMAGE_BASE_URL}/w400${posterPath}`;
  }
};
