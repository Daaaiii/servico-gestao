import { IsEmail, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClienteDto {
  @ApiProperty({ example: 1, description: 'Código único do cliente' })
  @IsNumber()
  codigo: number;

  @ApiProperty({
    example: 'João da Silva',
    description: 'Nome completo do cliente',
  })
  @IsString()
  nome: string;

  @ApiProperty({
    example: 'joao.silva@email.com',
    description: 'E-mail válido do cliente',
  })
  @IsEmail()
  email: string;
}
