import { Assinatura } from '@prisma/client';
import { TipoAssinatura } from 'enum/tipo-assinatura.enum';

export interface IAssinaturasRepository {
  criarAssinatura(codCli: number, codPlano: number): Promise<Assinatura>;
  listarPorCliente(codCli: number): Promise<Assinatura[]>;
  listarPorPlano(codPlano: number): Promise<Assinatura[]>;
  listarPorTipo(tipo: TipoAssinatura): Promise<Assinatura[]>;
}
