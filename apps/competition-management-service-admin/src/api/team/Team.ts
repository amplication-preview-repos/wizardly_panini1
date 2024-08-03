import { Leaderboard } from "../leaderboard/Leaderboard";
import { Participant } from "../participant/Participant";

export type Team = {
  createdAt: Date;
  description: string | null;
  id: string;
  leaderboards?: Array<Leaderboard>;
  name: string | null;
  participants?: Array<Participant>;
  updatedAt: Date;
};
