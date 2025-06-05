import { Injectable } from '@nestjs/common';
import { AssinaturasRepository } from './assinaturas.repository';
import { TipoAssinatura } from './../enum/tipo-assinatura.enum';

@Injectable()
export class AssinaturasService {
  constructor(private readonly assinaturaRepository: AssinaturasRepository) {}

  criar(codCli: number, codPlano: number) {
    return this.assinaturaRepository.criar(codCli, codPlano);
  }

  listarPorCliente(codCli: number) {
    return this.assinaturaRepository.listarPorCliente(codCli);
  }

  listarPorPlano(codPlano: number) {
    return this.assinaturaRepository.listarPorPlano(codPlano);
  }
  listarPorTipo(tipo: TipoAssinatura) {
    return this.assinaturaRepository.listarPorTipo(tipo);
  }
}
