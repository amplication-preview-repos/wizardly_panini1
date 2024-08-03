import { User } from "../user/User";

export type Judge = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
