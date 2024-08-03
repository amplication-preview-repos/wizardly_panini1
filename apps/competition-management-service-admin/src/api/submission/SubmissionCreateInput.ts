import { ChallengeWhereUniqueInput } from "../challenge/ChallengeWhereUniqueInput";

export type SubmissionCreateInput = {
  challenge?: ChallengeWhereUniqueInput | null;
  link?: string | null;
};
