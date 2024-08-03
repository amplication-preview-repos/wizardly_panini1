import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type JudgeWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
