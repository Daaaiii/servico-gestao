import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AssinaturasService } from './assinaturas.service';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TipoAssinatura } from 'enum/tipo-assinatura.enum';
import { CreateAssinaturaDto } from './dto/create-assinatura.dto';

@ApiTags('Assinaturas')
@Controller('gestao')
export class AssinaturasController {
  constructor(private readonly assinaturasService: AssinaturasService) {}

  @Post('/assinaturas')
  @ApiResponse({
    status: 201,
    description: 'Assinatura criada com sucesso.',
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao criar assinatura.',
  })
  @ApiBody({
    type: CreateAssinaturaDto,
    description: 'É necessário informar apenas os campos codPlano e codCli',
  })
  criar(@Body() codCli: number, codPlano: number) {
    return this.assinaturasService.criar(codCli, codPlano);
  }

  @Get('/assinaturas/:tipo')
  @ApiResponse({
    status: 200,
    description: 'Lista de assinaturas retornada com sucesso.',
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao listar assinaturas.',
  })
  @ApiParam({
    name: 'tipo',
    type: String,
    description:
      'Tipo de assinatura a ser filtrado (ATIVOS, CANCELADOS, TODOS)',
  })
  buscarPorTipo(@Param('tipo') tipo: TipoAssinatura) {
    return this.assinaturasService.listarPorTipo(tipo);
  }

  @Get('/assinaturascliente/:codcli')
  @ApiResponse({
    status: 200,
    description: 'Lista de assinaturas do cliente retornada com sucesso.',
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao listar assinaturas do cliente.',
  })
  @ApiParam({
    name: 'codcli',
    type: Number,
    description: 'Código do cliente para filtrar assinaturas',
  })
  buscarPorCliente(@Param('codcli') codCli: number) {
    return this.assinaturasService.listarPorCliente(codCli);
  }

  @Get('assinaturasplano/:codplano')
  @ApiResponse({
    status: 200,
    description: 'Lista de assinaturas do plano retornada com sucesso.',
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao listar assinaturas do plano.',
  })
  @ApiParam({
    name: 'codplano',
    type: Number,
    description: 'Código do plano para filtrar assinaturas',
  })
  buscarPorPlano(@Param('codplano') codPlano: number) {
    return this.assinaturasService.listarPorPlano(codPlano);
  }
}
