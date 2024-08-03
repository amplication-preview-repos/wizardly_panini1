import { ChallengeWhereUniqueInput } from "../challenge/ChallengeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SubmissionWhereInput = {
  challenge?: ChallengeWhereUniqueInput;
  id?: StringFilter;
  link?: StringNullableFilter;
};
