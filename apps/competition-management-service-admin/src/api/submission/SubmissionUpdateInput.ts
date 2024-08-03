import { ChallengeWhereUniqueInput } from "../challenge/ChallengeWhereUniqueInput";

export type SubmissionUpdateInput = {
  challenge?: ChallengeWhereUniqueInput | null;
  link?: string | null;
};
