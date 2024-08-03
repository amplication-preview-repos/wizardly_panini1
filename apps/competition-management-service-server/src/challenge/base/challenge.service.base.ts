/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Challenge as PrismaChallenge,
  Submission as PrismaSubmission,
  Track as PrismaTrack,
} from "@prisma/client";

export class ChallengeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ChallengeCountArgs, "select">
  ): Promise<number> {
    return this.prisma.challenge.count(args);
  }

  async challenges(
    args: Prisma.ChallengeFindManyArgs
  ): Promise<PrismaChallenge[]> {
    return this.prisma.challenge.findMany(args);
  }
  async challenge(
    args: Prisma.ChallengeFindUniqueArgs
  ): Promise<PrismaChallenge | null> {
    return this.prisma.challenge.findUnique(args);
  }
  async createChallenge(
    args: Prisma.ChallengeCreateArgs
  ): Promise<PrismaChallenge> {
    return this.prisma.challenge.create(args);
  }
  async updateChallenge(
    args: Prisma.ChallengeUpdateArgs
  ): Promise<PrismaChallenge> {
    return this.prisma.challenge.update(args);
  }
  async deleteChallenge(
    args: Prisma.ChallengeDeleteArgs
  ): Promise<PrismaChallenge> {
    return this.prisma.challenge.delete(args);
  }

  async findSubmissions(
    parentId: string,
    args: Prisma.SubmissionFindManyArgs
  ): Promise<PrismaSubmission[]> {
    return this.prisma.challenge
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .submissions(args);
  }

  async getTrack(parentId: string): Promise<PrismaTrack | null> {
    return this.prisma.challenge
      .findUnique({
        where: { id: parentId },
      })
      .track();
  }
}
