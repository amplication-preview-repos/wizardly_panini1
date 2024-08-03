import { SortOrder } from "../../util/SortOrder";

export type ChallengeOrderByInput = {
  attachments?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  points?: SortOrder;
  trackId?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
