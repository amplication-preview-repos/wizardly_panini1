import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type LeaderboardWhereInput = {
  id?: StringFilter;
  points?: IntNullableFilter;
  team?: TeamWhereUniqueInput;
};
