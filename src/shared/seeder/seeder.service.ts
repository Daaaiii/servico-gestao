import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SeederService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) {}

  async onModuleInit() {
    await this.seed();
  }

  private async seed() {
    const cliente = await this.prisma.cliente.upsert({
      where: { email: 'exemplo@teste.com' },
      update: {},
      create: {
        nome: 'Cliente Exemplo',
        email: 'exemplo@teste.com',
      },
    });

    console.log('Seed executado com sucesso:', cliente);
  }
}
