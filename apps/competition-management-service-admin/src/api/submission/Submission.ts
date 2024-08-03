import { Challenge } from "../challenge/Challenge";

export type Submission = {
  challenge?: Challenge | null;
  createdAt: Date;
  id: string;
  link: string | null;
  updatedAt: Date;
};
