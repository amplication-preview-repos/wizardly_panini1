import { Team } from "../team/Team";
import { User } from "../user/User";

export type Participant = {
  createdAt: Date;
  id: string;
  team?: Team | null;
  updatedAt: Date;
  user?: User | null;
};
