import { Challenge as TChallenge } from "../api/challenge/Challenge";

export const CHALLENGE_TITLE_FIELD = "typeField";

export const ChallengeTitle = (record: TChallenge): string => {
  return record.typeField?.toString() || String(record.id);
};
