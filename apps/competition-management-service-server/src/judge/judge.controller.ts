import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JudgeService } from "./judge.service";
import { JudgeControllerBase } from "./base/judge.controller.base";

@swagger.ApiTags("judges")
@common.Controller("judges")
export class JudgeController extends JudgeControllerBase {
  constructor(protected readonly service: JudgeService) {
    super(service);
  }
}
