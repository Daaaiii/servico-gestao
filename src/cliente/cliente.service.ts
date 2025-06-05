import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ClienteRepository } from './cliente.repository';

@Injectable()
export class ClienteService {
  constructor(private readonly clienteRepository: ClienteRepository) {}

  create(createClienteDto: CreateClienteDto) {
    return this.clienteRepository.cadastrar(createClienteDto);
  }

  findAll() {
    return this.clienteRepository.listar();
  }

  findOne(id: number) {
    return this.clienteRepository.buscar(id);
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return this.clienteRepository.atualizar(id, updateClienteDto);
  }

  remove(id: number) {
    return this.clienteRepository.excluir(id);
  }
}
