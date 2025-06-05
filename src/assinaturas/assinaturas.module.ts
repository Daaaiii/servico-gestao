import { Module } from '@nestjs/common';
import { AssinaturasService } from './assinaturas.service';
import { AssinaturasController } from './assinaturas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AssinaturasRepository } from './assinaturas.repository';

@Module({
  imports: [PrismaModule],
  controllers: [AssinaturasController],
  providers: [AssinaturasService, AssinaturasRepository],
  exports: [AssinaturasService],
})
export class AssinaturasModule {}
