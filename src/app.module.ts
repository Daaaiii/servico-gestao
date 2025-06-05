import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ClienteModule } from './cliente/cliente.module';
import { SeederService } from './shared/seeder/seeder.service';
import { SeederModule } from './shared/seeder/seeder.module';
import { PlanoModule } from './plano/plano.module';
import { AssinaturasModule } from './assinaturas/assinaturas.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    PrismaModule,
    ClienteModule,
    SeederModule,
    PlanoModule,
    AssinaturasModule,
  ],
  controllers: [],
  providers: [SeederService],
})
export class AppModule {}
