import { Module } from '@nestjs/common';
import { PlanoService } from './plano.service';
import { PlanoController } from './plano.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PlanoRepository } from './plano.repository';

@Module({
  imports: [PrismaModule],
  controllers: [PlanoController],
  providers: [PlanoService, PlanoRepository],
  exports: [PlanoModule],
})
export class PlanoModule {}
