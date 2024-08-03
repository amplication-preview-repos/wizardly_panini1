import { Module } from "@nestjs/common";
import { JudgeModuleBase } from "./base/judge.module.base";
import { JudgeService } from "./judge.service";
import { JudgeController } from "./judge.controller";
import { JudgeResolver } from "./judge.resolver";

@Module({
  imports: [JudgeModuleBase],
  controllers: [JudgeController],
  providers: [JudgeService, JudgeResolver],
  exports: [JudgeService],
})
export class JudgeModule {}
