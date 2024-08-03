import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TRACK_TITLE_FIELD } from "./TrackTitle";

export const TrackShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="brand" source="brand" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Challenge"
          target="trackId"
          label="Challenges"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
