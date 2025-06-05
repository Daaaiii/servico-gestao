import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Assinatura } from '@prisma/client';
import { IAssinaturasRepository } from './assinaturas.interface';
import { TipoAssinatura } from 'src/enum/tipo-assinatura.enum';
import { subDays } from 'date-fns';

@Injectable()
export class AssinaturasRepository implements IAssinaturasRepository {
  constructor(private readonly prisma: PrismaService) {}
  async criar(codCli: number, codPlano: number): Promise<Assinatura> {
    return await this.prisma.assinatura.create({
      data: {
        codCli: codCli,
        codPlano: codPlano,
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
