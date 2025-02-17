-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 17, 2025 at 11:11 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_isumax`
--

-- --------------------------------------------------------

--
-- Table structure for table `bank_info`
--

CREATE TABLE `bank_info` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bank_info`
--

INSERT INTO `bank_info` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Habib Bank Limited (HBL)', 1, '2024-10-29 02:20:34', '2024-10-29 02:20:34'),
(2, 'United Bank Limited (UBL)', 1, '2024-10-29 02:20:34', '2024-10-29 12:20:56'),
(5, 'Muslim Comercial Bank', 1, '2024-10-31 11:46:22', '2024-10-31 11:46:22'),
(6, 'Qatar National Bank', 1, '2024-10-31 11:46:53', '2024-10-31 11:46:53');

-- --------------------------------------------------------

--
-- Table structure for table `blogcategorys`
--

CREATE TABLE `blogcategorys` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `status` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blogcategorys`
--

INSERT INTO `blogcategorys` (`id`, `name`, `slug`, `description`, `status`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'Fashion', 'fashion', 'Fashion', 1, 1, '2024-05-18 06:27:24', '2024-09-17 02:44:35'),
(2, 'Travel', 'travel', 'Travel', 1, 1, '2024-05-18 06:28:33', '2024-09-17 02:44:40'),
(3, 'DIY', 'diy', 'DIY', 1, 1, '2024-05-18 06:46:10', '2024-09-17 02:44:53'),
(4, 'Fitness', 'fitness', 'Fitness', 1, 1, '2024-05-18 06:48:14', '2024-09-17 02:48:07'),
(5, 'Personal blogs', 'personal-blogs', 'Personal Blogs', 1, 1, '2024-05-18 06:48:14', '2024-09-17 02:48:05'),
(6, 'Food Blogs', 'food blogs', 'Food blogs', 1, 1, '2024-05-18 06:48:14', '2024-09-17 02:48:00'),
(7, 'Finance', 'finance', 'Finance', 1, 1, '2024-05-18 06:48:14', '2024-09-17 02:47:55'),
(8, 'News', 'news', 'News', 1, 1, '2024-05-18 06:48:14', '2024-09-17 02:47:52'),
(9, 'Sports', 'sports', 'Sports', 1, 1, '2024-05-18 06:48:14', '2024-09-17 02:44:57'),
(10, 'Case studies', 'case-studies', 'case studies', 1, 1, '2024-05-18 06:48:14', '2024-09-17 02:49:13'),
(11, 'Multimedia blogs', 'multimedia-blogs', 'Multimedia blogs', 1, 1, '2024-05-18 06:48:14', '2024-09-17 02:49:21'),
(12, 'Parenting', 'parenting', 'Parenting', 1, 1, '2024-05-18 06:48:14', '2024-09-17 02:44:57'),
(13, 'Affiliate blog', 'affiliate-blog\r\n', 'Affiliate blog\r\n', 1, 1, '2024-05-18 06:48:14', '2024-09-17 02:44:57'),
(14, 'Business', 'business', 'Business', 1, 1, '2024-05-18 06:48:14', '2024-09-17 02:44:57'),
(15, 'Niche blogs', 'niche-blogs', 'Niche blogs', 1, 1, '2024-05-18 06:48:14', '2024-09-17 02:44:57'),
(16, 'Pets', 'pets', 'Pets', 1, 1, '2024-05-18 06:48:14', '2024-09-17 02:44:57'),
(17, 'Politics', 'politics', 'Politics', 1, 1, '2024-05-18 06:48:14', '2024-09-17 02:44:57'),
(18, 'Narrative', 'narrative', 'Narrative', 1, 1, '2024-05-18 06:48:14', '2024-09-17 02:44:57'),
(19, 'Guest blogging', 'guest-blogging', 'Guest blogging\r\n', 1, 1, '2024-05-18 06:48:14', '2024-09-17 02:44:57'),
(20, 'Science/Technology', 'sciencetechnology', '<p>blogs about science tech&nbsp;</p>', 1, 1, '2024-09-17 06:33:44', '2024-09-17 06:33:44'),
(21, 'Cyber Security', 'cyber-security', '<p>Blogs about Cyber security</p>', 1, 1, '2024-09-17 06:34:21', '2024-09-17 06:34:21');

-- --------------------------------------------------------

--
-- Table structure for table `blog_posts`
--

CREATE TABLE `blog_posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `category` int(11) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `image` mediumblob DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog_posts`
--

INSERT INTO `blog_posts` (`id`, `title`, `slug`, `category`, `content`, `image`, `user_id`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Test', 'test', 2, '<p>dfssdfsfsf</p>', 0x2f6261636b656e642f66696c65732f313732363032323332362e706e67, 2, 1, '2024-09-10 20:38:46', '2024-09-10 20:38:46'),
(2, 'web Development', 'web-development', 2, '<p>abc</p>', NULL, 26, 1, '2024-09-16 18:07:54', '2024-09-16 18:07:54');

-- --------------------------------------------------------

--
-- Table structure for table `branch`
--

CREATE TABLE `branch` (
  `id` int(11) NOT NULL,
  `bank_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT 1,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `branch`
--

