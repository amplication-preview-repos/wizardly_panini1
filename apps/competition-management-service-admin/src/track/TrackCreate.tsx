import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ChallengeTitle } from "../challenge/ChallengeTitle";

export const TrackCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="brand" source="brand" />
        <ReferenceArrayInput
          source="challenges"
          reference="Challenge"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ChallengeTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
