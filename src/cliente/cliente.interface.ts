import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

export interface IClienteRepository {
  cadastrar(cliente: CreateClienteDto): Promise<CreateClienteDto>;
  listar(): Promise<CreateClienteDto[]>;
  buscar(id: number): Promise<CreateClienteDto>;
  atualizar(
    id: number,
    updateClienteDto: UpdateClienteDto,
  ): Promise<CreateClienteDto>;
  excluir(id: number): Promise<void>;
}
