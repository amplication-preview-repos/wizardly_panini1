import * as graphql from "@nestjs/graphql";
import { JudgeResolverBase } from "./base/judge.resolver.base";
import { Judge } from "./base/Judge";
import { JudgeService } from "./judge.service";

@graphql.Resolver(() => Judge)
export class JudgeResolver extends JudgeResolverBase {
  constructor(protected readonly service: JudgeService) {
    super(service);
  }
}
