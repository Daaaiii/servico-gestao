import { Injectable } from '@nestjs/common';
import { PlanoRepository } from './plano.repository';
import { Plano } from '@prisma/client';

@Injectable()
export class PlanoService {
  constructor(private readonly planoRepository: PlanoRepository) {}

  listarTodos(): Promise<Plano[]> {
    return this.planoRepository.listarTodos();
  }

  buscarPorId(id: number): Promise<Plano | null> {
    if (id <= 0) {
      throw new Error('ID inválido. Deve ser um número positivo.');
    }
    return this.planoRepository.buscarPorId(id);
  }

  atualizar(id: number, custoMensal: number): Promise<Plano> {
    return this.planoRepository.atualizarPlano(id, custoMensal);
  }
}
