import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ChallengeListRelationFilter } from "../challenge/ChallengeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type TrackWhereInput = {
  brand?: StringNullableFilter;
  challenges?: ChallengeListRelationFilter;
  id?: StringFilter;
};
