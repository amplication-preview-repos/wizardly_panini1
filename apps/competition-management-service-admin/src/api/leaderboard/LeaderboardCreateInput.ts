import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type LeaderboardCreateInput = {
  points?: number | null;
  team?: TeamWhereUniqueInput | null;
};
