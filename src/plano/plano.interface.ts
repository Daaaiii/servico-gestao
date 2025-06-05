import { Plano } from '@prisma/client';

export interface IPlanoRepository {
  listarTodos(): Promise<Plano[]>;
  buscarPorId(id: number): Promise<Plano>;
  atualizarPlano(idPlano: number, custoMensal): Promise<Plano>;
}
