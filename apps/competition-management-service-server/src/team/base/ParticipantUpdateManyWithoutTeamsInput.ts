/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ParticipantWhereUniqueInput } from "../../participant/base/ParticipantWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ParticipantUpdateManyWithoutTeamsInput {
  @Field(() => [ParticipantWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ParticipantWhereUniqueInput],
  })
  connect?: Array<ParticipantWhereUniqueInput>;

  @Field(() => [ParticipantWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ParticipantWhereUniqueInput],
  })
  disconnect?: Array<ParticipantWhereUniqueInput>;

  @Field(() => [ParticipantWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ParticipantWhereUniqueInput],
  })
  set?: Array<ParticipantWhereUniqueInput>;
}

export { ParticipantUpdateManyWithoutTeamsInput as ParticipantUpdateManyWithoutTeamsInput };
