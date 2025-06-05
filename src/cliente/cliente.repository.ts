import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Cliente } from '@prisma/client';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClienteRepository {
  constructor(private readonly prisma: PrismaService) {}

  async cadastrar(dto: CreateClienteDto): Promise<Cliente> {
    return await this.prisma.cliente.create({ data: dto });
  }

  async listar(): Promise<Cliente[]> {
    return await this.prisma.cliente.findMany();
  }

  async buscar(codigo: number): Promise<Cliente | null> {
    return await this.prisma.cliente.findUnique({ where: { codigo } });
  }

  async atualizar(codigo: number, dto: UpdateClienteDto): Promise<Cliente> {
    return await this.prisma.cliente.update({ where: { codigo }, data: dto });
  }

  async excluir(codigo: number): Promise<void> {
    await await this.prisma.cliente.delete({ where: { codigo } });
  }
}
