import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JudgeListRelationFilter } from "../judge/JudgeListRelationFilter";
import { ParticipantListRelationFilter } from "../participant/ParticipantListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  judges?: JudgeListRelationFilter;
  lastName?: StringNullableFilter;
  participants?: ParticipantListRelationFilter;
  role?: StringNullableFilter;
  username?: StringFilter;
};
