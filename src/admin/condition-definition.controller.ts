import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ConditionDefinitionService } from './condition-definition.service';

@Controller('admin/conditions')
export class ConditionDefinitionController {
  constructor(private readonly conditionService: ConditionDefinitionService) {}

  @Get()
  async listConditions() {
    return this.conditionService.listConditions();
  }

  @Post()
  async createCondition(@Body() data: any) {
    return this.conditionService.createCondition(data);
  }

  @Put(':id')
  async updateCondition(@Param('id') id: string, @Body() data: any) {
    return this.conditionService.updateCondition(id, data);
  }

  @Delete(':id')
  async deleteCondition(@Param('id') id: string) {
    return this.conditionService.deleteCondition(id);
  }
}
