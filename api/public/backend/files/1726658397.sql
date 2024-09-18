-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 18, 2024 at 10:21 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_fgames`
--

-- --------------------------------------------------------

--
-- Table structure for table `game_categories`
--

CREATE TABLE `game_categories` (
  `id` int(11) NOT NULL,
  `code` varchar(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `game_type` int(11) NOT NULL,
  `game_code` varchar(50) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `game_categories`
--

INSERT INTO `game_categories` (`id`, `code`, `name`, `game_type`, `game_code`, `status`, `created_at`, `updated_at`) VALUES
(1, 'AG', 'AG Video', 1, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(2, 'AG', 'AG Video', 3, 'Please refer to Get the game list gameCode field', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(3, 'BBIN', 'BBIN Video', 1, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(4, 'BBIN', 'BBIN Video', 3, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(5, 'BBIN', 'BBIN Video', 4, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(6, 'BBIN', 'BBIN Video', 5, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(7, 'WM', 'Perfect Video', 1, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(8, 'AB', 'Allbet Video', 1, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(9, 'OB', 'OB Live', 1, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(10, 'BG', 'BG Video', 1, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(11, 'DG', 'DG Video', 1, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(12, 'EVO', 'EVO Video', 1, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(13, 'SEXY', 'SEXY Video', 1, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(14, 'CQ9', 'CQ9 Electronics', 3, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(15, 'FC', 'FC Electronics', 3, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(16, 'TTG', 'TTG Electronics', 3, 'Please refer to Get Game List gameCode field', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(17, 'JOKER', 'JOKER Electronics', 3, 'Please refer to Get Game List gameCode field', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(18, 'PG', 'PG Electronics', 3, 'Please refer to Get Game List gameCode field', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(19, 'PP', 'PP Electronics', 3, 'Please refer to Get Game List gameCode field', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(20, 'JDB', 'JDB Electronics', 3, 'Please refer to Get Game List gameCode field', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(21, 'PNG', 'PNG Electronics', 3, 'Please refer to Get Game List gameCode field', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(22, 'RTG', 'RTG Electronics', 3, 'Please refer to Get Game List gameCode field', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(23, 'FTG', 'FTG Electronics', 3, 'Please refer to Get Game List gameCode field', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(24, 'MG', 'MG Electronics', 3, 'Please refer to Get Game List gameCode field', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(25, 'MW', 'MW Electronics', 3, 'Please refer to Get Game List gameCode field', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(26, 'SG', 'SG Electronics', 3, 'Please refer to Get Game List gameCode field', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(27, 'HB', 'HB Electronics', 3, 'Please refer to Get Game List gameCode field', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(28, 'PS', 'PS Electronics', 3, 'Please refer to Get Game List gameCode field', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(29, 'RSG', 'RSG Electronics', 3, 'Please refer to Get Game List gameCode field', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(30, 'TCG', 'Tiancheng Lottery', 4, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(31, 'VR', 'VR Lottery', 4, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(32, 'SBO', 'SBO Sports', 5, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(33, 'CMD', 'CMD Sports', 5, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(34, 'IBC', 'Sabah Sports', 5, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(35, 'AG', 'AG Sports', 5, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(36, 'FB', 'FB Sports', 5, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(37, 'MG', 'MG Sports', 5, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(38, 'OBSB', 'OB Sports', 5, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(39, 'KY', 'Kaiyuan chess and card', 6, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(40, 'BL', 'Bole chess and card', 6, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(41, 'LEG', 'Leyou chess and card', 6, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(42, 'LG', 'Lucky chess', 6, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(43, 'KX', 'Triumph Poker', 6, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(44, 'NW', 'New World Chess', 6, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(45, 'BG', 'BG Chess', 6, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(46, 'DTQP', 'Datang Chess', 6, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(47, 'BBCARD', 'BB chess', 6, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(48, 'I A', 'Xiao Ai Esports', 7, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(49, 'TFG', 'Thunder Fire Esports', 7, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(50, 'BBIN', 'Fishing Hall', 2, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(51, 'BG', 'Fishing Master', 2, '105', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(52, 'BG', 'Fishing in the West', 2, '411', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(53, 'BG', 'Daxian Fishing', 2, '484', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(54, 'BG', 'Galaxy Treasure Hunt', 2, '514', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(55, 'AG', 'AG Fishing Hall', 2, '0', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(56, 'KY', 'Red Envelope Fishing', 2, '510', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(57, 'KY', 'Li Kui Fishing', 2, '520', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(58, 'CQ9', 'Royal Gold Fishery', 2, 'AB3', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(59, 'CQ9', 'Happy fishing', 2, 'AT05', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(60, 'CQ9', 'One shot fishing', 2, 'AT01', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(61, 'JDB', 'Dragon King Fishing', 2, '7_7001', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(62, 'JDB', 'Dragon King Fishing 2', 2, '7_7002', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(63, 'JDB', 'Caishen Fishing', 2, '7_7003', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(64, 'JDB', 'Wulong Fishing', 2, '7_7004', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(65, 'JDB', 'Fishing all the way', 2, '7_7005', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(66, 'JDB', 'Dragon Hunter', 2, '7_7006', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(67, 'JDB', 'Fishing Disco', 2, '7_7007', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51'),
(68, 'LEG', 'Fishing Battle', 2, '510', 1, '2024-09-17 06:06:51', '2024-09-17 06:06:51');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `game_categories`
--
ALTER TABLE `game_categories`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `game_categories`
--
ALTER TABLE `game_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
