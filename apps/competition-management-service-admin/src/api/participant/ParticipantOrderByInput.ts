import { SortOrder } from "../../util/SortOrder";

export type ParticipantOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  teamId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
