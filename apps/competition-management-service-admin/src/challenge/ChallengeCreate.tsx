import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SubmissionTitle } from "../submission/SubmissionTitle";
import { TrackTitle } from "../track/TrackTitle";

export const ChallengeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="points" source="points" />
        <ReferenceArrayInput
          source="submissions"
          reference="Submission"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SubmissionTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="track.id" reference="Track" label="track">
          <SelectInput optionText={TrackTitle} />
        </ReferenceInput>
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
