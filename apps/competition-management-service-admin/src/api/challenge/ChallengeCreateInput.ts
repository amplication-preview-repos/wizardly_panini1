import { InputJsonValue } from "../../types";
import { SubmissionCreateNestedManyWithoutChallengesInput } from "./SubmissionCreateNestedManyWithoutChallengesInput";
import { TrackWhereUniqueInput } from "../track/TrackWhereUniqueInput";

export type ChallengeCreateInput = {
  attachments?: InputJsonValue;
  description?: string | null;
  points?: number | null;
  submissions?: SubmissionCreateNestedManyWithoutChallengesInput;
  track?: TrackWhereUniqueInput | null;
  typeField?: string | null;
};
