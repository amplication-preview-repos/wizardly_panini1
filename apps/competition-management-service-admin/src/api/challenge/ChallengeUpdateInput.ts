import { InputJsonValue } from "../../types";
import { SubmissionUpdateManyWithoutChallengesInput } from "./SubmissionUpdateManyWithoutChallengesInput";
import { TrackWhereUniqueInput } from "../track/TrackWhereUniqueInput";

export type ChallengeUpdateInput = {
  attachments?: InputJsonValue;
  description?: string | null;
  points?: number | null;
  submissions?: SubmissionUpdateManyWithoutChallengesInput;
  track?: TrackWhereUniqueInput | null;
  typeField?: string | null;
};
