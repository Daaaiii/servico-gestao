export class Plano {
  constructor(
    public readonly codigo: number,
    public readonly nome: string,
    public readonly descricao: string,
    public readonly custoMensal: number,
    public readonly data: Date = new Date(),
  ) {}
}
