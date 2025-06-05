import { Controller, Get, Body, Param, Patch } from '@nestjs/common';
import { PlanoService } from './plano.service';
import {
  ApiAcceptedResponse,
  ApiBadRequestResponse,
  ApiBody,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Planos')
@Controller('gestao/planos')
export class PlanoController {
  constructor(private readonly planoService: PlanoService) {}

  @Get()
  @ApiAcceptedResponse({
    description: 'Lista de planos retornada com sucesso.',
  })
  @ApiAcceptedResponse({ description: 'Erro ao listar planos.' })
  findAll() {
    return this.planoService.listarTodos();
  }

  @Patch()
  @ApiAcceptedResponse({ description: 'Plano atualizado com sucesso.' })
  @ApiBadRequestResponse({ description: 'Erro ao atualizar o plano.' })
  @ApiParam({
    name: 'idPlano',
    type: Number,
    description: 'ID do plano a ser atualizado',
  })
  @ApiBody({
    type: Number,
    required: true,
    description: 'Dados do plano a ser atualizado',
  })
  create(@Param('idPlano') idPlano: number, @Body() custoMensal: number) {
    console.log(idPlano, custoMensal);
    if (typeof custoMensal !== 'number' || custoMensal <= 0) {
      throw new Error('Custo mensal deve ser um número positivo.');
    }
    if (isNaN(idPlano) || idPlano <= 0) {
      throw new Error('ID do plano deve ser um número positivo.');
    }
    return this.planoService.atualizar(idPlano, custoMensal);
  }
}
