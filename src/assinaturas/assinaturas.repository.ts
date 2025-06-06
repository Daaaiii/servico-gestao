import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Assinatura } from '@prisma/client';
import { IAssinaturasRepository } from './assinaturas.interface';
import { TipoAssinatura } from 'enum/tipo-assinatura.enum';
import { subDays } from 'date-fns';

@Injectable()
export class AssinaturasRepository implements IAssinaturasRepository {
  constructor(private readonly prisma: PrismaService) {}
  async criarAssinatura(codCli: number, codPlano: number): Promise<Assinatura> {
    const plano = await this.prisma.plano.findUnique({
      where: { codigo: codPlano },
    });

    if (!plano) {
      throw new Error(`Plano com código ${codPlano} não encontrado.`);
    }

    const inicioFidelidade = new Date();
    const fimFidelidade = new Date();
    fimFidelidade.setFullYear(fimFidelidade.getFullYear() + 1); // +365 dias

    return await this.prisma.assinatura.create({
      data: {
        codCli,
        codPlano,
        inicioFidelidade,
        fimFidelidade,
        dataUltimoPagamento: new Date(),
        custoFinal: plano.custoMensal,
        descricao: 'Assinatura padrão',
      },
    });
  }
  async listarPorCliente(codCli: number): Promise<Assinatura[]> {
    return await this.prisma.assinatura.findMany({
      where: { codCli: codCli },
      include: { plano: true },
    });
  }

  async listarPorPlano(codPlano: number): Promise<Assinatura[]> {
    return await this.prisma.assinatura.findMany({
      where: { codCli: codPlano },
      include: { cliente: true },
    });
  }

  async listarPorTipo(tipo: TipoAssinatura): Promise<Assinatura[]> {
    const limiteData = subDays(new Date(), 30);
    if (tipo === TipoAssinatura.ATIVOS) {
      return await this.prisma.assinatura.findMany({
        where: {
          dataUltimoPagamento: {
            gte: limiteData,
          },
        },
        include: { plano: true, cliente: true },
      });
    } else if (tipo === TipoAssinatura.CANCELADOS) {
      return await this.prisma.assinatura.findMany({
        where: {
          dataUltimoPagamento: {
            lt: limiteData,
          },
        },
        include: { plano: true, cliente: true },
      });
    } else {
      return await this.prisma.assinatura.findMany({
        include: { plano: true, cliente: true },
      });
    }
  }
}
