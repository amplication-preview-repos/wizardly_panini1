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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { ChallengeListRelationFilter } from "../../challenge/base/ChallengeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class TrackWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  brand?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ChallengeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ChallengeListRelationFilter)
  @IsOptional()
  @Field(() => ChallengeListRelationFilter, {
    nullable: true,
  })
  challenges?: ChallengeListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;
}

export { TrackWhereInput as TrackWhereInput };
