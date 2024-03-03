import { IMAGE_BASE_URL } from "../../core";

export const getImageURL = (posterPath: string): string => {
  return `${IMAGE_BASE_URL}/w400${posterPath}`;
};
