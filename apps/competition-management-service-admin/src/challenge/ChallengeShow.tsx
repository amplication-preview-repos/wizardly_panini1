import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CHALLENGE_TITLE_FIELD } from "./ChallengeTitle";
import { TRACK_TITLE_FIELD } from "../track/TrackTitle";

export const ChallengeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="attachments" source="attachments" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="points" source="points" />
        <ReferenceField label="track" source="track.id" reference="Track">
          <TextField source={TRACK_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Submission"
          target="challengeId"
          label="Submissions"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="challenge"
              source="challenge.id"
              reference="Challenge"
            >
              <TextField source={CHALLENGE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="link" source="link" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
