import { LeaderboardUpdateManyWithoutTeamsInput } from "./LeaderboardUpdateManyWithoutTeamsInput";
import { ParticipantUpdateManyWithoutTeamsInput } from "./ParticipantUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  description?: string | null;
  leaderboards?: LeaderboardUpdateManyWithoutTeamsInput;
  name?: string | null;
  participants?: ParticipantUpdateManyWithoutTeamsInput;
};
