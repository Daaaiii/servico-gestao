import { IsDate, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePlanoDto {
  @ApiProperty({ example: 1, description: 'Código identificador do plano' })
  @IsNumber()
  codigo: number;

  @ApiProperty({ example: 'Plano Premium', description: 'Nome do plano' })
  @IsString()
  nome: string;

  @ApiProperty({
    example: 'Acesso ilimitado por 12 meses',
    description: 'Descrição do plano',
  })
  @IsString()
  descricao: string;

  @ApiProperty({ example: 99.99, description: 'Valor mensal do plano' })
  @IsNumber({ maxDecimalPlaces: 2 })
  custoMensal: number;

  @ApiProperty({
    example: '2025-06-01T00:00:00.000Z',
    description: 'Data de criação do plano',
  })
  @IsDate()
  data: Date;
}
