-- AlterTable
ALTER TABLE `assinatura` MODIFY `inicioFidelidade` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `dataUltimoPagamento` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `descricao` VARCHAR(191) NOT NULL DEFAULT 'Assinatura padrão';
