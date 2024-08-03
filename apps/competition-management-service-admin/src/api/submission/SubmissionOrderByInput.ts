import { SortOrder } from "../../util/SortOrder";

export type SubmissionOrderByInput = {
  challengeId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  link?: SortOrder;
  updatedAt?: SortOrder;
};
