import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ChallengeTitle } from "../challenge/ChallengeTitle";

export const SubmissionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
