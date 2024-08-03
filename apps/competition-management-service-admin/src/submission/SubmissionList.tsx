import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CHALLENGE_TITLE_FIELD } from "../challenge/ChallengeTitle";

export const SubmissionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Submissions"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
