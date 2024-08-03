import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ChallengeTitle } from "../challenge/ChallengeTitle";

export const TrackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
