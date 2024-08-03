import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ChallengeTitle } from "../challenge/ChallengeTitle";

export const SubmissionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="challenge.id"
          reference="Challenge"
          label="challenge"
        >
          <SelectInput optionText={ChallengeTitle} />
        </ReferenceInput>
        <TextInput label="link" source="link" />
      </SimpleForm>
    </Create>
  );
};
