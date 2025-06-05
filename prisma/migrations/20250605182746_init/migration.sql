-- CreateTable
CREATE TABLE `Cliente` (
    `codigo` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Cliente_email_key`(`email`),
    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Assinatura` (
    `codigo` INTEGER NOT NULL AUTO_INCREMENT,
    `codPlano` INTEGER NOT NULL,
    `codCli` INTEGER NOT NULL,
    `inicioFidelidade` DATETIME(3) NOT NULL,
    `fimFidelidade` DATETIME(3) NOT NULL,
    `dataUltimoPagamento` DATETIME(3) NOT NULL,
    `custoFinal` DECIMAL(10, 2) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Plano` (
    `codigo` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `custoMensal` DECIMAL(10, 2) NOT NULL,
    `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Assinatura` ADD CONSTRAINT `Assinatura_codPlano_fkey` FOREIGN KEY (`codPlano`) REFERENCES `Plano`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Assinatura` ADD CONSTRAINT `Assinatura_codCli_fkey` FOREIGN KEY (`codCli`) REFERENCES `Cliente`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;
