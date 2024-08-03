import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParticipantUpdateInput = {
  team?: TeamWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
