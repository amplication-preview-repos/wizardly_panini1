import { ChallengeUpdateManyWithoutTracksInput } from "./ChallengeUpdateManyWithoutTracksInput";

export type TrackUpdateInput = {
  brand?: string | null;
  challenges?: ChallengeUpdateManyWithoutTracksInput;
};
