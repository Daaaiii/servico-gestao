import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import {
  ApiAcceptedResponse,
  ApiBadRequestResponse,
  ApiBody,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Clientes')
@Controller('gestao/clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  @ApiBody({ type: CreateClienteDto })
  @ApiBadRequestResponse({ description: 'Dados inválidos' })
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clienteService.create(createClienteDto);
  }

  @Get()
  @ApiAcceptedResponse({
    type: CreateClienteDto,
    isArray: true,
    description: 'Lista de clientes',
  })
  @ApiBadRequestResponse({ description: 'Dados inválidos' })
  findAll() {
    return this.clienteService.findAll();
  }

  @Get(':id')
  @ApiAcceptedResponse({
    type: CreateClienteDto,
    description: 'Detalhes do cliente',
  })
  @ApiBadRequestResponse({ description: 'ID inválido' })
  @ApiParam({ type: Number, name: 'id', description: 'ID do cliente' })
  findOne(@Param('id') id: number) {
    return this.clienteService.findOne(id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateClienteDto })
  @ApiBadRequestResponse({ description: 'Dados inválidos' })
  @ApiParam({ type: Number, name: 'id', description: 'ID do cliente' })
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clienteService.update(+id, updateClienteDto);
  }

  @Delete(':id')
  @ApiBadRequestResponse({ description: 'ID inválido' })
  @ApiParam({ type: Number, name: 'id', description: 'ID do cliente' })
  @ApiAcceptedResponse({ description: 'Cliente removido com sucesso' })
  remove(@Param('id') id: string) {
    return this.clienteService.remove(+id);
  }
}
