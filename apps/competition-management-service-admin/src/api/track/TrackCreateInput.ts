import { ChallengeCreateNestedManyWithoutTracksInput } from "./ChallengeCreateNestedManyWithoutTracksInput";

export type TrackCreateInput = {
  brand?: string | null;
  challenges?: ChallengeCreateNestedManyWithoutTracksInput;
};
