import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JudgeServiceBase } from "./base/judge.service.base";

@Injectable()
export class JudgeService extends JudgeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
