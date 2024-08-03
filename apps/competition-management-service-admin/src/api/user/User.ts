import { Judge } from "../judge/Judge";
import { Participant } from "../participant/Participant";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  judges?: Array<Judge>;
  lastName: string | null;
  participants?: Array<Participant>;
  role: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
