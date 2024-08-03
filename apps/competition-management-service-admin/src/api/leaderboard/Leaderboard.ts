import { Team } from "../team/Team";

export type Leaderboard = {
  createdAt: Date;
  id: string;
  points: number | null;
  team?: Team | null;
  updatedAt: Date;
};
