import { Track as TTrack } from "../api/track/Track";

export const TRACK_TITLE_FIELD = "brand";

export const TrackTitle = (record: TTrack): string => {
  return record.brand?.toString() || String(record.id);
};
