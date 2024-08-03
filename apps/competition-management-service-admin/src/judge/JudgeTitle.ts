import { Judge as TJudge } from "../api/judge/Judge";

export const JUDGE_TITLE_FIELD = "id";

export const JudgeTitle = (record: TJudge): string => {
  return record.id?.toString() || String(record.id);
};
