import { StringFilter } from "../../util/StringFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParticipantWhereInput = {
  id?: StringFilter;
  team?: TeamWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
