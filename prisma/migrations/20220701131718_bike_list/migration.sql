-- CreateTable
CREATE TABLE `bicicletas` (
    `id` VARCHAR(191) NOT NULL,
    `nome` TEXT NOT NULL,
    `preco` TEXT NOT NULL,
    `descricao` TEXT NOT NULL,
    `foto` TEXT NOT NULL,
    `fotoHome` TEXT NOT NULL,
    `alt` TEXT NOT NULL,
    `slug` TEXT NOT NULL,
    `material` TEXT NOT NULL,
    `material_descricao` TEXT NOT NULL,
    `motor` TEXT NOT NULL,
    `motor_descricao` TEXT NOT NULL,
    `velocidade` TEXT NOT NULL,
    `velocidade_descricao` TEXT NOT NULL,
    `outros` TEXT NOT NULL,
    `outros_descricao` TEXT NOT NULL,
    `altura` TEXT NOT NULL,
    `largura` TEXT NOT NULL,
    `marchas` TEXT NOT NULL,
    `peso` TEXT NOT NULL,
    `profundidade` TEXT NOT NULL,
    `roda` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
