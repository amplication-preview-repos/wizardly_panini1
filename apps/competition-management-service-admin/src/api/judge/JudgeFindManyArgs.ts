import { JudgeWhereInput } from "./JudgeWhereInput";
import { JudgeOrderByInput } from "./JudgeOrderByInput";

export type JudgeFindManyArgs = {
  where?: JudgeWhereInput;
  orderBy?: Array<JudgeOrderByInput>;
  skip?: number;
  take?: number;
};
