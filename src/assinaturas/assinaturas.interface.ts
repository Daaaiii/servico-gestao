import { Assinatura } from '@prisma/client';
import { TipoAssinatura } from 'src/enum/tipo-assinatura.enum';
import { CreateAssinaturaDto } from './dto/create-assinatura.dto';

export interface IAssinaturasRepository {
  criar(assinatura: CreateAssinaturaDto): Promise<Assinatura>;
  listarPorCliente(codCli: number): Promise<Assinatura[]>;
  listarPorPlano(codPlano: number): Promise<Assinatura[]>;
  listarPorTipo(tipo: TipoAssinatura): Promise<Assinatura[]>;
}
