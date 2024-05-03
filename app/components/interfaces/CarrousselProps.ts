import { ProjectCardProps } from "./ProjectCardProps";

export interface CarrousselProps {
  cards: ProjectCardProps[];
  offset: number;
  showArrows: boolean;
  width: string;
  height: string;
  margin: string;
}