INSERT INTO `branch` (`id`, `bank_id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 'Branch -1', 1, '2024-10-29 02:23:58', '2024-10-29 02:23:58'),
(2, 1, 'Branch -2', 1, '2024-10-29 02:23:58', '2024-10-29 02:23:58'),
(3, 2, 'Branch -1', 1, '2024-10-29 02:23:58', '2024-10-29 02:23:58'),
(4, 2, 'Branch -2', 1, '2024-10-29 02:23:58', '2024-10-29 02:23:58'),
(5, 2, 'Branch -3', 1, '2024-10-29 02:23:58', '2024-10-29 02:23:58'),
(6, 2, 'Branch -4', 1, '2024-10-29 02:23:58', '2024-10-29 02:23:58'),
(8, 5, 'Gouri Town branch', 1, '2024-11-04 13:24:14', '2024-11-04 13:24:14');

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `image` text NOT NULL,
  `status` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `name`, `slug`, `image`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Ford', 'ford', '/backend/brandimage/1709112624.webp', 1, '2024-02-28 13:02:21', '2024-02-28 09:30:24'),
(2, 'Chevrolet', 'chevrolet', '/backend/brandimage/1709112652.webp', 1, '2024-02-28 14:12:23', '2024-02-28 09:30:52'),
(3, 'Hundai', 'hundai', '/backend/brandimage/1709112667.webp', 1, '2024-02-28 15:24:37', '2024-02-28 09:31:07'),
(4, 'Audi', 'audi', '/backend/brandimage/1709112691.webp', 1, '2024-02-28 15:31:31', '2024-02-28 15:31:31'),
(5, 'Addidas', 'addidas', '/backend/brandimage/1709127557.png', 1, '2024-02-28 19:27:00', '2024-02-28 13:39:17'),
(6, 'Nestle', 'nestle', '/backend/brandimage/1709127896.png', 1, '2024-02-28 19:44:56', '2024-02-28 19:44:56');

-- --------------------------------------------------------

--
-- Table structure for table `buyer_review`
--

CREATE TABLE `buyer_review` (
  `id` int(11) NOT NULL,
  `seller_id` int(11) DEFAULT NULL,
  `buyer_id` int(11) DEFAULT NULL,
  `orderId` int(11) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `review` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `buyer_review`
--

INSERT INTO `buyer_review` (`id`, `seller_id`, `buyer_id`, `orderId`, `rating`, `review`, `created_at`, `updated_at`) VALUES
(1, 2, 18, 1816070, 4, '6544566666', '2024-10-25 20:56:29', '2024-10-25 20:56:29'),
(2, 11, 7, 736042, 2, 'Very Good', '2024-10-26 03:05:35', '2024-10-26 03:05:35'),
(3, 11, 9, 930775, 5, 'thanks', '2024-10-26 08:36:14', '2024-10-26 08:36:14'),
(4, 15, 4, 413187, 5, 'a very well', '2024-10-28 10:40:22', '2024-10-28 10:40:22'),
(5, 11, 3, 356338, 5, 'It\'s been a pleasure collaborating with mdbijonahmed. Looking forward to working with him again. Highly recommended!', '2025-02-14 15:53:04', '2025-02-14 15:53:04');

-- --------------------------------------------------------

--
-- Table structure for table `buy_token`
--

CREATE TABLE `buy_token` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `usdt_amount` double(10,2) DEFAULT NULL,
  `current_price` varchar(255) DEFAULT NULL COMMENT 'cp',
  `get_token` double(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `buy_token`
--

INSERT INTO `buy_token` (`id`, `user_id`, `usdt_amount`, `current_price`, `get_token`, `created_at`, `updated_at`) VALUES
(1, 9, 10.00, '0.0111113333', 899.98, '2024-07-30 21:29:49', '2024-07-30 21:29:49'),
(2, 9, 50.00, '0.001188888889', 42056.07, '2024-07-30 21:34:37', '2024-07-30 21:34:37'),
(3, 9, 21.00, '0.0011244444', 18675.89, '2024-07-31 11:46:22', '2024-07-31 11:46:22'),
(4, 9, 50.00, '0.0011291111', 44282.62, '2024-07-31 11:46:53', '2024-07-31 11:46:53');

-- --------------------------------------------------------

--
-- Table structure for table `cancel_orders`
--

CREATE TABLE `cancel_orders` (
  `id` int(11) NOT NULL,
  `orderId` varchar(255) DEFAULT NULL,
  `sellerId` int(11) DEFAULT NULL,
  `buyerId` int(11) DEFAULT NULL,
  `selectedPrice` decimal(10,2) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cancel_orders`
--

INSERT INTO `cancel_orders` (`id`, `orderId`, `sellerId`, `buyerId`, `selectedPrice`, `created_at`, `updated_at`) VALUES
(1, '961497-24', 11, 9, 150.00, '2024-10-28 11:33:37', '2024-10-28 11:33:37'),
(2, '422266-24', 11, 4, 150.00, '2024-10-28 11:39:52', '2024-10-28 11:39:52'),
(3, '488559-24', 11, 4, 150.00, '2024-10-28 11:50:40', '2024-10-28 11:50:40'),
(4, '953286-24', 11, 9, 150.00, '2024-10-28 13:29:34', '2024-10-28 13:29:34');

-- --------------------------------------------------------

--
-- Table structure for table `categorys`
--

CREATE TABLE `categorys` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_description` text DEFAULT NULL,
  `meta_keyword` varchar(255) DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0,
  `commission` int(11) DEFAULT NULL,
  `fixcommission` varchar(255) DEFAULT NULL,
  `product_sell_qty` int(11) DEFAULT NULL,
  `getAmount` decimal(10,5) DEFAULT NULL COMMENT 'Admin get commission amount ',
  `sort_order` int(11) DEFAULT 0,
  `file` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `speacial_status` int(11) DEFAULT NULL,
  `mobile_view_class` varchar(255) DEFAULT NULL,
  `keyword` varchar(255) DEFAULT NULL,
  `percentage_amt` int(11) DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL,
  `updated_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categorys`
--

INSERT INTO `categorys` (`id`, `name`, `slug`, `description`, `meta_title`, `meta_description`, `meta_keyword`, `parent_id`, `commission`, `fixcommission`, `product_sell_qty`, `getAmount`, `sort_order`, `file`, `status`, `speacial_status`, `mobile_view_class`, `keyword`, `percentage_amt`, `created_at`, `updated_at`) VALUES
(1, 'Graphics & Design', 'graphics-design', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 'Digital Marketing', 'digital-marketing', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 'Writing & Translation', 'writing-translation', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 'Video & Animation', 'video-animation', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(5, 'Music & Audio', 'music-audio', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(6, 'Programming & Tech', 'programming-tech', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(7, 'Data', 'data', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(8, 'Business', 'business', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(9, 'Personal Growth & Hobbies', 'personal-growth-hobbies', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(10, 'Photography', 'photography', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(11, 'Finance', 'finance', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(12, 'Logo Design', 'logo-design', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(13, 'Business Cards & Stationery', 'business-cards', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(14, 'Illustration', 'illustration', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(15, 'Cartoons & Caricatures', 'cartoons-caricatures', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(16, 'Flyers & Brochures', 'flyers-brochures', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(17, 'Book & eBook Covers', 'book-ebook-covers', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(18, 'Packaging & Labels', 'packaging-labels', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(19, 'Social Media Marketing', 'social-media-marketing', NULL, NULL, NULL, NULL, 2, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(20, 'SEO', 'seo', NULL, NULL, NULL, NULL, 2, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(21, 'Content Marketing', 'content-marketing', NULL, NULL, NULL, NULL, 2, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(22, 'Email Marketing', 'email-marketing', NULL, NULL, NULL, NULL, 2, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(23, 'Influencer Marketing', 'influencer-marketing', NULL, NULL, NULL, NULL, 2, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(24, 'Article & Blog Writing', 'article-blog-writing', NULL, NULL, NULL, NULL, 3, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(25, 'Translation Services', 'translation-services', NULL, NULL, NULL, NULL, 3, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(26, 'Proofreading & Editing', 'proofreading-editing', NULL, NULL, NULL, NULL, 3, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(27, 'Technical Writing', 'technical-writing', NULL, NULL, NULL, NULL, 3, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(28, 'Creative Writing', 'creative-writing', NULL, NULL, NULL, NULL, 3, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(29, 'Resume & Cover Letters', 'resume-cover-letters', NULL, NULL, NULL, NULL, 3, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(30, 'Video Editing', 'video-editing', NULL, NULL, NULL, NULL, 4, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(31, 'Whiteboard Animation', 'whiteboard-animation', NULL, NULL, NULL, NULL, 4, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(32, 'Explainer Videos', 'explainer-videos', NULL, NULL, NULL, NULL, 4, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(33, '3D Animation', '3d-animation', NULL, NULL, NULL, NULL, 4, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(34, 'Spokesperson Videos', 'spokesperson-videos', NULL, NULL, NULL, NULL, 4, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(35, 'Short Video Ads', 'short-video-ads', NULL, NULL, NULL, NULL, 4, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(36, 'Web Development', 'web-development', NULL, NULL, NULL, NULL, 6, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(37, 'Mobile App Development', 'mobile-app-development', NULL, NULL, NULL, NULL, 6, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(38, 'Custom Software Development', 'custom-software-development', NULL, NULL, NULL, NULL, 6, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(39, 'Chatbot Development', 'chatbot-development', NULL, NULL, NULL, NULL, 6, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(40, 'Blockchain & Cryptocurrency', 'blockchain-cryptocurrency', NULL, NULL, NULL, NULL, 6, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(41, 'Game Development', 'game-development', NULL, NULL, NULL, NULL, 6, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(42, 'E-Commerce Development', 'ecommerce-development', NULL, NULL, NULL, NULL, 6, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(43, 'WordPress Development', 'wordpress-development', NULL, NULL, NULL, NULL, 6, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(44, 'Cybersecurity & Data Protection', 'cybersecurity-data-protection', NULL, NULL, NULL, NULL, 6, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(45, 'AI & Machine Learning', 'ai-machine-learning', NULL, NULL, NULL, NULL, 6, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(46, 'Data Science & Analytics', 'data-science-analytics', NULL, NULL, NULL, NULL, 6, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(47, 'Tech Support & IT Services', 'tech-support-it-services', NULL, NULL, NULL, NULL, 6, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(48, 'DevOps & Cloud Services', 'devops-cloud-services', NULL, NULL, NULL, NULL, 6, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(49, 'Voice Over', 'voice-over', NULL, NULL, NULL, NULL, 5, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(50, 'Producers & Composers', 'producers-composers', NULL, NULL, NULL, NULL, 5, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(51, 'Singer-Songwriters', 'singer-songwriters', NULL, NULL, NULL, NULL, 5, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(52, 'Session Musicians', 'session-musicians', NULL, NULL, NULL, NULL, 5, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(53, 'Audio Engineers', 'audio-engineers', NULL, NULL, NULL, NULL, 5, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(54, 'Podcast Editing', 'podcast-editing', NULL, NULL, NULL, NULL, 5, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(55, 'Mixing & Mastering', 'mixing-mastering', NULL, NULL, NULL, NULL, 5, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(56, 'Jingles & Intros', 'jingles-intros', NULL, NULL, NULL, NULL, 5, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(57, 'Sound Effects', 'sound-effects', NULL, NULL, NULL, NULL, 5, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(58, 'Beats & Custom Music', 'beats-custom-music', NULL, NULL, NULL, NULL, 5, NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `categorys_backup`
--

CREATE TABLE `categorys_backup` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_description` text DEFAULT NULL,
  `meta_keyword` varchar(255) DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0,
  `commission` int(11) DEFAULT NULL,
  `fixcommission` varchar(255) DEFAULT NULL,
  `product_sell_qty` int(11) DEFAULT NULL,
  `getAmount` decimal(10,5) DEFAULT NULL COMMENT 'Admin get commission amount ',
  `sort_order` int(11) DEFAULT 0,
  `file` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `speacial_status` int(11) DEFAULT NULL,
  `mobile_view_class` varchar(255) DEFAULT NULL,
  `keyword` varchar(255) DEFAULT NULL,
  `percentage_amt` int(11) DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL,
  `updated_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categorys_backup`
--

INSERT INTO `categorys_backup` (`id`, `name`, `slug`, `description`, `meta_title`, `meta_description`, `meta_keyword`, `parent_id`, `commission`, `fixcommission`, `product_sell_qty`, `getAmount`, `sort_order`, `file`, `status`, `speacial_status`, `mobile_view_class`, `keyword`, `percentage_amt`, `created_at`, `updated_at`) VALUES
(1, 'Programming & Tech', 'programming-tech', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-19 09:23:22', '2024-10-19 09:23:22'),
(2, 'Graphics & Design', 'graphics-design', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-19 09:23:33', '2024-10-19 09:23:33'),
(3, 'Digital Marketing', 'digital-marketing', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-19 09:23:43', '2024-10-19 09:23:43'),
(4, 'Video & Animation', 'video-animation', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-19 09:23:55', '2024-10-19 09:23:55'),
(5, 'Writing & Translation', 'writing-translation', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-19 09:24:05', '2024-10-19 09:24:05'),
(6, 'Audio stuff', 'audio-stuff', '', 'null', 'null', 'null', 0, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, 'null', 0, '2024-10-19 09:24:17', '2024-10-29 12:18:46'),
(7, 'Business Services', 'business-services', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-19 09:24:30', '2024-10-19 09:24:30'),
(8, 'Consulting', 'consulting', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-19 09:24:39', '2024-10-19 09:24:39'),
(9, 'AI Services', 'ai-services', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-19 09:24:49', '2024-10-19 09:24:49'),
(10, 'Personal Growth', 'personal-growth', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-19 09:24:58', '2024-10-19 09:24:58'),
(11, 'products /services', 'products-services', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-19 09:56:59', '2024-10-19 09:56:59'),
(12, 'Web & App Design', 'web-app-design', '', 'null', 'null', 'null', 2, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, 'null', 0, '2024-10-19 09:57:26', '2024-10-29 09:59:17'),
(13, 'courses', 'courses', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-19 09:57:58', '2024-10-19 09:57:58'),
(14, 'App Design', 'app-design', '', 'null', 'null', 'null', 12, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, 'null', 0, '2024-10-19 10:00:40', '2024-10-29 10:00:30'),
(15, 'UX Design', 'ux-design', '', 'null', 'null', 'null', 12, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, 'null', 0, '2024-10-19 10:01:29', '2024-10-29 10:01:01'),
(16, 'Website Development', 'website-development', '', 'null', 'null', 'null', 1, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, 'null', 0, '2024-10-19 10:01:57', '2024-10-29 10:15:52'),
(17, 'Website Maintenance', 'website-maintenance', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-19 10:02:21', '2024-10-19 10:02:21'),
(18, 'AI Development', 'ai-development', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-19 10:02:36', '2024-10-19 10:02:36'),
(19, 'Chatbot Development', 'chatbot-development', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-19 10:02:50', '2024-10-19 10:02:50'),
(20, 'Game Development', 'game-development', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-19 10:03:11', '2024-10-19 10:03:11'),
(21, 'Mobile App Development', 'mobile-app-development', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-19 10:03:25', '2024-10-19 10:03:25'),
(22, 'Cloud & Cybersecurity', 'cloud-cybersecurity', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-19 10:03:39', '2024-10-19 10:03:39'),
(23, 'Data Science & ML', 'data-science-ml', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-19 10:03:54', '2024-10-19 10:03:54'),
(24, 'Software Development', 'software-development', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-19 10:04:06', '2024-10-19 10:04:06'),
(25, 'Website Design', 'website-design', '', 'null', 'null', 'null', 12, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, 'null', 0, '2024-10-19 10:04:42', '2024-10-29 10:01:25'),
(26, 'Landing Pages', 'landing-pages', '', 'null', 'null', 'null', 12, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, 'null', 0, '2024-10-19 10:05:11', '2024-10-19 13:16:28'),
(28, 'Logo & Brand Identity', 'logo-brand-identity', NULL, NULL, NULL, NULL, 2, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-19 10:05:30', '2024-10-19 10:05:30'),
(29, 'Icon Design', 'icon-design', '', 'null', 'null', 'null', 12, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, 'null', 0, '2024-10-19 10:05:41', '2024-10-29 10:01:47'),
(30, 'Art & Illustration', 'art-illustration', NULL, NULL, NULL, NULL, 2, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-19 10:05:44', '2024-10-19 10:05:44'),
(31, 'Product & Gaming', 'product-gaming', NULL, NULL, NULL, NULL, 2, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:03:59', '2024-10-29 10:03:59'),
(32, 'Print Design', 'print-design', NULL, NULL, NULL, NULL, 2, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:04:15', '2024-10-29 10:04:15'),
(33, 'Visual Design', 'visual-design', NULL, NULL, NULL, NULL, 2, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:04:33', '2024-10-29 10:04:33'),
(34, 'Marketing Design', 'marketing-design', NULL, NULL, NULL, NULL, 2, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:04:48', '2024-10-29 10:04:48'),
(35, 'Packaging & Covers', 'packaging-covers', NULL, NULL, NULL, NULL, 2, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:05:06', '2024-10-29 10:05:06'),
(36, 'Architecture & Building Design', 'architecture-building-design', NULL, NULL, NULL, NULL, 2, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:05:22', '2024-10-29 10:05:22'),
(37, 'Fashion & Merchandise', 'fashion-merchandise', NULL, NULL, NULL, NULL, 2, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:05:42', '2024-10-29 10:05:42'),
(38, '3D Design', '3d-design', NULL, NULL, NULL, NULL, 2, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:05:56', '2024-10-29 10:05:56'),
(39, 'Website Platforms', 'website-platforms', '', 'null', 'null', 'null', 1, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, 'null', 0, '2024-10-29 10:14:41', '2024-10-29 10:16:25'),
(40, 'Business Websites', 'business-websites', NULL, NULL, NULL, NULL, 16, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:16:48', '2024-10-29 10:16:48'),
(41, 'E-Commerce Development', 'e-commerce-development', NULL, NULL, NULL, NULL, 16, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:17:05', '2024-10-29 10:17:05'),
(50, 'Landing Page', 'landing-page', NULL, NULL, NULL, NULL, 16, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:33:40', '2024-10-29 10:33:40'),
(51, 'Dropshipping Websites', 'dropshipping-websites', NULL, NULL, NULL, NULL, 16, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:33:57', '2024-10-29 10:33:57'),
(52, 'Build a Complete Website', 'build-a-complete-website', NULL, NULL, NULL, NULL, 16, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:34:30', '2024-10-29 10:34:30'),
(53, 'WordPress', 'wordpress', NULL, NULL, NULL, NULL, 39, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:35:13', '2024-10-29 10:35:13'),
(54, 'Shopify', 'shopify', NULL, NULL, NULL, NULL, 39, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:35:48', '2024-10-29 10:35:48'),
(55, 'Wix', 'wix', NULL, NULL, NULL, NULL, 39, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:36:04', '2024-10-29 10:36:04'),
(56, 'Custom Websites', 'custom-websites', NULL, NULL, NULL, NULL, 39, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:36:19', '2024-10-29 10:36:19'),
(57, 'GoDaddy', 'godaddy', NULL, NULL, NULL, NULL, 39, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:36:36', '2024-10-29 10:36:36'),
(58, 'Website Customization', 'website-customization', NULL, NULL, NULL, NULL, 17, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:37:16', '2024-10-29 10:37:16'),
(59, 'Backup & Migration', 'backup-migration', NULL, NULL, NULL, NULL, 17, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:37:29', '2024-10-29 10:37:29'),
(60, 'Speed Optimization', 'speed-optimization', NULL, NULL, NULL, NULL, 17, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:37:42', '2024-10-29 10:37:42'),
(61, 'AI Chatbot', 'ai-chatbot', NULL, NULL, NULL, NULL, 18, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:38:08', '2024-10-29 10:38:08'),
(62, 'AI Applications', 'ai-applications', NULL, NULL, NULL, NULL, 18, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:38:32', '2024-10-29 10:38:32'),
(63, 'AI Integrations', 'ai-integrations', NULL, NULL, NULL, NULL, 18, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:39:42', '2024-10-29 10:39:42'),
(64, 'AI Agents', 'ai-agents', NULL, NULL, NULL, NULL, 18, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:39:57', '2024-10-29 10:39:57'),
(65, 'AI Fine-Tuning', 'ai-fine-tuning', NULL, NULL, NULL, NULL, 18, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:40:10', '2024-10-29 10:40:10'),
(66, 'OpenAI GPT Storenew', 'openai-gpt-storenew', NULL, NULL, NULL, NULL, 18, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:40:26', '2024-10-29 10:40:26'),
(67, 'Discord Chat Service', 'discord-chat-service', NULL, NULL, NULL, NULL, 19, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:40:46', '2024-10-29 10:40:46'),
(68, 'Telegram Chat Platform', 'telegram-chat-platform', NULL, NULL, NULL, NULL, 19, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:41:01', '2024-10-29 10:41:01'),
(69, 'TikTok Short-Video App', 'tiktok-short-video-app', NULL, NULL, NULL, NULL, 19, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:41:18', '2024-10-29 10:41:18'),
(70, 'Facebook Chat Service', 'facebook-chat-service', NULL, NULL, NULL, NULL, 19, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:41:34', '2024-10-29 10:41:34'),
(71, 'Player Experience and Feedback', 'player-experience-and-feedback', NULL, NULL, NULL, NULL, 20, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:41:55', '2024-10-29 10:41:55'),
(72, 'Games for PC', 'games-for-pc', NULL, NULL, NULL, NULL, 20, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:42:08', '2024-10-29 10:42:08'),
(73, 'Smartphone Games', 'smartphone-games', NULL, NULL, NULL, NULL, 20, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:42:21', '2024-10-29 10:42:21'),
(74, 'Cross-Device Development', 'cross-device-development', NULL, NULL, NULL, NULL, 21, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:44:01', '2024-10-29 10:44:01'),
(75, 'Android Mobile App Creation', 'android-mobile-app-creation', NULL, NULL, NULL, NULL, 21, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:44:14', '2024-10-29 10:44:14'),
(77, 'iOS Mobile App Creation', 'ios-mobile-app-creation', NULL, NULL, NULL, NULL, 21, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:44:29', '2024-10-29 10:44:29'),
(78, 'Web-Based App Development', 'web-based-app-development', NULL, NULL, NULL, NULL, 21, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:44:41', '2024-10-29 10:44:41'),
(79, 'Mobile App Management', 'mobile-app-management', NULL, NULL, NULL, NULL, 21, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:44:53', '2024-10-29 10:44:53'),
(80, 'VR and AR Solutions', 'vr-and-ar-solutions', NULL, NULL, NULL, NULL, 21, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:45:04', '2024-10-29 10:45:04'),
(81, 'Cloud Services', 'cloud-services', NULL, NULL, NULL, NULL, 22, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:45:27', '2024-10-29 10:45:27'),
(82, 'DevOps Solutions', 'devops-solutions', NULL, NULL, NULL, NULL, 22, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:45:39', '2024-10-29 10:45:39'),
(83, 'Cybersecurity Services', 'cybersecurity-services', NULL, NULL, NULL, NULL, 22, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:45:51', '2024-10-29 10:45:51'),
(84, 'ML Solutions', 'ml-solutions', NULL, NULL, NULL, NULL, 23, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:46:06', '2024-10-29 10:46:06'),
(85, 'Computer-Based Vision', 'computer-based-vision', NULL, NULL, NULL, NULL, 23, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:46:26', '2024-10-29 10:46:26'),
(91, 'Computer-Based Visions', 'computer-based-visions', NULL, NULL, NULL, NULL, 23, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:46:57', '2024-10-29 10:46:57'),
(92, 'Deep Learning Models', 'deep-learning-models', NULL, NULL, NULL, NULL, 23, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:47:14', '2024-10-29 10:47:14'),
(93, 'Web App Solutions', 'web-app-solutions', NULL, NULL, NULL, NULL, 24, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:47:27', '2024-10-29 10:47:27'),
(94, 'PC Applications', 'pc-applications', NULL, NULL, NULL, NULL, 24, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:47:44', '2024-10-29 10:47:44'),
(95, 'API Solutions and Integration', 'api-solutions-and-integration', NULL, NULL, NULL, NULL, 24, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:47:55', '2024-10-29 10:47:55'),
(96, 'Database Systems', 'database-systems', NULL, NULL, NULL, NULL, 24, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:48:07', '2024-10-29 10:48:07'),
(97, 'Script Development', 'script-development', NULL, NULL, NULL, NULL, 24, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:48:20', '2024-10-29 10:48:20'),
(98, 'Browser Modules', 'browser-modules', NULL, NULL, NULL, NULL, 24, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:48:30', '2024-10-29 10:48:30'),
(99, 'Quality Control and Review', 'quality-control-and-review', NULL, NULL, NULL, NULL, 24, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, NULL, '2024-10-29 10:48:49', '2024-10-29 10:48:49');

-- --------------------------------------------------------

--
-- Table structure for table `certificates`
--

CREATE TABLE `certificates` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `year` varchar(4) NOT NULL,
  `course_name` varchar(255) NOT NULL,
  `institute_name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `certificates`
--

INSERT INTO `certificates` (`id`, `user_id`, `year`, `course_name`, `institute_name`, `description`, `created_at`, `updated_at`) VALUES
(1, 2, '2022', 'Certified Web Developer', 'ABC Institute', 'Certified in modern web development technologies like HTML, CSS, JavaScript, and React.', '2024-09-30 16:38:20', '2024-09-30 16:38:20'),
(2, 2, '2021', 'Data Science Professional', 'XYZ University', 'Data science certification covering Python, machine learning, and data analysis.', '2024-09-30 16:38:20', '2024-09-30 16:38:20'),
(3, 2, '2023', 'Blockchain Expert', 'Blockchain Academy', 'Expert-level certification in blockchain development and smart contracts.', '2024-09-30 16:38:20', '2024-09-30 16:38:20'),
(4, 2, '2020', 'AI & Machine Learning Specialist', 'Tech Institute', 'Specialized in artificial intelligence and machine learning algorithms.', '2024-09-30 16:38:20', '2024-09-30 16:38:20'),
(5, 2, '2019', 'Cyber Security Analyst', 'SecureTech Institute', 'Certification focused on cybersecurity fundamentals, network security, and threat analysis.', '2024-09-30 16:38:20', '2024-09-30 16:38:20'),
(6, 37, '2020', 'AWS Certified Solutions Architect – Associate', 'Amazon Web Services (AWS)', 'Earned certification in designing and deploying scalable, highly available, and fault-tolerant systems on AWS. Demonstrated expertise in cloud architecture, security best practices, and cost-optimized infrastructure solutions. Utilized AWS services like EC2, S3, RDS, and Lambda in real-world cloud applications.', '2024-10-01 02:56:15', '2024-10-01 02:56:15'),
(8, 11, '2018', 'Developing International Software', 'edx', 'In today’s global economy, there are clear advantages to developing applications that can meet the needs of users across a wide variety of languages, countries, and cultures. ...', '2025-02-11 00:40:26', '2025-02-11 00:40:26'),
(10, 11, '2019', 'UML Class Diagrams for Software Engineering', 'edx', 'Unified Modeling Language (UML) is a general-purpose modeling language. The main aim of UML is to define a standard way to visualize the way a system has been designed.', '2025-02-11 00:43:34', '2025-02-11 00:43:34'),
(11, 11, '2020', 'Javascript Algorithms and Data Structure', 'edx', 'JavaScript is a scripting language you can use to make web pages interactive. It is one of the core technologies of the web, along with HTML and CSS, and is supported by all modern browsers.', '2025-02-11 00:45:30', '2025-02-11 00:45:30'),
(12, 11, '2021', 'PHP', 'Sololearn', 'PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.', '2025-02-11 00:47:09', '2025-02-11 00:47:09');

-- --------------------------------------------------------

--
-- Table structure for table `chat_messages`
--

CREATE TABLE `chat_messages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `buyer_id` bigint(20) UNSIGNED NOT NULL,
  `seller_id` bigint(20) UNSIGNED NOT NULL,
  `sender_id` bigint(20) UNSIGNED NOT NULL,
  `message` text NOT NULL,
  `is_read` tinyint(1) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `companyprofilesettings`
--

CREATE TABLE `companyprofilesettings` (
  `id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `logo` text DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `postal_code` varchar(20) DEFAULT NULL,
  `phone_number` text NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` text NOT NULL,
  `about` text DEFAULT NULL,
  `founded_year` varchar(255) DEFAULT NULL,
  `revenue` decimal(15,2) DEFAULT NULL,
  `employee_count` int(11) DEFAULT NULL,
  `industry` varchar(255) DEFAULT NULL,
  `timezone` varchar(50) DEFAULT NULL,
  `currency` varchar(3) DEFAULT NULL,
  `language` varchar(20) DEFAULT NULL,
  `setup_charge` decimal(15,2) DEFAULT NULL,
  `transaction_fee` decimal(15,2) DEFAULT NULL,
  `other_charges` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `companyprofilesettings`
--

INSERT INTO `companyprofilesettings` (`id`, `company_id`, `company_name`, `logo`, `address`, `city`, `state`, `country`, `postal_code`, `phone_number`, `email`, `phone`, `about`, `founded_year`, `revenue`, `employee_count`, `industry`, `timezone`, `currency`, `language`, `setup_charge`, `transaction_fee`, `other_charges`, `created_at`, `updated_at`) VALUES
(1, 0, 'Ekroybd', '/backend/upload/1711747306.png', 'islamabad pakistan', '[value-6]', '[value-7]', '[value-8]', '[value-9]', '0', 'admin@ekroybd.com', '017010000000', 'about us here', '0000', 0.00, 0, 'Ecommerce', '[value-17]', '[va', '[value-19]', 0.00, 10.00, '00.00', '2024-03-29 05:13:07', '2024-04-12 04:13:33');

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE `country` (
  `id` int(11) NOT NULL,
  `countrycode` char(3) NOT NULL,
  `countryname` varchar(200) NOT NULL,
  `code` char(2) DEFAULT NULL,
  `status` int(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`id`, `countrycode`, `countryname`, `code`, `status`) VALUES
(1, 'ABW', 'Aruba', 'AW', 1),
(2, 'AFG', 'Afghanistan', 'AF', 1),
(3, 'AGO', 'Angola', 'AO', 1),
(4, 'AIA', 'Anguilla', 'AI', 1),
(5, 'ALA', 'Åland', 'AX', 1),
(6, 'ALB', 'Albania', 'AL', 1),
(7, 'AND', 'Andorra', 'AD', 1),
(8, 'ARE', 'United Arab Emirates', 'AE', 1),
(9, 'ARG', 'Argentina', 'AR', 1),
(10, 'ARM', 'Armenia', 'AM', 1),
(11, 'ASM', 'American Samoa', 'AS', 1),
(12, 'ATA', 'Antarctica', 'AQ', 1),
(13, 'ATF', 'French Southern Territories', 'TF', 1),
(14, 'ATG', 'Antigua and Barbuda', 'AG', 1),
(15, 'AUS', 'Australia', 'AU', 1),
(16, 'AUT', 'Austria', 'AT', 1),
(17, 'AZE', 'Azerbaijan', 'AZ', 1),
(18, 'BDI', 'Burundi', 'BI', 1),
(19, 'BEL', 'Belgium', 'BE', 1),
(20, 'BEN', 'Benin', 'BJ', 1),
(21, 'BES', 'Bonaire', 'BQ', 1),
(22, 'BFA', 'Burkina Faso', 'BF', 1),
(23, 'BGD', 'Bangladesh', 'BD', 1),
(24, 'BGR', 'Bulgaria', 'BG', 1),
(25, 'BHR', 'Bahrain', 'BH', 1),
(26, 'BHS', 'Bahamas', 'BS', 1),
(27, 'BIH', 'Bosnia and Herzegovina', 'BA', 1),
(28, 'BLM', 'Saint Barthélemy', 'BL', 1),
(29, 'BLR', 'Belarus', 'BY', 1),
(30, 'BLZ', 'Belize', 'BZ', 1),
(31, 'BMU', 'Bermuda', 'BM', 1),
(32, 'BOL', 'Bolivia', 'BO', 1),
(33, 'BRA', 'Brazil', 'BR', 1),
(34, 'BRB', 'Barbados', 'BB', 1),
(35, 'BRN', 'Brunei', 'BN', 1),
(36, 'BTN', 'Bhutan', 'BT', 1),
(37, 'BVT', 'Bouvet Island', 'BV', 1),
(38, 'BWA', 'Botswana', 'BW', 1),
(39, 'CAF', 'Central African Republic', 'CF', 1),
(40, 'CAN', 'Canada', 'CA', 1),
(41, 'CCK', 'Cocos [Keeling] Islands', 'CC', 1),
(42, 'CHE', 'Switzerland', 'CH', 1),
(43, 'CHL', 'Chile', 'CL', 1),
(44, 'CHN', 'China', 'CN', 1),
(45, 'CIV', 'Ivory Coast', 'CI', 1),
(46, 'CMR', 'Cameroon', 'CM', 1),
(47, 'COD', 'Democratic Republic of the Congo', 'CD', 1),
(48, 'COG', 'Republic of the Congo', 'CG', 1),
(49, 'COK', 'Cook Islands', 'CK', 1),
(50, 'COL', 'Colombia', 'CO', 1),
(51, 'COM', 'Comoros', 'KM', 1),
(52, 'CPV', 'Cape Verde', 'CV', 1),
(53, 'CRI', 'Costa Rica', 'CR', 1),
(54, 'CUB', 'Cuba', 'CU', 1),
(55, 'CUW', 'Curacao', 'CW', 1),
(56, 'CXR', 'Christmas Island', 'CX', 1),
(57, 'CYM', 'Cayman Islands', 'KY', 1),
(58, 'CYP', 'Cyprus', 'CY', 1),
(59, 'CZE', 'Czech Republic', 'CZ', 1),
(60, 'DEU', 'Germany', 'DE', 1),
(61, 'DJI', 'Djibouti', 'DJ', 1),
(62, 'DMA', 'Dominica', 'DM', 1),
(63, 'DNK', 'Denmark', 'DK', 1),
(64, 'DOM', 'Dominican Republic', 'DO', 1),
(65, 'DZA', 'Algeria', 'DZ', 1),
(66, 'ECU', 'Ecuador', 'EC', 1),
(67, 'EGY', 'Egypt', 'EG', 1),
(68, 'ERI', 'Eritrea', 'ER', 1),
(69, 'ESH', 'Western Sahara', 'EH', 1),
(70, 'ESP', 'Spain', 'ES', 1),
(71, 'EST', 'Estonia', 'EE', 1),
(72, 'ETH', 'Ethiopia', 'ET', 1),
(73, 'FIN', 'Finland', 'FI', 1),
(74, 'FJI', 'Fiji', 'FJ', 1),
(75, 'FLK', 'Falkland Islands', 'FK', 1),
(76, 'FRA', 'France', 'FR', 1),
(77, 'FRO', 'Faroe Islands', 'FO', 1),
(78, 'FSM', 'Micronesia', 'FM', 1),
(79, 'GAB', 'Gabon', 'GA', 1),
(80, 'GBR', 'United Kingdom', 'GB', 1),
(81, 'GEO', 'Georgia', 'GE', 1),
(82, 'GGY', 'Guernsey', 'GG', 1),
(83, 'GHA', 'Ghana', 'GH', 1),
(84, 'GIB', 'Gibraltar', 'GI', 1),
(85, 'GIN', 'Guinea', 'GN', 1),
(86, 'GLP', 'Guadeloupe', 'GP', 1),
(87, 'GMB', 'Gambia', 'GM', 1),
(88, 'GNB', 'Guinea-Bissau', 'GW', 1),
(89, 'GNQ', 'Equatorial Guinea', 'GQ', 1),
(90, 'GRC', 'Greece', 'GR', 1),
(91, 'GRD', 'Grenada', 'GD', 1),
(92, 'GRL', 'Greenland', 'GL', 1),
(93, 'GTM', 'Guatemala', 'GT', 1),
(94, 'GUF', 'French Guiana', 'GF', 1),
(95, 'GUM', 'Guam', 'GU', 1),
(96, 'GUY', 'Guyana', 'GY', 1),
(97, 'HKG', 'Hong Kong', 'HK', 1),
(98, 'HMD', 'Heard Island and McDonald Islands', 'HM', 1),
(99, 'HND', 'Honduras', 'HN', 1),
(100, 'HRV', 'Croatia', 'HR', 1),
(101, 'HTI', 'Haiti', 'HT', 1),
(102, 'HUN', 'Hungary', 'HU', 1),
(103, 'IDN', 'Indonesia', 'ID', 1),
(104, 'IMN', 'Isle of Man', 'IM', 1),
(105, 'IND', 'India', 'IN', 1),
(106, 'IOT', 'British Indian Ocean Territory', 'IO', 1),
(107, 'IRL', 'Ireland', 'IE', 1),
(108, 'IRN', 'Iran', 'IR', 1),
(109, 'IRQ', 'Iraq', 'IQ', 1),
(110, 'ISL', 'Iceland', 'IS', 1),
(111, 'ISR', 'Israel', 'IL', 1),
(112, 'ITA', 'Italy', 'IT', 1),
(113, 'JAM', 'Jamaica', 'JM', 1),
(114, 'JEY', 'Jersey', 'JE', 1),
(115, 'JOR', 'Jordan', 'JO', 1),
(116, 'JPN', 'Japan', 'JP', 1),
(117, 'KAZ', 'Kazakhstan', 'KZ', 1),
(118, 'KEN', 'Kenya', 'KE', 1),
(119, 'KGZ', 'Kyrgyzstan', 'KG', 1),
(120, 'KHM', 'Cambodia', 'KH', 1),
(121, 'KIR', 'Kiribati', 'KI', 1),
(122, 'KNA', 'Saint Kitts and Nevis', 'KN', 1),
(123, 'KOR', 'South Korea', 'KR', 1),
(124, 'KWT', 'Kuwait', 'KW', 1),
(125, 'LAO', 'Laos', 'LA', 1),
(126, 'LBN', 'Lebanon', 'LB', 1),
(127, 'LBR', 'Liberia', 'LR', 1),
(128, 'LBY', 'Libya', 'LY', 1),
(129, 'LCA', 'Saint Lucia', 'LC', 1),
(130, 'LIE', 'Liechtenstein', 'LI', 1),
(131, 'LKA', 'Sri Lanka', 'LK', 1),
(132, 'LSO', 'Lesotho', 'LS', 1),
(133, 'LTU', 'Lithuania', 'LT', 1),
(134, 'LUX', 'Luxembourg', 'LU', 1),
(135, 'LVA', 'Latvia', 'LV', 1),
(136, 'MAC', 'Macao', 'MO', 1),
(137, 'MAF', 'Saint Martin', 'MF', 1),
(138, 'MAR', 'Morocco', 'MA', 1),
(139, 'MCO', 'Monaco', 'MC', 1),
(140, 'MDA', 'Moldova', 'MD', 1),
(141, 'MDG', 'Madagascar', 'MG', 1),
(142, 'MDV', 'Maldives', 'MV', 1),
(143, 'MEX', 'Mexico', 'MX', 1),
(144, 'MHL', 'Marshall Islands', 'MH', 1),
(145, 'MKD', 'Macedonia', 'MK', 1),
(146, 'MLI', 'Mali', 'ML', 1),
(147, 'MLT', 'Malta', 'MT', 1),
(148, 'MMR', 'Myanmar [Burma]', 'MM', 1),
(149, 'MNE', 'Montenegro', 'ME', 1),
(150, 'MNG', 'Mongolia', 'MN', 1),
(151, 'MNP', 'Northern Mariana Islands', 'MP', 1),
(152, 'MOZ', 'Mozambique', 'MZ', 1),
(153, 'MRT', 'Mauritania', 'MR', 1),
(154, 'MSR', 'Montserrat', 'MS', 1),
(155, 'MTQ', 'Martinique', 'MQ', 1),
(156, 'MUS', 'Mauritius', 'MU', 1),
(157, 'MWI', 'Malawi', 'MW', 1),
(158, 'MYS', 'Malaysia', 'MY', 1),
(159, 'MYT', 'Mayotte', 'YT', 1),
(160, 'NAM', 'Namibia', 'NA', 1),
(161, 'NCL', 'New Caledonia', 'NC', 1),
(162, 'NER', 'Niger', 'NE', 1),
(163, 'NFK', 'Norfolk Island', 'NF', 1),
(164, 'NGA', 'Nigeria', 'NG', 1),
(165, 'NIC', 'Nicaragua', 'NI', 1),
(166, 'NIU', 'Niue', 'NU', 1),
(167, 'NLD', 'Netherlands', 'NL', 1),
(168, 'NOR', 'Norway', 'NO', 1),
(169, 'NPL', 'Nepal', 'NP', 1),
(170, 'NRU', 'Nauru', 'NR', 1),
(171, 'NZL', 'New Zealand', 'NZ', 1),
(172, 'OMN', 'Oman', 'OM', 1),
(173, 'PAK', 'Pakistan', 'PK', 1),
(174, 'PAN', 'Panama', 'PA', 1),
(175, 'PCN', 'Pitcairn Islands', 'PN', 1),
(176, 'PER', 'Peru', 'PE', 1),
(177, 'PHL', 'Philippines', 'PH', 1),
(178, 'PLW', 'Palau', 'PW', 1),
(179, 'PNG', 'Papua New Guinea', 'PG', 1),
(180, 'POL', 'Poland', 'PL', 1),
(181, 'PRI', 'Puerto Rico', 'PR', 1),
(182, 'PRK', 'North Korea', 'KP', 1),
(183, 'PRT', 'Portugal', 'PT', 1),
(184, 'PRY', 'Paraguay', 'PY', 1),
(185, 'PSE', 'Palestine', 'PS', 1),
(186, 'PYF', 'French Polynesia', 'PF', 1),
(187, 'QAT', 'Qatar', 'QA', 1),
(188, 'REU', 'Réunion', 'RE', 1),
(189, 'ROU', 'Romania', 'RO', 1),
(190, 'RUS', 'Russia', 'RU', 1),
(191, 'RWA', 'Rwanda', 'RW', 1),
(192, 'SAU', 'Saudi Arabia', 'SA', 1),
(193, 'SDN', 'Sudan', 'SD', 1),
(194, 'SEN', 'Senegal', 'SN', 1),
(195, 'SGP', 'Singapore', 'SG', 1),
(196, 'SGS', 'South Georgia and the South Sandwich Islands', 'GS', 1),
(197, 'SHN', 'Saint Helena', 'SH', 1),
(198, 'SJM', 'Svalbard and Jan Mayen', 'SJ', 1),
(199, 'SLB', 'Solomon Islands', 'SB', 1),
(200, 'SLE', 'Sierra Leone', 'SL', 1),
(201, 'SLV', 'El Salvador', 'SV', 1),
(202, 'SMR', 'San Marino', 'SM', 1),
(203, 'SOM', 'Somalia', 'SO', 1),
(204, 'SPM', 'Saint Pierre and Miquelon', 'PM', 1),
(205, 'SRB', 'Serbia', 'RS', 1),
(206, 'SSD', 'South Sudan', 'SS', 1),
(207, 'STP', 'São Tomé and Príncipe', 'ST', 1),
(208, 'SUR', 'Suriname', 'SR', 1),
(209, 'SVK', 'Slovakia', 'SK', 1),
(210, 'SVN', 'Slovenia', 'SI', 1),
(211, 'SWE', 'Sweden', 'SE', 1),
(212, 'SWZ', 'Swaziland', 'SZ', 1),
(213, 'SXM', 'Sint Maarten', 'SX', 1),
(214, 'SYC', 'Seychelles', 'SC', 1),
(215, 'SYR', 'Syria', 'SY', 1),
(216, 'TCA', 'Turks and Caicos Islands', 'TC', 1),
(217, 'TCD', 'Chad', 'TD', 1),
(218, 'TGO', 'Togo', 'TG', 1),
(219, 'THA', 'Thailand', 'TH', 1),
(220, 'TJK', 'Tajikistan', 'TJ', 1),
(221, 'TKL', 'Tokelau', 'TK', 1),
(222, 'TKM', 'Turkmenistan', 'TM', 1),
(223, 'TLS', 'East Timor', 'TL', 1),
(224, 'TON', 'Tonga', 'TO', 1),
(225, 'TTO', 'Trinidad and Tobago', 'TT', 1),
(226, 'TUN', 'Tunisia', 'TN', 1),
(227, 'TUR', 'Turkey', 'TR', 1),
(228, 'TUV', 'Tuvalu', 'TV', 1),
(229, 'TWN', 'Taiwan', 'TW', 1),
(230, 'TZA', 'Tanzania', 'TZ', 1),
(231, 'UGA', 'Uganda', 'UG', 1),
(232, 'UKR', 'Ukraine', 'UA', 1),
(233, 'UMI', 'U.S. Minor Outlying Islands', 'UM', 1),
(234, 'URY', 'Uruguay', 'UY', 1),
(235, 'USA', 'United States', 'US', 1),
(236, 'UZB', 'Uzbekistan', 'UZ', 1),
(237, 'VAT', 'Vatican City', 'VA', 1),
(238, 'VCT', 'Saint Vincent and the Grenadines', 'VC', 1),
(239, 'VEN', 'Venezuela', 'VE', 1),
(240, 'VGB', 'British Virgin Islands', 'VG', 1),
(241, 'VIR', 'U.S. Virgin Islands', 'VI', 1),
(242, 'VNM', 'Vietnam', 'VN', 1),
(243, 'VUT', 'Vanuatu', 'VU', 1),
(244, 'WLF', 'Wallis and Futuna', 'WF', 1),
(245, 'WSM', 'Samoa', 'WS', 1),
(246, 'XKX', 'Kosovo', 'XK', 1),
(247, 'YEM', 'Yemen', 'YE', 1),
(248, 'ZAF', 'South Africa', 'ZA', 1),
(249, 'ZMB', 'Zambia', 'ZM', 1),
(250, 'ZWE', 'Zimbabwe', 'ZW', 1);

-- --------------------------------------------------------

--
-- Table structure for table `coupons`
--

CREATE TABLE `coupons` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `promocode` varchar(255) NOT NULL,
  `code_type` varchar(255) NOT NULL,
  `min_shopping` int(11) NOT NULL,
  `d_percent` int(11) DEFAULT NULL,
  `d_fvalue` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL,
  `Created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `Updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `coupons`
--

INSERT INTO `coupons` (`id`, `name`, `slug`, `promocode`, `code_type`, `min_shopping`, `d_percent`, `d_fvalue`, `status`, `Created_at`, `Updated_at`) VALUES
(18, 'SPRINGSALE', 'spring-sale', 'SPRINGSALE10', 'percentage', 50, 10, NULL, 1, '2024-03-06 08:41:34', '2024-03-06 08:41:34'),
(19, 'SUMMERDEAL', 'summer-deal', 'SUMMER15', 'percentage', 75, 15, NULL, 1, '2024-03-06 08:41:34', '2024-03-06 08:41:34'),
(20, 'FALLSAVINGS', 'fall-savings', 'FALL20OFF', 'percentage', 100, 20, NULL, 1, '2024-03-06 08:41:34', '2024-03-06 08:41:34'),
(21, 'WINTERSALE', 'winter-sale', 'WINTER25', 'percentage', 120, 25, NULL, 1, '2024-03-06 08:41:34', '2024-03-06 08:41:34'),
(22, 'NEWCUSTOMER', 'new-customer', 'NEW20OFF', 'percentage', 30, 20, NULL, 1, '2024-03-06 08:41:34', '2024-03-06 08:41:34'),
(23, 'FREESHIP', 'free-ship', 'SHIPFREE', 'fixed', 50, NULL, 5, 1, '2024-03-06 08:41:34', '2024-03-06 08:41:34'),
(24, 'BIGSAVINGS', 'big-savings', 'BIG10OFF', 'percentage', 200, 10, NULL, 1, '2024-03-06 08:41:34', '2024-03-06 08:41:34'),
(25, 'BUNDLEDEAL', 'bundle-deal', 'BUNDLE5', 'fixed', 150, NULL, 10, 1, '2024-03-06 08:41:34', '2024-03-06 08:41:34'),
(26, 'WEEKENDSPECIAL', 'weekend-special', 'WEEKEND20', 'percentage', 50, 20, NULL, 1, '2024-03-06 08:41:34', '2024-03-06 08:41:34'),
(27, 'VIPSAVINGS', 'vip-savings', 'VIP15OFF', 'percentage', 100, 15, NULL, 1, '2024-03-06 08:41:34', '2024-03-06 08:41:34'),
(28, 'SPRINGSALE_11', 'spring-sale-11', 'SPRINGSALE11', 'percentage', 60, 11, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(29, 'SUMMERDEAL_12', 'summer-deal-12', 'SUMMER16', 'percentage', 85, 16, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(30, 'FALLSAVINGS_13', 'fall-savings-13', 'FALL21OFF', 'percentage', 110, 21, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(31, 'WINTERSALE_14', 'winter-sale-14', 'WINTER26', 'percentage', 130, 26, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(32, 'NEWCUSTOMER_15', 'new-customer-15', 'NEW21OFF', 'percentage', 35, 21, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(33, 'FREESHIP_16', 'free-ship-16', 'SHIPFREE', 'fixed', 60, NULL, 6, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(34, 'BIGSAVINGS_17', 'big-savings-17', 'BIG11OFF', 'percentage', 210, 11, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(35, 'BUNDLEDEAL_18', 'bundle-deal-18', 'BUNDLE6', 'fixed', 160, NULL, 11, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(36, 'WEEKENDSPECIAL_19', 'weekend-special-19', 'WEEKEND21', 'percentage', 60, 21, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(37, 'VIPSAVINGS_20', 'vip-savings-20', 'VIP16OFF', 'percentage', 110, 16, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(38, 'SPRINGSALE_21', 'spring-sale-21', 'SPRINGSALE12', 'percentage', 70, 12, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(39, 'SUMMERDEAL_22', 'summer-deal-22', 'SUMMER17', 'percentage', 95, 17, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(40, 'FALLSAVINGS_23', 'fall-savings-23', 'FALL22OFF', 'percentage', 120, 22, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(41, 'WINTERSALE_24', 'winter-sale-24', 'WINTER27', 'percentage', 140, 27, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(42, 'NEWCUSTOMER_25', 'new-customer-25', 'NEW22OFF', 'percentage', 40, 22, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(43, 'FREESHIP_26', 'free-ship-26', 'SHIPFREE', 'fixed', 70, NULL, 7, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(44, 'BIGSAVINGS_27', 'big-savings-27', 'BIG12OFF', 'percentage', 220, 12, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(45, 'BUNDLEDEAL_28', 'bundle-deal-28', 'BUNDLE7', 'fixed', 170, NULL, 12, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(46, 'WEEKENDSPECIAL_29', 'weekend-special-29', 'WEEKEND22', 'percentage', 70, 22, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(47, 'VIPSAVINGS_30', 'vip-savings-30', 'VIP17OFF', 'percentage', 120, 17, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(48, 'SPRINGSALE_31', 'spring-sale-31', 'SPRINGSALE13', 'percentage', 80, 13, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(49, 'SUMMERDEAL_32', 'summer-deal-32', 'SUMMER18', 'percentage', 105, 18, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(50, 'FALLSAVINGS_33', 'fall-savings-33', 'FALL23OFF', 'percentage', 130, 23, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(51, 'WINTERSALE_34', 'winter-sale-34', 'WINTER28', 'percentage', 150, 28, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(52, 'NEWCUSTOMER_35', 'new-customer-35', 'NEW23OFF', 'percentage', 45, 23, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(53, 'FREESHIP_36', 'free-ship-36', 'SHIPFREE', 'fixed', 80, NULL, 8, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(54, 'BIGSAVINGS_37', 'big-savings-37', 'BIG13OFF', 'percentage', 230, 13, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(55, 'BUNDLEDEAL_38', 'bundle-deal-38', 'BUNDLE8', 'fixed', 180, NULL, 13, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(56, 'WEEKENDSPECIAL_39', 'weekend-special-39', 'WEEKEND23', 'percentage', 80, 23, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(57, 'VIPSAVINGS_40', 'vip-savings-40', 'VIP18OFF', 'percentage', 130, 18, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(58, 'SPRINGSALE_41', 'spring-sale-41', 'SPRINGSALE14', 'percentage', 90, 14, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(59, 'SUMMERDEAL_42', 'summer-deal-42', 'SUMMER19', 'percentage', 115, 19, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(60, 'FALLSAVINGS_43', 'fall-savings-43', 'FALL24OFF', 'percentage', 140, 24, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(61, 'WINTERSALE_44', 'winter-sale-44', 'WINTER29', 'percentage', 160, 29, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(62, 'NEWCUSTOMER_45', 'new-customer-45', 'NEW24OFF', 'percentage', 50, 24, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(63, 'FREESHIP_46', 'free-ship-46', 'SHIPFREE', 'fixed', 90, NULL, 9, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(64, 'BIGSAVINGS_47', 'big-savings-47', 'BIG14OFF', 'percentage', 240, 14, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(65, 'BUNDLEDEAL_48', 'bundle-deal-48', 'BUNDLE9', 'fixed', 190, NULL, 14, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(66, 'WEEKENDSPECIAL_49', 'weekend-special-49', 'WEEKEND24', 'percentage', 90, 24, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(67, 'VIPSAVINGS_50', 'vip-savings-50', 'VIP19OFF', 'percentage', 140, 19, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(68, 'SPRINGSALE_51', 'spring-sale-51', 'SPRINGSALE15', 'percentage', 100, 15, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(69, 'SUMMERDEAL_52', 'summer-deal-52', 'SUMMER20', 'percentage', 125, 20, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(70, 'FALLSAVINGS_53', 'fall-savings-53', 'FALL25OFF', 'percentage', 150, 25, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(71, 'WINTERSALE_54', 'winter-sale-54', 'WINTER30', 'percentage', 170, 30, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(72, 'NEWCUSTOMER_55', 'new-customer-55', 'NEW25OFF', 'percentage', 55, 25, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(73, 'FREESHIP_56', 'free-ship-56', 'SHIPFREE', 'fixed', 100, NULL, 10, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(74, 'BIGSAVINGS_57', 'big-savings-57', 'BIG15OFF', 'percentage', 250, 15, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(75, 'BUNDLEDEAL_58', 'bundle-deal-58', 'BUNDLE10', 'fixed', 200, NULL, 15, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(76, 'WEEKENDSPECIAL_59', 'weekend-special-59', 'WEEKEND25', 'percentage', 100, 25, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(77, 'VIPSAVINGS_60', 'vip-savings-60', 'VIP20OFF', 'percentage', 150, 20, NULL, 1, '2024-03-06 09:31:10', '2024-03-06 09:31:10'),
(78, 'EID 2024', '', 'EID2024', 'percentage', 50, 5, NULL, 1, '2024-03-12 21:58:04', '2024-03-12 21:58:04');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `name` varchar(225) DEFAULT NULL,
  `addres` varchar(255) DEFAULT NULL,
  `email` varchar(225) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `entry_by` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `deposit`
--

CREATE TABLE `deposit` (
  `id` int(11) NOT NULL,
  `depositID` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `product` varchar(255) DEFAULT NULL,
  `currency` varchar(100) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `deposit_amount` double(10,2) DEFAULT NULL,
  `receivable_amount` double(10,2) DEFAULT NULL,
  `payment_method` varchar(255) DEFAULT NULL,
  `payment_id` varchar(255) DEFAULT NULL,
  `payment_status` varchar(100) DEFAULT NULL,
  `frm_wallet_address` varchar(255) DEFAULT NULL,
  `to_crypto_wallet_address` varchar(255) DEFAULT NULL,
  `trxId` varchar(255) DEFAULT NULL,
  `depscription` text DEFAULT NULL,
  `wallet_address` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL COMMENT '0=Review,2=Reject,1=Approved',
  `approved_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `deposit`
--

INSERT INTO `deposit` (`id`, `depositID`, `email`, `product`, `currency`, `user_id`, `deposit_amount`, `receivable_amount`, `payment_method`, `payment_id`, `payment_status`, `frm_wallet_address`, `to_crypto_wallet_address`, `trxId`, `depscription`, `wallet_address`, `status`, `approved_by`, `created_at`, `updated_at`) VALUES
(1, NULL, 'buyer1@gmail.com', 'Custom Payment', 'USD', NULL, 13900.00, NULL, NULL, 'pi_3QtaU52NiQK26ALV0aioaqp8', 'pending', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-02-17 20:00:06', '2025-02-17 20:00:06'),
(2, NULL, 'buyer1@gmail.com', 'Custom Payment', 'USD', NULL, 11100.00, NULL, NULL, 'pi_3QtamJ2NiQK26ALV0Mnlm2Y5', 'pending', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-02-17 20:19:00', '2025-02-17 20:19:00'),
(3, NULL, 'buyer1@gmail.com', 'Custom Payment', 'USD', NULL, 11200.00, NULL, NULL, '', 'pending', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-02-17 20:20:51', '2025-02-17 20:20:51'),
(4, NULL, 'buyer1@gmail.com', 'Custom Payment', 'USD', NULL, 14500.00, NULL, NULL, '', 'pending', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-02-17 20:32:44', '2025-02-17 20:32:44'),
(5, NULL, 'buyer1@gmail.com', 'Custom Payment', 'USD', NULL, 16800.00, NULL, NULL, '', 'pending', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-02-17 20:35:20', '2025-02-17 20:35:20'),
(6, NULL, 'buyer1@gmail.com', 'Custom Payment', 'USD', NULL, 19900.00, NULL, NULL, '', 'pending', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-02-17 20:47:10', '2025-02-17 20:47:10'),
(7, NULL, 'buyer1@gmail.com', 'Custom Payment', 'USD', NULL, 19700.00, NULL, NULL, '', 'pending', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-02-17 20:49:53', '2025-02-17 20:49:53'),
(8, NULL, 'buyer1@gmail.com', 'Custom Payment', 'USD', NULL, 5900.00, NULL, NULL, '', 'pending', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-02-17 20:54:52', '2025-02-17 20:54:52'),
(9, NULL, 'buyer1@gmail.com', 'Custom Payment', 'USD', NULL, 6800.00, NULL, NULL, '', 'pending', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-02-17 20:57:21', '2025-02-17 20:57:21'),
(10, NULL, 'buyer1@gmail.com', 'Custom Payment', 'USD', NULL, 9900.00, NULL, NULL, '', 'pending', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-02-17 21:07:44', '2025-02-17 21:07:44'),
(11, NULL, 'buyer1@gmail.com', 'Custom Payment', 'USD', NULL, 66200.00, NULL, NULL, '', 'pending', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-02-17 21:43:56', '2025-02-17 21:43:56'),
(12, NULL, 'buyer1@gmail.com', 'Custom Payment', 'USD', NULL, 6900.00, NULL, NULL, '', 'pending', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-02-17 21:48:54', '2025-02-17 21:48:54'),
(13, NULL, 'buyer1@gmail.com', 'Custom Payment', 'USD', NULL, 66800.00, NULL, NULL, '', 'pending', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-02-17 21:53:05', '2025-02-17 21:53:05'),
(14, NULL, 'buyer1@gmail.com', 'Custom Payment', 'USD', NULL, 7800.00, NULL, NULL, '', 'pending', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-02-17 21:55:18', '2025-02-17 21:55:18'),
(15, NULL, 'buyer1@gmail.com', 'Custom Payment', 'USD', NULL, 8800.00, NULL, NULL, '', 'pending', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-02-17 21:56:33', '2025-02-17 21:56:33');

-- --------------------------------------------------------

--
-- Table structure for table `education`
--

CREATE TABLE `education` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `year` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `college` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `education`
--

INSERT INTO `education` (`id`, `user_id`, `year`, `subject`, `college`, `description`, `created_at`, `updated_at`) VALUES
(1, 2, '2010 - 2012', 'Bachelor of Computer Science', 'Stanford University', 'Completed a Bachelor\'s degree with a focus on computer science and software engineering.', '2024-09-30 14:59:12', '2024-09-30 14:59:12'),
(2, 2, '2012 - 2014', 'Master of Computer Science', 'MIT', 'Specialized in artificial intelligence and machine learning during the Master\'s program.', '2024-09-30 14:59:12', '2024-09-30 14:59:12'),
(3, 2, '2015 - 2016', 'UX Design Certification', 'California Institute of the Arts', 'Earned a certification in UX design with a focus on user research and prototyping.', '2024-09-30 14:59:12', '2024-09-30 14:59:12'),
(4, 2, '2017 - 2018', 'Data Science Bootcamp', 'General Assembly', 'Completed an intensive bootcamp in data science, focusing on Python, R, and machine learning algorithms.', '2024-09-30 14:59:12', '2024-09-30 14:59:12'),
(5, 2, '2019 - 2020', 'Full Stack Web Development', 'Harvard Extension School', 'Studied full stack web development with a focus on modern JavaScript frameworks, back-end services, and databases.', '2024-09-30 14:59:12', '2024-09-30 14:59:12'),
(7, 37, '2018', 'Computer Science', 'Stanford University', 'Completed a comprehensive program in computer science, focusing on full-stack development, algorithms, and cloud computing. Led various team projects, including building a scalable e-commerce platform and developing machine learning models for predictive analytics. Graduated with honors and multiple academic distinctions.', '2024-10-01 02:52:24', '2024-10-01 02:52:24'),
(8, 37, '2020', 'Diploma in Web Development', 'Coursera (via University of Michigan)', 'Specialized in front-end and back-end web technologies, including HTML, CSS, JavaScript, and PHP. Developed dynamic, responsive websites as part of the curriculum and gained hands-on experience with frameworks like Laravel and React. Completed with a focus on modern web development practices and industry standards.', '2024-10-01 02:52:54', '2024-10-01 02:52:54'),
(9, 37, '2019', 'Master of Science in Information Technology', 'Massachusetts Institute of Technology (MIT)', 'Focused on advanced IT infrastructure, cybersecurity, and cloud solutions. Research-based projects in AI and data science, with a thesis on enhancing cybersecurity protocols for modern cloud environments. Developed enterprise-level IT solutions for coursework and received recognition for academic excellence.', '2024-10-01 02:53:18', '2024-10-01 02:53:18'),
(10, 11, '2020', 'CSE', 'Bangladesh University of Engineering and Technology', 'Bangladesh University of Engineering and TechnologyBangladesh University of Engineering and Technology', '2025-02-11 00:22:19', '2025-02-11 00:22:19'),
(11, 11, '2021', 'Science', 'Dhaka College', 'informally known as DC, is a public educational institution of Bangladesh located in Dhanmondi, Dhaka. It is one of the oldest educational institutions in the subcontinent. It offers honours and master\'s programs. It also has higher secondary', '2025-02-11 00:28:54', '2025-02-11 00:28:54'),
(13, 11, '2018', 'SSC', 'Sahbazpur high school and college', 'Leading a small team on a variety of development Government projects. (BGB, Government ministries of Bangladesh)', '2025-02-11 00:32:11', '2025-02-11 00:32:11');

-- --------------------------------------------------------

--
-- Table structure for table `experience`
--

CREATE TABLE `experience` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `year` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `company` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `experience`
--

INSERT INTO `experience` (`id`, `user_id`, `year`, `role`, `company`, `description`, `created_at`, `updated_at`) VALUES
(1, 2, '2012 - 2014', 'UX Designer', 'Dropbox', 'Worked as a UX Designer, creating user-centered designs and improving the user experience for Dropbox products.', '2024-09-30 14:56:34', '2024-09-30 14:57:08'),
(2, 2, '2015 - 2017', 'Front-end Developer', 'Google', 'Developed front-end interfaces using HTML, CSS, and JavaScript for Google applications and services.', '2024-09-30 14:56:34', '2024-09-30 14:57:10'),
(3, 2, '2018 - 2020', 'Project Manager', 'Facebook', 'Managed cross-functional teams and projects for Facebook’s new product development initiatives.', '2024-09-30 14:56:34', '2024-09-30 14:57:12'),
(4, 37, '2012 - 2014', 'Senior Full-Stack Developer', 'FutureGen IT Solutions', 'Led the development of enterprise-level web applications using modern frameworks like Nuxt.js, Laravel, and React.js. Managed a team of developers, ensuring code quality and performance optimization. Successfully deployed cloud-based applications and improved system scalability by 30%. Key projects included an e-commerce platform and custom CRM software for business clients.', '2024-10-01 02:55:01', '2024-10-01 02:55:01'),
(5, 37, '2019 – 2021', 'Front-End Developer', 'CreativeWeb Agency', 'Designed and implemented interactive and responsive web interfaces using HTML, CSS, JavaScript, and Vue.js. Collaborated with designers and backend developers to deliver user-friendly websites and applications. Improved website performance by optimizing code and implementing SEO best practices, increasing user engagement by 25%.', '2024-10-01 02:55:27', '2024-10-01 02:55:27'),
(6, 11, '2018-2015', 'Junior Programmer', 'Delta Hospital', 'Web application Development Lab Report Management & Lab Inventory Management.', '2025-02-11 00:34:08', '2025-02-11 00:34:08'),
(7, 11, '2015-2018', 'Programmer', 'Meritstec Ltd.', 'Leading a small team on a variety of development Government projects. (BGB, Government ministries of Bangladesh)', '2025-02-11 00:34:46', '2025-02-11 00:34:46'),
(8, 11, '2010-2015', 'Programmer', 'RapidInfosys', 'Leading a small team on a variety of development projects and delivering solutions to meet and exceed clients’ briefs. (TOM - Total Office Management) and Multiple Project', '2025-02-11 00:36:09', '2025-02-11 00:36:09'),
(9, 11, '2023-2025', 'Programmer', 'Swisstex Group', 'Designed and developed user-friendly website, Software Design & development, Maintaining Database. (Germents ERP Software)', '2025-02-11 00:36:38', '2025-02-11 00:36:38');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `gig`
--

CREATE TABLE `gig` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `subcategory_id` int(11) DEFAULT NULL,
  `insubcategory_Id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL COMMENT 'title',
  `gig_slug` varchar(255) DEFAULT NULL,
  `thumbnail_images` varchar(255) DEFAULT NULL,
  `types` varchar(255) DEFAULT NULL COMMENT '1=Single Gig\r\n2=Basic/Standard/Premium\r\n',
  `language_name` varchar(255) DEFAULT NULL,
  `language_type` varchar(255) DEFAULT NULL,
  `gig_description` text DEFAULT NULL,
  `price` double(10,2) DEFAULT NULL,
  `delivery_day` int(11) DEFAULT NULL,
  `basic_price` double(10,2) DEFAULT NULL COMMENT 'Basic',
  `basic_description` text DEFAULT NULL COMMENT 'Basic',
  `basic_delivery_days` int(11) DEFAULT NULL COMMENT 'Basic',
  `source_file` text DEFAULT NULL COMMENT 'Basic (Yes/No)',
  `standard_price` double(10,2) DEFAULT NULL COMMENT 'Standard',
  `stn_descrition` text DEFAULT NULL COMMENT 'Standard',
  `stn_delivery_days` int(11) DEFAULT NULL COMMENT 'Standard',
  `order_rules` text DEFAULT NULL,
  `stn_source_file` varchar(255) DEFAULT NULL COMMENT 'Standard',
  `premium_price` double(10,2) DEFAULT NULL COMMENT 'Premium',
  `premium_description` text DEFAULT NULL COMMENT 'Premium',
  `premium_delivery_days` int(11) DEFAULT NULL COMMENT 'Premium',
  `premium_source_file` varchar(255) DEFAULT NULL COMMENT 'Premium',
  `status` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gig`
--

INSERT INTO `gig` (`id`, `user_id`, `category_id`, `subcategory_id`, `insubcategory_Id`, `name`, `gig_slug`, `thumbnail_images`, `types`, `language_name`, `language_type`, `gig_description`, `price`, `delivery_day`, `basic_price`, `basic_description`, `basic_delivery_days`, `source_file`, `standard_price`, `stn_descrition`, `stn_delivery_days`, `order_rules`, `stn_source_file`, `premium_price`, `premium_description`, `premium_delivery_days`, `premium_source_file`, `status`, `created_at`, `updated_at`) VALUES
(1, 11, 1, 12, NULL, 'I will design and develop a perfect business website', 'i-will-design-and-develop-a-perfect-business-website', '/backend/gig/9SnThWigDFCcbyX46qw9.jpg', '2', NULL, NULL, '<p style=\"border: 0px; margin-bottom: 0px; outline: 0px; padding: 0px;\">&nbsp;If you are looking for&nbsp;<span style=\"border: 0px; margin: 0px; outline: 0px; padding: 0px; font-weight: 700;\"><span style=\"background: rgb(255, 236, 209);\">a RESPONSIVE</span>,<span style=\"background: rgb(255, 236, 209);\">&nbsp;EXCEPTIONAL&nbsp;</span>&amp;&nbsp;<span style=\"background: rgb(255, 236, 209);\">CLEAN&nbsp;</span></span>website then this is the right Gig for you! I guarantee that your website will stand out from the crowd!</p><p style=\"border: 0px; margin-bottom: 0px; outline: 0px; padding: 0px;\"><br></p><p style=\"border: 0px; margin-bottom: 0px; outline: 0px; padding: 0px;\"><span style=\"border: 0px; margin: 0px; outline: 0px; padding: 0px; font-weight: 700;\">WHAT WILL YOU GET?</span></p><ol style=\"border: 0px; margin-right: 5px; margin-bottom: 0px; margin-left: 5px; outline: 0px; padding: 0px; list-style: none none;\"><li style=\"border: 0px; margin: 0px 0px 0px 24px; outline: 0px; padding: 0px; list-style: outside none decimal;\">Unlimited Revisions.</li><li style=\"border: 0px; margin: 0px 0px 0px 24px; outline: 0px; padding: 0px; list-style: outside none decimal;\">100% Trust Worthiness</li><li style=\"border: 0px; margin: 0px 0px 0px 24px; outline: 0px; padding: 0px; list-style: outside none decimal;\">Speed Optimized website.</li><li style=\"border: 0px; margin: 0px 0px 0px 24px; outline: 0px; padding: 0px; list-style: outside none decimal;\">SEO Friendly website</li><li style=\"border: 0px; margin: 0px 0px 0px 24px; outline: 0px; padding: 0px; list-style: outside none decimal;\"><span style=\"border: 0px; margin: 0px; outline: 0px; padding: 0px; font-weight: 700;\"><span style=\"background: rgb(255, 236, 209);\">Premium WordPress Theme</span></span>&nbsp;with lifetime updates(in case of WordPress web)</li><li style=\"border: 0px; margin: 0px 0px 0px 24px; outline: 0px; padding: 0px; list-style: outside none decimal;\"><span style=\"border: 0px; margin: 0px; outline: 0px; padding: 0px; font-weight: 700;\"><span style=\"background: rgb(255, 236, 209);\">Premium WordPress Plugins</span></span>(in case of WordPress web)</li><li style=\"border: 0px; margin: 0px 0px 0px 24px; outline: 0px; padding: 0px; list-style: outside none decimal;\">Fully responsive and professional looking.</li><li style=\"border: 0px; margin: 0px 0px 0px 24px; outline: 0px; padding: 0px; list-style: outside none decimal;\">The end product will be mobile and tablet friendly and it will pass the google test.</li><li style=\"border: 0px; margin: 0px 0px 0px 24px; outline: 0px; padding: 0px; list-style: outside none decimal;\">100% Satisfaction.</li></ol><p style=\"border: 0px; margin-bottom: 0px; outline: 0px; padding: 0px;\"><br></p><p style=\"border: 0px; margin-bottom: 0px; outline: 0px; padding: 0px;\"><span style=\"border: 0px; margin: 0px; outline: 0px; padding: 0px; font-weight: 700;\">WHY HIRE ME?</span></p><p style=\"border: 0px; margin-bottom: 0px; outline: 0px; padding: 0px;\"><br></p><p style=\"border: 0px; margin-bottom: 0px; outline: 0px; padding: 0px;\">8 years+&nbsp;experience&nbsp;in WordPress design and development</p><p style=\"border: 0px; margin-bottom: 0px; outline: 0px; padding: 0px;\"><br></p><p style=\"border: 0px; margin-bottom: 0px; outline: 0px; padding: 0px;\">I provide a free consultation and open to any advice</p><p style=\"border: 0px; margin-bottom: 0px; outline: 0px; padding: 0px;\"><br style=\"color: rgb(98, 100, 106); font-family: Macan, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\"></p>', NULL, NULL, 150.00, 'SILVER I will create up to 1 page full fledged responsive website with Professional End result.', 1, NULL, 400.00, NULL, 1, NULL, 'Yes', 900.00, 'DIAMOND I will create website having Upto 10 pages, SEO, SPEED, Security, E-Commerce included + 1 month supp', 4, 'Yes', 1, '2024-10-25 12:37:52', '2024-10-25 12:37:52'),
(2, 13, 2, NULL, NULL, 'I will create amazon affiliate marketing autopilot website with autoblog', 'i-will-create-amazon-affiliate-marketing-autopilot-website-with-autoblog', '/backend/gig/2fCWJLOtNGrxIrN20eMU.jpg', '2', NULL, NULL, '<span style=\"color: rgb(64, 65, 69); font-family: Macan, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\">Sahil J. has provided an excellent service. Very fast delivery and the website looks great! Being a newbie in the ecommerce field, I have asked a lot of questions...&nbsp;</span><span class=\"expand-description-wrapper\" style=\"border: 0px; margin: 0px; outline: 0px; padding: 0px; color: rgb(64, 65, 69); font-family: Macan, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\"><span class=\"expand-button\" style=\"border: 0px; margin: 0px; outline: 0px; padding: 0px;\"><button class=\"sPdE5j4 zUvc8Si co-white expand-description expand-button-text bg-co-green-700\" data-impression-collected=\"true\" style=\"padding: 0px; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; border-width: initial; border-style: none; border-color: initial; font-style: inherit; font-variant: inherit; font-weight: 600; font-stretch: inherit; font-size: 16px; line-height: 16px; font-optical-sizing: inherit; font-size-adjust: inherit; font-kerning: inherit; font-feature-settings: inherit; font-variation-settings: inherit; color: rgb(64, 65, 69); border-radius: 4px; position: relative; transition-duration: 70ms; transition-timing-function: cubic-bezier(0.75, 0, 0.25, 1); transition-property: all;\"><span class=\"text-normal\" style=\"border: 0px; margin: 0px; outline: 0px; padding: 0px; font-weight: 400;\"><u>See more</u></span></button></span></span>', NULL, NULL, 300.00, '30+ Categories with 3000+ Products [ AMAZON BEST SELLER ] + Autoblog', 2, NULL, 400.00, NULL, 4, NULL, 'Yes', 700.00, 'Unlimited Categories/Products + Marketing Guide + Logo + Autoblog + Speed + SEO + Lifetime Support', 4, 'Yes', 1, '2024-10-26 10:31:40', '2024-10-26 10:31:40'),
(3, 14, 3, NULL, NULL, 'i will do digital Marketing', 'i-will-do-digital-marketing', '/backend/gig/Mh1pVvJpdXOm4BjoGPcX.jpg', '1', NULL, NULL, 'i will do digital Marketingi will do digital Marketingi will do digital Marketingi will do digital Marketingi will do digital Marketingi will do digital Marketingi will do digital Marketingi will do digital Marketingi will do digital Marketingi will do digital Marketingi will do digital Marketingi will do digital Marketing', 500.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Yes', NULL, NULL, NULL, 'Yes', 1, '2024-10-26 11:25:10', '2024-10-26 11:25:10'),
(4, 15, 4, NULL, NULL, 'I will do custom software development saas web application as software developer', 'i-will-do-custom-software-development-saas-web-application-as-software-developer', '/backend/gig/MLx055PQexaUwvDSKC00.jpg', '2', NULL, NULL, '<h1 class=\"text-display-3\" style=\"border: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; outline: 0px; padding: 0px 0px 16px; color: rgb(64, 65, 69); font-family: Macan, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 28px; line-height: 36.4px; overflow-wrap: break-word;\">I will do custom software development saas web application as software developer<span style=\"text-align: var(--bs-body-text-align);\">I will do custom software development saas web application as software developer</span><span style=\"text-align: var(--bs-body-text-align);\">I will do custom software development saas web application as software developer</span><span style=\"text-align: var(--bs-body-text-align);\">I will do custom software development saas web application as software developer</span><span style=\"text-align: var(--bs-body-text-align);\">I will do custom software development saas web application as software developer</span><span style=\"text-align: var(--bs-body-text-align);\">I will do custom software development saas web application as software developer</span><span style=\"text-align: var(--bs-body-text-align);\">I will do custom software development saas web application as software developer</span><span style=\"text-align: var(--bs-body-text-align);\">I will do custom software development saas web application as software developer</span><span style=\"text-align: var(--bs-body-text-align);\">I will do custom software development saas web application as software developer</span><span style=\"text-align: var(--bs-body-text-align);\">I will do custom software development saas web application as software developer</span><span style=\"text-align: var(--bs-body-text-align);\">I will do custom software development saas web application as software developer</span><span style=\"text-align: var(--bs-body-text-align);\">I will do custom software development saas web application as software developer</span><span style=\"text-align: var(--bs-body-text-align);\">I will do custom software development saas web application as software developer</span><span style=\"text-align: var(--bs-body-text-align);\">I will do custom software development saas web application as software developer</span><span style=\"text-align: var(--bs-body-text-align);\">I will do custom software development saas web application as software developer</span></h1>', NULL, NULL, 200.00, 'I will do custom software development saas web application as software developerI will do custom software development saas web application as software developerI will do custom software development sa', 1, NULL, 400.00, NULL, 2, NULL, 'Yes', 600.00, 'I will do custom software development saas web application as software developerI will do custom software development saas web application as software developerI will do custom software development sa', 3, 'Yes', 1, '2024-10-28 09:42:53', '2024-10-28 09:42:53'),
(5, 11, 1, 16, NULL, 'i Will design and devlop a website', 'i-will-design-and-devlop-a-website', '/backend/gig/xBnEQdB8Dua6IypQ4Ixi.jpg', '1', NULL, NULL, '<p>i Will design and devlop a website&nbsp;i Will design and devlop a website&nbsp;i Will design and devlop a website&nbsp;i Will design and devlop a website&nbsp;i Will design and devlop a website&nbsp;i Will design and devlop a website&nbsp;i Will design and devlop a website&nbsp;i Will design and devlop a website&nbsp;i Will design and devlop a website&nbsp;i Will design and devlop a website&nbsp;</p>', 100.00, 1, 0.00, 'null', 0, 'null', 0.00, 'null', 0, 'and devlop a website i Will design and devlop a website i Will design and devlop a website i Will design and devlop a website i Will design and devlop a website', 'Yes', 0.00, 'null', 0, 'Yes', 1, '2024-10-29 11:17:58', '2024-10-29 11:19:35'),
(6, 11, 1, 20, NULL, 'i Will Design and Develop a new Game from scratch', 'i-will-design-and-develop-a-new-game-from-scratch', '/backend/gig/evwMlCI9soVuBWX7J59g.jpg', '2', NULL, NULL, '<div>1. added direct msg button to notification&nbsp; Fix</div><div>2. buyer main categories should have small arrow icon to see full categories bar pending</div><div>3. 3.&nbsp; &nbsp;dispute is now in the admin users can see the details Fix</div><div>4. i added gigs to insub but its not showing in the insub category while filtering it Fix5.&nbsp; show more button&nbsp; for order statements after 15 days</div><div>6.admin mlm section and users section Add team and income reporting&nbsp; also add the upline name to rows and made levels button in the top as i make the skech&nbsp; working on&nbsp;</div><div>7. the external pages ? pending&nbsp;</div><div>8. for the adding bank withdraw method&nbsp; i am sending you the form so buyer seller will added info in the form to save it not fix</div>', NULL, NULL, 300.00, '1. added direct msg button to notification  Fix\r\n2. buyer main categories should have small arrow icon to see full categories bar pending\r\n3. 3.   dispute is now in the admin users can see the details F', 1, 'Yes', 600.00, NULL, 1, NULL, 'Yes', 900.00, '1. added direct msg button to notification  Fix\r\n2. buyer main categories should have small arrow icon to see full categories bar pending\r\n3. 3.   dispute is now in the admin users can see the details F', 1, 'Yes', 1, '2024-11-04 10:08:14', '2024-11-04 10:08:14'),
(7, 11, 1, 16, NULL, 'Will Design and Develop a new Game from scratch your website and IOS apps', 'will-design-and-develop-a-new-game-from-scratch-your-website-and-ios-apps', '/backend/gig/b454aID3yVH7qnc6NjiG.jpeg', '1', NULL, NULL, '<p>&nbsp;</p><p>1. added direct msg button to notification&nbsp; Fix</p><p>2. buyer main categories should have small arrow icon to see full categories bar pending</p><p>3. 3.&nbsp; &nbsp;dispute is now in the admin users can see the details Fix</p><p>4. i added gigs to insub but its not showing in the insub category while filtering it Fix5.&nbsp; show more button&nbsp; for order statements after 15 days</p><p>6.admin mlm section and users section Add team and income reporting&nbsp; also add the upline name to rows and made levels button in the top as i make the skech&nbsp; working on&nbsp;</p><p>7. the external pages ? pending&nbsp;</p><p>8. for the adding bank withdraw method&nbsp; i am sending you the form so buyer seller will added info in the form to save it not fix</p><p>&nbsp;</p>', 200.00, 1, 0.00, 'null', 0, 'null', 0.00, 'null', 0, 'null', 'Yes', 0.00, 'null', 0, 'Yes', 1, '2025-02-11 10:33:49', '2025-02-11 11:08:35'),
(8, 11, 2, 12, NULL, 'I will write engaging SEO articles for your brand or blog', 'i-will-write-engaging-seo-articles-for-your-brand-or-blog', '/backend/gig/CGt7ul4EIWXZL4jPZAkA.jpeg', '2', NULL, NULL, '<p data-v-75b9b14f=\"\" class=\"text mb30 text-justify\" style=\"text-align: justify;\"></p><div>1. added direct msg button to notification&nbsp; Fix</div><div>2. buyer main categories should have small arrow icon to see full categories bar pending</div><div>3. 3.&nbsp; &nbsp;dispute is now in the admin users can see the details Fix</div><div>4.\r\n i added gigs to insub but its not showing in the insub category while \r\nfiltering it Fix5.&nbsp; show more button&nbsp; for order statements after 15 days</div><div>6.admin\r\n mlm section and users section Add team and income reporting&nbsp; also add \r\nthe upline name to rows and made levels button in the top as i make the \r\nskech&nbsp; working on&nbsp;</div><div>7. the external pages ? pending&nbsp;</div><div>8. for the adding bank withdraw method&nbsp; i am sending you the form so buyer seller will added info in the form to save it not fix</div><p><br></p>', NULL, 1, 100.00, 'I am a seasoned American copywriter, editor, and ghostwriter with over five years of experience. I have been featured on Virgin Australia, Pillow, BE Media, Viapu, and H&R Block.', 1, NULL, 150.00, NULL, 1, NULL, 'Yes', 500.00, 'I am a seasoned American copywriter, editor, and ghostwriter with over five years of experience. I have been featured on Virgin Australia, Pillow, BE Media, Viapu, and H&R Block.', 1, 'Yes', 1, '2025-02-11 10:54:07', '2025-02-11 10:54:07'),
(9, 11, 1, 16, NULL, 'sfsdf', 'sfsdf', '/backend/gig/qeoyzcnYEbAK1XcIFsOA.jpeg', '2', NULL, NULL, '<p data-v-75b9b14f=\"\" class=\"text mb30 text-justify\" style=\"text-align: justify;\"></p><div>1. added direct msg button to notification&nbsp; Fix</div><div>2. buyer main categories should have small arrow icon to see full categories bar pending</div><div>3. 3.&nbsp; &nbsp;dispute is now in the admin users can see the details Fix</div><div>4.\r\n i added gigs to insub but its not showing in the insub category while \r\nfiltering it Fix5.&nbsp; show more button&nbsp; for order statements after 15 days</div><div>6.admin\r\n mlm section and users section Add team and income reporting&nbsp; also add \r\nthe upline name to rows and made levels button in the top as i make the \r\nskech&nbsp; working on&nbsp;</div><div>7. the external pages ? pending&nbsp;</div><div>8. for the adding bank withdraw method&nbsp; i am sending you the form so buyer seller will added info in the form to save it not fix</div><p><br></p>', NULL, NULL, 100.00, 'sasdasd', 12, 'Yes', 11.00, NULL, 2, NULL, 'Yes', 222.00, 'sdfsdf', 2, 'Yes', 1, '2025-02-11 10:56:51', '2025-02-11 10:56:51');

-- --------------------------------------------------------

--
-- Table structure for table `gigwish_list`
--

CREATE TABLE `gigwish_list` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `gig_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gigwish_list`
--

INSERT INTO `gigwish_list` (`id`, `user_id`, `gig_id`, `created_at`, `updated_at`) VALUES
(5, 4, 1, '2024-10-28 11:09:39', '2024-10-28 11:09:39'),
(7, 9, 4, '2024-10-28 13:28:40', '2024-10-28 13:28:40'),
(12, 7, 1, '2024-10-28 15:59:08', '2024-10-28 15:59:08'),
(14, 11, 1, '2024-10-31 15:10:50', '2024-10-31 15:10:50'),
(15, 6, 1, '2024-11-04 15:20:15', '2024-11-04 15:20:15'),
(16, 6, 5, '2024-11-04 15:20:20', '2024-11-04 15:20:20');

-- --------------------------------------------------------

--
-- Table structure for table `gig_images_history`
--

CREATE TABLE `gig_images_history` (
  `id` int(11) NOT NULL,
  `gig_id` int(11) DEFAULT NULL,
  `image_path` varchar(233) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gig_images_history`
--

INSERT INTO `gig_images_history` (`id`, `gig_id`, `image_path`, `created_at`, `updated_at`) VALUES
(1, 1, '/backend/gig/9SnThWigDFCcbyX46qw9.jpg', '2024-10-25 12:37:52', '2024-10-25 12:37:52'),
(2, 2, '/backend/gig/2fCWJLOtNGrxIrN20eMU.jpg', '2024-10-26 10:31:40', '2024-10-26 10:31:40'),
(3, 3, '/backend/gig/Mh1pVvJpdXOm4BjoGPcX.jpg', '2024-10-26 11:25:10', '2024-10-26 11:25:10'),
(4, 4, '/backend/gig/MLx055PQexaUwvDSKC00.jpg', '2024-10-28 09:42:53', '2024-10-28 09:42:53'),
(5, 5, '/backend/gig/xBnEQdB8Dua6IypQ4Ixi.jpg', '2024-10-29 11:17:58', '2024-10-29 11:17:58'),
(6, 6, '/backend/gig/evwMlCI9soVuBWX7J59g.jpg', '2024-11-04 10:08:14', '2024-11-04 10:08:14'),
(7, 7, '/backend/gig/b454aID3yVH7qnc6NjiG.jpeg', '2025-02-11 10:33:49', '2025-02-11 10:33:49'),
(8, 7, '/backend/gig/qAX0Vk6CGGh9q3PtKzro.jpg', '2025-02-11 10:33:49', '2025-02-11 10:33:49'),
(9, 7, '/backend/gig/qLxGlmYoJ8E5wx1CqCnh.jpg', '2025-02-11 10:33:49', '2025-02-11 10:33:49'),
(10, 8, '/backend/gig/CGt7ul4EIWXZL4jPZAkA.jpeg', '2025-02-11 10:54:07', '2025-02-11 10:54:07'),
(11, 9, '/backend/gig/qeoyzcnYEbAK1XcIFsOA.jpeg', '2025-02-11 10:56:51', '2025-02-11 10:56:51'),
(12, 9, '/backend/gig/hUoVSuioWqfFhJ71gUb6.jpeg', '2025-02-11 10:56:51', '2025-02-11 10:56:51');

-- --------------------------------------------------------

--
-- Table structure for table `level_commission`
--

CREATE TABLE `level_commission` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `orderId` varchar(255) DEFAULT NULL,
  `buyerId` bigint(20) UNSIGNED NOT NULL,
  `buyer_name` varchar(255) NOT NULL,
  `level` int(11) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `commission_recev_frm` bigint(20) UNSIGNED NOT NULL,
  `commission_recv_frm_name` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `level_commission`
--

INSERT INTO `level_commission` (`id`, `orderId`, `buyerId`, `buyer_name`, `level`, `amount`, `commission_recev_frm`, `commission_recv_frm_name`, `created_at`, `updated_at`) VALUES
(1, '736042-24', 6, 'amir3', 1, 0.80, 7, 'amir4', '2024-10-25 13:11:11', '2024-10-25 13:11:11'),
(2, '736042-24', 5, 'amir2', 2, 0.60, 7, 'amir4', '2024-10-25 13:11:11', '2024-10-25 13:11:11'),
(3, '736042-24', 4, 'amir1', 3, 0.40, 7, 'amir4', '2024-10-25 13:11:11', '2024-10-25 13:11:11'),
(4, '736042-24', 3, 'buyer1', 4, 0.10, 7, 'amir4', '2024-10-25 13:11:11', '2024-10-25 13:11:11'),
(5, '930775-24', 7, 'amir4', 1, 0.80, 9, 'amir5', '2024-10-26 08:35:36', '2024-10-26 08:35:36'),
(6, '930775-24', 6, 'amir3', 2, 0.60, 9, 'amir5', '2024-10-26 08:35:36', '2024-10-26 08:35:36'),
(7, '930775-24', 5, 'amir2', 3, 0.40, 9, 'amir5', '2024-10-26 08:35:36', '2024-10-26 08:35:36'),
(8, '930775-24', 4, 'amir1', 4, 0.10, 9, 'amir5', '2024-10-26 08:35:36', '2024-10-26 08:35:36'),
(9, '930775-24', 3, 'buyer1', 5, 0.10, 9, 'amir5', '2024-10-26 08:35:36', '2024-10-26 08:35:36'),
(10, '413187-24', 3, 'buyer1', 1, 0.80, 4, 'amir1', '2024-10-28 10:11:47', '2024-10-28 10:11:47'),
(11, '410977-24', 3, 'buyer1', 1, 0.40, 4, 'amir1', '2024-10-28 11:00:33', '2024-10-28 11:00:33'),
(12, '478943-24', 3, 'buyer1', 1, 0.40, 4, 'amir1', '2024-10-28 11:01:16', '2024-10-28 11:01:16'),
(13, '418060-24', 3, 'buyer1', 1, 0.40, 4, 'amir1', '2024-10-28 11:02:15', '2024-10-28 11:02:15'),
(14, '943016-24', 7, 'amir4', 1, 0.40, 9, 'amir5', '2024-10-28 11:07:22', '2024-10-28 11:07:22'),
(15, '943016-24', 6, 'amir3', 2, 0.30, 9, 'amir5', '2024-10-28 11:07:22', '2024-10-28 11:07:22'),
(16, '943016-24', 5, 'amir2', 3, 0.20, 9, 'amir5', '2024-10-28 11:07:22', '2024-10-28 11:07:22'),
(17, '943016-24', 4, 'amir1', 4, 0.10, 9, 'amir5', '2024-10-28 11:07:22', '2024-10-28 11:07:22'),
(18, '943016-24', 3, 'buyer1', 5, 0.10, 9, 'amir5', '2024-10-28 11:07:22', '2024-10-28 11:07:22'),
(19, '980766-24', 7, 'amir4', 1, 0.40, 9, 'amir5', '2024-10-28 11:07:33', '2024-10-28 11:07:33'),
(20, '980766-24', 6, 'amir3', 2, 0.30, 9, 'amir5', '2024-10-28 11:07:33', '2024-10-28 11:07:33'),
(21, '980766-24', 5, 'amir2', 3, 0.20, 9, 'amir5', '2024-10-28 11:07:33', '2024-10-28 11:07:33'),
(22, '980766-24', 4, 'amir1', 4, 0.10, 9, 'amir5', '2024-10-28 11:07:33', '2024-10-28 11:07:33'),
(23, '980766-24', 3, 'buyer1', 5, 0.10, 9, 'amir5', '2024-10-28 11:07:33', '2024-10-28 11:07:33'),
(24, '924688-24', 7, 'amir4', 1, 0.40, 9, 'amir5', '2024-10-28 11:11:04', '2024-10-28 11:11:04'),
(25, '924688-24', 6, 'amir3', 2, 0.30, 9, 'amir5', '2024-10-28 11:11:04', '2024-10-28 11:11:04'),
(26, '924688-24', 5, 'amir2', 3, 0.20, 9, 'amir5', '2024-10-28 11:11:04', '2024-10-28 11:11:04'),
(27, '924688-24', 4, 'amir1', 4, 0.10, 9, 'amir5', '2024-10-28 11:11:04', '2024-10-28 11:11:04'),
(28, '924688-24', 3, 'buyer1', 5, 0.10, 9, 'amir5', '2024-10-28 11:11:04', '2024-10-28 11:11:04'),
(29, '938158-24', 7, 'amir4', 1, 0.40, 9, 'amir5', '2024-10-28 11:17:08', '2024-10-28 11:17:08'),
(30, '938158-24', 6, 'amir3', 2, 0.30, 9, 'amir5', '2024-10-28 11:17:08', '2024-10-28 11:17:08'),
(31, '938158-24', 5, 'amir2', 3, 0.20, 9, 'amir5', '2024-10-28 11:17:08', '2024-10-28 11:17:08'),
(32, '938158-24', 4, 'amir1', 4, 0.10, 9, 'amir5', '2024-10-28 11:17:08', '2024-10-28 11:17:08'),
(33, '938158-24', 3, 'buyer1', 5, 0.10, 9, 'amir5', '2024-10-28 11:17:08', '2024-10-28 11:17:08'),
(34, '917028-24', 7, 'amir4', 1, 0.40, 9, 'amir5', '2024-10-28 11:17:21', '2024-10-28 11:17:21'),
(35, '917028-24', 6, 'amir3', 2, 0.30, 9, 'amir5', '2024-10-28 11:17:21', '2024-10-28 11:17:21'),
(36, '917028-24', 5, 'amir2', 3, 0.20, 9, 'amir5', '2024-10-28 11:17:21', '2024-10-28 11:17:21'),
(37, '917028-24', 4, 'amir1', 4, 0.10, 9, 'amir5', '2024-10-28 11:17:21', '2024-10-28 11:17:21'),
(38, '917028-24', 3, 'buyer1', 5, 0.10, 9, 'amir5', '2024-10-28 11:17:21', '2024-10-28 11:17:21'),
(39, '929097-24', 7, 'amir4', 1, 0.40, 9, 'amir5', '2024-10-28 11:18:29', '2024-10-28 11:18:29'),
(40, '929097-24', 6, 'amir3', 2, 0.30, 9, 'amir5', '2024-10-28 11:18:29', '2024-10-28 11:18:29'),
(41, '929097-24', 5, 'amir2', 3, 0.20, 9, 'amir5', '2024-10-28 11:18:29', '2024-10-28 11:18:29'),
(42, '929097-24', 4, 'amir1', 4, 0.10, 9, 'amir5', '2024-10-28 11:18:29', '2024-10-28 11:18:29'),
(43, '929097-24', 3, 'buyer1', 5, 0.10, 9, 'amir5', '2024-10-28 11:18:29', '2024-10-28 11:18:29'),
(44, '917249-24', 7, 'amir4', 1, 0.40, 9, 'amir5', '2024-10-28 11:20:46', '2024-10-28 11:20:46'),
(45, '917249-24', 6, 'amir3', 2, 0.30, 9, 'amir5', '2024-10-28 11:20:46', '2024-10-28 11:20:46'),
(46, '917249-24', 5, 'amir2', 3, 0.20, 9, 'amir5', '2024-10-28 11:20:46', '2024-10-28 11:20:46'),
(47, '917249-24', 4, 'amir1', 4, 0.10, 9, 'amir5', '2024-10-28 11:20:46', '2024-10-28 11:20:46'),
(48, '917249-24', 3, 'buyer1', 5, 0.10, 9, 'amir5', '2024-10-28 11:20:46', '2024-10-28 11:20:46'),
(49, '962693-24', 7, 'amir4', 1, 0.40, 9, 'amir5', '2024-10-28 11:20:58', '2024-10-28 11:20:58'),
(50, '962693-24', 6, 'amir3', 2, 0.30, 9, 'amir5', '2024-10-28 11:20:58', '2024-10-28 11:20:58'),
(51, '962693-24', 5, 'amir2', 3, 0.20, 9, 'amir5', '2024-10-28 11:20:58', '2024-10-28 11:20:58'),
(52, '962693-24', 4, 'amir1', 4, 0.10, 9, 'amir5', '2024-10-28 11:20:58', '2024-10-28 11:20:58'),
(53, '962693-24', 3, 'buyer1', 5, 0.10, 9, 'amir5', '2024-10-28 11:20:58', '2024-10-28 11:20:58'),
(54, '942000-24', 7, 'amir4', 1, 0.40, 9, 'amir5', '2024-10-28 11:21:13', '2024-10-28 11:21:13'),
(55, '942000-24', 6, 'amir3', 2, 0.30, 9, 'amir5', '2024-10-28 11:21:13', '2024-10-28 11:21:13'),
(56, '942000-24', 5, 'amir2', 3, 0.20, 9, 'amir5', '2024-10-28 11:21:13', '2024-10-28 11:21:13'),
(57, '942000-24', 4, 'amir1', 4, 0.10, 9, 'amir5', '2024-10-28 11:21:13', '2024-10-28 11:21:13'),
(58, '942000-24', 3, 'buyer1', 5, 0.10, 9, 'amir5', '2024-10-28 11:21:13', '2024-10-28 11:21:13'),
(59, '910999-24', 7, 'amir4', 1, 0.40, 9, 'amir5', '2024-10-28 11:21:25', '2024-10-28 11:21:25'),
(60, '910999-24', 6, 'amir3', 2, 0.30, 9, 'amir5', '2024-10-28 11:21:25', '2024-10-28 11:21:25'),
(61, '910999-24', 5, 'amir2', 3, 0.20, 9, 'amir5', '2024-10-28 11:21:25', '2024-10-28 11:21:25'),
(62, '910999-24', 4, 'amir1', 4, 0.10, 9, 'amir5', '2024-10-28 11:21:25', '2024-10-28 11:21:25'),
(63, '910999-24', 3, 'buyer1', 5, 0.10, 9, 'amir5', '2024-10-28 11:21:25', '2024-10-28 11:21:25'),
(64, '450134-24', 3, 'buyer1', 1, 0.40, 4, 'amir1', '2024-10-31 13:42:56', '2024-10-31 13:42:56');

-- --------------------------------------------------------

--
-- Table structure for table `manufacturers`
--

CREATE TABLE `manufacturers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `to_id` int(11) DEFAULT NULL,
  `sender_id` int(11) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `is_read` int(1) NOT NULL DEFAULT 0 COMMENT '1=read,0=unread',
  `files` varchar(255) DEFAULT NULL,
  `time_sent` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `user_id`, `to_id`, `sender_id`, `message`, `is_read`, `files`, `time_sent`, `created_at`, `updated_at`) VALUES
(1, 8, 13, 8, 'you can give me an source ode for this software', 1, '', NULL, '2024-10-22 11:48:46', '2024-10-26 10:52:28'),
(2, 13, 8, 13, 'ok i will', 1, '', NULL, '2024-10-22 11:49:55', '2025-02-16 07:28:01'),
(3, 28, 2, 28, 'Congratulations on your new gig: \"\"! 🎉. We wish you great success!', 1, '', NULL, '2024-10-23 06:00:58', '2024-10-23 06:00:58'),
(4, 28, 2, 28, 'Congratulations on your new gig: \"\"! 🎉. We wish you great success!', 1, '', NULL, '2024-10-23 06:01:33', '2024-10-23 06:01:33'),
(5, 28, 2, 28, 'Congratulations on your new gig: \"\"! 🎉. We wish you great success!', 1, '', NULL, '2024-10-23 06:11:34', '2024-10-23 06:11:34'),
(6, 2, 28, 2, 'Yes', 1, '', NULL, '2024-10-23 06:21:26', '2024-10-24 05:12:57'),
(7, 28, 2, 28, 'kkk', 1, '', NULL, '2024-10-23 06:22:03', '2024-10-23 06:22:03'),
(8, 2, 28, 2, '6985989', 1, '/backend/files/h8U8cQsHoETxHKlJ7Cfl.jpg', NULL, '2024-10-23 06:22:15', '2024-10-24 05:12:57'),
(9, 2, 28, 2, 'fgggg', 1, '', NULL, '2024-10-23 06:22:29', '2024-10-24 05:12:57'),
(10, 2, 28, 2, 'bgffgh', 1, '/backend/files/tfqW7eu5sKSbSc93QOUH.jpg', NULL, '2024-10-23 06:22:39', '2024-10-24 05:12:57'),
(11, 2, 28, 2, 'dfgdfgdfg', 1, '/backend/files/TOxVb34wbidRRXy9cof0.rar', NULL, '2024-10-23 06:23:00', '2024-10-24 05:12:57'),
(12, 2, 28, 2, 'fffff', 1, '/backend/files/tAAGf9xJCFTSgqQ3aItL.svg', NULL, '2024-10-23 06:24:52', '2024-10-24 05:12:57'),
(13, 28, 2, 28, 'gratulations on your new gig: \"\"! 🎉. We wish you great success! gratulations on your new gig: \"\"! 🎉. We wish you great success!', 1, '', NULL, '2024-10-23 06:51:33', '2024-10-23 06:51:33'),
(14, 30, 24, 30, 'Thank you, and I look forward to your response. \n: This message relates to: \"\"! 🎉. We wish you great success!', 1, '', NULL, '2024-10-23 10:25:09', '2024-10-23 10:25:09'),
(15, 30, 24, 30, 'Thank you, and I look forward to your response. \n: This message relates to: \"\"! 🎉. We wish you great success!', 1, '', NULL, '2024-10-23 10:25:40', '2024-10-23 10:25:40'),
(16, 30, 24, 30, 'sdvsdfsdfsdf', 1, '', NULL, '2024-10-23 10:25:53', '2024-10-23 10:25:53'),
(17, 24, 30, 24, 'yes please', 1, '', NULL, '2024-10-23 10:28:37', '2024-10-25 12:05:12'),
(18, 24, 30, 24, 'yes please', 1, '', NULL, '2024-10-23 10:28:43', '2024-10-25 12:05:12'),
(19, 24, 30, 24, 'yes please', 1, '', NULL, '2024-10-23 10:28:43', '2024-10-25 12:05:12'),
(20, 24, 30, 24, 'yes please', 1, '', NULL, '2024-10-23 10:28:45', '2024-10-25 12:05:12'),
(21, 24, 30, 24, 'yes please', 1, '', NULL, '2024-10-23 10:28:45', '2024-10-25 12:05:12'),
(22, 24, 30, 24, 'hello', 1, '', NULL, '2024-10-23 10:33:54', '2024-10-25 12:05:12'),
(23, 30, 24, 30, 'yes i want an developer', 1, '', NULL, '2024-10-23 10:34:29', '2024-10-23 10:34:29'),
(24, 28, 2, 28, 'Thank you, and I look forward to your response. \n: This message relates to: \"<b>I will create a minimalist logo design for your business</b>\"! 🎉. We wish you great success!', 1, '', NULL, '2024-10-23 12:25:39', '2024-10-23 12:25:39'),
(25, 28, 2, 28, 'Thank you, and I look forward to your response. \n: This message relates to: \"<b>I will create a minimalist logo design for your business</b>\"! 🎉. We wish you great success!', 0, '', NULL, '2024-10-24 02:57:57', '2024-10-24 02:57:57'),
(26, 21, 2, 21, '', 0, '$strippedMessage', NULL, '2024-10-24 04:48:26', '2024-10-24 04:48:26'),
(27, 21, 2, 21, '', 0, 'Thank you, and I look forward to your response. \n: This message relates to: \"<b>I will create a minimalist logo design for your business</b>', NULL, '2024-10-24 04:52:21', '2024-10-24 04:52:21'),
(28, 21, 2, 21, 'Thank you, and I look forward to your response. \n: This message relates to: \"<b>I will create a minimalist logo design for your business</b>\"! 🎉. We wish you great success!', 0, '', NULL, '2024-10-24 04:54:42', '2024-10-24 04:54:42'),
(29, 21, 2, 21, 'Thank you, and I look forward to your response. <br />\n: This message relates to: \"I will create a minimalist logo design for your business\"! We wish you great success!', 0, '', NULL, '2024-10-24 05:00:14', '2024-10-24 05:00:14'),
(30, 21, 2, 21, 'Thank you, and I look forward to your response.: <br />\n                    This message relates to: \"I will create a minimalist logo design for your business\"! We wish you great success!', 0, '', NULL, '2024-10-24 05:01:17', '2024-10-24 05:01:17'),
(31, 21, 2, 21, 'Thank you, and I look forward to your response.: \n                    This message relates to: \"I will create a minimalist logo design for your business\"! We wish you great success!', 0, '', NULL, '2024-10-24 05:02:03', '2024-10-24 05:02:03'),
(32, 21, 2, 21, 'Thank you, and I look forward to your response.: \n                    This message relates to: \"I will create a minimalist logo design for your business\"! We wish you great success!', 0, '<img src=\"https://api.isumax.com/backend/gig/316DDrtFwcsWoGDr2yPa.jpg\">', NULL, '2024-10-24 05:04:04', '2024-10-24 05:04:04'),
(33, 28, 2, 28, 'Thank you, and I look forward to your response.: \n                    This message relates to: \"I will create a minimalist logo design for your business\"! We wish you great success!', 0, '<img src=\"https://api.isumax.com/backend/gig/316DDrtFwcsWoGDr2yPa.jpg\">', NULL, '2024-10-24 05:05:30', '2024-10-24 05:05:30'),
(34, 21, 2, 21, 'Thank you, and I look forward to your response.: \n                    This message relates to: \"I will create a minimalist logo design for your business\"! We wish you great success!', 0, 'https://api.isumax.com/backend/gig/316DDrtFwcsWoGDr2yPa.jpg', NULL, '2024-10-24 05:06:11', '2024-10-24 05:06:11'),
(35, 28, 2, 28, 'Thank you, and I look forward to your response.: \n                    This message relates to: \"I will create a minimalist logo design for your business\"! We wish you great success!', 0, 'https://api.isumax.com/backend/gig/316DDrtFwcsWoGDr2yPa.jpg', NULL, '2024-10-24 05:06:38', '2024-10-24 05:06:38'),
(36, 28, 2, 28, 'Thank you, and I look forward to your response.: \n                    This message relates to: \"I will create a minimalist logo design for your business\"! We wish you great success!', 0, 'https://api.isumax.com/backend/gig/316DDrtFwcsWoGDr2yPa.jpg', NULL, '2024-10-24 05:07:03', '2024-10-24 05:07:03'),
(38, 28, 2, 28, 'Hello', 0, '', NULL, '2024-10-24 10:54:46', '2024-10-24 10:54:46'),
(42, 2, 2, 2, 'Thank you, and I look forward to your response.: \n                    This message relates to: \"I will create a minimalist logo design for your business\"! We wish you great success!', 0, 'https://api.isumax.com/backend/gig/316DDrtFwcsWoGDr2yPa.jpg', NULL, '2024-10-24 12:48:57', '2024-10-24 12:48:57'),
(43, 31, 24, 31, 'Thank you, and I look forward to your response.: \r\n                    This message relates to: \"I will create ai chatbot custom gpt using chatgpt api and integrate in website\"! We wish you great success!', 0, 'https://api.isumax.com/backend/gig/K2PkLJIfWOnKGBmua2ca.jpg', NULL, '2024-10-25 11:51:27', '2024-10-25 11:51:27'),
(44, 31, 24, 31, 'Thank you, and I look forward to your response.: \r\n                    This message relates to: \"I will create ai chatbot custom gpt using chatgpt api and integrate in website\"! We wish you great success!', 0, 'https://api.isumax.com/backend/gig/K2PkLJIfWOnKGBmua2ca.jpg', NULL, '2024-10-25 12:05:06', '2024-10-25 12:05:06'),
(45, 31, 24, 31, 'hiii', 0, '', NULL, '2024-10-25 12:05:20', '2024-10-25 12:05:20'),
(46, 9, 11, 9, 'Thank you, and I look forward to your response.: \r\n                    This message relates to: \"I will design and develop a perfect business website\"! We wish you great success!', 1, 'https://api.isumax.com/backend/gig/9SnThWigDFCcbyX46qw9.jpg', NULL, '2024-10-25 13:20:52', '2025-02-12 11:31:51'),
(47, 9, 11, 9, 'hello', 1, '', NULL, '2024-10-25 13:21:02', '2025-02-12 11:31:51'),
(48, 11, 9, 11, 'hiiiiiiiii', 1, '', NULL, '2024-10-25 13:22:00', '2025-02-16 07:19:29'),
(49, 11, 9, 11, 'hello', 1, '/backend/files/GyDnlqmIEP36tX7rECag.jpeg', NULL, '2024-10-25 13:22:56', '2025-02-16 07:19:29'),
(50, 9, 11, 9, 'this is buyer', 1, '', NULL, '2024-10-25 13:31:26', '2025-02-12 11:31:51'),
(51, 11, 9, 11, 'i am seller', 1, '', NULL, '2024-10-25 13:32:33', '2025-02-16 07:19:29'),
(52, 9, 11, 9, 'seller11111', 1, '', NULL, '2024-10-25 13:33:33', '2025-02-12 11:31:51'),
(53, 11, 9, 11, 'amir5', 1, '', NULL, '2024-10-25 13:33:45', '2025-02-16 07:19:29'),
(54, 9, 11, 9, 'Hellow', 1, '', NULL, '2024-10-25 13:33:57', '2025-02-12 11:31:51'),
(55, 11, 9, 11, 'working right', 1, '', NULL, '2024-10-25 13:34:10', '2025-02-16 07:19:29'),
(56, 9, 11, 9, 'do you need any help?', 1, '', NULL, '2024-10-25 13:35:09', '2025-02-12 11:31:51'),
(57, 11, 9, 11, 'Yes help me.....', 1, '', NULL, '2024-10-25 13:35:30', '2025-02-16 07:19:29'),
(58, 9, 11, 9, 'are you here??', 1, '', NULL, '2024-10-25 13:41:03', '2025-02-12 11:31:51'),
(59, 11, 9, 11, 'Yes', 1, '', NULL, '2024-10-25 13:41:12', '2025-02-16 07:19:29'),
(60, 11, 9, 11, 'have you got the point??', 1, '', NULL, '2024-10-25 13:43:24', '2025-02-16 07:19:29'),
(61, 11, 9, 11, 'hii', 1, '', NULL, '2024-10-26 07:33:44', '2025-02-16 07:19:29'),
(62, 9, 11, 9, 'hiiiiiiiii', 1, '', NULL, '2024-10-26 08:24:10', '2025-02-12 11:31:51'),
(63, 11, 9, 11, 'hello', 1, '', NULL, '2024-10-26 08:26:17', '2025-02-16 07:19:29'),
(64, 11, 9, 11, 'hello', 1, '', NULL, '2024-10-26 08:26:18', '2025-02-16 07:19:29'),
(65, 11, 9, 11, 'hello', 1, '', NULL, '2024-10-26 08:26:18', '2025-02-16 07:19:29'),
(66, 9, 11, 9, 'Thank you, and I look forward to your response.: \r\n                    This message relates to: \"I will design and develop a perfect business website\"! We wish you great success!', 1, 'https://api.isumax.com/backend/gig/9SnThWigDFCcbyX46qw9.jpg', NULL, '2024-10-26 10:02:46', '2025-02-12 11:31:51'),
(67, 9, 11, 9, 'i am an buyer and i want to talk with you', 1, '', NULL, '2024-10-26 10:03:14', '2025-02-12 11:31:51'),
(68, 9, 13, 9, 'Thank you, and I look forward to your response.: \r\n                    This message relates to: \"I will create amazon affiliate marketing autopilot website with autoblog\"! We wish you great success!', 1, 'https://api.isumax.com/backend/gig/2fCWJLOtNGrxIrN20eMU.jpg', NULL, '2024-10-26 10:32:21', '2025-02-12 11:31:51'),
(69, 9, 13, 9, 'Thank you, and I look forward to your response.: \r\n                    This message relates to: \"I will create amazon affiliate marketing autopilot website with autoblog\"! We wish you great success!', 1, 'https://api.isumax.com/backend/gig/2fCWJLOtNGrxIrN20eMU.jpg', NULL, '2024-10-26 10:33:50', '2025-02-12 11:31:51'),
(70, 9, 13, 9, 'Thank you, and I look forward to your response.: \r\n                    This message relates to: \"I will create amazon affiliate marketing autopilot website with autoblog\"! We wish you great success!', 1, 'https://api.isumax.com/backend/gig/2fCWJLOtNGrxIrN20eMU.jpg', NULL, '2024-10-26 10:36:51', '2025-02-12 11:31:51'),
(71, 13, 8, 13, 'hello', 1, '', NULL, '2024-10-26 10:46:19', '2025-02-16 07:28:01'),
(72, 9, 13, 9, 'Thank you, and I look forward to your response.: \r\n                    This message relates to: \"I will create amazon affiliate marketing autopilot website with autoblog\"! We wish you great success!', 1, 'https://api.isumax.com/backend/gig/2fCWJLOtNGrxIrN20eMU.jpg', NULL, '2024-10-26 10:57:21', '2025-02-12 11:31:51'),
(73, 9, 11, 9, 'Thank you, and I look forward to your response.: \r\n                    This message relates to: \"I will design and develop a perfect business website\"! We wish you great success!', 1, 'https://api.isumax.com/backend/gig/9SnThWigDFCcbyX46qw9.jpg', NULL, '2024-10-26 10:57:54', '2025-02-12 11:31:51'),
(74, 9, 11, 9, 'ergvsgdfd', 1, '', NULL, '2024-10-26 10:58:00', '2025-02-12 11:31:51'),
(75, 9, 11, 9, 'Thank you, and I look forward to your response.: \r\n                    This message relates to: \"I will design and develop a perfect business website\"! We wish you great success!', 1, 'https://api.isumax.com/backend/gig/9SnThWigDFCcbyX46qw9.jpg', NULL, '2024-10-26 11:01:31', '2025-02-12 11:31:51'),
(76, 9, 11, 9, 'hello', 1, '', NULL, '2024-10-26 11:01:42', '2025-02-12 11:31:51'),
(77, 9, 11, 9, 'this is seller one text box', 1, '', NULL, '2024-10-26 11:01:55', '2025-02-12 11:31:51'),
(78, 9, 11, 9, NULL, 1, '', NULL, '2024-10-26 11:01:58', '2025-02-12 11:31:51'),
(79, 9, 13, 9, 'Thank you, and I look forward to your response.: \r\n                    This message relates to: \"I will create amazon affiliate marketing autopilot website with autoblog\"! We wish you great success!', 1, 'https://api.isumax.com/backend/gig/2fCWJLOtNGrxIrN20eMU.jpg', NULL, '2024-10-26 11:02:10', '2025-02-12 11:31:51'),
(80, 9, 11, 9, 'Thank you, and I look forward to your response.: \r\n                    This message relates to: \"I will design and develop a perfect business website\"! We wish you great success!', 1, 'https://api.isumax.com/backend/gig/9SnThWigDFCcbyX46qw9.jpg', NULL, '2024-10-26 11:06:02', '2025-02-12 11:31:51'),
(81, 9, 11, 9, 'helloew34334', 1, '', NULL, '2024-10-26 11:06:18', '2025-02-12 11:31:51'),
(82, 9, 11, 9, 'ssssssssssssssssssss', 1, '', NULL, '2024-10-26 11:06:26', '2025-02-12 11:31:51'),
(83, 9, 11, 9, 'sdfsdfsdfsdfsdf', 1, '', NULL, '2024-10-26 11:08:13', '2025-02-12 11:31:51'),
(84, 9, 11, 9, 'Okay working', 1, '', NULL, '2024-10-26 11:08:24', '2025-02-12 11:31:51'),
(85, 9, 11, 9, 'cck whatsApp', 1, '', NULL, '2024-10-26 11:08:30', '2025-02-12 11:31:51'),
(86, 9, 11, 9, 'brother we have 2 gigs one is seller one and the otherone is seller 2', 1, '', NULL, '2024-10-26 11:09:19', '2025-02-12 11:31:51'),
(87, 9, 11, 9, 'messages sending to selller one but not sending to seller 2', 1, '', NULL, '2024-10-26 11:09:59', '2025-02-12 11:31:51'),
(88, 9, 13, 9, 'Thank you, and I look forward to your response.: \r\n                    This message relates to: \"I will create amazon affiliate marketing autopilot website with autoblog\"! We wish you great success!', 1, 'https://api.isumax.com/backend/gig/2fCWJLOtNGrxIrN20eMU.jpg', NULL, '2024-10-26 11:10:23', '2025-02-12 11:31:51'),
(89, 13, 13, 13, 'Thank you, and I look forward to your response.: \r\n                    This message relates to: \"I will create amazon affiliate marketing autopilot website with autoblog\"! We wish you great success!', 1, 'https://api.isumax.com/backend/gig/2fCWJLOtNGrxIrN20eMU.jpg', NULL, '2024-10-26 11:12:07', '2025-02-16 07:28:01'),
(90, 9, 13, 9, 'Thank you, and I look forward to your response.: \r\n                    This message relates to: \"I will create amazon affiliate marketing autopilot website with autoblog\"! We wish you great success!', 1, 'https://api.isumax.com/backend/gig/2fCWJLOtNGrxIrN20eMU.jpg', NULL, '2024-10-26 11:14:54', '2025-02-12 11:31:51'),
(91, 9, 13, 9, 'hello', 1, '', NULL, '2024-10-26 11:22:09', '2025-02-12 11:31:51'),
(92, 9, 11, 9, 'aaa', 1, '', NULL, '2024-10-26 11:22:20', '2025-02-12 11:31:51'),
(93, 9, 13, 9, 'zzz', 1, '', NULL, '2024-10-26 11:22:24', '2025-02-12 11:31:51'),
(94, 9, 14, 9, 'Thank you, and I look forward to your response.: \r\n                    This message relates to: \"i will do digital Marketing\"! We wish you great success!', 1, 'https://api.isumax.com/backend/gig/Mh1pVvJpdXOm4BjoGPcX.jpg', NULL, '2024-10-26 11:25:28', '2025-02-12 11:31:51'),
(95, 9, 14, 9, 'hello its amir', 1, '', NULL, '2024-10-26 11:25:37', '2025-02-12 11:31:51'),
(96, 14, 9, 14, 'ok', 1, '', NULL, '2024-10-26 11:26:03', '2024-11-04 14:23:10'),
(97, 3, 11, 3, 'Thank you, and I look forward to your response.: \n                    This message relates to: \"I will design and develop a perfect business website\"! We wish you great success!', 1, 'https://api.isumax.com/backend/gig/9SnThWigDFCcbyX46qw9.jpg', NULL, '2024-10-27 12:47:40', '2025-02-16 07:42:41'),
(98, 11, 3, 11, 'ok boss', 1, '', NULL, '2024-10-27 12:48:56', '2025-02-16 07:19:29'),
(99, 11, 3, 11, 'Hello', 1, '', '7:08 PM', '2024-10-27 13:08:43', '2025-02-16 07:19:29'),
(100, 11, 3, 11, 'Ami', 1, '', '7:08 PM', '2024-10-27 13:08:46', '2025-02-16 07:19:29'),
(101, 11, 3, 11, 'Hello job', 1, '', '7:09 PM', '2024-10-27 13:09:28', '2025-02-16 07:19:29'),
(102, 3, 11, 3, 'k', 1, '', '12:09 PM', '2024-10-28 07:09:52', '2025-02-16 07:42:41'),
(103, 3, 11, 3, '3', 1, '', '12:10 PM', '2024-10-28 07:10:01', '2025-02-16 07:42:41'),
(104, 13, 13, 13, 'seller11111', 1, '', '12:15 PM', '2024-10-28 07:15:51', '2025-02-16 07:28:01'),
(105, 13, 9, 13, 'hiii', 1, '', '12:35 PM', '2024-10-28 07:35:07', '2025-02-16 07:28:01'),
(106, 5, 11, 5, 'Thank you, and I look forward to your response.: \r\n                    This message relates to: \"I will design and develop a perfect business website\"! We wish you great success!', 1, 'https://api.isumax.com/backend/gig/9SnThWigDFCcbyX46qw9.jpg', NULL, '2024-10-28 08:48:34', '2025-02-15 05:07:23'),
(107, 5, 11, 5, 'tgvrdwrfvg', 1, '', '1:48 PM', '2024-10-28 08:48:42', '2025-02-15 05:07:23'),
(108, 5, 11, 5, 'efsddsfdf', 1, '', '1:58 PM', '2024-10-28 08:58:20', '2025-02-15 05:07:23'),
(109, 5, 11, 5, 'fbfgb', 1, '', '1:58 PM', '2024-10-28 08:58:38', '2025-02-15 05:07:23'),
(110, 3, 11, 3, 'sdfsdfsdfsdfsdf', 1, '', '2:24 PM', '2024-10-28 09:24:55', '2025-02-16 07:42:41'),
(111, 3, 11, 3, 'ddd', 1, '', '2:25 PM', '2024-10-28 09:25:23', '2025-02-16 07:42:41'),
(112, 3, 11, 3, 'database working perfecttly', 1, '', '2:27 PM', '2024-10-28 09:27:14', '2025-02-16 07:42:41'),
(113, 3, 11, 3, 'sdfsdfsdf', 1, '', '2:34 PM', '2024-10-28 09:34:47', '2025-02-16 07:42:41'),
(114, 3, 11, 3, 'Okay done', 1, '', '2:34 PM', '2024-10-28 09:34:57', '2025-02-16 07:42:41'),
(115, 3, 11, 3, 'brother see this error', 1, '', '2:35 PM', '2024-10-28 09:35:06', '2025-02-16 07:42:41'),
(116, 9, 11, 9, 'hiiiiiiiii', 1, '', '2:35 PM', '2024-10-28 09:35:14', '2025-02-12 11:31:51'),
(117, 3, 11, 3, 'i show u wait', 1, '', '2:35 PM', '2024-10-28 09:35:14', '2025-02-16 07:42:41'),
(118, 4, 15, 4, 'Thank you, and I look forward to your response.: \r\n                    This message relates to: \"I will do custom software development saas web application as software developer\"! We wish you great success!', 1, 'https://api.isumax.com/backend/gig/MLx055PQexaUwvDSKC00.jpg', NULL, '2024-10-28 10:00:33', '2025-01-04 10:41:54'),
(119, 4, 15, 4, 'hii  i am applying', 1, '', '3:02 PM', '2024-10-28 10:02:07', '2025-01-04 10:41:54'),
(120, 11, 9, 11, 'hhhhhhhhh', 1, '', '7:55 PM', '2024-10-28 14:55:19', '2025-02-16 07:19:29'),
(121, 3, 11, 3, 'yes', 1, '', '12:55 PM', '2024-10-31 07:55:03', '2025-02-16 07:42:41'),
(122, 9, 14, 9, 'dfadsfadf', 1, '', '4:15 PM', '2024-10-31 11:15:26', '2025-02-12 11:31:51'),
(123, 11, 5, 11, 'hii', 1, '', '7:13 PM', '2024-11-04 14:13:02', '2025-02-16 07:19:29'),
(124, 11, 5, 11, 'hii', 1, '', '7:13 PM', '2024-11-04 14:13:02', '2025-02-16 07:19:29'),
(125, 11, 9, 11, 'hii', 1, '', '7:14 PM', '2024-11-04 14:14:37', '2025-02-16 07:19:29'),
(126, 11, 5, 11, 'ffff', 1, '', '7:15 PM', '2024-11-04 14:15:46', '2025-02-16 07:19:29'),
(127, 3, 11, 3, 'ff', 1, '', '3:35 PM', '2025-01-04 10:35:44', '2025-02-16 07:42:41'),
(128, 3, 11, 3, NULL, 1, '/backend/files/lbzE2pahH1KOqUKWXO9C.png', '3:36 PM', '2025-01-04 10:36:03', '2025-02-16 07:42:41'),
(129, 15, 4, 15, 'gfgdhjmk', 0, '', '3:41 PM', '2025-01-04 10:41:53', '2025-01-04 10:41:53'),
(130, 3, 11, 3, 'Thank you, and I look forward to your response.: \r\n                    This message relates to: \"i Will Design and Develop a new Game from scratch\"! We wish you great success!', 1, 'https://api.isumax.com/backend/gig/evwMlCI9soVuBWX7J59g.jpg', NULL, '2025-01-08 03:46:08', '2025-02-16 07:42:41'),
(131, 3, 11, 3, 'Yecc', 1, '', '8:46 AM', '2025-01-08 03:46:36', '2025-02-16 07:42:41'),
(132, 11, 3, 11, 'ssd', 1, '', '4:03 AM', '2025-02-10 22:03:50', '2025-02-16 07:19:29'),
(133, 11, 3, 11, '+696+99+', 1, '', '4:18 AM', '2025-02-10 22:18:05', '2025-02-16 07:19:29'),
(134, 11, 9, 11, 'kkkk', 1, '/backend/files/lTZ0PTA3vu4dZvkXc2Uw.jpg', '4:21 AM', '2025-02-10 22:21:31', '2025-02-16 07:19:29'),
(135, 11, 9, 11, 'kkkk', 1, '/backend/files/SNDEfva9Bsfbo6qcpdBc.jpg', '4:21 AM', '2025-02-10 22:21:34', '2025-02-16 07:19:29'),
(136, 3, 11, 3, 'Hello', 1, '', '9:01 PM', '2025-02-11 15:01:09', '2025-02-16 07:42:41'),
(137, 3, 11, 3, 'BIjon how are you', 1, '', '9:01 PM', '2025-02-11 15:01:41', '2025-02-16 07:42:41'),
(138, 5, 11, 5, '554898888', 1, '', '9:05 PM', '2025-02-11 15:05:30', '2025-02-15 05:07:23'),
(139, 3, 11, 3, 'Hello Bijon how are you', 1, '', '7:39 AM', '2025-02-12 01:39:11', '2025-02-16 07:42:41'),
(140, 11, 3, 11, 'are you okay', 1, '', '7:39 AM', '2025-02-12 01:39:44', '2025-02-16 07:19:29'),
(141, 3, 11, 3, 'Thanks', 1, '', '7:39 AM', '2025-02-12 01:39:55', '2025-02-16 07:42:41'),
(142, 11, 3, 11, 'ssssss', 1, '/backend/files/YXxAsoWGvPpwL50UlRLl.jpeg', '7:41 AM', '2025-02-12 01:41:15', '2025-02-16 07:19:29'),
(143, 11, 3, 11, 'd', 1, '/backend/files/WheK5lBAz9KYUonQZkOG.jpeg', '7:59 AM', '2025-02-12 01:59:18', '2025-02-16 07:19:29'),
(144, 11, 3, 11, 'test', 1, '/backend/files/S8jjY2N47ske4HCVCpTo.zip', '7:59 AM', '2025-02-12 01:59:51', '2025-02-16 07:19:29'),
(145, 11, 3, 11, '[object FormData]', 1, '', '8:47 AM', '2025-02-12 02:47:21', '2025-02-16 07:19:29'),
(146, 11, 3, 11, '[object FormData]', 1, '/backend/files/8rkojxWXT0ZWhUf25q2o.zip', '8:47 AM', '2025-02-12 02:47:29', '2025-02-16 07:19:29'),
(147, 11, 3, 11, '[object FormData]', 1, '', '8:47 AM', '2025-02-12 02:47:47', '2025-02-16 07:19:29'),
(148, 11, 3, 11, 'dsfsdfsfsdfsdfsdfsdfsdf', 1, '', '8:49 AM', '2025-02-12 02:49:05', '2025-02-16 07:19:29'),
(149, 11, 3, 11, 'File send', 1, '/backend/files/NkrGAPBt8YJVj7RFWZwh.jpeg', '8:49 AM', '2025-02-12 02:49:13', '2025-02-16 07:19:29'),
(150, 11, 3, 11, 'File send', 1, '/backend/files/qda8o7DMKGOo06eak44g.zip', '8:49 AM', '2025-02-12 02:49:55', '2025-02-16 07:19:29'),
(151, 11, 3, 11, 'File send', 1, '/backend/files/ukAUf48PfMWdH2iO6Zyx.zip', '9:01 AM', '2025-02-12 03:01:17', '2025-02-16 07:19:29'),
(152, 11, 3, 11, 'ddddddddddddddddddd', 1, '', '10:07 AM', '2025-02-12 04:07:24', '2025-02-16 07:19:29'),
(153, 11, 3, 11, 'File send', 1, '/backend/files/jQSZpvQ2Ei0KH7NfwIQM.zip', '10:07 AM', '2025-02-12 04:07:30', '2025-02-16 07:19:29'),
(154, 11, 3, 11, 'File send', 1, '/backend/files/oDWhlBBE6y7WgC22Lkqi.zip', '10:09 AM', '2025-02-12 04:09:29', '2025-02-16 07:19:29'),
(155, 11, 3, 11, 'File send', 1, '', '10:12 AM', '2025-02-12 04:12:25', '2025-02-16 07:19:29'),
(156, 11, 3, 11, 'File send', 1, '/backend/files/DZvl7eLPBbsCrTN4D9e3.zip', '10:12 AM', '2025-02-12 04:12:38', '2025-02-16 07:19:29'),
(157, 11, 3, 11, 'File send', 1, '/backend/files/D0bnfWfK4Z7sarcT750w.jpeg', '10:42 AM', '2025-02-12 04:42:13', '2025-02-16 07:19:29'),
(158, 11, 3, 11, 'File send', 1, '/backend/files/KcsnXdAdTlLxTdoI3LEG.pdf', '10:47 AM', '2025-02-12 04:48:00', '2025-02-16 07:19:29'),
(159, 3, 11, 3, 'Hello', 1, '', '10:59 AM', '2025-02-12 04:59:39', '2025-02-16 07:42:41'),
(160, 11, 3, 11, 'Yes Im good you', 1, '', '11:00 AM', '2025-02-12 05:00:27', '2025-02-16 07:19:29'),
(161, 11, 3, 11, 'ddddsssss', 1, '/backend/files/kHxHy2ci7s0Jgh7MdYHE.zip', '11:01 AM', '2025-02-12 05:01:42', '2025-02-16 07:19:29'),
(162, 11, 3, 11, 'File send', 1, '/backend/files/7tRDdmcWq6qL326plVfX.zip', '11:01 AM', '2025-02-12 05:01:56', '2025-02-16 07:19:29'),
(163, 11, 3, 11, '5985989999999', 1, '', '11:02 AM', '2025-02-12 05:02:33', '2025-02-16 07:19:29'),
(164, 3, 11, 3, 'Bijon lession to me', 1, '', '10:59 AM', '2025-02-12 04:59:39', '2025-02-16 07:42:41'),
(165, 11, 5, 11, 'Hello boss', 1, '', '10:19 PM', '2025-02-12 16:19:26', '2025-02-16 07:19:29'),
(166, 11, 3, 11, 'Hello boss', 1, '', '10:19 PM', '2025-02-12 16:19:32', '2025-02-16 07:19:29'),
(167, 11, 9, 11, 'Hello boss', 1, '', '10:19 PM', '2025-02-12 16:19:37', '2025-02-16 07:19:29'),
(168, 11, 9, 11, 'Hello', 1, '', '11:32 PM', '2025-02-12 17:32:20', '2025-02-16 07:19:29'),
(169, 11, 9, 11, 'File send', 1, '/backend/files/56FBA4NPSNmfnWvhsXYc.jpg', '11:32 PM', '2025-02-12 17:32:41', '2025-02-16 07:19:29'),
(170, 11, 9, 11, 'File send', 1, '/backend/files/fPOMUlZ6OF5kN1z2FFce.zip', '11:33 PM', '2025-02-12 17:33:02', '2025-02-16 07:19:29'),
(171, 11, 9, 11, 'File send', 1, '/backend/files/df5QzczvxlOzH4kR6dPu.pdf', '11:33 PM', '2025-02-12 17:33:28', '2025-02-16 07:19:29'),
(172, 3, 11, 3, 'HI', 1, '', NULL, '2025-02-14 21:13:03', '2025-02-16 07:42:41'),
(173, 11, 3, 11, 'Hello boss', 1, '', '6:36 PM', '2025-02-15 12:36:46', '2025-02-16 07:19:29'),
(174, 11, 3, 11, 'boss come to me...', 1, '', '6:37 PM', '2025-02-15 12:37:15', '2025-02-16 07:19:29'),
(175, 3, 11, 3, 'Okay coming', 1, '', '6:44 PM', '2025-02-15 12:44:12', '2025-02-16 07:42:41'),
(176, 3, 13, 3, 'Thank you, and I look forward to your response.: \r\n                    This message relates to: \"I will create amazon affiliate marketing autopilot website with autoblog\"! We wish you great success!', 1, 'http://127.0.0.1:8000/backend/gig/2fCWJLOtNGrxIrN20eMU.jpg', NULL, '2025-02-16 03:41:37', '2025-02-16 07:42:41'),
(177, 3, 13, 3, 'Hello brother seller 2', 1, '', '9:42 AM', '2025-02-16 03:42:01', '2025-02-16 07:42:41'),
(178, 13, 3, 13, 'Brother are you okay.....', 1, '', '9:44 AM', '2025-02-16 03:44:02', '2025-02-16 07:28:01'),
(179, 11, 3, 11, 'Hello brother', 1, '', '6:26 PM', '2025-02-16 12:26:51', '2025-02-16 07:19:29'),
(180, 3, 13, 3, 'Okay boss', 1, '', '7:26 PM', '2025-02-16 13:26:20', '2025-02-16 07:42:41');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `id` int(11) NOT NULL,
  `seller_id` int(11) DEFAULT NULL,
  `buyer_id` int(11) DEFAULT NULL,
  `name` mediumtext DEFAULT NULL,
  `type` int(11) DEFAULT NULL COMMENT '2=Seller,3=buyer',
  `messages` text DEFAULT NULL,
  `seen` tinyint(1) DEFAULT NULL,
  `status` int(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`id`, `seller_id`, `buyer_id`, `name`, `type`, `messages`, `seen`, `status`, `created_at`, `updated_at`) VALUES
(1, 2, NULL, 'Hello Bijon', 2, 'How are you', 1, 1, '2024-11-02 06:22:31', '2025-02-12 05:20:44'),
(2, NULL, 3, 'Dear client', 3, 'Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client Dear client', 1, 1, '2024-11-04 09:58:04', '2025-02-15 05:35:13'),
(3, 11, NULL, 'Website Development', 2, 'Why you cancel ALot of orders your Acounnt might b in risk', 1, 1, '2024-11-04 09:58:40', '2025-02-12 05:20:46'),
(4, 11, NULL, 'Network Development', 2, 'Network Development. Why you cancel ALot of orders your Acounnt might b in risk', NULL, 1, '2024-11-04 09:58:40', '2024-11-04 09:58:40'),
(5, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', NULL, 1, '2024-11-04 09:58:40', '2024-11-04 09:58:40'),
(6, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', NULL, 1, '2024-11-04 09:58:40', '2024-11-04 09:58:40'),
(7, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', NULL, 1, '2024-11-04 09:58:40', '2024-11-04 09:58:40'),
(8, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', NULL, 1, '2024-11-04 09:58:40', '2024-11-04 09:58:40'),
(9, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', NULL, 1, '2024-11-04 09:58:40', '2024-11-04 09:58:40'),
(10, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', NULL, 1, '2024-11-04 09:58:40', '2024-11-04 09:58:40'),
(11, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', NULL, 1, '2024-11-04 09:58:40', '2024-11-04 09:58:40'),
(12, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', NULL, 1, '2024-11-04 09:58:40', '2024-11-04 09:58:40'),
(13, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', NULL, 1, '2024-11-04 09:58:40', '2024-11-04 09:58:40'),
(14, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', NULL, 1, '2024-11-04 09:58:40', '2024-11-04 09:58:40'),
(15, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', NULL, 1, '2024-11-04 09:58:40', '2024-11-04 09:58:40'),
(16, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', NULL, 1, '2024-11-04 09:58:40', '2024-11-04 09:58:40'),
(17, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', NULL, 1, '2024-11-04 09:58:40', '2024-11-04 09:58:40'),
(18, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', NULL, 1, '2024-11-04 09:58:40', '2024-11-04 09:58:40'),
(19, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', NULL, 1, '2024-11-04 09:58:40', '2024-11-04 09:58:40'),
(20, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', NULL, 1, '2024-11-04 09:58:40', '2024-11-04 09:58:40'),
(21, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', NULL, 1, '2024-11-04 09:58:40', '2024-11-04 09:58:40'),
(22, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', NULL, 1, '2024-11-04 09:58:40', '2024-11-04 09:58:40'),
(23, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', NULL, 1, '2024-11-04 09:58:40', '2024-11-04 09:58:40'),
(24, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', NULL, 1, '2024-11-04 09:58:40', '2024-11-04 09:58:40'),
(25, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', NULL, 1, '2024-11-04 09:58:40', '2024-11-04 09:58:40'),
(26, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', NULL, 1, '2024-11-04 09:58:40', '2024-11-04 09:58:40'),
(27, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', 1, 1, '2024-11-04 09:58:40', '2025-02-11 05:34:05'),
(28, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', NULL, 1, '2024-11-04 09:58:40', '2024-11-04 09:58:40'),
(29, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', NULL, 1, '2024-11-04 09:58:40', '2024-11-04 09:58:40'),
(30, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', NULL, 1, '2024-11-04 09:58:40', '2024-11-04 09:58:40'),
(31, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', NULL, 1, '2024-11-04 09:58:40', '2024-11-04 09:58:40'),
(32, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', 1, 1, '2024-11-04 09:58:40', '2025-02-11 05:32:20'),
(33, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', 1, 1, '2024-11-04 09:58:40', '2025-02-11 05:32:19'),
(34, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', 1, 1, '2024-11-04 09:58:40', '2025-02-15 05:32:22'),
(35, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', 1, 1, '2024-11-04 09:58:40', '2025-02-15 05:32:21'),
(36, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', 1, 1, '2024-11-04 09:58:40', '2025-02-11 05:48:07'),
(37, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', 1, 1, '2024-11-04 09:58:40', '2025-02-11 05:46:46'),
(38, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', 1, 1, '2024-11-04 09:58:40', '2025-02-11 05:32:27'),
(39, 11, NULL, 'Game Deveploment', 2, 'Game Deveploment Why you cancel ALot of orders your Acounnt might b in risk', 1, 1, '2024-11-04 09:58:40', '2025-02-11 05:48:05'),
(40, 11, NULL, 'Game Deveploment', 2, 'This Last notifications ', 1, 1, '2024-11-04 09:58:40', '2025-02-11 05:31:44'),
(41, NULL, 3, 'Hello client', 3, 'Hello clientHello clientHello client', 1, 1, '2024-11-04 09:58:04', '2025-02-16 05:31:10');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `orderId` varchar(255) NOT NULL,
  `gig_id` int(11) DEFAULT NULL,
  `buyerId` int(11) DEFAULT NULL,
  `sellerId` int(11) DEFAULT NULL,
  `selected_packages` varchar(255) DEFAULT NULL,
  `selected_price` varchar(255) DEFAULT NULL,
  `tips` int(11) DEFAULT NULL,
  `service_fee` decimal(10,2) DEFAULT NULL,
  `sub_total` decimal(10,2) DEFAULT NULL,
  `delivery_day` int(11) DEFAULT NULL,
  `order_status` varchar(255) DEFAULT NULL COMMENT '1=Order Placed, 2=In Progess, 3=Cancel, 4=Delivery, 5=Complete',
  `company_commission` int(11) DEFAULT NULL,
  `l_one_buyer` int(11) DEFAULT NULL,
  `lev_1` decimal(10,2) DEFAULT NULL,
  `l_two_buyer` int(11) DEFAULT NULL,
  `lev_2` decimal(10,2) DEFAULT NULL,
  `l_three_buyer` int(11) DEFAULT NULL,
  `lev_3` decimal(10,2) DEFAULT NULL,
  `l_four_buyer` int(11) DEFAULT NULL,
  `lev_4` decimal(10,2) DEFAULT NULL,
  `l_five_buyer` int(11) DEFAULT NULL,
  `lev_5` decimal(10,2) DEFAULT NULL,
  `seller_review_sts` int(11) DEFAULT 0,
  `return_status` text NOT NULL,
  `cancel_resion` text DEFAULT NULL,
  `updated_at` datetime DEFAULT current_timestamp(),
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `delivery_day_convert_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `orderId`, `gig_id`, `buyerId`, `sellerId`, `selected_packages`, `selected_price`, `tips`, `service_fee`, `sub_total`, `delivery_day`, `order_status`, `company_commission`, `l_one_buyer`, `lev_1`, `l_two_buyer`, `lev_2`, `l_three_buyer`, `lev_3`, `l_four_buyer`, `lev_4`, `l_five_buyer`, `lev_5`, `seller_review_sts`, `return_status`, `cancel_resion`, `updated_at`, `created_at`, `delivery_day_convert_date`) VALUES
(1, '736042-24', 1, 7, 11, 'Premium', '900', 0, 2.00, 902.00, 4, '5', 20, 6, 0.80, 5, 0.60, 4, 0.40, 3, 0.20, NULL, 0.10, 1, '', NULL, '2024-10-26 03:05:35', '2024-10-25 13:02:50', '2024-10-29 13:02:50'),
(2, '930775-24', 1, 9, 11, 'Standart', '400', 0, 2.00, 402.00, 1, '5', 20, 7, 0.80, 6, 0.60, 5, 0.40, 4, 0.20, 3, 0.10, 1, '', NULL, '2024-10-26 08:36:14', '2024-10-25 13:19:19', '2024-10-26 13:19:19'),
(3, '956993-24', 1, 9, 11, 'Standart', '400', 0, 2.00, 402.00, 1, '3', 20, 7, 0.80, 6, 0.60, 5, 0.40, 4, 0.20, 3, 0.10, 0, '', NULL, '2024-10-25 13:20:23', '2024-10-25 13:19:26', '2024-10-26 13:19:26'),
(4, '994644-24', 2, 9, 13, 'Basic', '300', 0, 2.00, 302.00, 2, '1', 20, 7, 0.80, 6, 0.60, 5, 0.40, 4, 0.20, 3, 0.10, 0, '', NULL, '2024-10-26 10:32:16', '2024-10-26 10:32:16', '2024-10-28 10:32:16'),
(5, '913111-24', 1, 9, 11, 'Basic', '150', 0, 2.00, 152.00, 1, '3', 20, 7, 0.80, 6, 0.60, 5, 0.40, 4, 0.20, 3, 0.10, 0, '', NULL, '2024-10-28 08:27:50', '2024-10-28 08:01:26', '2024-10-29 08:01:26'),
(6, '925890-24', 1, 9, 11, 'Basic', '150', 0, 2.00, 152.00, 1, '3', 20, 7, 0.80, 6, 0.60, 5, 0.40, 4, 0.20, 3, 0.10, 0, '', NULL, '2024-10-28 08:28:54', '2024-10-28 08:03:32', '2024-10-29 08:03:32'),
(7, '765127-24', 1, 7, 11, 'Basic', '150', 0, 2.00, 152.00, 1, '3', 20, 6, 0.80, 5, 0.60, 4, 0.40, 3, 0.20, NULL, 0.10, 0, '', NULL, '2024-10-28 08:28:49', '2024-10-28 08:27:01', '2024-10-29 08:27:01'),
(8, '413187-24', 4, 4, 15, 'Standart', '400', 0, 2.00, 402.00, 2, '5', 20, 3, 0.80, NULL, 0.60, NULL, 0.40, NULL, 0.20, NULL, 0.10, 1, '', NULL, '2024-10-28 10:40:22', '2024-10-28 10:00:14', '2024-10-30 10:00:14'),
(9, '410977-24', 1, 4, 11, 'Basic', '150', 0, 2.00, 152.00, 1, '5', 20, 3, 0.40, NULL, 0.30, NULL, 0.20, NULL, 0.10, NULL, 0.10, 0, '', NULL, '2024-10-28 11:00:33', '2024-10-28 10:51:03', '2024-10-29 10:51:03'),
(10, '478943-24', 1, 4, 11, 'Basic', '150', 0, 2.00, 152.00, 1, '5', 20, 3, 0.40, NULL, 0.30, NULL, 0.20, NULL, 0.10, NULL, 0.10, 0, '', NULL, '2024-10-28 11:01:16', '2024-10-28 10:51:09', '2024-10-29 10:51:09'),
(11, '418060-24', 1, 4, 11, 'Basic', '150', 0, 2.00, 152.00, 1, '5', 20, 3, 0.40, NULL, 0.30, NULL, 0.20, NULL, 0.10, NULL, 0.10, 0, '', NULL, '2024-10-28 11:02:15', '2024-10-28 10:51:13', '2024-10-29 10:51:13'),
(12, '943016-24', 1, 9, 11, 'Basic', '150', 0, 2.00, 152.00, 1, '5', 20, 7, 0.40, 6, 0.30, 5, 0.20, 4, 0.10, 3, 0.10, 0, '', NULL, '2024-10-28 11:07:22', '2024-10-28 11:05:25', '2024-10-29 11:05:25'),
(13, '980766-24', 1, 9, 11, 'Basic', '150', 0, 2.00, 152.00, 1, '5', 20, 7, 0.40, 6, 0.30, 5, 0.20, 4, 0.10, 3, 0.10, 0, '', NULL, '2024-10-28 11:07:33', '2024-10-28 11:05:29', '2024-10-29 11:05:29'),
(14, '924688-24', 1, 9, 11, 'Basic', '150', 0, 2.00, 152.00, 1, '5', 20, 7, 0.40, 6, 0.30, 5, 0.20, 4, 0.10, 3, 0.10, 0, '', NULL, '2024-10-28 11:11:04', '2024-10-28 11:05:33', '2024-10-29 11:05:33'),
(15, '961497-24', 1, 9, 11, 'Basic', '150', 0, 2.00, 152.00, 1, '3', 20, 7, 0.40, 6, 0.30, 5, 0.20, 4, 0.10, 3, 0.10, 0, '', 'i have an personal essue', '2024-10-28 11:33:37', '2024-10-28 11:11:54', '2024-10-29 11:11:54'),
(16, '917249-24', 1, 9, 11, 'Basic', '150', 0, 2.00, 152.00, 1, '5', 20, 7, 0.40, 6, 0.30, 5, 0.20, 4, 0.10, 3, 0.10, 0, '', NULL, '2024-10-28 11:20:46', '2024-10-28 11:11:58', '2024-10-29 11:11:58'),
(17, '962693-24', 1, 9, 11, 'Basic', '150', 0, 2.00, 152.00, 1, '5', 20, 7, 0.40, 6, 0.30, 5, 0.20, 4, 0.10, 3, 0.10, 0, '', NULL, '2024-10-28 11:20:58', '2024-10-28 11:12:01', '2024-10-29 11:12:01'),
(18, '942000-24', 1, 9, 11, 'Basic', '150', 0, 2.00, 152.00, 1, '5', 20, 7, 0.40, 6, 0.30, 5, 0.20, 4, 0.10, 3, 0.10, 0, '', NULL, '2024-10-28 11:21:13', '2024-10-28 11:12:05', '2024-10-29 11:12:05'),
(19, '910999-24', 1, 9, 11, 'Basic', '150', 0, 2.00, 152.00, 1, '5', 20, 7, 0.40, 6, 0.30, 5, 0.20, 4, 0.10, 3, 0.10, 0, '', NULL, '2024-10-28 11:21:25', '2024-10-28 11:12:09', '2024-10-29 11:12:09'),
(20, '938158-24', 1, 9, 11, 'Basic', '150', 0, 2.00, 152.00, 1, '5', 20, 7, 0.40, 6, 0.30, 5, 0.20, 4, 0.10, 3, 0.10, 0, '', NULL, '2024-10-28 11:17:08', '2024-10-28 11:12:13', '2024-10-29 11:12:13'),
(21, '917028-24', 1, 9, 11, 'Basic', '150', 0, 2.00, 152.00, 1, '5', 20, 7, 0.40, 6, 0.30, 5, 0.20, 4, 0.10, 3, 0.10, 0, '', NULL, '2024-10-28 11:17:21', '2024-10-28 11:12:17', '2024-10-29 11:12:17'),
(22, '929097-24', 1, 9, 11, 'Basic', '150', 0, 2.00, 152.00, 1, '5', 20, 7, 0.40, 6, 0.30, 5, 0.20, 4, 0.10, 3, 0.10, 0, '', NULL, '2024-10-28 11:18:29', '2024-10-28 11:12:22', '2024-10-29 11:12:22'),
(23, '422266-24', 1, 4, 11, 'Basic', '150', 0, 2.00, 152.00, 1, '3', 20, 3, 0.40, NULL, 0.30, NULL, 0.20, NULL, 0.10, NULL, 0.10, 0, '', 'abc', '2024-10-28 11:39:52', '2024-10-28 11:36:57', '2024-10-29 11:36:57'),
(24, '488559-24', 1, 4, 11, 'Basic', '150', 0, 2.00, 152.00, 1, '3', 20, 3, 0.40, NULL, 0.30, NULL, 0.20, NULL, 0.10, NULL, 0.10, 0, '', 'rtfghjnk', '2024-10-28 11:50:40', '2024-10-28 11:49:25', '2024-10-29 11:49:25'),
(25, '450134-24', 1, 4, 11, 'Basic', '150', 0, 2.00, 152.00, 1, '5', 20, 3, 0.40, NULL, 0.30, NULL, 0.20, NULL, 0.10, NULL, 0.10, 0, '', NULL, '2024-10-31 13:42:56', '2024-10-28 11:51:41', '2024-10-29 11:51:41'),
(26, '953286-24', 1, 9, 11, 'Basic', '150', 0, 2.00, 152.00, 1, '3', 20, 7, 0.40, 6, 0.30, 5, 0.20, 4, 0.10, 3, 0.10, 0, '', 'due too', '2024-10-28 13:29:34', '2024-10-28 13:14:52', '2024-10-29 13:14:52'),
(27, '356338-25', 6, 3, 11, 'Basic', '300', 0, 2.00, 302.00, 1, '1', 20, NULL, 0.40, NULL, 0.30, NULL, 0.20, NULL, 0.10, NULL, 0.10, 1, '', NULL, '2025-02-14 21:53:04', '2025-02-11 10:34:43', '2025-02-12 16:34:43'),
(28, '386643-25', 9, 3, 11, 'Basic', '100', 0, 2.00, 102.00, 12, '5', 20, NULL, 0.40, NULL, 0.30, NULL, 0.20, NULL, 0.10, NULL, 0.10, 0, '', NULL, '2025-02-14 21:15:30', '2025-02-14 15:11:51', '2025-02-26 21:11:51');

-- --------------------------------------------------------

--
-- Table structure for table `orders_product`
--

CREATE TABLE `orders_product` (
  `id` int(11) NOT NULL,
  `order_id` varchar(255) NOT NULL,
  `product_id` int(11) NOT NULL,
  `price` double(10,5) NOT NULL,
  `discount` double(10,5) NOT NULL,
  `discount_status` int(11) NOT NULL,
  `vat` decimal(10,0) NOT NULL,
  `vat_status` int(11) NOT NULL,
  `last_price` double(10,5) NOT NULL,
  `qty` float NOT NULL,
  `color` varchar(255) NOT NULL,
  `size` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders_strip`
--

CREATE TABLE `orders_strip` (
  `id` int(11) NOT NULL,
  `order_id` varchar(255) DEFAULT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `payment_id` varchar(255) DEFAULT NULL,
  `payment_status` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders_strip`
--

INSERT INTO `orders_strip` (`id`, `order_id`, `total_amount`, `payment_id`, `payment_status`, `created_at`, `updated_at`) VALUES
(1, '9779490', 0.00, NULL, 'pending', '2025-02-17 12:37:11', '2025-02-17 12:37:12'),
(2, '9779490', 0.00, NULL, 'pending', '2025-02-17 12:56:26', '2025-02-17 12:56:26');

-- --------------------------------------------------------

--
-- Table structure for table `order_history`
--

CREATE TABLE `order_history` (
  `id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `seller_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `total` double(10,2) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_status`
--

CREATE TABLE `order_status` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_status`
--

INSERT INTO `order_status` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Order Placed', 'Upon successful checkout, the system records the order details and assigns a unique order ID.', '2023-12-04 11:15:23', '2023-12-04 05:55:06'),
(2, 'In Progess', 'In Progess', '2023-12-04 11:15:23', '2023-12-04 05:55:48'),
(3, 'Cancel', 'Cancel', '2023-12-04 11:15:23', '2023-12-04 05:56:14'),
(4, 'Delivery', 'Delivery', '2023-12-04 11:15:23', '2023-12-04 05:56:45'),
(5, 'Complete', 'Complete', '2023-12-04 11:15:23', '2023-12-04 05:56:45');

-- --------------------------------------------------------

--
-- Table structure for table `packages`
--

CREATE TABLE `packages` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `number_of_referell` varchar(255) DEFAULT NULL,
  `number_of_sales` varchar(255) DEFAULT NULL,
  `number_of_blogs` int(11) DEFAULT NULL,
  `salary_amount` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `packages`
--

INSERT INTO `packages` (`id`, `name`, `number_of_referell`, `number_of_sales`, `number_of_blogs`, `salary_amount`, `created_at`, `status`, `updated_at`) VALUES
(1, 'Salary Pack', '1000', '20', 30, '450', '2024-09-12 04:02:15', 1, '2024-09-12 04:02:15'),
(3, 'Packages-1', '500', '600', 500, '256', '2024-09-13 03:10:19', 1, '2024-09-13 03:10:19'),
(4, 'Packages-1', '600', '652', 25, '255', '2024-09-13 03:10:31', 1, '2024-09-13 03:10:31');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment_type`
--

CREATE TABLE `payment_type` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL COMMENT 'Payment_type',
  `working_hour` varchar(255) DEFAULT NULL,
  `rate` decimal(10,2) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `entry_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payment_type`
--

INSERT INTO `payment_type` (`id`, `name`, `working_hour`, `rate`, `status`, `entry_by`) VALUES
(1, 'Bank', '120', 100.00, 1, 1),
(2, 'Bank', '12', 15.00, 1, 1),
(3, 'Bank', '12', 30.00, 1, 1),
(4, 'Crypto', '6', 40.00, 1, 1),
(5, 'Crypto', '120', 100.00, 1, 1),
(6, 'TT', '33', 3333.00, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description_short` text DEFAULT NULL,
  `description_full` text DEFAULT NULL,
  `question` text DEFAULT NULL,
  `answer` text DEFAULT NULL,
  `likeCount` int(11) DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `entry_by` int(11) DEFAULT NULL,
  `thumnail_img` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `name`, `slug`, `description_short`, `description_full`, `question`, `answer`, `likeCount`, `categoryId`, `entry_by`, `thumnail_img`, `status`, `created_at`, `updated_at`) VALUES
(1, 'About us Isumax', 'about-us-isumax', NULL, '<div align=\"justify\"><ul><li><b>Welcome to Isumax</b>, your ultimate destination for freelance services! We are dedicated to connecting talented freelancers with clients seeking high-quality services across various fields. Our platform empowers professionals to showcase their skills and expertise while offering clients a diverse range of services tailored to their needs.<br><br>At Isumax, we believe in the power of creativity and innovation. Whether you\'re a small business looking for design work, a startup in need of marketing strategies, or an individual seeking custom writing services, we have the right freelancer for you. Our mission is to foster collaboration between clients and freelancers, creating a thriving community that benefits everyone involved.<br><br>We take pride in our rigorous vetting process, ensuring that every freelancer on our platform meets our high standards for quality and professionalism. Our freelancers are experts in their respective fields, bringing years of experience and a passion for their craft. With Isumax, you can trust that you\'re working with some of the best talent available.<br><br>Our user-friendly interface makes it easy to navigate through the wide array of services we offer. You can browse freelancer profiles, view portfolios, and read reviews from previous clients to help you make informed decisions. Finding the perfect freelancer for your project has never been easier!<br><br>At Isumax, we prioritize your satisfaction. We are committed to delivering exceptional customer service and support throughout your experience with us. If you have any questions or need assistance, our dedicated support team is here to help you every step of the way.<br><br>We understand that every project is unique. That\'s why we encourage open communication between clients and freelancers. Our platform facilitates seamless interactions, allowing you to discuss your project requirements, set deadlines, and provide feedback directly. This collaborative approach ensures that your vision is brought to life precisely as you envision it.<br><br>As a forward-thinking platform, we are constantly innovating and improving our services to meet the evolving needs of our users. We stay updated with the latest industry trends and technologies, enabling us to provide relevant solutions that drive success for both freelancers and clients.<br><br>At Isumax, we value diversity and inclusion. We welcome freelancers from all backgrounds, cultures, and experiences. This diversity enriches our community, fostering creativity and enabling us to cater to a wide range of client needs.<br><br>Join Isumax today and become part of a vibrant community that celebrates talent and creativity. Whether you’re a freelancer looking to showcase your skills or a client in search of exceptional services, Isumax is here to help you succeed.<br><br>Together, we can build a future where creativity knows no bounds. Experience the power of freelance services with Isumax and discover the endless possibilities that await you!<br><br>---<br><br>Feel free to adjust any parts of this content to better fit your brand\'s voice and mission!<br></li></ul></div>', NULL, NULL, NULL, 3, 1, NULL, 1, '2024-10-24 10:43:18', '2024-10-24 10:43:18'),
(2, 'Privacy & Policy', 'privacy-policy', NULL, '<p>Privacy Policy for Isumax<br><br>At Isumax, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us. By accessing or using Isumax, you agree to the terms of this Privacy Policy.<br><br>1. Information We Collect<br><br>We collect various types of information to provide and improve our services, including:<br><br>Personal Information:** When you create an account, we may collect personal information such as your name, email address, phone number, and payment details.<br>Profile Information:** Information you provide to create your freelancer or client profile, including skills, experience, and portfolio.<br>Transaction Information:** Details of services you purchase or provide through Isumax, including payment information and service history.<br>Usage Data:** Information about how you use our website, including your IP address, browser type, and pages visited.<br><br>2. How We Use Your Information<br><br>We may use the information we collect for various purposes, including:<br><br>- To provide and maintain our services.<br>- To notify you about changes to our services or your account.<br>- To facilitate transactions between freelancers and clients.<br>- To provide customer support and respond to inquiries.<br>- To monitor the usage of our website and analyze trends.<br>- To detect, prevent, and address technical issues.<br>- To communicate with you about promotions, offers, and updates.<br><br>3. Disclosure of Your Information<br><br>We may share your information in the following situations:<br><br>With Service Providers:** We may employ third-party companies and individuals to facilitate our services, provide the service on our behalf, or assist us in analyzing how our services are used. These third parties will have access to your personal information only to perform specific tasks on our behalf.<br></p><p>For Business Transfers:** If Isumax is involved in a merger, acquisition, or asset sale, your personal information may be transferred. We will provide notice before your personal information is transferred and becomes subject to a different Privacy Policy.<br></p><p>Legal Requirements:** We may disclose your personal information if required to do so by law or in response to valid requests by public authorities.<br><br>4. Data Security<br><br>The security of your data is important to us, and we strive to implement and maintain reasonable security procedures and practices to protect your personal information from unauthorized access, use, or disclosure. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.<br><br>5. Your Rights<br><br>You have the following rights regarding your personal information:<br><br>Access:** You can request copies of your personal information.<br>Rectification:** You can request to correct any inaccurate or incomplete personal information.<br>Erasure:** You can request the deletion of your personal information under certain conditions.<br>Objection:** You can object to the processing of your personal information under certain conditions.<br><br>To exercise these rights, please contact us using the information provided below.<br></p><p>6. Cookies<br><br>Isumax uses cookies to improve your experience on our website. Cookies are small files stored on your device that help us remember your preferences and understand how you interact with our site. You can choose to accept or decline cookies, but this may prevent you from taking full advantage of our services.<br><br>7. Links to Other Websites<br><br>Our website may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. We encourage you to review the privacy policies of any third-party websites you visit.<br><br>8. Changes to This Privacy Policy<br><br>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Effective Date\" at the top. You are advised to review this Privacy Policy periodically for any changes.<br><br>9. Contact Us<br><br>If you have any questions about this Privacy Policy, please contact us:<br><br><b>Email:** isumax@gmail.com<br>Phone:** +97165549999<br>Address:** Pakistan , India.</b><br><br>By using Isumax, you consent to the terms of this Privacy Policy.<br><br>&nbsp;<br></p>', NULL, NULL, NULL, 1, 1, NULL, 1, '2024-10-24 10:49:10', '2024-10-24 10:49:10'),
(3, 'Terms of Services', 'terms-of-services', NULL, '<p><br></p><p><br></p><p>Welcome to Isumax! These Terms and Services govern your access to and use of our website and services. By accessing or using Isumax, you agree to be bound by these terms. If you do not agree with any part of these terms, you must not use our services.<br><br>1. Definitions<br><br>- **\"Isumax,\" \"we,\" \"us,\" or \"our\":** Refers to the Isumax platform and all associated services.<br>- **\"User,\" \"you,\" or \"your\":** Refers to any individual or entity that accesses or uses the Isumax platform.<br>- **\"Services\":** Refers to all features, functionalities, and content offered on the Isumax platform, including but not limited to freelance job listings, profiles, messaging, and payment services.<br><br>### 2. Acceptance of Terms<br><br>By accessing or using Isumax, you confirm that you are at least 18 years old, or if you are under 18, you have parental or guardian consent to use our services. You agree to comply with all applicable laws and regulations while using Isumax.<br><br>3. Account Registration<br><br>To access certain features of Isumax, you may be required to create an account. You agree to:<br><br>- Provide accurate, current, and complete information during the registration process.<br>- Maintain the security of your password and account.<br>- Notify us immediately of any unauthorized use of your account or any other breach of security.<br>- Be responsible for all activities that occur under your account.<br><br>4. User Conduct<br><br>You agree not to:<br><br>- Use Isumax for any unlawful purpose or in violation of any local, state, national, or international law.<br>- Post or transmit any content that is defamatory, obscene, abusive, harassing, or otherwise objectionable.<br>- Attempt to gain unauthorized access to any portion or feature of Isumax or any other systems or networks connected to Isumax.<br>- Impersonate any person or entity or misrepresent your affiliation with any person or entity.<br><br>5. Freelance Services<br><br>Isumax provides a platform for freelancers and clients to connect and engage in freelance services. We do not guarantee the quality, safety, or legality of any services offered or obtained through Isumax. Users are responsible for verifying the qualifications and reputation of other users before entering into any agreement.<br><br>### 6. Payments and Fees<br><br>Users may be required to pay fees to access certain services on Isumax. All fees are non-refundable. You agree to provide accurate payment information and authorize us to charge your chosen payment method for any services purchased.<br><br>### 7. Intellectual Property<br><br>All content and materials on Isumax, including but not limited to text, graphics, logos, and software, are the property of Isumax or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, or distribute any content without our prior written consent.<br><br>8. Termination<br><br>We reserve the right to suspend or terminate your access to Isumax at our discretion, without notice, for conduct that we believe violates these Terms and Services or is harmful to other users or the platform.<br><br>&nbsp;9. Disclaimers<br><br>Isumax provides the services on an \"as-is\" and \"as-available\" basis. We do not warrant that the services will be uninterrupted or error-free. We are not responsible for any loss or damage resulting from your use of Isumax.<br><br>10. Limitation of Liability<br><br>To the fullest extent permitted by law, Isumax shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of Isumax, including but not limited to loss of profits, data, or goodwill.<br><br>11. Governing Law<br><br>These Terms and Services shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the courts located in [Your Jurisdiction].<br><br>12. Changes to Terms<br><br>We may update these Terms and Services from time to time. We will notify you of any changes by posting the new Terms on this page and updating the \"Effective Date\" at the top. Your continued use of Isumax after any changes signifies your acceptance of the new Terms.<br><br>&nbsp;13. Contact Us<br><br>If you have any questions about these Terms and Services, please contact us:<br><br>Email:** [insert email address]<br>Phone:** [insert phone number]<br>Address:** [insert address]<br><br>By using Isumax, you acknowledge that you have read, understood, and agree to be bound by these Terms and Services.<br><br>---<br><br>Please replace placeholders (like the effective date, jurisdiction, and contact details) with the appropriate information for Isumax.</p>', NULL, NULL, NULL, 2, 12, NULL, 0, '2024-10-24 10:52:16', '2024-10-28 08:53:20'),
(4, 'Trist & Safety', 'trist-safety', NULL, '<p><br><b>Trust &amp; Safety</b><br><br>At Isumax, your safety and satisfaction are our top priorities. We are dedicated to creating a trustworthy platform where freelancers and clients can connect and collaborate with confidence. Here are the key measures we take to ensure a safe experience for all users:<br><br>1. **User Verification:** We implement stringent verification processes for all users, ensuring that freelancers and clients are genuine and trustworthy.<br><br>2. **Secure Transactions:** Our platform utilizes secure payment methods and encryption technologies to protect your financial information and ensure safe transactions.<br><br>3. **Reporting Mechanism:** We encourage users to report any suspicious activities or content. Our dedicated support team promptly investigates all reports to maintain a safe community.<br><br>4. **Privacy Protection:** Your personal information is safeguarded in accordance with our privacy policy. We do not share your data with third parties without your consent.<br><br>5. **Guidelines and Policies:** We enforce strict community guidelines and policies to prevent harassment, fraud, and other harmful behaviors. Violators will face appropriate actions, including account suspension.<br><br>6. **Educational Resources:** Isumax offers resources and tips to help users navigate the platform safely and make informed decisions while hiring or providing services.<br><br>7. **Customer Support:** Our customer support team is available to assist you with any concerns or inquiries. We are committed to resolving issues swiftly and effectively.<br><br>8. **Transparency:** We maintain transparency regarding our policies and practices, ensuring that you are well-informed about your rights and responsibilities while using Isumax.<br><br>9. **Continuous Improvement:** We regularly update our security measures and practices to adapt to new challenges and threats, ensuring a continually safe environment for our users.<br><br>10. **Community Commitment:** We believe in fostering a respectful and professional community. Together, we can create a positive experience for all users on Isumax.<br><br>At Isumax, your trust is paramount, and we are here to support you every step of the way. <br><br>Feel free to modify any parts to better fit your platform\'s vision and policies!<br></p>', NULL, NULL, NULL, 6, 1, NULL, 1, '2024-10-24 10:57:26', '2024-10-24 10:57:26'),
(5, 'trust & Safety', 'trust-safety', NULL, '<p>Selling your services on Isumax is a straightforward process designed to help freelancers showcase their skills and connect with clients effectively. Follow these steps to maximize your success on the platform:<br><br>1. **Create a Professional Profile:** Begin by setting up a compelling profile that highlights your skills, experience, and services. Include a professional photo and a detailed bio to make a strong first impression.<br><br>2. **Define Your Services:** Clearly outline the services you offer. Be specific about what clients can expect, and include various packages or pricing tiers to cater to different needs.<br><br>3. **Showcase Your Portfolio:** Upload samples of your previous work to demonstrate your expertise. A well-curated portfolio can significantly enhance your credibility and attract potential clients.<br><br>4. **Set Competitive Pricing:** Research similar services on Isumax to determine competitive pricing for your offerings. Consider starting with lower rates to build your reputation and gather positive reviews.<br><br>5. **Optimize Your Listings:** Use relevant keywords in your service titles and descriptions to improve your visibility in search results. A well-optimized listing increases the chances of being discovered by potential clients.<br><br>6. **Engage with Clients:** Respond promptly to inquiries and messages from clients. Clear and open communication builds trust and can lead to successful collaborations.<br><br>7. **Maintain Quality Standards:** Deliver high-quality work that meets or exceeds client expectations. Satisfied clients are more likely to leave positive feedback and recommend you to others.<br><br>8. **Collect Feedback:** Encourage clients to leave reviews after the completion of projects. Positive feedback enhances your reputation and can help you attract more business.<br><br>9. **Stay Active on the Platform:** Regularly update your profile and service offerings, and actively participate in the Isumax community. Engaging with other users can lead to networking opportunities and collaborations.<br><br>10. **Leverage Promotional Tools:** Take advantage of any promotional tools or features offered by Isumax to increase your visibility. Participate in platform events or promotions to reach a wider audience.<br><br>By following these steps, you can successfully sell your services on Isumax and build a thriving freelance career. We are here to support you in your journey, providing a platform that connects talented freelancers with clients seeking quality work.<br><br>---<br><br>Feel free to adjust any points or add specific features unique to Isumax to enhance this section!<br></p>', NULL, NULL, NULL, 4, 1, NULL, 1, '2024-10-24 11:00:18', '2024-10-24 11:00:18'),
(6, 'Selellin on ISUMAAX', 'selellin-on-isumaax', NULL, '<p>Help &amp; Support<br><br>At Isumax, we are committed to providing exceptional support to our users. Whether you’re a freelancer looking for guidance or a client seeking assistance, our Help &amp; Support section is here to address your needs.<br><br>1. **Knowledge Base**<br>Explore our comprehensive knowledge base, where you can find articles, tutorials, and FAQs covering various topics related to using Isumax. This resource is designed to help you navigate the platform efficiently and answer common questions.<br><br>2. **Contact Support**<br>If you can’t find the answers you’re looking for in our knowledge base, our dedicated support team is here to help. You can reach us through the following channels:<br>- **Email Support:** Send us an email at support@isumax.com for inquiries or assistance.<br>- **Live Chat:** Use our live chat feature on the website for real-time assistance during business hours.<br><br>&nbsp;3. **Submit a Ticket**<br>For more complex issues, you can submit a support ticket through our Help Center. Provide detailed information about your concern, and our team will respond promptly to resolve your issue.<br><br>&nbsp;4. **Community Forum**<br>Join our community forum to connect with other Isumax users. Share tips, ask questions, and engage in discussions about freelancing and the services offered on our platform. Our community is a great resource for finding support and networking with fellow users.<br><br>5. **Feedback and Suggestions**<br>We value your input! If you have any feedback or suggestions on how we can improve our services or platform, please let us know. Your insights help us enhance the user experience for everyone on Isumax.<br><br>&nbsp;6. **Updates and Announcements**<br>Stay informed about the latest updates, features, and announcements from Isumax. Follow our blog and social media channels to receive news and tips on how to maximize your experience on the platform.<br><br>&nbsp;7. **Safety and Security**<br>We prioritize the safety and security of our users. If you encounter any suspicious activity or have concerns regarding your account, please contact our support team immediately. We take all reports seriously and will investigate any issues promptly.<br><br>&nbsp;8. **Help Center Accessibility**<br>Our Help Center is accessible 24/7, ensuring that you can find assistance whenever you need it. We are dedicated to ensuring that your experience on Isumax is seamless and enjoyable.<br><br>At Isumax, we are here to support you every step of the way. Your success is our priority, and we look forward to helping you achieve your goals!<br><br>---<br><br>Feel free to modify any sections or add specific contact details that are relevant to Isumax!<br></p>', NULL, NULL, NULL, 5, 1, NULL, 1, '2024-10-24 11:03:16', '2024-10-24 11:03:16'),
(9, 'Buyers on Isumax', 'buyers-on-isumax', NULL, '<p><br></p><p><b>Buyers on Isumax</b><br><br>Welcome to Isumax! As a buyer, you have access to a diverse pool of talented freelancers ready to help you achieve your project goals. Here’s everything you need to know to make the most of your experience on our platform:<br><br>1. **Finding the Right Freelancer**<br>&nbsp;&nbsp; - **Search Functionality:** Utilize our advanced search feature to filter freelancers by skills, experience, ratings, and price range. This helps you find the best match for your specific project needs.<br>&nbsp;&nbsp; - **Categories and Tags:** Browse through various categories and tags to discover freelancers who specialize in areas relevant to your project, from graphic design to web development.<br><br>&nbsp;2. **Review Profiles and Portfolios**<br>&nbsp;&nbsp; - **Freelancer Profiles:** Each freelancer has a detailed profile showcasing their skills, experience, and previous work. Take the time to read their bios and review their portfolios to ensure they align with your expectations.<br>&nbsp;&nbsp; - **Ratings and Reviews:** Check out feedback from previous clients. Ratings and reviews provide insights into a freelancer\'s reliability and quality of work, helping you make informed decisions.<br><br>&nbsp;3. **Communicate Effectively**<br>&nbsp;&nbsp; - **Direct Messaging:** Use Isumax’s messaging feature to communicate directly with freelancers. Discuss project details, clarify requirements, and gauge their responsiveness before hiring.<br>&nbsp;&nbsp; - **Set Clear Expectations:** Clearly outline your project goals, timelines, and budget to ensure that both you and the freelancer are on the same page.<br><br>&nbsp;4. **Making an Order**<br>&nbsp;&nbsp; - **Custom Offers:** If you have a unique project in mind, request a custom offer from a freelancer. This allows you to negotiate terms and ensure the freelancer understands your specific requirements.<br>&nbsp;&nbsp; - **Order Confirmation:** Once you agree on the project details, confirm the order through Isumax to protect both parties and ensure a smooth transaction.<br><br>&nbsp;5. **Payment Security**<br>&nbsp;&nbsp; - **Secure Payments:** Isumax offers secure payment options to protect your financial information. Funds are held in escrow until the project is completed to your satisfaction, ensuring peace of mind.<br>&nbsp;&nbsp; - **Refund Policy:** Familiarize yourself with our refund policy in case the project does not meet your expectations or if there are issues with delivery.<br><br>&nbsp;6. **Providing Feedback**<br>&nbsp;&nbsp; - **Rate Your Experience:** After the project is completed, take a moment to leave feedback for the freelancer. Your insights help others make informed decisions and contribute to the overall quality of the Isumax community.<br>&nbsp;&nbsp; - **Dispute Resolution:** If you encounter any issues with a freelancer, reach out to our support team for assistance. We have processes in place to help resolve disputes fairly.<br><br>&nbsp;7. **Stay Informed**<br>&nbsp;&nbsp; - **Updates and Notifications:** Keep an eye on your notifications for updates about your orders and any messages from freelancers. Staying engaged ensures timely communication throughout your projects.<br><br>&nbsp;8. **Explore Resources**<br>&nbsp;&nbsp; - **Help Center:** Visit our Help Center for articles, guides, and tips on how to navigate the Isumax platform effectively. We are committed to supporting you in your buying journey.<br><br>At Isumax, we strive to provide a seamless experience for buyers seeking quality freelance services. Whether you\'re launching a new project or looking to enhance your existing business, you’ll find the right talent here. Happy hiring!<br><br>---<br><br>Feel free to adjust any sections to better fit the specific features and policies of Isumax!<br></p>', NULL, NULL, NULL, 7, 12, NULL, 1, '2024-10-24 11:06:57', '2024-10-28 13:37:02'),
(10, 'Help and Support', 'help-and-support', NULL, '<p><b>&nbsp;Help and Support</b><br><br>### Welcome to Our Help and Support Center!<br><br>We understand that sometimes you may need assistance while using our services. Our dedicated team is here to help you with any questions or issues you may encounter. Below, you’ll find a variety of resources designed to provide you with the support you need.<br><br>### Frequently Asked Questions (FAQ)<br><br>**Q: How can I reset my password?** &nbsp;<br>A: To reset your password, go to the login page and click on \"Forgot Password?\" Follow the prompts to reset your password via email.<br><br>**Q: How can I contact customer support?** &nbsp;<br>A: You can reach our customer support team via email at support@example.com or by filling out the contact form on our website. Our team is available 24/7 to assist you.<br><br>**Q: What should I do if I encounter a technical issue?** &nbsp;<br>A: If you experience any technical issues, please check our [Troubleshooting Guide](#) for common solutions. If the problem persists, contact our support team for further assistance.<br><br>### Live Chat Support<br><br>Need immediate assistance? Our live chat support is available from 9 AM to 9 PM (GMT). Click the chat icon in the bottom right corner of your screen to get started.<br><br>### Contact Us<br><br>If you have any questions or need further assistance, please don’t hesitate to reach out to us:<br><br>- **Email:** support@example.com<br>- **Phone:** +1 (800) 123-4567<br>- **Business Hours:** Monday - Friday, 9 AM - 5 PM (GMT)<br><br>### Community Forum<br><br>Join our community forum to connect with other users and share your experiences. You can ask questions, provide feedback, and receive tips from fellow users and our support team.<br><br>### Thank You!<br><br>We appreciate your patience and understanding as we work to provide you with the best support possible. Your satisfaction is our top priority, and we’re here to help you every step of the way.<br><br></p>', NULL, NULL, NULL, 8, 1, NULL, 1, '2024-10-25 10:52:07', '2024-10-25 10:52:07'),
(12, 'Affiliate', 'affiliate', NULL, '<p>If you\'re interested in affiliate marketing and programs that can help maximize your earnings, a range of affiliate platforms offer great opportunities. For example, **Amazon Associates** provides access to millions of products with commission rates of up to 20%, making it ideal if you\'re targeting a broad audience or consumer-driven content. Alternatively, **Shopify\'s Affiliate Program** is well-suited for promoting e-commerce and entrepreneurial content, offering up to $150 per referral and a 30-day cookie duration for tracking conversions.</p><p><br></p><p>For a more niche approach, **Semrush** (focused on SEO tools) provides substantial commissions, including $200 per paid subscription, making it a great option if your audience is in digital marketing or SEO. Similarly, **Fiverr** offers multiple commission structures that include both flat rates and revenue-sharing options, which can be profitable if you\'re targeting freelancers or businesses in need of services like graphic design, copywriting, and more.</p><p><br></p><p>Programs like **ClickFunnels** and **Leadpages** are also popular among affiliates looking to promote digital marketing tools, as they provide recurring commissions on subscriptions. They’re beneficial if your audience includes small businesses and marketers looking for conversion optimization solutions.</p><p><br></p><p>Each program varies in commission rates, payout thresholds, and cookie durations, so it\'s worth considering which program best aligns with your audience and content style. For more details on these and other top programs, you can check resources like Shopify\'s affiliate marketing guide and others.</p>', NULL, NULL, NULL, 9, 1, NULL, 1, '2024-10-26 03:44:02', '2024-10-26 03:44:02');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `seller_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `short_description` varchar(255) NOT NULL,
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_description` text DEFAULT NULL,
  `meta_keyword` varchar(255) DEFAULT NULL,
  `product_tag` varchar(255) DEFAULT NULL,
  `brand` int(11) DEFAULT NULL,
  `sku` varchar(255) DEFAULT NULL,
  `external_link` varchar(255) DEFAULT NULL,
  `cash_dev_status` int(11) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `unit` varchar(255) DEFAULT NULL,
  `stock_qty` int(11) DEFAULT NULL,
  `stock_mini_qty` int(11) DEFAULT NULL,
  `stock_status` int(11) DEFAULT NULL,
  `manufacturer` int(11) DEFAULT NULL,
  `download_link` varchar(255) DEFAULT NULL,
  `discount` double(10,2) DEFAULT NULL,
  `discount_status` int(11) DEFAULT NULL,
  `shipping_days` int(11) DEFAULT NULL,
  `free_shopping` int(11) DEFAULT NULL,
  `delivery_days` varchar(255) DEFAULT NULL,
  `flat_rate_status` int(11) DEFAULT NULL,
  `flat_rate_price` double(10,5) DEFAULT NULL,
  `vat` varchar(255) DEFAULT NULL,
  `vat_status` int(11) DEFAULT NULL,
  `tax` varchar(255) DEFAULT NULL,
  `tax_status` int(11) DEFAULT NULL,
  `thumnail_img` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `entry_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `professions`
--

CREATE TABLE `professions` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` int(11) DEFAULT 1,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `professions`
--

INSERT INTO `professions` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Accountant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(2, 'Actor', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(3, 'Architect', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(4, 'Artist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(5, 'Chef', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(6, 'Civil Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(7, 'Dentist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(8, 'Doctor', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(9, 'Electrician', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(10, 'Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(11, 'Graphic Designer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(12, 'Lawyer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(13, 'Nurse', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(14, 'Photographer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(15, 'Physicist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(16, 'Software Developer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(17, 'Teacher', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(18, 'Web Developer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(19, 'Writer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(20, 'Veterinarian', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(21, 'Pharmacist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(22, 'Scientist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(23, 'Mechanic', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(24, 'Plumber', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(25, 'Project Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(26, 'Data Analyst', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(27, 'Business Analyst', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(28, 'Marketing Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(29, 'Sales Executive', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(30, 'Human Resources Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(31, 'IT Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(32, 'Research Scientist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(33, 'Financial Analyst', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(34, 'Web Designer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(35, 'Customer Service Representative', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(36, 'Database Administrator', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(37, 'Network Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(38, 'Systems Analyst', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(39, 'Software Tester', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(40, 'Cybersecurity Specialist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(41, 'Content Writer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(42, 'SEO Specialist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(43, 'Social Media Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(44, 'UI/UX Designer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(45, 'Operations Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(46, 'Logistics Coordinator', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(47, 'Supply Chain Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(48, 'Quality Assurance Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(49, 'Training Specialist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(50, 'Brand Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(51, 'Public Relations Specialist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(52, 'Product Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(53, 'Copywriter', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(54, 'Creative Director', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(55, 'Art Director', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(56, 'Digital Marketing Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(57, 'Event Planner', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(58, 'Market Research Analyst', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(59, 'Real Estate Agent', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(60, 'Investment Banker', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(61, 'Actuary', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(62, 'Biomedical Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(63, 'Construction Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(64, 'Environmental Scientist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(65, 'Fashion Designer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(66, 'Interior Designer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(67, 'Marine Biologist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(68, 'Occupational Therapist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(69, 'Physical Therapist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(70, 'Speech-Language Pathologist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(71, 'Chiropractor', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(72, 'Pediatrician', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(73, 'Surgeon', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(74, 'Anesthesiologist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(75, 'Oncologist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(76, 'Cardiologist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(77, 'Dermatologist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(78, 'Psychiatrist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(79, 'Radiologist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(80, 'Neurologist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(81, 'Orthopedic Surgeon', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(82, 'Dentist Hygienist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(83, 'Dental Assistant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(84, 'Veterinary Technician', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(85, 'Pharmacy Technician', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(86, 'Surgical Technician', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(87, 'Emergency Medical Technician', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(88, 'Paramedic', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(89, 'Nurse Practitioner', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(90, 'Clinical Psychologist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(91, 'Clinical Social Worker', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(92, 'Health Services Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(93, 'Medical Laboratory Technician', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(94, 'Medical Assistant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(95, 'Health Information Technician', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(96, 'Nutritionist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(97, 'Dietitian', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(98, 'Fitness Trainer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(99, 'Personal Trainer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(100, 'Yoga Instructor', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(101, 'Massage Therapist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(102, 'Cosmetologist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(103, 'Esthetician', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(104, 'Barber', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(105, 'Makeup Artist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(106, 'Fashion Merchandiser', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(107, 'Jewelry Designer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(108, 'Textile Designer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(109, 'Graphic Artist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(110, 'Animator', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(111, 'Video Game Designer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(112, '3D Modeler', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(113, 'Sound Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(114, 'Music Producer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(115, 'Composer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(116, 'Lyricist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(117, 'Record Producer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(118, 'Film Director', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(119, 'Film Editor', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(120, 'Cinematographer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(121, 'Scriptwriter', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(122, 'Production Assistant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(123, 'Art Curator', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(124, 'Gallery Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(125, 'Museum Director', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(126, 'Archivist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(127, 'Librarian', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(128, 'Research Librarian', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(129, 'School Librarian', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(130, 'Corporate Trainer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(131, 'E-Learning Developer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(132, 'Technical Writer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(133, 'Policy Analyst', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(134, 'Legislative Assistant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(135, 'Lobbyist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(136, 'Community Organizer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(137, 'Nonprofit Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(138, 'Social Worker', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(139, 'Family Therapist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(140, 'Substance Abuse Counselor', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(141, 'Psychotherapist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(142, 'Marriage Counselor', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(143, 'Forensic Scientist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(144, 'Crime Scene Investigator', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(145, 'Private Investigator', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(146, 'Security Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(147, 'Loss Prevention Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(148, 'Customs Officer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(149, 'Immigration Officer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(150, 'Federal Agent', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(151, 'Police Officer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(152, 'Firefighter', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(153, 'Emergency Management Director', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(154, 'Safety Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(155, 'Environmental Health and Safety Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(156, 'Occupational Health Specialist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(157, 'Risk Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(158, 'Insurance Underwriter', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(159, 'Claims Adjuster', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(160, 'Insurance Agent', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(161, 'Financial Planner', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(162, 'Tax Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(163, 'Auditor', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(164, 'Bookkeeper', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(165, 'Payroll Clerk', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(166, 'Cashier', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(167, 'Stock Clerk', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(168, 'Warehouse Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(169, 'Forklift Operator', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(170, 'Shipping and Receiving Clerk', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(171, 'Inventory Specialist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(172, 'Purchasing Agent', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(173, 'Procurement Specialist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(174, 'Sales Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(175, 'Account Executive', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(176, 'Market Analyst', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(177, 'Sales Representative', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(178, 'Retail Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(179, 'Store Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(180, 'Merchandising Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(181, 'Visual Merchandiser', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(182, 'Customer Experience Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(183, 'Customer Retention Specialist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(184, 'Technical Support Specialist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(185, 'Help Desk Technician', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(186, 'Field Service Technician', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(187, 'Installation Technician', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(188, 'Maintenance Technician', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(189, 'Quality Control Inspector', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(190, 'Research Associate', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(191, 'Laboratory Technician', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(192, 'Chemist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(193, 'Chemical Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(194, 'Petroleum Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(195, 'Mining Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(196, 'Agricultural Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(197, 'Manufacturing Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(198, 'Industrial Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(199, 'Material Scientist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(200, 'Nuclear Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(201, 'Electrical Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(202, 'Mechanical Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(203, 'Civil Drafting Technician', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(204, 'Cartographer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(205, 'Geographer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(206, 'Urban Planner', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(207, 'Surveyor', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(208, 'Construction Laborer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(209, 'Heavy Equipment Operator', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(210, 'Electric Line Installer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(211, 'Plumbing Technician', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(212, 'Welding Technician', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(213, 'Pipefitter', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(214, 'Carpenter', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(215, 'Mason', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(216, 'Roofer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(217, 'Drywall Installer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(218, 'Painter', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(219, 'Flooring Installer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(220, 'Landscape Architect', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(221, 'Environmental Planner', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(222, 'Health and Safety Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(223, 'Water Resource Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(224, 'Transportation Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(225, 'Air Quality Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(226, 'Hydraulic Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(227, 'Geotechnical Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(228, 'Structural Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(229, 'Construction Inspector', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(230, 'Quality Control Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(231, 'Manufacturing Supervisor', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(232, 'Production Planner', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(233, 'Process Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(234, 'Production Worker', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(235, 'Assembler', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(236, 'Machinist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(237, 'CNC Operator', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(238, 'Electrician Apprentice', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(239, 'Heavy Machinery Operator', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(240, 'Line Cook', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(241, 'Restaurant Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(242, 'Food Service Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(243, 'Bartender', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(244, 'Waiter/Waitress', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(245, 'Host/Hostess', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(246, 'Barista', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(247, 'Fast Food Worker', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(248, 'Catering Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(249, 'Baker', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(250, 'Pastry Chef', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(251, 'Food Scientist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(252, 'Dietetic Technician', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(253, 'Food Safety Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(254, 'Health Inspector', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(255, 'Hospitality Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(256, 'Hotel Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(257, 'Resort Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(258, 'Travel Agent', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(259, 'Tour Guide', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(260, 'Event Coordinator', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(261, 'Casino Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(262, 'Entertainment Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(263, 'Theme Park Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(264, 'Amusement Park Operator', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(265, 'Sports Coach', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(266, 'Athletic Trainer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(267, 'Sports Official', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(268, 'Fitness Coordinator', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(269, 'Recreation Director', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(270, 'Park Ranger', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(271, 'Wildlife Biologist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(272, 'Conservation Scientist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(273, 'Forester', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(274, 'Fisheries Biologist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(275, 'Environmental Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(276, 'Natural Resource Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(277, 'Soil Scientist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(278, 'Hydrologist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(279, 'Meteorologist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(280, 'Climatologist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(281, 'Astronomer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(282, 'Geologist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(283, 'Geophysicist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(284, 'Seismologist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(285, 'Marine Geologist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(286, 'Oceanographer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(287, 'Paleontologist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(288, 'Archaeologist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(289, 'Anthropologist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(290, 'Sociologist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(291, 'Psychologist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(292, 'Political Scientist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(293, 'Economist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(294, 'Historian', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(295, 'Philosopher', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(296, 'Theologian', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(297, 'Social Scientist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(298, 'Statistical Analyst', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(299, 'Data Scientist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(300, 'Big Data Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(301, 'Artificial Intelligence Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(302, 'Machine Learning Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(303, 'Robotics Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(304, 'Cybersecurity Analyst', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(305, 'Blockchain Developer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(306, 'Cloud Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(307, 'DevOps Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(308, 'Web Architect', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(309, 'System Administrator', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(310, 'IT Support Specialist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(311, 'Help Desk Analyst', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(312, 'Digital Marketing Specialist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(313, 'E-commerce Specialist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(314, 'Affiliate Marketing Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(315, 'Brand Strategist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(316, 'Content Strategist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(317, 'User Experience Researcher', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(318, 'Business Development Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(319, 'Sales Operations Analyst', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(320, 'Customer Insights Analyst', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(321, 'Pricing Analyst', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(322, 'Inventory Control Analyst', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(323, 'Market Development Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(324, 'Franchise Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(325, 'Retail Analyst', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(326, 'Trade Marketing Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(327, 'Direct Marketing Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(328, 'Mobile Marketing Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(329, 'Email Marketing Specialist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(330, 'Performance Marketing Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(331, 'Lead Generation Specialist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(332, 'Creative Copywriter', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(333, 'Direct Response Copywriter', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(334, 'Web Content Writer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(335, 'SEO Copywriter', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(336, 'Technical Content Writer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(337, 'UX Copywriter', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(338, 'Brand Journalist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(339, 'Social Media Copywriter', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(340, 'Podcast Producer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(341, 'Video Producer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(342, 'Web Producer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(343, 'Content Editor', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(344, 'Marketing Editor', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(345, 'Social Media Editor', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(346, 'Creative Strategist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(347, 'Advertising Account Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(348, 'Media Buyer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(349, 'Media Planner', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(350, 'Digital Ad Operations Specialist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(351, 'Print Production Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(352, 'Broadcast Producer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(353, 'Film Production Manager', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(354, 'Audio Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(355, 'Visual Effects Supervisor', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(356, 'Post-Production Supervisor', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(357, 'Live Sound Engineer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(358, 'Broadcast Technician', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(359, 'Talent Agent', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(360, 'Casting Director', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(361, 'Production Designer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(362, 'Set Designer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(363, 'Costume Designer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(364, 'Makeup Designer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(365, 'Sound Designer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(366, 'Script Supervisor', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(367, 'Gaffer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(368, 'Grip', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(369, 'Camera Operator', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(370, 'Drone Operator', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(371, 'Video Editor', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(372, 'Colorist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(373, 'Screenwriter', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(374, 'Author', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(375, 'Novelist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(376, 'Poet', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(377, 'Playwright', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(378, 'Journalist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(379, 'Columnist', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(380, 'Blogger', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(381, 'Vlogger', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(382, 'Social Media Influencer', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(383, 'Public Speaker', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(384, 'Motivational Speaker', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(385, 'Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(386, 'Advisor', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(387, 'Business Coach', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(388, 'Life Coach', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(389, 'Career Coach', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(390, 'Health Coach', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(391, 'Fitness Coach', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(392, 'Nutrition Coach', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(393, 'Parenting Coach', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(394, 'Relationship Coach', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(395, 'Executive Coach', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(396, 'Financial Coach', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(397, 'Sales Coach', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(398, 'Customer Service Coach', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(399, 'Leadership Coach', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(400, 'Team Building Coach', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(401, 'Change Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(402, 'Organizational Development Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(403, 'Strategy Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(404, 'Business Process Improvement Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(405, 'IT Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(406, 'HR Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(407, 'Legal Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(408, 'Marketing Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(409, 'Communications Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(410, 'Nonprofit Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(411, 'Philanthropy Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(412, 'Social Impact Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(413, 'Sustainability Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(414, 'Environmental Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(415, 'Risk Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(416, 'Crisis Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(417, 'Cultural Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(418, 'Diversity and Inclusion Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(419, 'Employee Engagement Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(420, 'Talent Acquisition Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(421, 'Training and Development Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(422, 'Learning and Development Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(423, 'Sales Training Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(424, 'Negotiation Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(425, 'Compensation Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(426, 'Benefits Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(427, 'Workforce Planning Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(428, 'Succession Planning Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(429, 'Employee Relations Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(430, 'Performance Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(431, 'Change Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(432, 'HR Technology Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(433, 'Payroll Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(434, 'Recruitment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(435, 'Executive Search Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(436, 'Outplacement Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(437, 'Retirement Planning Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(438, 'Financial Services Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(439, 'Insurance Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(440, 'Tax Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(441, 'Investment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(442, 'Estate Planning Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(443, 'Wealth Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(444, 'Real Estate Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(445, 'Property Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(446, 'Facility Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(447, 'Supply Chain Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(448, 'Logistics Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(449, 'Operations Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(450, 'Quality Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(451, 'Project Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(452, 'Program Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(453, 'Portfolio Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(454, 'Agile Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(455, 'Lean Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(456, 'Six Sigma Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(457, 'Scrum Master', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(458, 'Product Owner', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(459, 'Business Analyst Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(460, 'Systems Analyst Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(461, 'Database Administrator Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(462, 'Software Engineer Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(463, 'DevOps Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(464, 'Network Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(465, 'Security Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(466, 'Cloud Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(467, 'Big Data Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(468, 'AI Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(469, 'Data Science Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(470, 'Blockchain Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(471, 'Digital Transformation Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(472, 'IT Strategy Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(473, 'IT Governance Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(474, 'IT Risk Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(475, 'IT Compliance Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(476, 'IT Security Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(477, 'IT Infrastructure Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(478, 'IT Architecture Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(479, 'IT Operations Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(480, 'IT Service Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(481, 'IT Vendor Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(482, 'IT Project Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(483, 'IT Change Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(484, 'IT Budgeting Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(485, 'IT Cost Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(486, 'IT Performance Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(487, 'IT Capacity Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(488, 'IT Incident Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(489, 'IT Problem Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(490, 'IT Service Desk Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(491, 'IT Service Level Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(492, 'IT Knowledge Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(493, 'IT Asset Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(494, 'IT Configuration Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(495, 'IT Release Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(496, 'IT Availability Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(497, 'IT Continuity Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(498, 'IT Security Operations Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(499, 'IT Network Operations Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(500, 'IT Server Operations Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(501, 'IT Storage Operations Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(502, 'IT Cloud Operations Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(503, 'IT Data Center Operations Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(504, 'IT Disaster Recovery Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(505, 'IT Business Continuity Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(506, 'IT Service Improvement Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(507, 'IT Service Transition Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(508, 'IT Service Design Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(509, 'IT Service Operation Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(510, 'IT Service Strategy Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(511, 'IT Service Portfolio Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(512, 'IT Service Value Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(513, 'IT Service Risk Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(514, 'IT Service Quality Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(515, 'IT Service Process Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(516, 'IT Service Communication Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(517, 'IT Service Relationship Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(518, 'IT Service Performance Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(519, 'IT Service Knowledge Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(520, 'IT Service Capacity Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(521, 'IT Service Configuration Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(522, 'IT Service Availability Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(523, 'IT Service Continuity Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(524, 'IT Service Security Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(525, 'IT Service Improvement Plan Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(526, 'IT Service Roadmap Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(527, 'IT Service Maturity Model Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(528, 'IT Service Best Practices Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(529, 'IT Service Industry Standards Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(530, 'IT Service Benchmarking Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(531, 'IT Service Metrics Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(532, 'IT Service Reporting Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(533, 'IT Service Audit Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(534, 'IT Service Assessment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(535, 'IT Service Evaluation Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(536, 'IT Service Monitoring Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(537, 'IT Service Analytics Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(538, 'IT Service Management Tools Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(539, 'IT Service Management Software Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(540, 'IT Service Management Framework Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(541, 'IT Service Management Process Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(542, 'IT Service Management Strategy Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(543, 'IT Service Management Implementation Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(544, 'IT Service Management Transformation Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(545, 'IT Service Management Optimization Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(546, 'IT Service Management Governance Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(547, 'IT Service Management Training Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(548, 'IT Service Management Communication Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(549, 'IT Service Management Stakeholder Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(550, 'IT Service Management Culture Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(551, 'IT Service Management Leadership Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(552, 'IT Service Management Team Development Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(553, 'IT Service Management Skills Development Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(554, 'IT Service Management Knowledge Development Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(555, 'IT Service Management Capability Development Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(556, 'IT Service Management Competency Development Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(557, 'IT Service Management Performance Improvement Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(558, 'IT Service Management Results Measurement Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(559, 'IT Service Management Value Realization Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(560, 'IT Service Management Impact Assessment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(561, 'IT Service Management Return on Investment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(562, 'IT Service Management Business Case Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(563, 'IT Service Management Funding Model Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(564, 'IT Service Management Financial Management Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(565, 'IT Service Management Budgeting Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(566, 'IT Service Management Cost Control Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(567, 'IT Service Management Pricing Model Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(568, 'IT Service Management Revenue Model Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(569, 'IT Service Management Profitability Model Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(570, 'IT Service Management Sustainability Model Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(571, 'IT Service Management Scalability Model Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(572, 'IT Service Management Growth Model Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(573, 'IT Service Management Development Model Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(574, 'IT Service Management Innovation Model Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(575, 'IT Service Management Future Vision Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(576, 'IT Service Management Strategic Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(577, 'IT Service Management Business Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(578, 'IT Service Management Organizational Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(579, 'IT Service Management Team Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(580, 'IT Service Management Cultural Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(581, 'IT Service Management Change Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(582, 'IT Service Management Process Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(583, 'IT Service Management Quality Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(584, 'IT Service Management Value Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(585, 'IT Service Management Outcome Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(586, 'IT Service Management Impact Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(587, 'IT Service Management Strategy Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(588, 'IT Service Management Governance Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(589, 'IT Service Management Leadership Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(590, 'IT Service Management Stakeholder Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(591, 'IT Service Management Communication Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(592, 'IT Service Management Engagement Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(593, 'IT Service Management Collaboration Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(594, 'IT Service Management Partnership Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(595, 'IT Service Management Relationship Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(596, 'IT Service Management Trust Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(597, 'IT Service Management Credibility Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(598, 'IT Service Management Reputation Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(599, 'IT Service Management Integrity Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(600, 'IT Service Management Ethics Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(601, 'IT Service Management Accountability Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(602, 'IT Service Management Responsibility Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(603, 'IT Service Management Empowerment Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(604, 'IT Service Management Enablement Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(605, 'IT Service Management Support Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(606, 'IT Service Management Guidance Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(607, 'IT Service Management Mentoring Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(608, 'IT Service Management Coaching Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(609, 'IT Service Management Feedback Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(610, 'IT Service Management Recognition Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(611, 'IT Service Management Reward Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(612, 'IT Service Management Motivation Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(613, 'IT Service Management Inspiration Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(614, 'IT Service Management Innovation Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(615, 'IT Service Management Creativity Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36');
INSERT INTO `professions` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(616, 'IT Service Management Collaboration Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(617, 'IT Service Management Teamwork Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(618, 'IT Service Management Productivity Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(619, 'IT Service Management Performance Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(620, 'IT Service Management Quality Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(621, 'IT Service Management Success Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(622, 'IT Service Management Excellence Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(623, 'IT Service Management Improvement Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(624, 'IT Service Management Development Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(625, 'IT Service Management Growth Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(626, 'IT Service Management Scalability Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(627, 'IT Service Management Sustainability Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(628, 'IT Service Management Value Creation Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(629, 'IT Service Management Value Proposition Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(630, 'IT Service Management Business Model Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(631, 'IT Service Management Innovation Model Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(632, 'IT Service Management Strategic Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(633, 'IT Service Management Transformation Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(634, 'IT Service Management Optimization Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(635, 'IT Service Management Assessment Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(636, 'IT Service Management Evaluation Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(637, 'IT Service Management Monitoring Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(638, 'IT Service Management Reporting Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(639, 'IT Service Management Communication Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(640, 'IT Service Management Engagement Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(641, 'IT Service Management Collaboration Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(642, 'IT Service Management Partnership Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(643, 'IT Service Management Relationship Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(644, 'IT Service Management Trust Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(645, 'IT Service Management Credibility Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(646, 'IT Service Management Reputation Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(647, 'IT Service Management Integrity Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(648, 'IT Service Management Ethics Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(649, 'IT Service Management Accountability Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(650, 'IT Service Management Responsibility Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(651, 'IT Service Management Empowerment Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(652, 'IT Service Management Enablement Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(653, 'IT Service Management Support Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(654, 'IT Service Management Guidance Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(655, 'IT Service Management Mentoring Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(656, 'IT Service Management Coaching Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(657, 'IT Service Management Feedback Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(658, 'IT Service Management Recognition Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(659, 'IT Service Management Reward Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(660, 'IT Service Management Motivation Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(661, 'IT Service Management Inspiration Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(662, 'IT Service Management Change Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(663, 'IT Service Management Process Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(664, 'IT Service Management Quality Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(665, 'IT Service Management Outcome Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(666, 'IT Service Management Impact Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(667, 'IT Service Management Strategy Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(668, 'IT Service Management Governance Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(669, 'IT Service Management Leadership Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(670, 'IT Service Management Stakeholder Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(671, 'IT Service Management Business Alignment Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(672, 'IT Service Management Organizational Alignment Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(673, 'IT Service Management Team Alignment Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(674, 'IT Service Management Cultural Alignment Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(675, 'IT Service Management Trust Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(676, 'IT Service Management Credibility Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(677, 'IT Service Management Reputation Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(678, 'IT Service Management Integrity Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(679, 'IT Service Management Ethics Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(680, 'IT Service Management Accountability Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(681, 'IT Service Management Responsibility Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(682, 'IT Service Management Empowerment Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(683, 'IT Service Management Enablement Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(684, 'IT Service Management Support Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(685, 'IT Service Management Guidance Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(686, 'IT Service Management Mentoring Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(687, 'IT Service Management Coaching Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(688, 'IT Service Management Feedback Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(689, 'IT Service Management Recognition Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(690, 'IT Service Management Reward Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(691, 'IT Service Management Motivation Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(692, 'IT Service Management Inspiration Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(693, 'IT Service Management Innovation Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(694, 'IT Service Management Creativity Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(695, 'IT Service Management Collaboration Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(696, 'IT Service Management Teamwork Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(697, 'IT Service Management Productivity Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(698, 'IT Service Management Performance Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(699, 'IT Service Management Quality Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(700, 'IT Service Management Success Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(701, 'IT Service Management Excellence Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(702, 'IT Service Management Improvement Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(703, 'IT Service Management Development Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(704, 'IT Service Management Growth Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(705, 'IT Service Management Scalability Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(706, 'IT Service Management Sustainability Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(707, 'IT Service Management Value Creation Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(708, 'IT Service Management Value Proposition Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(709, 'IT Service Management Business Model Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(710, 'IT Service Management Innovation Model Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(711, 'IT Service Management Strategic Plan Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(712, 'IT Service Management Transformation Plan Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(713, 'IT Service Management Optimization Plan Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(714, 'IT Service Management Assessment Plan Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(715, 'IT Service Management Evaluation Plan Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(716, 'IT Service Management Monitoring Plan Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(717, 'IT Service Management Reporting Plan Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(718, 'IT Service Management Communication Plan Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(719, 'IT Service Management Engagement Plan Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(720, 'IT Service Management Collaboration Plan Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(721, 'IT Service Management Partnership Plan Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(722, 'IT Service Management Relationship Plan Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(723, 'IT Service Management Trust Plan Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(724, 'IT Service Management Credibility Plan Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(725, 'IT Service Management Reputation Plan Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(726, 'IT Service Management Integrity Plan Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(727, 'IT Service Management Ethics Plan Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(728, 'IT Service Management Accountability Plan Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(729, 'IT Service Management Responsibility Plan Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(730, 'IT Service Management Empowerment Plan Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(731, 'IT Service Management Enablement Plan Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(732, 'IT Service Management Support Plan Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(733, 'IT Service Management Guidance Plan Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(734, 'IT Service Management Mentoring Plan Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(735, 'IT Service Management Coaching Plan Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(736, 'IT Service Management Feedback Plan Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(737, 'IT Service Management Recognition Plan Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(738, 'IT Service Management Reward Plan Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(739, 'IT Service Management Motivation Plan Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(740, 'IT Service Management Inspiration Plan Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(741, 'IT Service Management Change Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(742, 'IT Service Management Process Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(743, 'IT Service Management Quality Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(744, 'IT Service Management Outcome Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(745, 'IT Service Management Impact Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(746, 'IT Service Management Strategy Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(747, 'IT Service Management Governance Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(748, 'IT Service Management Leadership Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(749, 'IT Service Management Stakeholder Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(750, 'IT Service Management Business Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(751, 'IT Service Management Organizational Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(752, 'IT Service Management Team Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(753, 'IT Service Management Cultural Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(754, 'IT Service Management Trust Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(755, 'IT Service Management Credibility Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(756, 'IT Service Management Reputation Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(757, 'IT Service Management Integrity Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(758, 'IT Service Management Ethics Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(759, 'IT Service Management Accountability Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(760, 'IT Service Management Responsibility Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(761, 'IT Service Management Empowerment Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(762, 'IT Service Management Enablement Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(763, 'IT Service Management Support Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(764, 'IT Service Management Guidance Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(765, 'IT Service Management Mentoring Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(766, 'IT Service Management Coaching Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(767, 'IT Service Management Feedback Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(768, 'IT Service Management Recognition Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(769, 'IT Service Management Reward Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(770, 'IT Service Management Motivation Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(771, 'IT Service Management Inspiration Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(772, 'IT Service Management Innovation Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(773, 'IT Service Management Creativity Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(774, 'IT Service Management Collaboration Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(775, 'IT Service Management Teamwork Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(776, 'IT Service Management Productivity Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(777, 'IT Service Management Performance Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(778, 'IT Service Management Quality Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(779, 'IT Service Management Success Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(780, 'IT Service Management Excellence Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(781, 'IT Service Management Improvement Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(782, 'IT Service Management Development Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(783, 'IT Service Management Growth Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(784, 'IT Service Management Scalability Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(785, 'IT Service Management Sustainability Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(786, 'IT Service Management Value Creation Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(787, 'IT Service Management Value Proposition Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(788, 'IT Service Management Business Model Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(789, 'IT Service Management Innovation Model Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(790, 'IT Service Management Strategic Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(791, 'IT Service Management Transformation Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(792, 'IT Service Management Optimization Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(793, 'IT Service Management Assessment Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(794, 'IT Service Management Evaluation Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(795, 'IT Service Management Monitoring Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(796, 'IT Service Management Reporting Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(797, 'IT Service Management Communication Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(798, 'IT Service Management Engagement Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(799, 'IT Service Management Collaboration Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(800, 'IT Service Management Partnership Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(801, 'IT Service Management Relationship Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(802, 'IT Service Management Trust Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(803, 'IT Service Management Credibility Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(804, 'IT Service Management Reputation Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(805, 'IT Service Management Integrity Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(806, 'IT Service Management Ethics Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(807, 'IT Service Management Accountability Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(808, 'IT Service Management Responsibility Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(809, 'IT Service Management Empowerment Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(810, 'IT Service Management Enablement Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(811, 'IT Service Management Support Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(812, 'IT Service Management Guidance Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(813, 'IT Service Management Mentoring Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(814, 'IT Service Management Coaching Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(815, 'IT Service Management Feedback Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(816, 'IT Service Management Recognition Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(817, 'IT Service Management Reward Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(818, 'IT Service Management Motivation Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(819, 'IT Service Management Inspiration Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(820, 'IT Service Management Innovation Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(821, 'IT Service Management Creativity Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(822, 'IT Service Management Collaboration Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(823, 'IT Service Management Teamwork Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(824, 'IT Service Management Productivity Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(825, 'IT Service Management Performance Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(826, 'IT Service Management Quality Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(827, 'IT Service Management Success Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(828, 'IT Service Management Excellence Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(829, 'IT Service Management Improvement Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(830, 'IT Service Management Development Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(831, 'IT Service Management Growth Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(832, 'IT Service Management Scalability Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(833, 'IT Service Management Sustainability Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(834, 'IT Service Management Value Creation Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(835, 'IT Service Management Value Proposition Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(836, 'IT Service Management Business Model Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(837, 'IT Service Management Innovation Model Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(838, 'IT Service Management Strategic Plan Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(839, 'IT Service Management Transformation Plan Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(840, 'IT Service Management Optimization Plan Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(841, 'IT Service Management Assessment Plan Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(842, 'IT Service Management Evaluation Plan Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(843, 'IT Service Management Monitoring Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(844, 'IT Service Management Reporting Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(845, 'IT Service Management Communication Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(846, 'IT Service Management Engagement Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(847, 'IT Service Management Collaboration Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(848, 'IT Service Management Partnership Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(849, 'IT Service Management Relationship Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(850, 'IT Service Management Trust Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(851, 'IT Service Management Credibility Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(852, 'IT Service Management Reputation Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(853, 'IT Service Management Integrity Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(854, 'IT Service Management Ethics Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(855, 'IT Service Management Accountability Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(856, 'IT Service Management Responsibility Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(857, 'IT Service Management Empowerment Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(858, 'IT Service Management Enablement Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(859, 'IT Service Management Support Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(860, 'IT Service Management Guidance Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(861, 'IT Service Management Mentoring Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(862, 'IT Service Management Coaching Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(863, 'IT Service Management Feedback Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(864, 'IT Service Management Recognition Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(865, 'IT Service Management Reward Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(866, 'IT Service Management Motivation Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(867, 'IT Service Management Inspiration Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(868, 'IT Service Management Innovation Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(869, 'IT Service Management Creativity Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(870, 'IT Service Management Collaboration Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(871, 'IT Service Management Teamwork Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(872, 'IT Service Management Productivity Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(873, 'IT Service Management Performance Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(874, 'IT Service Management Quality Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(875, 'IT Service Management Success Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(876, 'IT Service Management Excellence Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(877, 'IT Service Management Improvement Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(878, 'IT Service Management Development Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(879, 'IT Service Management Growth Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(880, 'IT Service Management Scalability Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(881, 'IT Service Management Sustainability Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(882, 'IT Service Management Value Creation Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(883, 'IT Service Management Value Proposition Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(884, 'IT Service Management Business Model Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(885, 'IT Service Management Innovation Model Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(886, 'IT Service Management Strategic Plan Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(887, 'IT Service Management Transformation Plan Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(888, 'IT Service Management Optimization Plan Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(889, 'IT Service Management Assessment Plan Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(890, 'IT Service Management Evaluation Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(891, 'IT Service Management Monitoring Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(892, 'IT Service Management Reporting Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(893, 'IT Service Management Communication Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(894, 'IT Service Management Engagement Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(895, 'IT Service Management Collaboration Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(896, 'IT Service Management Partnership Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(897, 'IT Service Management Relationship Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(898, 'IT Service Management Trust Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(899, 'IT Service Management Credibility Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(900, 'IT Service Management Reputation Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(901, 'IT Service Management Integrity Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(902, 'IT Service Management Ethics Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(903, 'IT Service Management Accountability Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(904, 'IT Service Management Responsibility Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(905, 'IT Service Management Empowerment Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(906, 'IT Service Management Enablement Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(907, 'IT Service Management Support Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(908, 'IT Service Management Guidance Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(909, 'IT Service Management Mentoring Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(910, 'IT Service Management Coaching Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(911, 'IT Service Management Feedback Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(912, 'IT Service Management Recognition Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(913, 'IT Service Management Reward Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(914, 'IT Service Management Motivation Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(915, 'IT Service Management Inspiration Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(916, 'IT Service Management Change Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(917, 'IT Service Management Process Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(918, 'IT Service Management Quality Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(919, 'IT Service Management Outcome Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(920, 'IT Service Management Impact Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(921, 'IT Service Management Strategy Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(922, 'IT Service Management Governance Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(923, 'IT Service Management Leadership Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(924, 'IT Service Management Stakeholder Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(925, 'IT Service Management Business Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(926, 'IT Service Management Organizational Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(927, 'IT Service Management Team Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(928, 'IT Service Management Cultural Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(929, 'IT Service Management Trust Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(930, 'IT Service Management Credibility Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(931, 'IT Service Management Reputation Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(932, 'IT Service Management Integrity Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(933, 'IT Service Management Ethics Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(934, 'IT Service Management Accountability Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(935, 'IT Service Management Responsibility Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(936, 'IT Service Management Empowerment Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(937, 'IT Service Management Enablement Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(938, 'IT Service Management Support Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(939, 'IT Service Management Guidance Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(940, 'IT Service Management Mentoring Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(941, 'IT Service Management Coaching Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(942, 'IT Service Management Feedback Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(943, 'IT Service Management Recognition Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(944, 'IT Service Management Reward Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(945, 'IT Service Management Motivation Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(946, 'IT Service Management Inspiration Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(947, 'IT Service Management Innovation Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(948, 'IT Service Management Creativity Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(949, 'IT Service Management Collaboration Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(950, 'IT Service Management Teamwork Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(951, 'IT Service Management Productivity Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(952, 'IT Service Management Performance Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(953, 'IT Service Management Quality Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(954, 'IT Service Management Success Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(955, 'IT Service Management Excellence Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(956, 'IT Service Management Improvement Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(957, 'IT Service Management Development Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(958, 'IT Service Management Growth Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(959, 'IT Service Management Scalability Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(960, 'IT Service Management Sustainability Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(961, 'IT Service Management Value Creation Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(962, 'IT Service Management Value Proposition Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(963, 'IT Service Management Business Model Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(964, 'IT Service Management Innovation Model Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(965, 'IT Service Management Strategic Plan Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(966, 'IT Service Management Transformation Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(967, 'IT Service Management Optimization Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(968, 'IT Service Management Assessment Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(969, 'IT Service Management Evaluation Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(970, 'IT Service Management Monitoring Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(971, 'IT Service Management Reporting Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(972, 'IT Service Management Communication Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(973, 'IT Service Management Engagement Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(974, 'IT Service Management Collaboration Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(975, 'IT Service Management Partnership Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(976, 'IT Service Management Relationship Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(977, 'IT Service Management Trust Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(978, 'IT Service Management Credibility Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(979, 'IT Service Management Reputation Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(980, 'IT Service Management Integrity Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(981, 'IT Service Management Ethics Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(982, 'IT Service Management Accountability Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(983, 'IT Service Management Responsibility Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(984, 'IT Service Management Empowerment Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(985, 'IT Service Management Enablement Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(986, 'IT Service Management Support Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(987, 'IT Service Management Guidance Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(988, 'IT Service Management Mentoring Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(989, 'IT Service Management Coaching Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(990, 'IT Service Management Feedback Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(991, 'IT Service Management Recognition Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(992, 'IT Service Management Reward Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(993, 'IT Service Management Motivation Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(994, 'IT Service Management Inspiration Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(995, 'IT Service Management Change Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(996, 'IT Service Management Process Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(997, 'IT Service Management Quality Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(998, 'IT Service Management Outcome Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(999, 'IT Service Management Impact Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1000, 'IT Service Management Strategy Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1001, 'IT Service Management Governance Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1002, 'IT Service Management Leadership Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1003, 'IT Service Management Stakeholder Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1004, 'IT Service Management Business Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1005, 'IT Service Management Organizational Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1006, 'IT Service Management Team Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1007, 'IT Service Management Cultural Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1008, 'IT Service Management Trust Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1009, 'IT Service Management Credibility Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1010, 'IT Service Management Reputation Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1011, 'IT Service Management Integrity Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36');
INSERT INTO `professions` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(1012, 'IT Service Management Ethics Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1013, 'IT Service Management Accountability Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1014, 'IT Service Management Responsibility Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1015, 'IT Service Management Empowerment Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1016, 'IT Service Management Enablement Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1017, 'IT Service Management Support Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1018, 'IT Service Management Guidance Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1019, 'IT Service Management Mentoring Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1020, 'IT Service Management Coaching Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1021, 'IT Service Management Feedback Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1022, 'IT Service Management Recognition Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1023, 'IT Service Management Reward Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1024, 'IT Service Management Motivation Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1025, 'IT Service Management Inspiration Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1026, 'IT Service Management Innovation Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1027, 'IT Service Management Creativity Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1028, 'IT Service Management Collaboration Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1029, 'IT Service Management Teamwork Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1030, 'IT Service Management Productivity Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1031, 'IT Service Management Performance Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1032, 'IT Service Management Quality Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1033, 'IT Service Management Success Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1034, 'IT Service Management Excellence Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1035, 'IT Service Management Improvement Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1036, 'IT Service Management Development Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1037, 'IT Service Management Growth Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1038, 'IT Service Management Scalability Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1039, 'IT Service Management Sustainability Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1040, 'IT Service Management Value Creation Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1041, 'IT Service Management Value Proposition Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1042, 'IT Service Management Business Model Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1043, 'IT Service Management Innovation Model Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1044, 'IT Service Management Strategic Plan Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1045, 'IT Service Management Transformation Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1046, 'IT Service Management Optimization Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1047, 'IT Service Management Assessment Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1048, 'IT Service Management Evaluation Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1049, 'IT Service Management Monitoring Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1050, 'IT Service Management Reporting Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1051, 'IT Service Management Communication Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1052, 'IT Service Management Engagement Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1053, 'IT Service Management Collaboration Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1054, 'IT Service Management Partnership Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1055, 'IT Service Management Relationship Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1056, 'IT Service Management Trust Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1057, 'IT Service Management Credibility Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1058, 'IT Service Management Reputation Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1059, 'IT Service Management Integrity Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1060, 'IT Service Management Ethics Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1061, 'IT Service Management Accountability Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1062, 'IT Service Management Responsibility Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1063, 'IT Service Management Empowerment Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1064, 'IT Service Management Enablement Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1065, 'IT Service Management Support Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1066, 'IT Service Management Guidance Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1067, 'IT Service Management Mentoring Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1068, 'IT Service Management Coaching Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1069, 'IT Service Management Feedback Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1070, 'IT Service Management Recognition Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1071, 'IT Service Management Reward Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1072, 'IT Service Management Motivation Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36'),
(1073, 'IT Service Management Inspiration Management Management Plan Alignment Consultant', 1, '2024-09-28 17:21:36', '2024-09-28 17:21:36');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `entry_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `name`, `status`, `entry_by`, `created_at`, `updated_at`) VALUES
(1, 'Smokee BBQ', 1, NULL, '2023-07-21 09:38:13', '2023-07-21 09:38:13'),
(2, 'Project-3', 1, 1, '2023-07-21 09:38:13', '2023-07-21 09:38:13'),
(3, 'Project-2', 1, 1, NULL, NULL),
(4, 'Project-1', 1, 1, NULL, NULL),
(5, 'sdfwwww', 1, 1, NULL, NULL),
(6, 'undefined', 0, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `rule`
--

CREATE TABLE `rule` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rule`
--

INSERT INTO `rule` (`id`, `name`, `status`) VALUES
(1, 'Admin', 1),
(2, 'Seller', 1),
(3, 'Buyer', 1);

-- --------------------------------------------------------

--
-- Table structure for table `salary`
--

CREATE TABLE `salary` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `number_of_referell` varchar(255) DEFAULT NULL,
  `number_of_sales` varchar(255) DEFAULT NULL,
  `number_of_blogs` int(11) DEFAULT NULL,
  `salary_amount` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `salary`
--

INSERT INTO `salary` (`id`, `name`, `number_of_referell`, `number_of_sales`, `number_of_blogs`, `salary_amount`, `created_at`, `status`, `updated_at`) VALUES
(1, 'Experienced', '10000', '100', 10, '25', '2024-09-12 04:02:15', 1, '2024-09-12 04:02:15'),
(3, 'Team Leader', '50000', '500', 15, '100', '2024-09-13 03:10:19', 1, '2024-09-13 03:10:19'),
(4, 'Marketing Manager', '100000', '1000', 35, '250', '2024-09-13 03:10:31', 1, '2024-09-13 03:10:31'),
(5, 'G.M', '250000', '2500', 65, '500', '2024-09-24 14:49:36', 1, '2024-09-24 14:49:36'),
(6, 'Director', '1000000', '10000', 100, '2000', '2024-09-24 14:57:09', 1, '2024-09-24 14:57:09');

-- --------------------------------------------------------

--
-- Table structure for table `seller_ads`
--

CREATE TABLE `seller_ads` (
  `id` int(11) NOT NULL,
  `seller_id` int(11) DEFAULT NULL,
  `file_name` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `seller_review`
--

CREATE TABLE `seller_review` (
  `id` bigint(20) NOT NULL,
  `orderId` varchar(255) NOT NULL,
  `review` text NOT NULL,
  `rating` tinyint(3) UNSIGNED NOT NULL,
  `seller_id` bigint(20) NOT NULL,
  `buyer_id` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `seller_review`
--

INSERT INTO `seller_review` (`id`, `orderId`, `review`, `rating`, `seller_id`, `buyer_id`, `created_at`, `updated_at`) VALUES
(1, '392777-24', 'Your ReviewYour ReviewYour ReviewYour ReviewYour ReviewYour ReviewYour ReviewYour ReviewYour ReviewYour Review', 3, 2, 3, '2024-10-21 12:52:30', '2024-10-21 12:52:30'),
(2, '390875-24', '.l..', 5, 2, 3, '2024-10-21 12:58:04', '2024-10-21 12:58:04'),
(3, '877073-24', 'very good services', 5, 13, 8, '2024-10-22 11:34:06', '2024-10-22 11:34:06'),
(4, '2119709-24', 'good', 5, 24, 21, '2024-10-22 15:31:16', '2024-10-22 15:31:16'),
(5, '3336996-24', 'woicuasiohjas', 5, 24, 33, '2024-10-23 14:03:30', '2024-10-23 14:03:30'),
(6, '736042-24', 'very good services project timing is 5 days but this guy will complete it in one days he is very nivvery good services project timing is 5 days but this guy will complete it in one days he is very niv\nce ]]\nand nice personvery good services project timing is 5 days but this guy will complete it in one days he is very niv\nce ]]\nand nice personvery good services project timing is 5 days but this guy will complete it in one days he is very niv\nce ]]\nand nice personvery good services project timing is 5 days but this guy will complete it in one days he is very niv\nce ]]\nand nice personvery good services project timing is 5 days but this guy will complete it in one days he is very niv\nce ]]\nand nice personvery good services project timing is 5 days but this guy will complete it in one days he is very niv\nce ]]\nand nice personvery good services project timing is 5 days but this guy will complete it in one days he is very niv\nce ]]\nand nice personvery good services project timing is 5 days but this guy will complete it in one days he is very niv\nce ]]\nand nice personvery good services project timing is 5 days but this guy will complete it in one days he is very niv\nce ]]\nand nice personvery good services project timing is 5 days but this guy will complete it in one days he is very niv\nce ]]\nand nice personvery good services project timing is 5 days but this guy will complete it in one days he is very niv\nce ]]\nand nice personv\nce ]]\nand nice person', 5, 11, 7, '2024-10-25 13:11:11', '2024-10-25 13:11:11'),
(7, '930775-24', 'well', 5, 11, 9, '2024-10-26 08:35:36', '2024-10-26 08:35:36'),
(8, '413187-24', 'asdf', 5, 15, 4, '2024-10-28 10:11:47', '2024-10-28 10:11:47'),
(9, '410977-24', 'asdfgh', 5, 11, 4, '2024-10-28 11:00:33', '2024-10-28 11:00:33'),
(10, '478943-24', 'asdfghjkl', 5, 11, 4, '2024-10-28 11:01:16', '2024-10-28 11:01:16'),
(11, '418060-24', 'rgnbvc', 5, 11, 4, '2024-10-28 11:02:15', '2024-10-28 11:02:15'),
(12, '943016-24', 'asxc', 5, 11, 9, '2024-10-28 11:07:22', '2024-10-28 11:07:22'),
(13, '980766-24', 'ascxz', 5, 11, 9, '2024-10-28 11:07:33', '2024-10-28 11:07:33'),
(14, '924688-24', 'sdfghjk', 5, 11, 9, '2024-10-28 11:11:05', '2024-10-28 11:11:05'),
(15, '938158-24', 'qwfg', 5, 11, 9, '2024-10-28 11:17:08', '2024-10-28 11:17:08'),
(16, '917028-24', 'SADFVB', 5, 11, 9, '2024-10-28 11:17:21', '2024-10-28 11:17:21'),
(17, '929097-24', 'WERGHGRFEDWCS', 5, 11, 9, '2024-10-28 11:18:29', '2024-10-28 11:18:29'),
(18, '917249-24', 'asxccxc', 5, 11, 9, '2024-10-28 11:20:46', '2024-10-28 11:20:46'),
(19, '962693-24', 'szx', 5, 11, 9, '2024-10-28 11:20:58', '2024-10-28 11:20:58'),
(20, '942000-24', 'xxcxcvcv cv cv c', 5, 11, 9, '2024-10-28 11:21:13', '2024-10-28 11:21:13'),
(21, '910999-24', 'dcfv', 5, 11, 9, '2024-10-28 11:21:25', '2024-10-28 11:21:25'),
(22, '450134-24', 'asdfg', 5, 11, 4, '2024-10-31 13:42:56', '2024-10-31 13:42:56'),
(23, '356338-25', 'He gave me clear instructions. very good experience.', 5, 11, 3, '2025-02-14 15:14:36', '2025-02-14 15:14:36'),
(24, '386643-25', 'It\'s been a pleasure collaborating with mdbijonahmed. Looking forward to working with him again. Highly recommended!', 4, 11, 3, '2025-02-14 15:15:30', '2025-02-14 15:15:30');

-- --------------------------------------------------------

--
-- Table structure for table `send_message`
--

CREATE TABLE `send_message` (
  `id` int(11) NOT NULL,
  `candidate_name` varchar(255) DEFAULT NULL,
  `candidate_email` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `candidate_cc` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `file` varchar(255) DEFAULT NULL,
  `send_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `send_message`
--

INSERT INTO `send_message` (`id`, `candidate_name`, `candidate_email`, `subject`, `candidate_cc`, `description`, `file`, `send_by`, `created_at`) VALUES
(3, 'fgdfg', 'mdbijon@gmail.com', 'sdf', 'mdbijon@gmail.com', 'mdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.commdbijon@gmail.com', NULL, 1, '2023-08-19 04:33:25'),
(4, 'dsfsfsdf', 'mdbijon@gmail.com', 'ssss', '', 'In Laravel, you can easily attach files to a model using the attach method, especially when dealing with relationships like Eloquent\'s BelongsToMany or HasMany relationships. However, since you mentioned attaching files, I\'ll assume you\'re working with file uploads in the context of a form submission.', '/backend/files/SVfaIInZEZCDCGheQiF2.png', 1, '2023-08-19 05:02:28'),
(5, 'dfgdfg', 'mdbijon@gmail.com', 'ssss', '', 'sfdsf', '/backend/files/GwEyNFbWS6qZzWUCwjOE.png', 1, '2023-08-19 05:14:41'),
(6, 'dsfdsfsdf', 'mdbijon@gmail.com', 'fdgdfg', '', 'fggfdg', '', 1, '2023-08-19 06:30:44'),
(7, 'Md. Gazi Giash Uddin', 'ib@gmail.com', 'New Subject', '', 'Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate Candidate', '/backend/files/88wrHYRxDG94tmZ0Endb.png', 1, '2023-08-19 06:31:37'),
(8, 'Ibraheem', 'mdbijon@gmail.com', 'New Subject', '', 'ffff', '/backend/files/m6RklwhKmcSifwgvTfH0.png', 1, '2023-08-19 06:45:59'),
(9, 'Abdur Rahman Ibraheem', 'mdbijon@gmail.com', 'New Subject', '', 'If you want to conditionally send an email with or without an attachment, you can modify your Mailable class to include the attachment only when a certain condition is met. Here\'s how you can achieve that:If you want to conditionally send an email with or without an attachment, you can modify your Mailable class to include the attachment only when a certain condition is met. Here\'s how you can achieve that:If you want to conditionally send an email with or without an attachment, you can modify your Mailable class to include the attachment only when a certain condition is met. Here\'s how you can achieve that:If you want to conditionally send an email with or without an attachment, you can modify your Mailable class to include the attachment only when a certain condition is met. Here\'s how you can achieve that:', '/backend/files/u1ujrkQMqTX6ES7VZh69.png', 1, '2023-08-19 06:50:07');

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`id`, `user_id`, `name`, `created_at`, `updated_at`) VALUES
(1, 2, 'HTML', '2024-09-30 15:01:41', '2024-09-30 15:01:41'),
(2, 2, 'CSS', '2024-09-30 15:01:41', '2024-09-30 15:01:41'),
(3, 2, 'JavaScript', '2024-09-30 15:01:41', '2024-09-30 15:01:41'),
(4, 2, 'React.js', '2024-09-30 15:01:41', '2024-09-30 15:01:41'),
(5, 2, 'Vue.js', '2024-09-30 15:01:41', '2024-09-30 15:01:41'),
(6, 2, 'Angular', '2024-09-30 15:01:41', '2024-09-30 15:01:41'),
(7, 2, 'Node.js', '2024-09-30 15:01:41', '2024-09-30 15:01:41'),
(8, 2, 'Express.js', '2024-09-30 15:01:41', '2024-09-30 15:01:41'),
(9, 2, 'PHP', '2024-09-30 15:01:41', '2024-09-30 15:01:41'),
(10, 2, 'Laravel', '2024-09-30 15:01:41', '2024-09-30 15:01:41'),
(11, 2, 'MySQL', '2024-09-30 15:01:41', '2024-09-30 15:01:41'),
(12, 2, 'MongoDB', '2024-09-30 15:01:41', '2024-09-30 15:01:41'),
(13, 2, 'Git', '2024-09-30 15:01:41', '2024-09-30 15:01:41'),
(14, 2, 'Docker', '2024-09-30 15:01:41', '2024-09-30 15:01:41'),
(15, 2, 'TypeScript', '2024-09-30 15:01:41', '2024-09-30 15:01:41'),
(19, 37, 'HTML', '2024-10-01 02:50:52', '2024-10-01 02:50:52'),
(20, 37, 'JS', '2024-10-01 02:50:52', '2024-10-01 02:50:52'),
(21, 37, 'CS', '2024-10-01 02:50:52', '2024-10-01 02:50:52'),
(22, 11, 'NUXTJ3', '2025-02-11 00:13:54', '2025-02-11 00:13:54'),
(23, 11, 'JAVASCRIPT', '2025-02-11 00:14:12', '2025-02-11 00:14:12'),
(24, 11, 'HTML5', '2025-02-11 00:14:12', '2025-02-11 00:14:12'),
(25, 11, 'BOOTSTRAP 5', '2025-02-11 00:15:07', '2025-02-11 00:15:07'),
(26, 11, 'REACTJS', '2025-02-11 00:15:07', '2025-02-11 00:15:07'),
(27, 11, 'NUXTJS3', '2025-02-11 00:15:07', '2025-02-11 00:15:07'),
(29, 11, 'MYSQL', '2025-02-11 00:15:43', '2025-02-11 00:15:43'),
(30, 11, 'JAVA', '2025-02-11 00:16:54', '2025-02-11 00:16:54'),
(31, 11, 'C++', '2025-02-11 00:16:54', '2025-02-11 00:16:54'),
(32, 11, 'C#', '2025-02-11 00:16:54', '2025-02-11 00:16:54'),
(33, 11, 'NODEJS', '2025-02-11 00:16:54', '2025-02-11 00:16:54');

-- --------------------------------------------------------

--
-- Table structure for table `sliders`
--

CREATE TABLE `sliders` (
  `id` int(11) NOT NULL,
  `images` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` text DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `project_id` int(11) DEFAULT NULL COMMENT 'primary key of project table',
  `emp_id` varchar(255) DEFAULT NULL COMMENT 'primary key of employee table',
  `type` tinyint(4) DEFAULT 1,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `done_date` date DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `entry_by` int(11) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1 COMMENT '1 = Pending, 2 = Processing, 3 = Done',
  `email_files` varchar(3) DEFAULT 'No',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `title`, `description`, `project_id`, `emp_id`, `type`, `start_date`, `end_date`, `done_date`, `image`, `entry_by`, `status`, `email_files`, `created_at`, `updated_at`) VALUES
(1, 'bijon1114144', 'sdlkflskdfsdf\r\nsdf\r\nsdf', 3, '2', 1, '2023-07-19', '2023-07-26', NULL, '/backend/files/QESG49nK6XzDuTd953Lm.env', 1, 1, 'No', NULL, NULL),
(2, 'Tesssss', 'fasd', 4, '1', 1, '2023-07-14', '2023-07-28', NULL, '/backend/files/tAWzPRjL7xUKnSUcOpW3.env', 1, 2, 'No', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_setting`
--

CREATE TABLE `tbl_setting` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `forSellerCommission` int(11) DEFAULT NULL,
  `forBuyerCommission` int(11) DEFAULT NULL,
  `deposit_service_charge` int(11) DEFAULT NULL COMMENT '%',
  `convert_php_amt` float DEFAULT NULL,
  `withdraw_service_charge` int(11) DEFAULT NULL COMMENT '%',
  `withdraw_minimum_amount` int(11) DEFAULT NULL,
  `minimum_trade_amount` int(11) DEFAULT NULL,
  `minimum_deposit_amount` int(11) DEFAULT NULL,
  `level_1_bonus` int(11) DEFAULT NULL,
  `level_2_bonus` int(11) DEFAULT NULL,
  `level_3_bonus` int(11) DEFAULT NULL,
  `level_4_bonus` int(11) DEFAULT NULL,
  `level_5_bonus` int(11) DEFAULT NULL,
  `trade_fee` int(11) DEFAULT NULL COMMENT '%',
  `first_up_lin_com` int(11) DEFAULT NULL COMMENT '%',
  `second_up_lin_com` int(11) DEFAULT NULL COMMENT '%',
  `third_up_lin_com` int(11) DEFAULT NULL COMMENT '%',
  `trade_percent` int(11) DEFAULT NULL COMMENT '%',
  `tel` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `hotline` varchar(255) NOT NULL,
  `emergency` varchar(255) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `description` text NOT NULL,
  `copyright` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  `admin_photo` varchar(244) NOT NULL,
  `admin_name` varchar(255) NOT NULL,
  `admin_email` varchar(255) NOT NULL,
  `admin_phone` varchar(255) NOT NULL,
  `meta_keywords` text DEFAULT NULL,
  `meta_description` text DEFAULT NULL,
  `pphoto` varchar(255) NOT NULL,
  `bg_color` varchar(255) DEFAULT NULL,
  `currency` varchar(150) DEFAULT NULL,
  `openinig_balance_date` date DEFAULT NULL,
  `reffer_bonus` int(11) DEFAULT NULL,
  `openinig_balance_comments` text DEFAULT NULL,
  `fblink` varchar(255) DEFAULT NULL,
  `twitterlink` varchar(255) DEFAULT NULL,
  `linkdinlink` varchar(255) DEFAULT NULL,
  `instragramlink` varchar(255) DEFAULT NULL,
  `store_policy` longtext DEFAULT NULL,
  `crypto_wallet_address` varchar(255) DEFAULT NULL,
  `master_pass_acc_no` varchar(255) DEFAULT NULL,
  `whatsApp` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `telegram` varchar(255) DEFAULT NULL,
  `register_bonus` int(11) DEFAULT NULL,
  `setting_id` int(11) NOT NULL,
  `mininmum_deposit_amount` varchar(255) DEFAULT NULL,
  `maximum_deposit_amount` int(11) DEFAULT NULL,
  `daily_max_withdraw_request` int(11) DEFAULT NULL,
  `withdrawal_free_amount` int(11) DEFAULT NULL,
  `service_fee` int(11) DEFAULT NULL,
  `withdrawal_free_on_percentage` int(11) DEFAULT NULL,
  `minimum_withdrawal` int(11) DEFAULT NULL,
  `maximum_withdrawal` int(11) DEFAULT NULL,
  `mimumun_transfer_amount_to_other_user` int(11) DEFAULT NULL,
  `maximum_transfer_amount_to_other_user` int(11) DEFAULT NULL,
  `transfer_fee_fixed_amount` int(11) DEFAULT NULL,
  `traansfer_fee_on_percentage` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `tbl_setting`
--

INSERT INTO `tbl_setting` (`id`, `name`, `forSellerCommission`, `forBuyerCommission`, `deposit_service_charge`, `convert_php_amt`, `withdraw_service_charge`, `withdraw_minimum_amount`, `minimum_trade_amount`, `minimum_deposit_amount`, `level_1_bonus`, `level_2_bonus`, `level_3_bonus`, `level_4_bonus`, `level_5_bonus`, `trade_fee`, `first_up_lin_com`, `second_up_lin_com`, `third_up_lin_com`, `trade_percent`, `tel`, `email`, `address`, `hotline`, `emergency`, `photo`, `description`, `copyright`, `status`, `admin_photo`, `admin_name`, `admin_email`, `admin_phone`, `meta_keywords`, `meta_description`, `pphoto`, `bg_color`, `currency`, `openinig_balance_date`, `reffer_bonus`, `openinig_balance_comments`, `fblink`, `twitterlink`, `linkdinlink`, `instragramlink`, `store_policy`, `crypto_wallet_address`, `master_pass_acc_no`, `whatsApp`, `website`, `telegram`, `register_bonus`, `setting_id`, `mininmum_deposit_amount`, `maximum_deposit_amount`, `daily_max_withdraw_request`, `withdrawal_free_amount`, `service_fee`, `withdrawal_free_on_percentage`, `minimum_withdrawal`, `maximum_withdrawal`, `mimumun_transfer_amount_to_other_user`, `maximum_transfer_amount_to_other_user`, `transfer_fee_fixed_amount`, `traansfer_fee_on_percentage`) VALUES
(1, 'TRADING', 20, 10, 0, 64, 6, 10, 5, 10, 20, 15, 10, 5, 5, 6, 9, 4, 3, 10, '+44245454545', 'info@abcd.com', 'Addres', '000000', '+000000', 'pic/2tAjiUpJ0X8GziIrKJJJ.png', 'Business Description', 'Copyright © 1995-2024 abc Inc. All Rights Reserved', 1, 'pic/ZOdc8nsWAMY1YELkp9zH.jpg', 'admin', 'info@admin.com', '+44245454545', NULL, NULL, '', '#ffffff', '$', '2020-05-13', 5, NULL, 'isumax.com', 'https://www.facebook.com', 'https://web.whatsapp.com/', '#', '', 'TPpMvdKfhENfJqYZsDJQLgEopMRBy15jeU', '225588996633', '5989899', '22', '222', 0, 1, '5200', 3333, 4544, 45, 2, 4, 34, 333, 22, 22, 22, 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role_id` int(11) DEFAULT NULL,
  `employee_id` int(11) DEFAULT NULL,
  `invite_code` varchar(255) DEFAULT NULL,
  `userType` int(11) DEFAULT NULL,
  `reffer_bonus` int(11) DEFAULT NULL,
  `join_id` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `image` varchar(225) DEFAULT NULL,
  `phone_number` varchar(225) DEFAULT NULL,
  `address` varchar(225) DEFAULT NULL,
  `address_1` text DEFAULT NULL,
  `country_1` varchar(255) DEFAULT NULL,
  `country_2` varchar(255) DEFAULT NULL,
  `address_2` text DEFAULT NULL,
  `address_3` text DEFAULT NULL,
  `website` varchar(225) DEFAULT NULL,
  `github` varchar(225) DEFAULT NULL,
  `twitter` varchar(225) DEFAULT NULL,
  `instagram` varchar(225) DEFAULT NULL,
  `facebook` varchar(225) DEFAULT NULL,
  `linkdin` varchar(255) DEFAULT NULL,
  `whatsapp` varchar(255) DEFAULT NULL,
  `business_owner_name` varchar(255) DEFAULT NULL,
  `business_name` varchar(255) DEFAULT NULL,
  `business_name_slug` varchar(255) DEFAULT NULL,
  `business_register_num` varchar(255) DEFAULT NULL,
  `business_address` varchar(255) DEFAULT NULL,
  `business_warehouse_address` varchar(255) DEFAULT NULL,
  `phone_1` varchar(255) DEFAULT NULL,
  `phone_2` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `business_email` varchar(255) DEFAULT NULL,
  `business_phone` varchar(255) DEFAULT NULL,
  `profession_name` varchar(255) DEFAULT NULL,
  `business_return_name` varchar(255) DEFAULT NULL,
  `birthdate` varchar(255) DEFAULT NULL,
  `business_return_email` varchar(255) DEFAULT NULL,
  `landmark_2` varchar(255) DEFAULT NULL,
  `landmark_1` varchar(255) DEFAULT NULL,
  `introduce_yourself` text DEFAULT NULL,
  `business_return_address` varchar(255) DEFAULT NULL,
  `business_return_phone` varchar(255) DEFAULT NULL,
  `business_logo` varchar(255) DEFAULT NULL,
  `verification_code` int(11) DEFAULT NULL,
  `verification_code_expires_at` varchar(255) DEFAULT NULL,
  `verification_status` int(1) DEFAULT 0,
  `show_password` varchar(225) DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(255) DEFAULT NULL,
  `entry_by` int(11) DEFAULT NULL,
  `login_in_time` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` int(11) DEFAULT 1,
  `profile_status` int(1) DEFAULT 0,
  `home_status` int(11) DEFAULT NULL,
  `city_1` varchar(255) DEFAULT NULL,
  `city_2` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `role_id`, `employee_id`, `invite_code`, `userType`, `reffer_bonus`, `join_id`, `name`, `slug`, `first_name`, `last_name`, `email`, `image`, `phone_number`, `address`, `address_1`, `country_1`, `country_2`, `address_2`, `address_3`, `website`, `github`, `twitter`, `instagram`, `facebook`, `linkdin`, `whatsapp`, `business_owner_name`, `business_name`, `business_name_slug`, `business_register_num`, `business_address`, `business_warehouse_address`, `phone_1`, `phone_2`, `gender`, `business_email`, `business_phone`, `profession_name`, `business_return_name`, `birthdate`, `business_return_email`, `landmark_2`, `landmark_1`, `introduce_yourself`, `business_return_address`, `business_return_phone`, `business_logo`, `verification_code`, `verification_code_expires_at`, `verification_status`, `show_password`, `email_verified_at`, `password`, `remember_token`, `entry_by`, `login_in_time`, `created_at`, `updated_at`, `status`, `profile_status`, `home_status`, `city_1`, `city_2`) VALUES
(1, 1, NULL, NULL, NULL, 75, 2, 'Developer', 'developer', '', '', 'mdbijon@gmail.com1', '/backend/files/QghrRIJF2QIUpvBdeuQj.png', NULL, '', '', '', '', '', '', 'Web', 'git', 'Twitter', 'instgr', 'face', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', '', '', 'Web Developer', '', '', '', '', '', NULL, '', '', NULL, 0, '', 1, 'mdbijon@gmail.com', NULL, '$2a$12$YecXV3ZcmAft0YbhDlIsjuB2s9ZrWZK5k1vyn.5Z7SuVIaOy9vk6W', NULL, NULL, '2024-11-03 10:41:30', '2023-12-17 02:13:10', '2024-11-05 05:37:03', 1, 0, NULL, '', ''),
(2, 2, NULL, '1702800790', NULL, 90, 2, 'Bijon', 'bijon', '', '', 'bijon@gmail.com', '/backend/files/kyaoSq4OMyro3VS156tT.jpeg', '019999999', '', '', '23', 'Bangladesh', '', 'null', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '01915728982', '01915728983', '1', '', '', '16', '', '2024-09-09', '', 'DHK', 'Dhaka', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.<br />\r\n<br />\r\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).....', '', '', NULL, NULL, NULL, 0, 'bijon@gmail.com', NULL, '$2a$12$G2IY/mLjxQdKJrdjVSZp..k3l2iqfbaIyRTyG1MkiHfGVsdfCYVh.', NULL, 1, NULL, '2023-12-17 02:13:10', '2024-11-05 05:54:13', 1, 1, NULL, 'Dhaka', 'Dhaka'),
(3, 3, NULL, '1729858625', 3, 10, 0, 'buyer1', 'buyer1', NULL, NULL, 'buyer1@gmail.com', '/backend/files/1kdMmsZeZSh2TyJgw2m4.png', '019157287982', NULL, NULL, '173', NULL, NULL, NULL, 'http://localhost:3000/dashboard/buyer/myprofile', 'http://localhost:3000/dashboard/buyer/myprofile', 'http://localhost:3000/dashboard/buyer/myprofile', NULL, NULL, 'LinkedInLinkedIn', '878888', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, NULL, '3', NULL, NULL, NULL, NULL, NULL, 'I\'m Bijon Ahmed, a dedicated buyer who frequently hires professionals for website development and POS software projects. I value expertise, innovation, and timely delivery, ensuring every project meets high standards. My focus is on building efficient, user-friendly systems that enhance business operations. If you\'re skilled in web development or POS solutions, let\'s collaborate to create outstanding digital experiences!', NULL, NULL, NULL, NULL, NULL, 0, 'buyer1@gmail.com', NULL, '$2y$10$RgynVq9bT04xsKPae9RNOeJ/6a6FX0Qu6Tfg3lMZ2ue7IJg4AdVYe', NULL, NULL, '2025-02-18 01:51:57', '2024-10-25 12:17:05', '2025-02-17 13:51:58', 1, 1, NULL, NULL, NULL),
(4, 3, NULL, '1729858752', 3, 5, 3, 'amir1', 'amir1', NULL, NULL, 'amir1@gmail.com', NULL, 'null', NULL, NULL, '17', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '5', NULL, NULL, NULL, NULL, NULL, 'qwbgfvdsaz', NULL, NULL, NULL, NULL, NULL, 0, 'amir1@gmail.com', NULL, '$2y$10$Piy3SWh1TfjeS0Fq00ziguyEbwQPyL53p2hgC8f438ZleytNQ37Ua', NULL, NULL, '2025-01-06 18:32:11', '2024-10-25 12:19:12', '2025-01-06 13:32:14', 1, 1, NULL, NULL, NULL),
(5, 3, NULL, '1729858849', 3, 5, 4, 'amir2', 'amir2', NULL, NULL, 'amir2@gmail.com', NULL, 'null', NULL, NULL, '3', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'null', NULL, NULL, NULL, NULL, NULL, 'sdfgbfvsa', NULL, NULL, NULL, NULL, NULL, 0, 'amir2@gmail.com', NULL, '$2y$10$4WmwJyLn4U15uiYSTqbD7ui4yQiXgAO0DT5lY8LygCkGlq3.Zeaau', NULL, NULL, '2025-02-11 21:02:49', '2024-10-25 12:20:49', '2025-02-11 09:02:49', 1, 1, NULL, NULL, NULL),
(6, 3, NULL, '1729858921', 3, 5, 5, 'amir3', 'amir3', NULL, NULL, 'amir3@gmail.com', NULL, 'null', NULL, NULL, '14', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'null', NULL, NULL, NULL, NULL, NULL, 'asdasx', NULL, NULL, NULL, NULL, NULL, 0, 'amir3@gmail.com', NULL, '$2y$10$XpXMMzK52TFW9AoS8W8weObbKXnboRiQDMZIK276.f2N2mtsMMLl2', NULL, NULL, '2025-01-06 18:42:50', '2024-10-25 12:22:01', '2025-01-06 13:42:56', 1, 1, NULL, NULL, NULL),
(7, 3, NULL, '1729858994', 3, 5, 6, 'amir4', 'amir4', NULL, NULL, 'amir4@gmail.com', NULL, 'null', NULL, NULL, '14', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'null', NULL, NULL, NULL, NULL, NULL, 'weffhngbfvsxa', NULL, NULL, NULL, NULL, NULL, 0, 'amir4@gmail.com', NULL, '$2y$10$c1sw/So0.JDoaKoIzW6RgeR37ilDgB7pSvRLncH8Z/bbMidys3FwW', NULL, NULL, NULL, '2024-10-25 12:23:15', '2024-10-28 08:14:21', 1, 1, NULL, NULL, NULL),
(8, 3, NULL, '1729859030', 3, NULL, 0, 'Giash uddin', 'giash-uddin', NULL, NULL, 'Giashuddin@gmail.com', NULL, 'null', NULL, NULL, '2', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'null', NULL, NULL, NULL, NULL, NULL, 'asdfghjmk,.', NULL, NULL, NULL, NULL, NULL, 0, 'Giashuddin@gmail.com', NULL, '$2y$10$QOqtJOixzhTwtj8heXr0RufnNmIgPziTPmxIT6CQIpTQ1zsJ7EINa', NULL, NULL, NULL, '2024-10-25 12:23:51', '2024-10-25 12:23:51', 1, 1, NULL, NULL, NULL),
(9, 3, NULL, '1729859071', 3, 5, 7, 'amir5', 'amir5', NULL, NULL, 'amir5@gmail.com', NULL, 'null', NULL, NULL, '14', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'null', NULL, NULL, NULL, NULL, NULL, 'lkmlkm', NULL, NULL, NULL, NULL, NULL, 0, 'amir5@gmail.com', NULL, '$2y$10$EW9lv6cr1RibhHPa57IPqeAbOMs99ok2vplTCxc5avAVnqLQ.pS6.', NULL, NULL, '2025-01-10 09:20:14', '2024-10-25 12:24:31', '2025-01-10 04:20:15', 1, 1, NULL, NULL, NULL),
(10, 3, NULL, '1729859296', 3, NULL, 0, 'amir6', 'amir6', NULL, NULL, 'amir6@gmail.com', NULL, 'null', NULL, NULL, '11', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'null', NULL, NULL, NULL, NULL, NULL, 'asdfg', NULL, NULL, NULL, NULL, NULL, 0, 'amir6@gmail.com', NULL, '$2y$10$bjd138dgHcpPce97.wpSzeHN6SZNhfx5H4v5ehil6VDeBll7PRuvK', NULL, NULL, NULL, '2024-10-25 12:28:16', '2024-10-25 12:28:16', 1, 1, NULL, NULL, NULL),
(11, 2, NULL, '1729859692', 2, NULL, 0, 'seller1', 'seller1', NULL, NULL, 'seller1@gmail.com', '/backend/files/U1byYcc8DJeI2nfe6uHl.png', '12488', NULL, NULL, '16', NULL, NULL, NULL, 'Website', 'Github', 'Twitter', NULL, NULL, 'LinkedIn', 'Whatsapp', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, NULL, '8', NULL, NULL, NULL, NULL, NULL, 'I am doing any kind of Web & Software Development. I currently work as a part time Remote Web & Software Developer for www.fiverr.com/mdbijonahmed & www.upwork.com I am looking to take on more work and to increase my skills as a Programmer.', NULL, NULL, NULL, NULL, NULL, 0, 'seller1@gmail.com', NULL, '$2y$10$OX/biLtpnyTfJIx47WBp0e5K5TwVnFmLwnmVO3FEP4/ZcyySbT4iS', NULL, NULL, '2025-02-16 23:32:50', '2024-10-25 12:34:52', '2025-02-16 11:32:50', 1, 1, NULL, NULL, NULL),
(12, 1, NULL, NULL, NULL, 75, 2, 'Admin', 'admin', '', '', 'pkadmin@mail.com', '/backend/files/QghrRIJF2QIUpvBdeuQj.png', NULL, '', '', '', '', '', '', 'Web', 'git', 'Twitter', 'instgr', 'face', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', '', '', 'Web Developer', '', '', '', '', '', NULL, '', '', NULL, NULL, NULL, 0, 'pkadmin@mail.com', NULL, '$2a$12$LmWF.MBywQHoD59uIw0nIOxnwoR2o/d.gRFwMyG/luKE0N2ApJRzO', NULL, NULL, '2024-11-04 18:38:05', '2023-12-17 02:13:10', '2024-11-04 13:38:06', 1, 0, NULL, '', ''),
(13, 2, NULL, '1729938472', 2, NULL, 0, 'seller2', 'seller2', NULL, NULL, 'seller2@gmail.com', '/backend/files/UnqwyEC4IaL12cfCerOF.jpeg', 'null', NULL, NULL, '12', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'null', NULL, NULL, NULL, NULL, NULL, 'ASDFG', NULL, NULL, NULL, NULL, NULL, 0, 'seller2@gmail.com', NULL, '$2y$10$cCfj7hznrr7Mvyq2DhGqLOyc36DM/jlFo3m3/rN6T1Msj0y6wZ4cy', NULL, NULL, '2025-02-16 09:39:39', '2024-10-26 10:27:53', '2025-02-15 21:39:40', 1, 1, NULL, NULL, NULL),
(14, 2, NULL, '1729941816', 2, NULL, 0, 'seller3', 'seller3', NULL, NULL, 'seller3@gmail.com', '/backend/files/XRtDCnmoTxAC8fIKyvcE.jpeg', 'null', NULL, NULL, '10', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'null', NULL, NULL, NULL, NULL, NULL, 'XCgxnsdaC VC', NULL, NULL, NULL, NULL, NULL, 0, 'seller3@gmail.com', NULL, '$2y$10$aKGjWvSKGMuHy38AQ9ScE.m..O6HqTMF55YGk3Ro8CufJX48uX/e.', NULL, NULL, NULL, '2024-10-26 11:23:36', '2024-10-26 14:02:26', 1, 1, NULL, NULL, NULL),
(15, 2, NULL, '1730108380', 2, NULL, 0, 'seller5', 'seller5', NULL, NULL, 'seller5@gmail.com', '/backend/files/AUSPrieWL2qnxSVZNwAR.jpeg', 'null', NULL, NULL, '12', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'null', NULL, NULL, NULL, NULL, NULL, 'this is web developer', NULL, NULL, NULL, NULL, NULL, 0, 'seller5@gmail.com', NULL, '$2y$10$YnogEZvFd3OEj9dJRJCNcOk5DLhK22UlV4DCb3salyegQYOHUH33C', NULL, NULL, '2025-01-04 15:41:31', '2024-10-28 09:39:40', '2025-01-04 10:41:32', 1, 1, NULL, NULL, NULL),
(16, 3, NULL, '1730108761', 3, NULL, 0, 'amir7', 'amir7', NULL, NULL, 'amir7@gmail.com', NULL, 'null', NULL, NULL, '11', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'null', NULL, NULL, NULL, NULL, NULL, 'asdvb', NULL, NULL, NULL, NULL, NULL, 0, 'amir7@gmail.com', NULL, '$2y$10$mf/jQwwZMa5kqe60I6psseFyFiS2TA/jnKxhc.uRFeq1mJ59IzwPy', NULL, NULL, NULL, '2024-10-28 09:46:01', '2024-10-28 09:46:01', 1, 1, NULL, NULL, NULL),
(17, 3, NULL, '1730199804', 3, NULL, 9, 'amir8', 'amir8', NULL, NULL, 'amir8@gmail.com', NULL, 'null', NULL, NULL, '14', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'null', NULL, NULL, NULL, NULL, NULL, 'sdcfdwsd', NULL, NULL, NULL, NULL, NULL, 0, 'amir8@gmail.com', NULL, '$2y$10$iOfZXAc26/MOfgJJIejLmOdVnUfgBmTx4vf/lCs8fJFlP0gv.HWV6', NULL, NULL, NULL, '2024-10-29 11:03:24', '2024-10-29 11:03:24', 1, 1, NULL, NULL, NULL),
(18, 3, NULL, '1730227941', 3, NULL, 3, 'M. NAWAZ', 'm-nawaz', NULL, NULL, 'nawaznyc@yahoo.com', NULL, '15166616654', NULL, NULL, '235', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, NULL, NULL, NULL, NULL, 'Abc', NULL, NULL, NULL, NULL, NULL, 0, 'Abcd1234', NULL, '$2y$10$JWDDBBmp.O.8GsYi074/zuh8zOWQV54XRJH5iBCID/cIOo1s4RCgm', NULL, NULL, '2025-01-19 21:28:43', '2024-10-29 18:52:22', '2025-01-19 16:28:44', 1, 1, NULL, NULL, NULL),
(19, 3, NULL, '1730282060', 3, NULL, 0, 'user2', 'user2', NULL, NULL, 'user2@mail.com', NULL, '12345', NULL, NULL, '23', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2', NULL, NULL, NULL, NULL, NULL, 'asdfasd', NULL, NULL, NULL, NULL, NULL, 0, 'user2@mail.com', NULL, '$2y$10$UeJkU38nb802hmHiKSWI9.LSHLUD.ledjIrK/m3wjU4J2qr6jo4O6', NULL, NULL, NULL, '2024-10-30 09:54:20', '2024-10-30 09:54:20', 1, 1, NULL, NULL, NULL),
(20, 3, NULL, NULL, NULL, NULL, NULL, 'amir9', NULL, NULL, NULL, 'amir9@gmail.com', '/backend/files/qilJnpRWWwmbAfQTrX6L.jpeg', '03440761564', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, '$2y$10$t4/yVSD.O4bxMXiKuGlkouwbgLatciP6HV2vSSI0QjbqusuIoVfd2', NULL, 12, NULL, NULL, NULL, 1, 0, NULL, NULL, NULL),
(21, 1, NULL, NULL, NULL, 75, 2, 'Supper Admin', 'Supper Admin', '', '', 'mmdmamun@mail.com', '/backend/files/QghrRIJF2QIUpvBdeuQj.png', NULL, '', '', '', '', '', '', 'Web', 'git', 'Twitter', 'instgr', 'face', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', '', '', 'Supper Admin', '', '', '', '', '', NULL, '', '', NULL, NULL, NULL, 0, 'mmdmamun@mail.com', NULL, '$2a$12$T7QV140CHT5rs78H3B.PuuKPhPh2FAWAfIhgA6kAQhZD.i5dod56q', NULL, NULL, '2024-11-03 10:41:30', '2023-12-17 02:13:10', '2024-11-03 04:41:30', 1, 0, NULL, '', ''),
(23, 1, NULL, NULL, NULL, 75, 2, 'Admin', 'ahmed-admin', '', '', 'rakpak2020@gmail.com', '/backend/files/QghrRIJF2QIUpvBdeuQj.png', NULL, '', '', '', '', '', '', 'Web', 'git', 'Twitter', 'instgr', 'face', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', '', '', 'Web Developer', '', '', '', '', '', NULL, '', '', NULL, 0, '', 1, 'rakpak2020@gmail.com', NULL, '$2a$12$Z32tCnsRN0i2Zk7UnZ5VVO1qQDbuiw998bd1WHPSFh.ZhRyf/43PS', NULL, NULL, '2024-11-03 10:41:30', '2023-12-17 02:13:10', '2025-01-04 10:29:04', 1, 0, NULL, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `wishlist`
--

CREATE TABLE `wishlist` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `wishlist`
--

INSERT INTO `wishlist` (`id`, `customer_id`, `product_id`, `created_at`, `updated_at`) VALUES
(4, 16, 12, '2024-02-19 11:42:04', '2024-02-19 11:42:04'),
(5, 16, 13, '2024-02-19 11:42:18', '2024-02-19 11:42:18'),
(6, 1, 217, '2024-04-04 20:44:44', '2024-04-04 20:44:44'),
(7, 1, 211, '2024-04-04 20:45:18', '2024-04-04 20:45:18'),
(8, 1, 16, '2024-04-04 20:46:02', '2024-04-04 20:46:02');

-- --------------------------------------------------------

--
-- Table structure for table `withdraw`
--

CREATE TABLE `withdraw` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `withdrawID` varchar(255) DEFAULT NULL,
  `depscription` text DEFAULT NULL,
  `withdrawal_amount` varchar(255) DEFAULT NULL,
  `selected_type` int(11) DEFAULT NULL COMMENT '1=Crypto\r\n2=Paypal\r\n3=Payooner\r\n4=Bank',
  `type` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `account_name` varchar(255) DEFAULT NULL,
  `account_num` varchar(255) DEFAULT NULL,
  `ibn_no` varchar(255) DEFAULT NULL,
  `bank_id` int(11) DEFAULT NULL,
  `branch_id` int(11) DEFAULT NULL,
  `method_id` int(11) DEFAULT NULL,
  `receivable_amount` int(11) DEFAULT NULL,
  `crypto_wallet_type` varchar(255) DEFAULT NULL,
  `wallet_address` varchar(255) DEFAULT NULL,
  `withdrawal_pin` varchar(255) DEFAULT NULL,
  `remarks` text DEFAULT NULL,
  `approved_by` int(11) DEFAULT NULL,
  `transection_fee` int(11) NOT NULL COMMENT '%',
  `payable_amount` double(10,2) DEFAULT NULL COMMENT 'After 5% deduction amount',
  `status` int(11) DEFAULT NULL COMMENT ' 	0=Review,2=Reject,1=Approved 	',
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `withdraw`
--

INSERT INTO `withdraw` (`id`, `user_id`, `withdrawID`, `depscription`, `withdrawal_amount`, `selected_type`, `type`, `email`, `account_name`, `account_num`, `ibn_no`, `bank_id`, `branch_id`, `method_id`, `receivable_amount`, `crypto_wallet_type`, `wallet_address`, `withdrawal_pin`, `remarks`, `approved_by`, `transection_fee`, `payable_amount`, `status`, `created_at`, `updated_at`) VALUES
(1, 18, 'W.6624b6d8217cf71640993409df58204f', 'W.6624b6d8217cf71640993409df58204f', '10', 2, 'paypal', '', NULL, NULL, NULL, NULL, NULL, 5, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0, '2024-10-29 06:15:52', '2024-10-29 06:15:52'),
(2, 18, 'W.4b85256c4881edb6c0776df5d81f6236', 'W.4b85256c4881edb6c0776df5d81f6236', '10', 2, 'paypal', '', NULL, NULL, NULL, NULL, NULL, 5, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0, '2024-10-29 06:16:05', '2024-10-29 06:16:05'),
(3, 18, 'W.07c4b1fdd1ef8da2d7e9393071204b71', 'W.07c4b1fdd1ef8da2d7e9393071204b71', '10', 2, 'paypal', '', NULL, NULL, NULL, NULL, NULL, 5, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0, '2024-10-29 06:17:21', '2024-10-29 06:17:21'),
(4, 18, 'W.bc7f621451b4f5df308a8e098112185d', 'W.bc7f621451b4f5df308a8e098112185d', '10', 2, 'paypal', 'mdbijon@gmail.com', NULL, NULL, NULL, NULL, NULL, 4, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0, '2024-10-29 06:20:10', '2024-10-29 06:20:10'),
(5, 18, 'W.8c01d2fefd69916d9137cc813fcb5400', 'W.8c01d2fefd69916d9137cc813fcb5400', '20', 2, 'paypal', 'gazimdbijon@gmail.com', NULL, NULL, NULL, NULL, NULL, 5, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0, '2024-10-29 06:20:29', '2024-10-29 06:20:29'),
(6, 18, 'W.9ed017d7372360c256add7a8fe35a0a6', 'W.9ed017d7372360c256add7a8fe35a0a6', '20', 3, 'payooner', 'mdbijon', NULL, NULL, NULL, NULL, NULL, 7, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0, '2024-10-29 06:21:28', '2024-10-29 06:21:28'),
(8, 18, 'W.0e095e054ee94774d6a496099eb1cf6a', 'W.0e095e054ee94774d6a496099eb1cf6a', '10', 1, 'crypto', '', NULL, NULL, NULL, NULL, NULL, 1, NULL, 'USDT TRC-20', '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', NULL, NULL, NULL, 0, NULL, 0, '2024-10-29 06:29:33', '2024-10-29 06:29:33'),
(9, 18, 'W.e0b0f9051084fd476926501af19e1e96', 'W.e0b0f9051084fd476926501af19e1e96', '10', 1, 'crypto', '', NULL, NULL, NULL, NULL, NULL, 1, NULL, 'USDT TRC-20', '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', NULL, NULL, NULL, 0, NULL, 0, '2024-10-29 06:30:07', '2024-10-29 06:30:07'),
(10, 18, 'W.4d386d01419c083e8df5de53eb5a0254', 'W.4d386d01419c083e8df5de53eb5a0254', '10', 1, 'crypto', '', NULL, NULL, NULL, NULL, NULL, 1, NULL, 'USDT TRC-20', '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', NULL, NULL, NULL, 0, NULL, 0, '2024-10-29 06:30:12', '2024-10-29 06:30:12'),
(11, 18, 'W.894db62f7b7a6ed2f2a277dae56a017c', 'W.894db62f7b7a6ed2f2a277dae56a017c', '20', 4, 'bank', '', 'Gazi', '156454855888', '115556', 1, 1, 8, NULL, '', '', NULL, 'due twofake earning', 12, 0, NULL, 2, '2024-10-29 06:37:45', '2024-10-31 11:30:23'),
(12, 18, 'W.02ebef8c56a7ada3f1ed5e900e3143c0', 'W.02ebef8c56a7ada3f1ed5e900e3143c0', '10', 4, 'bank', '', 'Ibraheem', '216598999', '234234', 2, 5, 9, NULL, '', '', NULL, NULL, NULL, 0, NULL, 0, '2024-10-29 06:38:16', '2024-10-29 06:38:16'),
(13, 2, 'W.09eb27dec1a45d92f229228204ea7201', 'W.09eb27dec1a45d92f229228204ea7201', '120', 1, 'crypto', '', '', '', '', 0, 0, 10, NULL, 'USDT TRC-20', 'ssssssweASDF', NULL, NULL, NULL, 0, NULL, 0, '2024-10-29 08:01:24', '2024-10-29 08:01:24'),
(14, 2, 'W.64a7157cf3932bf74755aa3cf586f2ec', 'W.64a7157cf3932bf74755aa3cf586f2ec', '600', 2, 'paypal', 'selell@paypal', '', '', '', 0, 0, 11, NULL, '', '', NULL, NULL, NULL, 0, NULL, 0, '2024-10-29 08:01:38', '2024-10-29 08:01:38'),
(15, 2, 'W.5fd513e89cc656d9c7ab2bca4168a4f2', 'W.5fd513e89cc656d9c7ab2bca4168a4f2', '10', 3, 'payooner', 'seller@payooner', '', '', '', 0, 0, 12, NULL, '', '', NULL, NULL, NULL, 0, NULL, 0, '2024-10-29 08:01:52', '2024-10-29 08:01:52'),
(16, 2, 'W.b66dc44cd9882859d84670604ae276e6', 'W.b66dc44cd9882859d84670604ae276e6', '0', 4, 'bank', '', 'Seller AC', '157458788', '54485', 1, 1, 13, NULL, '', '', NULL, NULL, NULL, 0, NULL, 0, '2024-10-29 08:02:00', '2024-10-29 08:02:00'),
(17, 3, 'W.2fe2a9d4c06124698de449b12aeb6249', 'W.2fe2a9d4c06124698de449b12aeb6249', '35', 1, 'crypto', '', '', '', '', 0, 0, 15, NULL, 'USDT TRC-20', '659698sfadfadsf', NULL, NULL, NULL, 0, NULL, 0, '2024-10-29 08:40:15', '2024-10-29 08:40:15'),
(18, 7, 'W.7296d81c3d5e425bc1785994bea8a0d2', 'W.7296d81c3d5e425bc1785994bea8a0d2', '100', 3, 'payooner', 'paypal@gmail.com', '', '', '', 0, 0, 21, NULL, '', '', NULL, 'due two fake earning', 12, 0, NULL, 2, '2024-10-29 15:51:09', '2024-10-31 11:31:24'),
(19, 7, 'W.9a96a2c73c0d477ff2a6da3bf538f4f4', 'W.9a96a2c73c0d477ff2a6da3bf538f4f4', '100', 1, 'crypto', '', '', '', '', 0, 0, 19, NULL, 'USDT TRC-20', '123347crp', NULL, 'due to break policy', 12, 0, NULL, 2, '2024-10-29 15:51:17', '2024-10-31 11:32:09'),
(20, 7, 'W.f4a331b7a22d1b237565d8813a34d8ac', 'W.f4a331b7a22d1b237565d8813a34d8ac', '100', 3, 'payooner', 'paypal@gmail.com', '', '', '', 0, 0, 21, NULL, '', '', NULL, 'fake earning', 12, 0, NULL, 2, '2024-10-29 15:51:25', '2024-10-31 11:30:44'),
(21, 11, 'W.09853c7fb1d3f8ee67a61b6bf4a7f8e6', 'W.09853c7fb1d3f8ee67a61b6bf4a7f8e6', '1000', 4, 'bank', '', 'Amir', '03440727823723', '03440727823723', 5, 8, 71, NULL, '', '', NULL, 'abccccc', 12, 0, NULL, 2, '2024-11-04 13:31:35', '2024-11-04 13:35:08'),
(22, 11, 'W.769c3bce651ce5feaa01ce3b75986420', 'W.769c3bce651ce5feaa01ce3b75986420', '1000', 4, 'bank', '', 'Amir', '03440727823723', '03440727823723', 5, 8, 71, NULL, '', '', NULL, NULL, NULL, 0, NULL, 1, '2024-11-04 13:35:35', '2024-11-04 13:36:06'),
(23, 11, 'W.bcc0d400288793e8bdcd7c19a8ac0c2b', 'W.bcc0d400288793e8bdcd7c19a8ac0c2b', '1000', 2, 'paypal', 'Amir@mail.com', '', '', '', 0, 0, 62, NULL, '', '', NULL, NULL, NULL, 0, NULL, 0, '2024-11-04 13:43:32', '2024-11-04 13:43:32'),
(24, 11, 'W.f8f235136f525e39e94f401424954c3a', 'W.f8f235136f525e39e94f401424954c3a', '1000', 2, 'paypal', 'Amir@mail.com', '', '', '', 0, 0, 62, NULL, '', '', NULL, NULL, NULL, 0, NULL, 1, '2024-11-04 13:43:33', '2024-11-04 13:44:09'),
(25, 11, 'W.c559da2ba967eb820766939a658022c8', 'W.c559da2ba967eb820766939a658022c8', '100', 1, 'crypto', '', '', '', '', 0, 0, 16, NULL, 'USDT TRC-20', '9798889', NULL, NULL, NULL, 0, NULL, 1, '2024-11-04 13:44:10', '2024-11-04 13:45:07'),
(26, 11, 'W.17ed8abedc255908be746d245e50263a', 'W.17ed8abedc255908be746d245e50263a', '220', 1, 'crypto', '', '', '', '', 0, 0, 16, NULL, 'USDT TRC-20', '9798889', NULL, NULL, NULL, 0, NULL, 1, '2025-01-06 14:01:49', '2025-01-06 14:02:19'),
(27, 11, 'W.fe2b952bd6b9030970b3866b328bd9c7', 'W.fe2b952bd6b9030970b3866b328bd9c7', '100', 1, 'crypto', '', '', '', '', 0, 0, 106, NULL, 'USDT TRC-20', 'SLm1A1zP1eP5QGefi2DMPTfTL5SLm', NULL, NULL, NULL, 0, NULL, 0, '2025-02-11 09:02:40', '2025-02-11 09:02:40');

-- --------------------------------------------------------

--
-- Table structure for table `withdrawal_method`
--

CREATE TABLE `withdrawal_method` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `wallet_address` varchar(255) DEFAULT NULL,
  `countryName` varchar(255) DEFAULT NULL,
  `bank_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL COMMENT 'Paypal or Payoneer email id use ',
  `account_name` varchar(255) DEFAULT NULL,
  `account_num` varchar(255) DEFAULT NULL,
  `ibn_no` varchar(255) DEFAULT NULL,
  `bank_id` int(11) DEFAULT NULL,
  `branch_id` int(11) DEFAULT NULL,
  `swift_bic` varchar(255) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `withdrawal_method`
--

INSERT INTO `withdrawal_method` (`id`, `user_id`, `name`, `type`, `wallet_address`, `countryName`, `bank_name`, `email`, `account_name`, `account_num`, `ibn_no`, `bank_id`, `branch_id`, `swift_bic`, `remarks`, `updated_at`, `created_at`) VALUES
(1, 18, 'USDT TRC-20', 'crypto', '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-10-29 03:41:34', '2024-10-29 03:41:34'),
(2, 18, 'USDT TRC-20', 'crypto', '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa2', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-10-29 03:41:46', '2024-10-29 03:41:46'),
(3, 18, 'USDT TRC-20', 'crypto', '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa2242354', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-10-29 03:42:40', '2024-10-29 03:42:40'),
(4, 18, NULL, 'paypal', NULL, NULL, NULL, 'mdbijon@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-10-29 03:51:19', '2024-10-29 03:51:19'),
(5, 18, NULL, 'paypal', NULL, NULL, NULL, 'gazimdbijon@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-10-29 03:52:27', '2024-10-29 03:52:27'),
(6, 18, 'USDT TRC-20', 'crypto', '131A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-10-29 03:54:04', '2024-10-29 03:54:04'),
(7, 18, NULL, 'payooner', NULL, NULL, NULL, 'mdbijon', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-10-29 04:13:02', '2024-10-29 04:13:02'),
(8, 18, NULL, 'bank', NULL, NULL, NULL, NULL, 'Gazi', '156454855888', '115556', 1, 1, NULL, NULL, '2024-10-29 04:34:27', '2024-10-29 04:34:27'),
(9, 18, NULL, 'bank', NULL, NULL, NULL, NULL, 'Ibraheem', '216598999', '234234', 2, 5, NULL, NULL, '2024-10-29 04:36:16', '2024-10-29 04:36:16'),
(10, 2, 'USDT TRC-20', 'crypto', 'ssssssweASDF', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-10-29 07:38:49', '2024-10-29 07:38:49'),
(11, 2, NULL, 'paypal', NULL, NULL, NULL, 'selell@paypal', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-10-29 07:39:01', '2024-10-29 07:39:01'),
(12, 2, NULL, 'payooner', NULL, NULL, NULL, 'seller@payooner', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-10-29 07:39:11', '2024-10-29 07:39:11'),
(13, 2, NULL, 'bank', NULL, NULL, NULL, NULL, 'Seller AC', '157458788', '54485', 1, 1, NULL, NULL, '2024-10-29 07:39:24', '2024-10-29 07:39:24'),
(14, 2, 'USDT TRC-20', 'crypto', 'gfghfghfgh', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-10-29 08:37:26', '2024-10-29 08:37:26'),
(15, 3, 'USDT TRC-20', 'crypto', '659698sfadfadsf', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-10-29 08:39:37', '2024-10-29 08:39:37'),
(17, 11, NULL, 'paypal', NULL, NULL, NULL, 'amir6453@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-10-29 10:09:09', '2024-10-29 10:09:09'),
(18, 11, NULL, 'payooner', NULL, NULL, NULL, 'amir6453@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-10-29 10:09:44', '2024-10-29 10:09:44'),
(19, 7, 'USDT TRC-20', 'crypto', '123347crp', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-10-29 15:50:06', '2024-10-29 15:50:06'),
(20, 7, NULL, 'paypal', NULL, NULL, NULL, 'paypal@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-10-29 15:50:25', '2024-10-29 15:50:25'),
(21, 7, NULL, 'payooner', NULL, NULL, NULL, 'paypal@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-10-29 15:50:38', '2024-10-29 15:50:38'),
(22, 9, NULL, 'bank', NULL, NULL, NULL, NULL, 'Amir', '03440761564', '03440761564', 5, 8, NULL, NULL, '2024-11-04 13:24:51', '2024-11-04 13:24:51'),
(61, 11, NULL, 'payooner', NULL, NULL, NULL, 'Amir', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-11-04 13:27:58', '2024-11-04 13:27:58'),
(62, 11, NULL, 'paypal', NULL, NULL, NULL, 'Amir@mail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-11-04 13:28:12', '2024-11-04 13:28:12'),
(71, 11, NULL, 'bank', NULL, NULL, NULL, NULL, 'Amir', '03440727823723', '03440727823723', 5, 8, NULL, NULL, '2024-11-04 13:31:18', '2024-11-04 13:31:18'),
(72, 3, NULL, 'paypal', NULL, NULL, NULL, 'abc@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-11-04 13:41:59', '2024-11-04 13:41:59'),
(73, 9, 'USDT TRC-20', 'crypto', '16', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-11-04 13:58:28', '2024-11-04 13:58:28'),
(74, 9, NULL, 'paypal', NULL, NULL, NULL, 'amir6453@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-11-04 13:59:01', '2024-11-04 13:59:01'),
(75, 9, NULL, 'payooner', NULL, NULL, NULL, 'amir6453@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-11-04 13:59:09', '2024-11-04 13:59:09'),
(76, 6, 'USDT TRC-20', 'crypto', '500', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-11-04 14:39:20', '2024-11-04 14:39:20'),
(95, 6, NULL, 'payooner', NULL, NULL, NULL, 'amir6453@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-11-04 14:43:00', '2024-11-04 14:43:00'),
(96, 6, NULL, 'payooner', NULL, NULL, NULL, 'amir6453@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-11-04 14:43:05', '2024-11-04 14:43:05'),
(97, 6, NULL, 'payooner', NULL, NULL, NULL, 'amir6453@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-11-04 14:43:09', '2024-11-04 14:43:09'),
(98, 6, NULL, 'payooner', NULL, NULL, NULL, 'amir6453@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-11-04 14:43:09', '2024-11-04 14:43:09'),
(99, 6, NULL, 'payooner', NULL, NULL, NULL, 'amir6453@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-11-04 14:43:09', '2024-11-04 14:43:09'),
(100, 6, NULL, 'payooner', NULL, NULL, NULL, 'amir6453@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-11-04 14:43:09', '2024-11-04 14:43:09'),
(101, 6, NULL, 'payooner', NULL, NULL, NULL, 'amir6453@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-11-04 14:43:10', '2024-11-04 14:43:10'),
(102, 6, NULL, 'payooner', NULL, NULL, NULL, 'amir6453@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-11-04 14:43:10', '2024-11-04 14:43:10'),
(103, 6, NULL, 'payooner', NULL, NULL, NULL, 'amir6453@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-11-04 14:43:11', '2024-11-04 14:43:11'),
(104, 6, NULL, 'paypal', NULL, NULL, NULL, 'amir6453@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-11-04 14:43:24', '2024-11-04 14:43:24'),
(105, 11, 'USDT TRC-20', 'crypto', '1A1zP1eP5QGefi2DMPTfTL5SLm', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-02-11 08:49:19', '2025-02-11 08:49:19'),
(106, 11, 'USDT TRC-20', 'crypto', 'SLm1A1zP1eP5QGefi2DMPTfTL5SLm', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-02-11 08:52:13', '2025-02-11 08:52:13'),
(107, 11, NULL, 'bank', NULL, NULL, NULL, NULL, 'Gazi', '487878888', '4888', 1, 1, NULL, NULL, '2025-02-11 09:01:45', '2025-02-11 09:01:45'),
(108, 11, NULL, 'payooner', NULL, NULL, NULL, 'mdbijon@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-02-11 09:01:58', '2025-02-11 09:01:58'),
(109, 11, NULL, 'paypal', NULL, NULL, NULL, 'mdbijon@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-02-11 09:02:10', '2025-02-11 09:02:10'),
(110, 11, 'USDT TRC-20', 'crypto', 'eP5QGefi2DMPTfTL5SLm', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-02-11 09:02:22', '2025-02-11 09:02:22'),
(111, 11, NULL, 'bank', NULL, NULL, NULL, NULL, 'Test', '234343434', 'sadfsdfs35454', 1, NULL, 'asdq423', NULL, '2025-02-14 17:52:20', '2025-02-14 17:52:20'),
(112, 3, NULL, 'bank', NULL, NULL, 'DBBL', NULL, 'Md.Gazi Giash Uddin', '478/7878', 'IBN', NULL, NULL, 'Swift', NULL, '2025-02-15 05:43:52', '2025-02-15 05:43:52'),
(113, 3, NULL, 'bank', NULL, NULL, 'ABC Bank', NULL, 'MD.GAZI', '5989899', 'IBN48978', NULL, NULL, 'SWIFT878', NULL, '2025-02-15 12:54:47', '2025-02-15 12:54:47'),
(114, 3, NULL, 'bank', NULL, 'Pakistan', 'PK Bank', NULL, 'MD.GAZI GIASH UDDIN', '48787888', 'IBN4878', NULL, NULL, 'SWIFT', NULL, '2025-02-15 13:20:26', '2025-02-15 13:20:26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bank_info`
--
ALTER TABLE `bank_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogcategorys`
--
ALTER TABLE `blogcategorys`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug_unique` (`slug`);

--
-- Indexes for table `blog_posts`
--
ALTER TABLE `blog_posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `branch`
--
ALTER TABLE `branch`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `buyer_review`
--
ALTER TABLE `buyer_review`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `buy_token`
--
ALTER TABLE `buy_token`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cancel_orders`
--
ALTER TABLE `cancel_orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categorys`
--
ALTER TABLE `categorys`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indexes for table `categorys_backup`
--
ALTER TABLE `categorys_backup`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indexes for table `certificates`
--
ALTER TABLE `certificates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chat_messages`
--
ALTER TABLE `chat_messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_buyer_id` (`buyer_id`),
  ADD KEY `idx_seller_id` (`seller_id`),
  ADD KEY `idx_sender_id` (`sender_id`);

--
-- Indexes for table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coupons`
--
ALTER TABLE `coupons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `deposit`
--
ALTER TABLE `deposit`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `education`
--
ALTER TABLE `education`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `experience`
--
ALTER TABLE `experience`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `gig`
--
ALTER TABLE `gig`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `gig_slug` (`gig_slug`);

--
-- Indexes for table `gigwish_list`
--
ALTER TABLE `gigwish_list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gig_images_history`
--
ALTER TABLE `gig_images_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `level_commission`
--
ALTER TABLE `level_commission`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `manufacturers`
--
ALTER TABLE `manufacturers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders_product`
--
ALTER TABLE `orders_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders_strip`
--
ALTER TABLE `orders_strip`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_history`
--
ALTER TABLE `order_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_status`
--
ALTER TABLE `order_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `packages`
--
ALTER TABLE `packages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `payment_type`
--
ALTER TABLE `payment_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sku` (`sku`);

--
-- Indexes for table `professions`
--
ALTER TABLE `professions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rule`
--
ALTER TABLE `rule`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `salary`
--
ALTER TABLE `salary`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `seller_ads`
--
ALTER TABLE `seller_ads`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `seller_review`
--
ALTER TABLE `seller_review`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `send_message`
--
ALTER TABLE `send_message`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sliders`
--
ALTER TABLE `sliders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_setting`
--
ALTER TABLE `tbl_setting`
  ADD PRIMARY KEY (`setting_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `business_name_slug` (`business_name_slug`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indexes for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `withdraw`
--
ALTER TABLE `withdraw`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `withdrawal_method`
--
ALTER TABLE `withdrawal_method`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `account_number` (`account_num`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bank_info`
--
ALTER TABLE `bank_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `blogcategorys`
--
ALTER TABLE `blogcategorys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `blog_posts`
--
ALTER TABLE `blog_posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `branch`
--
ALTER TABLE `branch`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `buyer_review`
--
ALTER TABLE `buyer_review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `buy_token`
--
ALTER TABLE `buy_token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `cancel_orders`
--
ALTER TABLE `cancel_orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `categorys`
--
ALTER TABLE `categorys`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `categorys_backup`
--
ALTER TABLE `categorys_backup`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- AUTO_INCREMENT for table `certificates`
--
ALTER TABLE `certificates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `chat_messages`
--
ALTER TABLE `chat_messages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `country`
--
ALTER TABLE `country`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=251;

--
-- AUTO_INCREMENT for table `coupons`
--
ALTER TABLE `coupons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `deposit`
--
ALTER TABLE `deposit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `education`
--
ALTER TABLE `education`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `experience`
--
ALTER TABLE `experience`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gig`
--
ALTER TABLE `gig`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `gigwish_list`
--
ALTER TABLE `gigwish_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `gig_images_history`
--
ALTER TABLE `gig_images_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `level_commission`
--
ALTER TABLE `level_commission`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `manufacturers`
--
ALTER TABLE `manufacturers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=181;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `orders_product`
--
ALTER TABLE `orders_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders_strip`
--
ALTER TABLE `orders_strip`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `order_history`
--
ALTER TABLE `order_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_status`
--
ALTER TABLE `order_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `packages`
--
ALTER TABLE `packages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `payment_type`
--
ALTER TABLE `payment_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `professions`
--
ALTER TABLE `professions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1074;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `rule`
--
ALTER TABLE `rule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `salary`
--
ALTER TABLE `salary`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `seller_ads`
--
ALTER TABLE `seller_ads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `seller_review`
--
ALTER TABLE `seller_review`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `send_message`
--
ALTER TABLE `send_message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `sliders`
--
ALTER TABLE `sliders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_setting`
--
ALTER TABLE `tbl_setting`
  MODIFY `setting_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `wishlist`
--
ALTER TABLE `wishlist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `withdraw`
--
ALTER TABLE `withdraw`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `withdrawal_method`
--
ALTER TABLE `withdrawal_method`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
