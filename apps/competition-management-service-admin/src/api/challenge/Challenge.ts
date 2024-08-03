import { JsonValue } from "type-fest";
import { Submission } from "../submission/Submission";
import { Track } from "../track/Track";

export type Challenge = {
  attachments: JsonValue;
  createdAt: Date;
  description: string | null;
  id: string;
  points: number | null;
  submissions?: Array<Submission>;
  track?: Track | null;
  typeField: string | null;
  updatedAt: Date;
};
