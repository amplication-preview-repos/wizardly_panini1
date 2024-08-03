import { Challenge } from "../challenge/Challenge";

export type Track = {
  brand: string | null;
  challenges?: Array<Challenge>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
