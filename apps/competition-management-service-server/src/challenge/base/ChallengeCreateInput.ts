/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsJSONValue } from "../../validators";
import {
  IsOptional,
  IsString,
  MaxLength,
  IsInt,
  Min,
  Max,
  ValidateNested,
} from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { SubmissionCreateNestedManyWithoutChallengesInput } from "./SubmissionCreateNestedManyWithoutChallengesInput";
import { Type } from "class-transformer";
import { TrackWhereUniqueInput } from "../../track/base/TrackWhereUniqueInput";

@InputType()
class ChallengeCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  attachments?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  points?: number | null;

  @ApiProperty({
    required: false,
    type: () => SubmissionCreateNestedManyWithoutChallengesInput,
  })
  @ValidateNested()
  @Type(() => SubmissionCreateNestedManyWithoutChallengesInput)
  @IsOptional()
  @Field(() => SubmissionCreateNestedManyWithoutChallengesInput, {
    nullable: true,
  })
  submissions?: SubmissionCreateNestedManyWithoutChallengesInput;

  @ApiProperty({
    required: false,
    type: () => TrackWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TrackWhereUniqueInput)
  @IsOptional()
  @Field(() => TrackWhereUniqueInput, {
    nullable: true,
  })
  track?: TrackWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  typeField?: string | null;
}

export { ChallengeCreateInput as ChallengeCreateInput };
