import { Submission as TSubmission } from "../api/submission/Submission";

export const SUBMISSION_TITLE_FIELD = "link";

export const SubmissionTitle = (record: TSubmission): string => {
  return record.link?.toString() || String(record.id);
};
