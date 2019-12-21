-- phpMyAdmin SQL Dump
-- version 5.0.0-alpha1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  sam. 21 déc. 2019 à 17:07
-- Version du serveur :  5.7.27-log
-- Version de PHP :  7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `game`
--

-- --------------------------------------------------------

--
-- Structure de la table `pets`
--

CREATE TABLE `pets` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `petCategoryId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `pol` int(11) NOT NULL DEFAULT '20',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `pets`
--

INSERT INTO `pets` (`id`, `name`, `petCategoryId`, `userId`, `pol`, `createdAt`, `updatedAt`) VALUES
(3, 'Picka', 1, 11, 49, '2019-12-21 14:51:37', '2019-12-21 14:51:37'),
(4, 't', 1, 11, 37, '2019-12-21 14:34:52', '2019-12-21 14:34:52'),
(5, 't', 1, 11, 56, '2019-12-21 14:51:13', '2019-12-21 14:51:13'),
(6, 't', 1, 11, 41, '2019-12-21 14:42:11', '2019-12-21 14:42:11'),
(7, 't', 1, 11, 38, '2019-12-21 14:50:59', '2019-12-21 14:50:59'),
(8, 't', 1, 13, 20, '2019-12-18 15:09:50', '2019-12-14 13:27:40');

-- --------------------------------------------------------

--
-- Structure de la table `pets_categories`
--

CREATE TABLE `pets_categories` (
  `id` int(11) NOT NULL,
  `label` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `pets_categories`
--

INSERT INTO `pets_categories` (`id`, `label`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Lion', 'Description de Lion', '2019-12-14 11:57:13', '2019-12-14 11:57:13'),
(2, 'Poisson', 'Description de poisson', '2019-12-14 11:57:13', '2019-12-14 11:57:13');

-- --------------------------------------------------------

--
-- Structure de la table `places`
--

CREATE TABLE `places` (
  `id` int(11) NOT NULL,
  `label` varchar(255) NOT NULL,
  `description` text,
  `sectorId` int(11) NOT NULL,
  `placeCategoryId` int(11) DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `places`
--

INSERT INTO `places` (`id`, `label`, `description`, `sectorId`, `placeCategoryId`, `updatedAt`, `createdAt`) VALUES
(1, 'Medicare', 'Centre médicale pour restaurer vos animaux', 1, 1, '2019-12-14 15:13:22', '2019-12-14 15:13:22'),
(2, 'Le bon grimpeur', 'Ici vous pouvez acheter toute sorte de chose', 1, 2, '2019-12-14 15:22:57', '2019-12-14 15:22:57'),
(3, 'Arène de la montagne', 'Ici vous pouvez affronter d\'autres joueurs', 1, 3, '2019-12-14 15:23:37', '2019-12-14 15:23:37');

-- --------------------------------------------------------

--
-- Structure de la table `places_categories`
--

CREATE TABLE `places_categories` (
  `id` int(11) NOT NULL,
  `label` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `places_categories`
--

INSERT INTO `places_categories` (`id`, `label`, `createdAt`, `updatedAt`) VALUES
(1, 'Centre de soins', '2019-12-14 15:25:41', '2019-12-14 15:25:41'),
(2, 'Boutique', '2019-12-14 15:25:41', '2019-12-14 15:25:41'),
(3, 'Arène', '2019-12-14 15:25:51', '2019-12-14 15:25:51'),
(4, 'Port', '2019-12-14 15:25:51', '2019-12-14 15:25:51');

-- --------------------------------------------------------

--
-- Structure de la table `sectors`
--

CREATE TABLE `sectors` (
  `id` int(11) NOT NULL,
  `label` varchar(255) NOT NULL,
  `imageUrl` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `sectors`
--

INSERT INTO `sectors` (`id`, `label`, `imageUrl`, `createdAt`, `updatedAt`) VALUES
(1, 'La montagne sacrée', 'bg-sector-1.jpg', '2019-12-14 15:12:34', '2019-12-14 15:12:34');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `label` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `level` int(11) NOT NULL DEFAULT '1',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `label`, `email`, `password`, `level`, `createdAt`, `updatedAt`) VALUES
(1, 'Test', 'test@test.com', '$2b$10$KwKqizXX1ePhiPta0xKL0ejW1eb7WjuiTwBA8x30U6PT8JAAgxMLe', 1, '2019-12-21 16:53:33', '2019-11-24 00:21:40'),
(5, 'Test 1', 'test1@test.com', '$2b$10$Hnf6I9Gt06PmjVOOgApEtO4i83KoBHxroCNkajtHQ0Hd5hTybsVAO', 1, '2019-12-21 16:53:28', '2019-11-23 23:16:01'),
(7, 'Test 2', 'test2@test.com', '$2b$10$nWQCsee01K.EC4q0ehav3ubrT8l6apnS1CcYuacLVLg40dc95R0IC', 1, '2019-12-21 16:52:17', '2019-12-10 21:54:49'),
(9, 'Test 3', 'test3@test.com', '$2b$10$6kO.kJExJ/ytTV4d8QzPbOpDnCrI5Q89pvdyf79SZGZqaVwwTf2ru', 1, '2019-12-21 16:52:26', '2019-12-10 21:59:56'),
(10, 'Test4', 'test4@test.com', '$2b$10$nvo3KLO5MqMe1sF1EZ/8yuj3GxcCAgFb0PiO6uTl4kJYePeK88vKq', 1, '2019-12-21 16:52:35', '2019-12-10 22:24:14'),
(11, 'ldandoy', 'ldandoy@gmail.com', '$2b$10$29tje7mlto.xOe3O4m.vD.4vtB14bT7HybRmO2OgN7/Y.fAMkXbtS', 1, '2019-12-21 16:52:42', '2019-12-12 16:36:53'),
(12, 'Test 5', 'test5@test.com', '$2b$10$26pgSWwSPYJ9x8WsduRoS.4EanYB6mzT6cw//6IcFdjBwGAPjAJEG', 1, '2019-12-21 16:52:50', '2019-12-12 16:51:11'),
(13, 'A', 'a@a.com', '$2b$10$0JTCR5infiY3IaWyR5kdxODuiBJ6MY5jynJ3Kar9WLz0EvsyZ5nqC', 1, '2019-12-21 16:52:56', '2019-12-14 10:30:34');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `pets`
--
ALTER TABLE `pets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`petCategoryId`) USING BTREE,
  ADD KEY `pets_ibfk_2` (`userId`);

--
-- Index pour la table `pets_categories`
--
ALTER TABLE `pets_categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `places`
--
ALTER TABLE `places`
  ADD PRIMARY KEY (`id`),
  ADD KEY `places_ibfk_1` (`sectorId`),
  ADD KEY `placeCategoryId` (`placeCategoryId`);

--
-- Index pour la table `places_categories`
--
ALTER TABLE `places_categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `sectors`
--
ALTER TABLE `sectors`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `label` (`label`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `pets`
--
ALTER TABLE `pets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `pets_categories`
--
ALTER TABLE `pets_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `places`
--
ALTER TABLE `places`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `places_categories`
--
ALTER TABLE `places_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `sectors`
--
ALTER TABLE `sectors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `pets`
--
ALTER TABLE `pets`
  ADD CONSTRAINT `pets_ibfk_1` FOREIGN KEY (`petCategoryId`) REFERENCES `pets_categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pets_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `places`
--
ALTER TABLE `places`
  ADD CONSTRAINT `places_ibfk_1` FOREIGN KEY (`sectorId`) REFERENCES `sectors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `places_ibfk_2` FOREIGN KEY (`placeCategoryId`) REFERENCES `places_categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

