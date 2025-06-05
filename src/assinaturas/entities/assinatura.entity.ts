export class Assinatura {
  constructor(
    public readonly codigo: number,
    public readonly codPlano: number,
    public readonly codCli: number,
    public readonly inicioFidelidade: Date,
    public readonly dataUltimoPagamento: Date,
    public readonly custoFinal: number,
    public readonly descricao: string,
  ) {}
}
