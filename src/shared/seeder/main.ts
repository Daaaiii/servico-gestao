import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function main() {
  // Criação de 5 planos
  const planos = await prisma.plano.createMany({
    data: [
      { nome: 'Start', descricao: 'Plano inicial', custoMensal: 19.99 },
      { nome: 'Basic', descricao: 'Plano básico', custoMensal: 39.99 },
      { nome: 'Plus', descricao: 'Plano intermediário', custoMensal: 59.99 },
      { nome: 'Premium', descricao: 'Plano avançado', custoMensal: 89.99 },
      { nome: 'Enterprise', descricao: 'Plano empresarial', custoMensal: 129.99 },
    ],
  });

  // Criação de 10 clientes
  const clientes = await Promise.all(
    Array.from({ length: 10 }).map((_, i) =>
      prisma.cliente.create({
        data: {
          nome: `Cliente ${i + 1}`,
          email: `cliente${i + 1}@exemplo.com`,
        },
      })
    )
  );

  // Buscar os planos do banco (com seus IDs autogerados)
  const planosCriados = await prisma.plano.findMany();

  // Criar pelo menos 5 assinaturas
  const assinaturasCriadas = await Promise.all(
    clientes.slice(0, 5).map((cliente, i) =>
      prisma.assinatura.create({
        data: {
          codPlano: planosCriados[i % planosCriados.length].codigo,
          codCli: cliente.codigo,
          inicioFidelidade: new Date('2024-01-01'),
          fimFidelidade: new Date('2024-12-31'),
          dataUltimoPagamento: new Date(),
          custoFinal: planosCriados[i % planosCriados.length].custoMensal,
          descricao: `Assinatura do ${cliente.nome} no plano ${planosCriados[i].nome}`,
        },
      })
    )
  );

  console.log('Seed completo: clientes, planos e assinaturas criados.');
}

main()
  .catch((e) => {
    console.error('Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
