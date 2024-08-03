import { JudgeCreateNestedManyWithoutUsersInput } from "./JudgeCreateNestedManyWithoutUsersInput";
import { ParticipantCreateNestedManyWithoutUsersInput } from "./ParticipantCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  judges?: JudgeCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  participants?: ParticipantCreateNestedManyWithoutUsersInput;
  password: string;
  role?: string | null;
  roles: InputJsonValue;
  username: string;
};
