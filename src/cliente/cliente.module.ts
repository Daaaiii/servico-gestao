import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { ClienteRepository } from './cliente.repository';

@Module({
  imports: [PrismaModule],
  controllers: [ClienteController],
  providers: [ClienteService, ClienteRepository],
  exports: [ClienteService],
})
export class ClienteModule {}
