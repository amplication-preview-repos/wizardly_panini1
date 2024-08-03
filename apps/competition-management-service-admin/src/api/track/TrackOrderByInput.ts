import { SortOrder } from "../../util/SortOrder";

export type TrackOrderByInput = {
  brand?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
