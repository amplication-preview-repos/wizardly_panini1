import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParticipantCreateInput = {
  team?: TeamWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
