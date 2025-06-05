import {
  IsDateString,
  IsDecimal,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAssinaturaDto {
  @ApiProperty({
    example: 1,
    description: 'Código do plano associado à assinatura',
  })
  @IsInt()
  @IsNotEmpty()
  codPlano: number;

  @ApiProperty({
    example: 5,
    description: 'Código do cliente associado à assinatura',
  })
  @IsInt()
  @IsNotEmpty()
  codCli: number;

  @ApiProperty({
    example: '2025-01-01T00:00:00.000Z',
    description: 'Data de início da fidelidade (formato ISO 8601)',
  })
  @IsDateString()
  @IsOptional()
  inicioFidelidade: Date;
  @ApiProperty({
    example: '2025-12-31T00:00:00.000Z',
    description: 'Data de fim da fidelidade (formato ISO 8601)',
  })
  @IsDateString()
  fimFidelidade: Date;

  @ApiProperty({
    example: '2025-06-01T00:00:00.000Z',
    description: 'Data do último pagamento realizado',
  })
  @IsDateString()
  @IsOptional()
  dataUltimoPagamento: Date;

  @ApiProperty({
    example: 199.99,
    description: 'Valor final da assinatura (2 casas decimais)',
  })
  @IsDecimal()
  @IsOptional()
  custoFinal: number;

  @ApiProperty({
    example: 'Assinatura anual com bônus',
    description: 'Descrição da assinatura',
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  descricao: string;
}
