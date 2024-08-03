/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Submission } from "./Submission";
import { SubmissionCountArgs } from "./SubmissionCountArgs";
import { SubmissionFindManyArgs } from "./SubmissionFindManyArgs";
import { SubmissionFindUniqueArgs } from "./SubmissionFindUniqueArgs";
import { CreateSubmissionArgs } from "./CreateSubmissionArgs";
import { UpdateSubmissionArgs } from "./UpdateSubmissionArgs";
import { DeleteSubmissionArgs } from "./DeleteSubmissionArgs";
import { Challenge } from "../../challenge/base/Challenge";
import { SubmissionService } from "../submission.service";
@graphql.Resolver(() => Submission)
export class SubmissionResolverBase {
  constructor(protected readonly service: SubmissionService) {}

  async _submissionsMeta(
    @graphql.Args() args: SubmissionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Submission])
  async submissions(
    @graphql.Args() args: SubmissionFindManyArgs
  ): Promise<Submission[]> {
    return this.service.submissions(args);
  }

  @graphql.Query(() => Submission, { nullable: true })
  async submission(
    @graphql.Args() args: SubmissionFindUniqueArgs
  ): Promise<Submission | null> {
    const result = await this.service.submission(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Submission)
  async createSubmission(
    @graphql.Args() args: CreateSubmissionArgs
  ): Promise<Submission> {
    return await this.service.createSubmission({
      ...args,
      data: {
        ...args.data,

        challenge: args.data.challenge
          ? {
              connect: args.data.challenge,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Submission)
  async updateSubmission(
    @graphql.Args() args: UpdateSubmissionArgs
  ): Promise<Submission | null> {
    try {
      return await this.service.updateSubmission({
        ...args,
        data: {
          ...args.data,

          challenge: args.data.challenge
            ? {
                connect: args.data.challenge,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Submission)
  async deleteSubmission(
    @graphql.Args() args: DeleteSubmissionArgs
  ): Promise<Submission | null> {
    try {
      return await this.service.deleteSubmission(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Challenge, {
    nullable: true,
    name: "challenge",
  })
  async getChallenge(
    @graphql.Parent() parent: Submission
  ): Promise<Challenge | null> {
    const result = await this.service.getChallenge(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}