import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IPlanoRepository } from './plano.interface';
import { Plano } from '@prisma/client';

@Injectable()
export class PlanoRepository implements IPlanoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async listarTodos(): Promise<Plano[]> {
    return await this.prisma.plano.findMany();
  }

  async buscarPorId(codigo: number): Promise<Plano> {
    const plano = await this.prisma.plano.findUnique({
      where: { codigo },
    });
    if (!plano) {
      throw new Error(`Plano with id ${codigo} not found`);
    }
    return plano;
  }

  async atualizarPlano(codigo: number, custoMensal: number): Promise<Plano> {
    return await this.prisma.plano.update({
      where: { codigo },
      data: { custoMensal },
    });
  }
}
