import { SortOrder } from "../../util/SortOrder";

export type LeaderboardOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  points?: SortOrder;
  teamId?: SortOrder;
  updatedAt?: SortOrder;
};
