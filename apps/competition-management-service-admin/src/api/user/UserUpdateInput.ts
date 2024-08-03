import { JudgeUpdateManyWithoutUsersInput } from "./JudgeUpdateManyWithoutUsersInput";
import { ParticipantUpdateManyWithoutUsersInput } from "./ParticipantUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  judges?: JudgeUpdateManyWithoutUsersInput;
  lastName?: string | null;
  participants?: ParticipantUpdateManyWithoutUsersInput;
  password?: string;
  role?: string | null;
  roles?: InputJsonValue;
  username?: string;
};
