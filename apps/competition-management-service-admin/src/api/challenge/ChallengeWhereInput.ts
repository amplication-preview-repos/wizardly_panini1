import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SubmissionListRelationFilter } from "../submission/SubmissionListRelationFilter";
import { TrackWhereUniqueInput } from "../track/TrackWhereUniqueInput";

export type ChallengeWhereInput = {
  attachments?: JsonFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  points?: IntNullableFilter;
  submissions?: SubmissionListRelationFilter;
  track?: TrackWhereUniqueInput;
  typeField?: StringNullableFilter;
};
