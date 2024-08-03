import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LeaderboardListRelationFilter } from "../leaderboard/LeaderboardListRelationFilter";
import { ParticipantListRelationFilter } from "../participant/ParticipantListRelationFilter";

export type TeamWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  leaderboards?: LeaderboardListRelationFilter;
  name?: StringNullableFilter;
  participants?: ParticipantListRelationFilter;
};
