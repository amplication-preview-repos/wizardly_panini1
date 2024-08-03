import { LeaderboardCreateNestedManyWithoutTeamsInput } from "./LeaderboardCreateNestedManyWithoutTeamsInput";
import { ParticipantCreateNestedManyWithoutTeamsInput } from "./ParticipantCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  description?: string | null;
  leaderboards?: LeaderboardCreateNestedManyWithoutTeamsInput;
  name?: string | null;
  participants?: ParticipantCreateNestedManyWithoutTeamsInput;
};
