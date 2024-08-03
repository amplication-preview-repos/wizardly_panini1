import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type LeaderboardUpdateInput = {
  points?: number | null;
  team?: TeamWhereUniqueInput | null;
};
