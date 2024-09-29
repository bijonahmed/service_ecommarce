-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 29, 2024 at 03:15 PM
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
-- Database: `db_service_management`
--

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
  `created_at` varchar(255) DEFAULT NULL,
  `updated_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categorys`
--

INSERT INTO `categorys` (`id`, `name`, `slug`, `description`, `meta_title`, `meta_description`, `meta_keyword`, `parent_id`, `commission`, `fixcommission`, `product_sell_qty`, `getAmount`, `sort_order`, `file`, `status`, `speacial_status`, `mobile_view_class`, `keyword`, `created_at`, `updated_at`) VALUES
(1, 'Web development & Tech', 'web-development-tech', NULL, 'null', 'null', 'null', 0, 5, NULL, NULL, NULL, 0, '', 1, NULL, 'null', 'null', '2024-09-13 09:11:04', '2024-09-17 07:18:03'),
(3, 'Software & Mobiles Apps', 'software-mobiles-apps', NULL, 'null', 'null', 'null', 0, 5, NULL, NULL, NULL, 0, '', 1, NULL, 'null', 'null', '2024-09-13 09:13:11', '2024-09-17 07:17:14'),
(4, 'Web Designing', 'web-designing', NULL, 'null', 'null', 'null', 0, 5, NULL, NULL, NULL, 0, '', 1, NULL, 'null', 'null', '2024-09-13 09:14:13', '2024-09-17 10:33:10'),
(5, 'Sales / Marketing', 'sales-marketing', NULL, 'null', 'null', 'null', 0, 5, NULL, NULL, NULL, 0, '', 1, NULL, 'null', 'null', '2024-09-13 09:14:45', '2024-09-17 07:18:41'),
(6, 'Content for industries', 'content-for-industries', NULL, 'null', 'null', 'null', 6, 5, NULL, NULL, NULL, 0, '', 1, NULL, 'null', 'null', '2024-09-13 09:15:16', '2024-09-18 10:26:36'),
(7, 'Photo & video Editing', 'photo-video-editing-animation', NULL, 'null', 'null', 'null', 0, 5, NULL, NULL, NULL, 0, '', 1, NULL, 'null', 'null', '2024-09-13 09:16:24', '2024-09-17 11:32:50'),
(8, 'Business Services', 'business-services', NULL, 'null', 'null', 'null', 0, 5, NULL, NULL, NULL, 0, '', 1, NULL, 'null', 'null', '2024-09-13 09:17:12', '2024-09-17 07:19:12'),
(9, 'Consulting', 'consulting', NULL, 'null', 'null', 'null', 0, 5, NULL, NULL, NULL, 0, '', 1, NULL, 'null', 'null', '2024-09-13 09:17:34', '2024-09-17 07:20:25'),
(11, 'AI-Services', 'ai-services', NULL, 'null', 'null', 'null', 0, 5, NULL, NULL, NULL, 0, '', 1, NULL, 'null', 'null', '2024-09-13 09:19:44', '2024-09-17 07:20:58'),
(12, 'Personal Growth.', 'personal-growth-', NULL, 'null', 'null', 'null', 0, 5, NULL, NULL, NULL, 0, '', 1, NULL, 'null', 'null', '2024-09-13 09:20:13', '2024-09-17 07:21:16'),
(13, 'Courses', 'courses', NULL, 'null', 'null', 'null', 0, 5, NULL, NULL, NULL, 0, '', 1, NULL, 'null', 'null', '2024-09-13 09:20:57', '2024-09-19 14:20:51'),
(14, 'Hire Me Now', 'hire-me-now', NULL, 'null', 'null', 'null', 0, 5, NULL, NULL, NULL, 0, '', 0, NULL, 'null', 'null', '2024-09-13 09:22:17', '2024-09-19 14:21:13'),
(15, 'Business Logo/branding', 'business-logo-branding', NULL, NULL, NULL, NULL, 4, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 09:39:08', '2024-09-13 09:39:08'),
(16, 'Illustrative Visual/Art', 'illustrative-visual-art', NULL, NULL, NULL, NULL, 4, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 09:40:06', '2024-09-13 09:40:06'),
(17, 'Various Diverse', 'various-diverse', NULL, NULL, NULL, NULL, 4, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 09:43:08', '2024-09-13 09:43:08'),
(18, 'Game Play*Products', 'game-play-products', NULL, NULL, NULL, NULL, 4, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 09:44:30', '2024-09-13 09:44:30'),
(19, 'Graphic Design', 'graphic-design', NULL, 'null', 'null', 'null', 0, 5, NULL, NULL, NULL, 0, '', 1, NULL, 'null', 'null', '2024-09-13 09:45:59', '2024-09-17 07:22:02'),
(20, 'Visual Design', 'visual-design', NULL, NULL, NULL, NULL, 4, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 09:48:56', '2024-09-13 09:48:56'),
(21, 'Graphic Arts', 'graphic-arts', NULL, NULL, NULL, NULL, 4, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 09:50:04', '2024-09-13 09:50:04'),
(22, 'web App design', 'web-app-design', NULL, NULL, NULL, NULL, 4, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 09:50:39', '2024-09-13 09:50:39'),
(23, 'Mobiles Apps Design', 'mobiles-apps-design', NULL, NULL, NULL, NULL, 4, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 09:51:24', '2024-09-13 09:51:24'),
(24, 'Website Development', 'website-development', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 09:52:11', '2024-09-13 09:52:11'),
(25, 'Mainitaning Websites', 'mainitaning-websites', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 09:52:39', '2024-09-13 09:52:39'),
(26, 'AI Development', 'ai-development', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 09:53:05', '2024-09-13 09:53:05'),
(27, 'Chatbot Development', 'chatbot-development', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 09:53:47', '2024-09-13 09:53:47'),
(28, 'Game Development', 'game-development', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 09:54:07', '2024-09-13 09:54:07'),
(29, 'Mobile App Development', 'mobile-app-development', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 09:54:35', '2024-09-13 09:54:35'),
(30, 'Cloud & Cybersecurity', 'cloud-cybersecurity', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 09:55:33', '2024-09-13 09:55:33'),
(31, 'site Development', 'site-development', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 09:57:00', '2024-09-13 09:57:00'),
(32, 'Search bar Optimization S.E.O', 'search-bar-optimization-s-e-o', NULL, 'null', 'null', 'null', 5, 0, NULL, NULL, NULL, 0, '', 1, NULL, 'null', 'null', '2024-09-13 09:57:45', '2024-09-13 11:07:34'),
(33, 'Social media', 'social-media', NULL, NULL, NULL, NULL, 5, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 09:58:10', '2024-09-13 09:58:10'),
(34, 'Methods & Techtics', 'methods-techtics', NULL, NULL, NULL, NULL, 5, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 09:58:30', '2024-09-13 09:58:30'),
(35, 'Analytics & Strategy', 'analytics-strategy', NULL, NULL, NULL, NULL, 5, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 09:58:52', '2024-09-13 09:58:52'),
(36, 'Channel Specific', 'channel-specific', NULL, NULL, NULL, NULL, 5, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 09:59:13', '2024-09-13 09:59:13'),
(37, 'Industry & Purpose-Specific', 'industry-purpose-specific', NULL, NULL, NULL, NULL, 5, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 09:59:46', '2024-09-13 09:59:46'),
(38, 'Miscellaneous', 'miscellaneous', NULL, NULL, NULL, NULL, 5, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:00:29', '2024-09-13 10:00:29'),
(39, 'Editing & Post-Production', 'editing-post-production', NULL, NULL, NULL, NULL, 7, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:01:45', '2024-09-13 10:01:45'),
(40, 'Social & Marketing Videos', 'social-marketing-videos', NULL, NULL, NULL, NULL, 7, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:03:16', '2024-09-13 10:03:16'),
(41, 'Animation', 'animation', NULL, NULL, NULL, NULL, 7, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:03:59', '2024-09-13 10:03:59'),
(42, 'Motion Graphics', 'motion-graphics', NULL, NULL, NULL, NULL, 7, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:04:23', '2024-09-13 10:04:23'),
(43, 'Filmed Video Production', 'filmed-video-production', NULL, NULL, NULL, NULL, 7, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:04:46', '2024-09-13 10:04:46'),
(44, 'Auido/Books', 'auido-books', NULL, 'null', 'null', 'null', 0, 5, NULL, NULL, NULL, 0, '', 1, NULL, 'null', 'null', '2024-09-13 10:04:57', '2024-09-17 07:22:21'),
(45, 'Explainer Videos', 'explainer-videos', NULL, NULL, NULL, NULL, 7, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:05:17', '2024-09-13 10:05:17'),
(46, 'Product Videos', 'product-videos', NULL, NULL, NULL, NULL, 7, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:06:08', '2024-09-13 10:06:08'),
(47, 'AI Video', 'ai-video', NULL, NULL, NULL, NULL, 7, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:06:59', '2024-09-13 10:06:59'),
(48, 'Photography', 'photography', NULL, NULL, NULL, NULL, 7, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:07:35', '2024-09-13 10:07:35'),
(49, 'Content Writing', 'content-writing', NULL, NULL, NULL, NULL, 6, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:10:38', '2024-09-13 10:10:38'),
(50, 'Editing & Critique', 'editing-critique', NULL, NULL, NULL, NULL, 6, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:11:02', '2024-09-13 10:11:02'),
(51, 'Book & eBook Publishing', 'book-ebook-publishing', NULL, NULL, NULL, NULL, 6, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:11:41', '2024-09-13 10:11:41'),
(52, 'Career Writing', 'career-writing', NULL, NULL, NULL, NULL, 6, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:13:36', '2024-09-13 10:13:36'),
(53, 'Soical Media Post/images', 'soical-media-post-images', NULL, NULL, NULL, NULL, 7, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:14:03', '2024-09-13 10:14:03'),
(54, 'Business & Marketing Copy', 'business-marketing-copy', NULL, NULL, NULL, NULL, 6, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:15:31', '2024-09-13 10:15:31'),
(55, 'Translation & Transcription', 'translation-transcription', NULL, NULL, NULL, NULL, 6, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:17:06', '2024-09-13 10:17:06'),
(56, 'Content for specific industries', 'content-for-specific-industries', NULL, 'null', 'null', 'null', 6, 0, NULL, NULL, NULL, 0, '', 0, NULL, 'null', 'null', '2024-09-13 10:17:47', '2024-09-18 10:18:24'),
(57, 'Audio Engineering & Post Production', 'audio-engineering-post-production', NULL, NULL, NULL, NULL, 44, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:19:03', '2024-09-13 10:19:03'),
(58, 'Streaming & Audio', 'streaming-audio', NULL, NULL, NULL, NULL, 44, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:19:25', '2024-09-13 10:19:25'),
(59, 'Sound Design', 'sound-design', NULL, NULL, NULL, NULL, 44, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:21:02', '2024-09-13 10:21:02'),
(60, 'Lessons & Transcriptions', 'lessons-transcriptions', NULL, NULL, NULL, NULL, 44, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:21:35', '2024-09-13 10:21:35'),
(61, 'Voice Over & Narration', 'voice-over-narration', NULL, NULL, NULL, NULL, 44, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:22:05', '2024-09-13 10:22:05'),
(62, 'Financial Services', 'financial-services', NULL, NULL, NULL, NULL, 8, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:23:25', '2024-09-13 10:23:25'),
(63, 'Legal Services', 'legal-services', NULL, NULL, NULL, NULL, 8, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:23:46', '2024-09-13 10:23:46'),
(64, 'Business Management', 'business-management', NULL, NULL, NULL, NULL, 8, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:25:28', '2024-09-13 10:25:28'),
(65, 'AI for Businesses', 'ai-for-businesses', NULL, NULL, NULL, NULL, 8, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:26:10', '2024-09-13 10:26:10'),
(66, 'E-Commerce Management', 'e-commerce-management', NULL, NULL, NULL, NULL, 8, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:26:29', '2024-09-13 10:26:29'),
(67, 'Data & Business Intelligence', 'data-business-intelligence', NULL, NULL, NULL, NULL, 8, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:27:07', '2024-09-13 10:27:07'),
(68, 'Sales & Customer Care', 'sales-customer-care', NULL, NULL, NULL, NULL, 8, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:27:31', '2024-09-13 10:27:31'),
(69, 'General/Administrative', 'general-administrative', NULL, NULL, NULL, NULL, 8, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:29:21', '2024-09-13 10:29:21'),
(70, 'Business Consultants', 'business-consultants', NULL, NULL, NULL, NULL, 9, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:32:14', '2024-09-13 10:32:14'),
(71, 'Marketing Strategy', 'marketing-strategy', NULL, NULL, NULL, NULL, 9, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:33:25', '2024-09-13 10:33:25'),
(72, 'Data Consulting', 'data-consulting', NULL, NULL, NULL, NULL, 9, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:34:22', '2024-09-13 10:34:22'),
(73, 'Coaching / Advisory', 'coaching-advisory', NULL, 'null', 'null', 'null', 0, 5, NULL, NULL, NULL, 0, '', 1, NULL, 'null', 'null', '2024-09-13 10:35:48', '2024-09-17 07:22:58'),
(74, 'Coaching / Advice', 'coaching-advice', NULL, NULL, NULL, NULL, 9, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:36:52', '2024-09-13 10:36:52'),
(75, 'Tech Consulting', 'tech-consulting', NULL, NULL, NULL, NULL, 9, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:37:18', '2024-09-13 10:37:18'),
(76, 'Mentorship', 'mentorship', NULL, NULL, NULL, NULL, 9, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:38:50', '2024-09-13 10:38:50'),
(77, 'AI- Development', 'ai--development', NULL, NULL, NULL, NULL, 11, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:40:24', '2024-09-13 10:40:24'),
(78, 'Data', 'data', NULL, NULL, NULL, NULL, 11, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:40:56', '2024-09-13 10:40:56'),
(79, 'AI Artists', 'ai-artists', NULL, NULL, NULL, NULL, 11, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:41:20', '2024-09-13 10:41:20'),
(80, 'AI- for Businesses', 'ai--for-businesses', NULL, NULL, NULL, NULL, 11, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:42:02', '2024-09-13 10:42:02'),
(81, 'AI - Video', 'ai---video', NULL, NULL, NULL, NULL, 11, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:42:39', '2024-09-13 10:42:39'),
(82, 'AI- Audio', 'ai--audio', NULL, NULL, NULL, NULL, 11, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:43:06', '2024-09-13 10:43:06'),
(83, 'AI- Content', 'ai--content', NULL, NULL, NULL, NULL, 11, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:43:30', '2024-09-13 10:43:30'),
(84, 'Self Improvement', 'self-improvement', NULL, NULL, NULL, NULL, 12, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:44:03', '2024-09-13 10:44:03'),
(85, 'Fashion & Style', 'fashion-style', NULL, NULL, NULL, NULL, 12, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:44:26', '2024-09-13 10:44:26'),
(86, 'Wellness & Fitness', 'wellness-fitness', NULL, NULL, NULL, NULL, 12, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:45:00', '2024-09-13 10:45:00'),
(87, 'Gaming', 'gaming', NULL, NULL, NULL, NULL, 12, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:45:21', '2024-09-13 10:45:21'),
(88, 'Leisure & Hobbies', 'leisure-hobbies', NULL, NULL, NULL, NULL, 12, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 10:49:25', '2024-09-13 10:49:25'),
(90, 'Social / Marketing Video', 'social-marketing-video', NULL, 'null', 'null', 'null', 7, 0, NULL, NULL, NULL, 0, '', 0, NULL, 'null', 'null', '2024-09-13 10:52:08', '2024-09-18 08:35:02'),
(91, '1. Social & Communication', '1-social-communication', NULL, NULL, NULL, NULL, 3, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 11:02:27', '2024-09-13 11:02:27'),
(92, '2. Entertainment', '2-entertainment', NULL, NULL, NULL, NULL, 3, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 11:02:54', '2024-09-13 11:02:54'),
(93, 'Productivity', 'productivity', NULL, NULL, NULL, NULL, 3, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 11:04:51', '2024-09-13 11:04:51'),
(94, 'Health & Fitness', 'health-fitness', NULL, NULL, NULL, NULL, 3, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 11:05:16', '2024-09-13 11:05:16'),
(95, 'Finance', 'finance', NULL, NULL, NULL, NULL, 3, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 11:05:45', '2024-09-13 11:05:45'),
(96, 'Education & Learning', 'education-learning', NULL, NULL, NULL, NULL, 3, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 11:06:07', '2024-09-13 11:06:07'),
(97, 'Shopping & E-commerce', 'shopping-e-commerce', NULL, NULL, NULL, NULL, 3, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 11:06:33', '2024-09-13 11:06:33'),
(98, 'Travel & Local', 'travel-local', NULL, NULL, NULL, NULL, 3, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 11:07:01', '2024-09-13 11:07:01'),
(99, 'News & Magazines', 'news-magazines', NULL, NULL, NULL, NULL, 3, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 11:07:34', '2024-09-13 11:07:34'),
(100, 'Photography & Video', 'photography-video', NULL, NULL, NULL, NULL, 3, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 11:07:56', '2024-09-13 11:07:56'),
(101, 'Lifestyle', 'lifestyle', NULL, NULL, NULL, NULL, 3, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 11:08:21', '2024-09-13 11:08:21'),
(102, 'Utilities', 'utilities', NULL, NULL, NULL, NULL, 3, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 11:08:51', '2024-09-13 11:08:51'),
(103, 'Tools & Productivity', 'tools-productivity', NULL, NULL, NULL, NULL, 3, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-13 11:09:53', '2024-09-13 11:09:53'),
(104, 'Branding and Logo Design', 'branding-and-logo-design', NULL, NULL, NULL, NULL, 19, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 10:35:19', '2024-09-17 10:35:19'),
(105, 'Artwork and Illustrations', 'artwork-and-illustrations', NULL, NULL, NULL, NULL, 19, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 10:38:00', '2024-09-17 10:38:00'),
(106, 'Web and Mobile App Design', 'web-and-mobile-app-design', NULL, NULL, NULL, NULL, 19, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 10:39:29', '2024-09-17 10:39:29'),
(107, 'Products & Gaming', 'products-gaming', NULL, NULL, NULL, NULL, 19, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 10:40:26', '2024-09-17 10:40:26'),
(108, 'Print Media Design', 'print-media-design', NULL, NULL, NULL, NULL, 19, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 10:41:33', '2024-09-17 10:41:33'),
(109, 'Visual Concept Design', 'visual-concept-design', NULL, NULL, NULL, NULL, 19, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 10:42:54', '2024-09-17 10:42:54'),
(110, 'Brand Marketing Design', 'brand-marketing-design', NULL, NULL, NULL, NULL, 19, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 10:44:07', '2024-09-17 10:44:07'),
(111, 'Cover and Packaging Design', 'cover-and-packaging-design', NULL, NULL, NULL, NULL, 19, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 10:45:15', '2024-09-17 10:45:15'),
(112, 'Structural and Architectural Design', 'structural-and-architectural-design', NULL, NULL, NULL, NULL, 19, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 10:48:25', '2024-09-17 10:48:25'),
(113, 'Fashion and Product Lines', 'fashion-and-product-lines', NULL, NULL, NULL, NULL, 19, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 10:49:09', '2024-09-17 10:49:09'),
(114, '3D Art and Design', '3d-art-and-design', NULL, NULL, NULL, NULL, 19, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 10:50:30', '2024-09-17 10:50:30'),
(115, 'Custom Logo Design', 'custom-logo-design', NULL, NULL, NULL, NULL, 104, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 10:54:54', '2024-09-17 10:54:54'),
(116, 'Style and Branding Guides', 'style-and-branding-guides', NULL, NULL, NULL, NULL, 104, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 10:55:38', '2024-09-17 10:55:38'),
(117, 'Business Card Printing and Stationery', 'business-card-printing-and-stationery', NULL, NULL, NULL, NULL, 104, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 10:56:19', '2024-09-17 10:56:19'),
(118, 'Font and Typography Services', 'font-and-typography-services', NULL, NULL, NULL, NULL, 104, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 10:57:12', '2024-09-17 10:57:12'),
(119, 'Blockchain and Digital Currency', 'blockchain-and-digital-currency', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 11:14:58', '2024-09-17 11:14:58'),
(120, 'Advanced Data Science and ML', 'advanced-data-science-and-ml', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 11:18:32', '2024-09-17 11:18:32'),
(121, 'Business Web Solutions', 'business-web-solutions', NULL, NULL, NULL, NULL, 24, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 11:43:00', '2024-09-17 11:43:00'),
(122, 'E-Commerce Site Design', 'e-commerce-site-design', NULL, NULL, NULL, NULL, 24, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 11:43:33', '2024-09-17 11:43:33'),
(123, 'Custom Landing Pages', 'custom-landing-pages', NULL, NULL, NULL, NULL, 24, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 11:44:13', '2024-09-17 11:44:13'),
(124, 'Dropshipping Online Stores', 'dropshipping-online-stores', NULL, NULL, NULL, NULL, 24, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 11:44:42', '2024-09-17 11:44:42'),
(125, 'Custom Website Adjustments', 'custom-website-adjustments', NULL, NULL, NULL, NULL, 25, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 12:03:59', '2024-09-17 12:03:59'),
(126, 'Code Debugging', 'code-debugging', NULL, NULL, NULL, NULL, 25, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 12:06:19', '2024-09-17 12:06:19'),
(127, 'Site Backup and Transfer', 'site-backup-and-transfer', NULL, NULL, NULL, NULL, 25, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 12:06:40', '2024-09-17 12:06:40'),
(128, 'Site Performance Optimization', 'site-performance-optimization', NULL, NULL, NULL, NULL, 25, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 12:07:02', '2024-09-17 12:07:02'),
(129, 'AI Conversational Agent', 'ai-conversational-agent', NULL, NULL, NULL, NULL, 26, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 12:10:05', '2024-09-17 12:10:05'),
(130, 'AI Application Development', 'ai-application-development', NULL, NULL, NULL, NULL, 26, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 12:10:39', '2024-09-17 12:10:39'),
(131, 'AI Integration Solutions', 'ai-integration-solutions', NULL, NULL, NULL, NULL, 26, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 12:11:08', '2024-09-17 12:11:08'),
(132, 'Smart AI Agents', 'smart-ai-agents', NULL, NULL, NULL, NULL, 26, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 12:11:27', '2024-09-17 12:11:27'),
(133, 'AI Performance Tuning', 'ai-performance-tuning', NULL, NULL, NULL, NULL, 26, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 12:19:35', '2024-09-17 12:19:35'),
(134, 'OpenAI GPT Services Store', 'openai-gpt-services-store', NULL, NULL, NULL, NULL, 26, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-17 12:19:58', '2024-09-17 12:19:58'),
(135, 'Discord Chat Service', 'discord-chat-service', NULL, NULL, NULL, NULL, 27, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:03:12', '2024-09-18 08:03:12'),
(136, 'Telegram Chat Platform', 'telegram-chat-platform', NULL, NULL, NULL, NULL, 27, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:03:24', '2024-09-18 08:03:24'),
(137, 'TikTok Short-Video App', 'tiktok-short-video-app', NULL, NULL, NULL, NULL, 27, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:03:33', '2024-09-18 08:03:33'),
(138, 'Facebook Chat Service', 'facebook-chat-service', NULL, NULL, NULL, NULL, 27, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:03:42', '2024-09-18 08:03:42'),
(139, 'Player Experience and Feedback', 'player-experience-and-feedback', NULL, NULL, NULL, NULL, 28, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:03:58', '2024-09-18 08:03:58'),
(140, 'Games for PC', 'games-for-pc', NULL, NULL, NULL, NULL, 28, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:04:06', '2024-09-18 08:04:06'),
(141, 'Smartphone Games', 'smartphone-games', NULL, NULL, NULL, NULL, 28, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:04:13', '2024-09-18 08:04:13'),
(142, 'Cross-Device Development', 'cross-device-development', NULL, NULL, NULL, NULL, 29, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:04:27', '2024-09-18 08:04:27'),
(143, 'Android Mobile App Creation', 'android-mobile-app-creation', NULL, NULL, NULL, NULL, 29, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:04:34', '2024-09-18 08:04:34'),
(144, 'iOS Mobile App Creation', 'ios-mobile-app-creation', NULL, NULL, NULL, NULL, 29, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:04:40', '2024-09-18 08:04:40'),
(145, 'Web-Based App Development', 'web-based-app-development', NULL, NULL, NULL, NULL, 29, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:04:49', '2024-09-18 08:04:49'),
(146, 'Mobile App Management', 'mobile-app-management', NULL, NULL, NULL, NULL, 29, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:04:56', '2024-09-18 08:04:56'),
(147, 'VR and AR Solutions', 'vr-and-ar-solutions', NULL, NULL, NULL, NULL, 29, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:05:04', '2024-09-18 08:05:04'),
(148, 'Cloud Services', 'cloud-services', NULL, NULL, NULL, NULL, 30, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:05:18', '2024-09-18 08:05:18'),
(149, 'DevOps Solutions', 'devops-solutions', NULL, NULL, NULL, NULL, 30, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:05:27', '2024-09-18 08:05:27'),
(150, 'Cybersecurity Services', 'cybersecurity-services', NULL, NULL, NULL, NULL, 30, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:05:34', '2024-09-18 08:05:34'),
(151, 'ML Solutions', 'ml-solutions', NULL, NULL, NULL, NULL, 67, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:06:04', '2024-09-18 08:06:04'),
(152, 'Computer-Based Vision', 'computer-based-vision', NULL, NULL, NULL, NULL, 67, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:06:12', '2024-09-18 08:06:12'),
(153, 'Language Processing Technology', 'language-processing-technology', NULL, NULL, NULL, NULL, 67, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:06:33', '2024-09-18 08:06:33'),
(154, 'Deep Learning Models', 'deep-learning-models', NULL, NULL, NULL, NULL, 67, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:06:42', '2024-09-18 08:06:42'),
(155, 'Web App Solutions', 'web-app-solutions', NULL, NULL, NULL, NULL, 31, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:13:33', '2024-09-18 08:13:33'),
(156, 'PC Applications', 'pc-applications', NULL, NULL, NULL, NULL, 31, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:13:46', '2024-09-18 08:13:46'),
(157, 'API Solutions and Integration', 'api-solutions-and-integration', NULL, NULL, NULL, NULL, 31, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:13:53', '2024-09-18 08:13:53'),
(158, 'Database Systems', 'database-systems', NULL, NULL, NULL, NULL, 31, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:14:11', '2024-09-18 08:14:11'),
(159, 'Script Development', 'script-development', NULL, NULL, NULL, NULL, 31, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:14:20', '2024-09-18 08:14:20'),
(160, 'Browser Modules', 'browser-modules', NULL, NULL, NULL, NULL, 31, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:14:28', '2024-09-18 08:14:28'),
(161, 'Quality Control and Review', 'quality-control-and-review', NULL, NULL, NULL, NULL, 31, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:14:44', '2024-09-18 08:14:44'),
(162, 'User Experience Testing', 'user-experience-testing', NULL, NULL, NULL, NULL, 31, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:14:56', '2024-09-18 08:14:56'),
(163, 'Business, Financial, and Legal Content', 'business-financial-and-legal-content', NULL, 'null', 'null', 'null', 56, 0, NULL, NULL, NULL, 0, '', 1, NULL, 'null', 'null', '2024-09-18 08:15:07', '2024-09-18 10:09:54'),
(164, 'Digital Currencies and Tokens', 'digital-currencies-and-tokens', NULL, NULL, NULL, NULL, 31, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:15:15', '2024-09-18 08:15:15'),
(165, 'Exchange Systems', 'exchange-systems', NULL, NULL, NULL, NULL, 31, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:15:22', '2024-09-18 08:15:22'),
(166, 'Boost Your Search Ranking(SEO)', 'boost-your-search-ranking-seo-', NULL, NULL, NULL, NULL, 32, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:25:22', '2024-09-18 08:25:22'),
(167, 'Search Ad Campaigns (SEM)', 'search-ad-campaigns-sem-', NULL, NULL, NULL, NULL, 32, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:25:31', '2024-09-18 08:25:31'),
(168, 'Local Search Success', 'local-search-success', NULL, NULL, NULL, NULL, 32, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:25:39', '2024-09-18 08:25:39'),
(169, 'E-Commerce SEO', 'e-commerce-seo', NULL, NULL, NULL, NULL, 32, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:25:46', '2024-09-18 08:25:46'),
(170, 'Video SEO', 'video-seo', NULL, NULL, NULL, NULL, 32, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:25:52', '2024-09-18 08:25:52'),
(171, 'Social Media Promotion', 'social-media-promotion', NULL, NULL, NULL, NULL, 33, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:26:10', '2024-09-18 08:26:10'),
(172, 'Paid Social Campaigns', 'paid-social-campaigns', NULL, NULL, NULL, NULL, 33, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:26:17', '2024-09-18 08:26:17'),
(173, 'Commerce via Social Media', 'commerce-via-social-media', NULL, NULL, NULL, NULL, 33, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:26:28', '2024-09-18 08:26:28'),
(174, 'Marketing with Influencers', 'marketing-with-influencers', NULL, NULL, NULL, NULL, 33, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:26:34', '2024-09-18 08:26:34'),
(175, 'Community Management', 'community-management', NULL, NULL, NULL, NULL, 33, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:26:44', '2024-09-18 08:26:44'),
(176, 'Marketing Through Videos', 'marketing-through-videos', NULL, NULL, NULL, NULL, 34, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:27:03', '2024-09-18 08:27:03'),
(177, 'E-Commerce Advertising', 'e-commerce-advertising', NULL, NULL, NULL, NULL, 34, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:27:10', '2024-09-18 08:27:10'),
(178, 'Email-Based Promotion', 'email-based-promotion', NULL, NULL, NULL, NULL, 34, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:27:16', '2024-09-18 08:27:16'),
(179, 'Email Automations', 'email-automations', NULL, NULL, NULL, NULL, 34, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:27:23', '2024-09-18 08:27:23'),
(180, 'Guest Writing Opportunities', 'guest-writing-opportunities', NULL, NULL, NULL, NULL, 34, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:27:32', '2024-09-18 08:27:32'),
(181, 'Affiliate Marketing', 'affiliate-marketing', NULL, NULL, NULL, NULL, 34, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:27:40', '2024-09-18 08:27:40'),
(182, 'On-Screen Advertising', 'on-screen-advertising', NULL, NULL, NULL, NULL, 34, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:27:50', '2024-09-18 08:27:50'),
(183, 'Media Relations', 'media-relations', NULL, NULL, NULL, NULL, 34, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:27:57', '2024-09-18 08:27:57'),
(184, 'SMS Marketing', 'sms-marketing', NULL, NULL, NULL, NULL, 34, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:28:12', '2024-09-18 08:28:12'),
(185, 'Marketing Plans and Tactics', 'marketing-plans-and-tactics', NULL, NULL, NULL, NULL, 35, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:28:28', '2024-09-18 08:28:28'),
(186, 'Marketing Ideas and Concepts', 'marketing-ideas-and-concepts', NULL, NULL, NULL, NULL, 35, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:28:36', '2024-09-18 08:28:36'),
(187, 'Marketing Guidance', 'marketing-guidance', NULL, NULL, NULL, NULL, 35, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:28:47', '2024-09-18 08:28:47'),
(188, 'Web Data Insights', 'web-data-insights', NULL, NULL, NULL, NULL, 35, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:29:00', '2024-09-18 08:29:00'),
(189, 'Conversion Optimization', 'conversion-optimization', NULL, NULL, NULL, NULL, 35, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:29:08', '2024-09-18 08:29:08'),
(190, 'Shop on TikTok', 'shop-on-tiktok', NULL, NULL, NULL, NULL, 36, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:29:28', '2024-09-18 08:29:28'),
(191, 'Facebook Ad Strategies', 'facebook-ad-strategies', NULL, NULL, NULL, NULL, 36, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:29:35', '2024-09-18 08:29:35'),
(192, 'Marketing on Instagram', 'marketing-on-instagram', NULL, NULL, NULL, NULL, 36, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:29:42', '2024-09-18 08:29:42'),
(193, 'Google Paid Search', 'google-paid-search', NULL, NULL, NULL, NULL, 36, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:29:49', '2024-09-18 08:29:49'),
(194, 'Shopify Advertising', 'shopify-advertising', NULL, NULL, NULL, NULL, 36, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:29:57', '2024-09-18 08:29:57'),
(195, 'Music Publicity', 'music-publicity', NULL, NULL, NULL, NULL, 37, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:30:14', '2024-09-18 08:30:14'),
(196, 'Podcast Advertising', 'podcast-advertising', NULL, NULL, NULL, NULL, 37, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:30:22', '2024-09-18 08:30:22'),
(197, 'Book and eBook Advertising', 'book-and-ebook-advertising', NULL, NULL, NULL, NULL, 37, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:30:30', '2024-09-18 08:30:30'),
(198, 'Mobile App Publicity', 'mobile-app-publicity', NULL, NULL, NULL, NULL, 37, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:30:38', '2024-09-18 08:30:38'),
(199, 'Crowdfunding', 'crowdfunding', NULL, NULL, NULL, NULL, 38, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:30:54', '2024-09-18 08:30:54'),
(200, 'Other', 'other', NULL, NULL, NULL, NULL, 38, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:31:01', '2024-09-18 08:31:01'),
(201, 'Editing Video Content', 'editing-video-content', NULL, NULL, NULL, NULL, 39, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:32:22', '2024-09-18 08:32:22'),
(202, 'Visual Effects', 'visual-effects', NULL, NULL, NULL, NULL, 39, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:32:31', '2024-09-18 08:32:31'),
(203, 'Video Artworks', 'video-artworks', NULL, NULL, NULL, NULL, 39, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:33:14', '2024-09-18 08:33:14'),
(204, 'Video Intros and Outros', 'video-intros-and-outros', NULL, NULL, NULL, NULL, 39, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:33:23', '2024-09-18 08:33:23'),
(205, 'Editing Video Templates', 'editing-video-templates', NULL, NULL, NULL, NULL, 39, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:33:32', '2024-09-18 08:33:32'),
(206, 'Adding Subtitles and Captions', 'adding-subtitles-and-captions', NULL, NULL, NULL, NULL, 39, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:33:39', '2024-09-18 08:33:39'),
(207, 'Search for a Permanent Video Editor', 'search-for-a-permanent-video-editor', NULL, NULL, NULL, NULL, 39, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:33:45', '2024-09-18 08:33:45'),
(208, 'Video Ads and Promotional Commercials', 'video-ads-and-promotional-commercials', NULL, NULL, NULL, NULL, 40, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:35:52', '2024-09-18 08:35:52'),
(209, 'Social Media Content Videos', 'social-media-content-videos', NULL, NULL, NULL, NULL, 40, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:36:19', '2024-09-18 08:36:19'),
(210, 'User-Generated Content (UGC) Videos', 'user-generated-content-ugc-videos', NULL, NULL, NULL, NULL, 40, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:36:27', '2024-09-18 08:36:27'),
(211, 'Music Video Production', 'music-video-production', NULL, NULL, NULL, NULL, 40, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:36:33', '2024-09-18 08:36:33'),
(212, 'Slideshow and Presentation Videos', 'slideshow-and-presentation-videos', NULL, NULL, NULL, NULL, 40, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:36:40', '2024-09-18 08:36:40'),
(213, 'Character-Based Animation', 'character-based-animation', NULL, NULL, NULL, NULL, 41, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:36:58', '2024-09-18 08:36:58'),
(214, 'Animated GIF Creations', 'animated-gif-creations', NULL, NULL, NULL, NULL, 41, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:37:06', '2024-09-18 08:37:06'),
(215, 'Children\'s Animation', 'children-s-animation', NULL, NULL, NULL, NULL, 41, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:37:13', '2024-09-18 08:37:13'),
(216, 'Streamer-Specific Animation', 'streamer-specific-animation', NULL, NULL, NULL, NULL, 41, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:37:20', '2024-09-18 08:37:20'),
(217, 'Rigging & Character Setup', 'rigging-character-setup', NULL, NULL, NULL, NULL, 41, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:37:27', '2024-09-18 08:37:27'),
(218, 'NFT-Related Animations', 'nft-related-animations', NULL, NULL, NULL, NULL, 41, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:37:35', '2024-09-18 08:37:35'),
(219, 'Logo Motion Animation', 'logo-motion-animation', NULL, NULL, NULL, NULL, 42, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:37:52', '2024-09-18 08:37:52'),
(220, 'Lottie and Web Animations', 'lottie-and-web-animations', NULL, NULL, NULL, NULL, 42, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:38:13', '2024-09-18 08:38:13'),
(221, 'Text-Based Animations', 'text-based-animations', NULL, NULL, NULL, NULL, 42, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:38:21', '2024-09-18 08:38:21'),
(222, 'Videography Services', 'videography-services', NULL, NULL, NULL, NULL, 43, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:38:36', '2024-09-18 08:38:36'),
(223, 'Filmed Video Content Creation', 'filmed-video-content-creation', NULL, NULL, NULL, NULL, 43, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:38:43', '2024-09-18 08:38:43'),
(224, 'Animated Explainer Videos', 'animated-explainer-videos', NULL, NULL, NULL, NULL, 45, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:39:00', '2024-09-18 08:39:00'),
(225, 'Live-Action Explainer Videos', 'live-action-explainer-videos', NULL, NULL, NULL, NULL, 45, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:39:10', '2024-09-18 08:39:10'),
(226, 'Spokesperson-Led Videos', 'spokesperson-led-videos', NULL, NULL, NULL, NULL, 45, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:39:17', '2024-09-18 08:39:17'),
(227, 'Screencast Video Productions', 'screencast-video-productions', NULL, NULL, NULL, NULL, 45, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:39:24', '2024-09-18 08:39:24'),
(228, 'Educational Video Productions', 'educational-video-productions', NULL, NULL, NULL, NULL, 45, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:39:30', '2024-09-18 08:39:30'),
(229, 'Crowdfunding Campaign Videos', 'crowdfunding-campaign-videos', NULL, NULL, NULL, NULL, 45, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:39:37', '2024-09-18 08:39:37'),
(230, '3D Animation for Products', '3d-animation-for-products', NULL, NULL, NULL, NULL, 46, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:39:53', '2024-09-18 08:39:53'),
(231, 'E-Commerce Video Productions', 'e-commerce-video-productions', NULL, NULL, NULL, NULL, 46, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:40:03', '2024-09-18 08:40:03'),
(232, 'Corporate Video Solutions', 'corporate-video-solutions', NULL, NULL, NULL, NULL, 46, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:40:10', '2024-09-18 08:40:10'),
(233, 'App & Website Preview Video', 'app-website-preview-video', NULL, NULL, NULL, NULL, 46, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:40:18', '2024-09-18 08:40:18'),
(234, 'AI-Driven Video Art', 'ai-driven-video-art', NULL, NULL, NULL, NULL, 47, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:40:29', '2024-09-18 08:40:29'),
(235, 'AI Music Video Creations', 'ai-music-video-creations', NULL, NULL, NULL, NULL, 47, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:44:44', '2024-09-18 08:44:44'),
(236, 'AI Spokesperson Videos', 'ai-spokesperson-videos', NULL, NULL, NULL, NULL, 47, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:44:52', '2024-09-18 08:44:52'),
(237, 'Product Photography Services', 'product-photography-services', NULL, NULL, NULL, NULL, 48, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:48:41', '2024-09-18 08:48:41'),
(238, 'Portrait Photography', 'portrait-photography', NULL, NULL, NULL, NULL, 48, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:49:11', '2024-09-18 08:49:11'),
(239, 'Lifestyle & Fashion Photography', 'lifestyle-fashion-photography', NULL, NULL, NULL, NULL, 48, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:49:19', '2024-09-18 08:49:19'),
(240, 'Local Photography Services', 'local-photography-services', NULL, NULL, NULL, NULL, 48, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:49:27', '2024-09-18 08:49:27'),
(241, 'Article & Blog Writing', 'article-blog-writing', NULL, NULL, NULL, NULL, 49, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:50:17', '2024-09-18 08:50:17'),
(242, 'Content Planning and Strategy', 'content-planning-and-strategy', NULL, NULL, NULL, NULL, 49, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:51:09', '2024-09-18 08:51:09'),
(243, 'Website Copywriting', 'website-copywriting', NULL, NULL, NULL, NULL, 49, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:51:40', '2024-09-18 08:51:40'),
(244, 'Creative Storytelling', 'creative-storytelling', NULL, NULL, NULL, NULL, 49, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:52:09', '2024-09-18 08:52:09'),
(245, 'Podcast Script Creation', 'podcast-script-creation', NULL, NULL, NULL, NULL, 49, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:52:17', '2024-09-18 08:52:17'),
(246, 'Speech Script Writing', 'speech-script-writing', NULL, NULL, NULL, NULL, 49, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:52:25', '2024-09-18 08:52:25'),
(247, 'Research & Summary Services', 'research-summary-services', NULL, NULL, NULL, NULL, 49, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:52:32', '2024-09-18 08:52:32'),
(248, 'Hire a Professional Writer', 'hire-a-professional-writer', NULL, NULL, NULL, NULL, 49, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:52:42', '2024-09-18 08:52:42'),
(249, 'Proofreading & Revisions', 'proofreading-revisions', NULL, NULL, NULL, NULL, 50, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:52:58', '2024-09-18 08:52:58'),
(250, 'AI-Assisted Content Editing', 'ai-assisted-content-editing', NULL, NULL, NULL, NULL, 50, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:53:05', '2024-09-18 08:53:05'),
(251, 'Writing Consultation', 'writing-consultation', NULL, NULL, NULL, NULL, 50, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:53:13', '2024-09-18 08:53:13'),
(252, 'Book and eBook Writing', 'book-and-ebook-writing', NULL, NULL, NULL, NULL, 51, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:53:28', '2024-09-18 08:53:28'),
(253, 'Book Editing Services', 'book-editing-services', NULL, NULL, NULL, NULL, 51, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:53:37', '2024-09-18 08:53:37'),
(254, 'Beta Reading & Feedback', 'beta-reading-feedback', NULL, NULL, NULL, NULL, 51, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:53:43', '2024-09-18 08:53:43'),
(255, 'Self-Publishing Assistance', 'self-publishing-assistance', NULL, NULL, NULL, NULL, 51, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:53:51', '2024-09-18 08:53:51'),
(256, 'Resume and CV Writing', 'resume-and-cv-writing', NULL, NULL, NULL, NULL, 52, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:54:04', '2024-09-18 08:54:04'),
(257, 'Cover Letter Writing', 'cover-letter-writing', NULL, NULL, NULL, NULL, 52, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:54:26', '2024-09-18 08:54:26'),
(258, 'LinkedIn Profile Optimization', 'linkedin-profile-optimization', NULL, NULL, NULL, NULL, 52, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:54:34', '2024-09-18 08:54:34'),
(259, 'Job Description Writing', 'job-description-writing', NULL, NULL, NULL, NULL, 52, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 08:54:41', '2024-09-18 08:54:41'),
(260, 'Branding & Tone Development', 'branding-tone-development', NULL, NULL, NULL, NULL, 54, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 09:11:14', '2024-09-18 09:11:14'),
(261, 'Brand Name & Slogan Creation', 'brand-name-slogan-creation', NULL, NULL, NULL, NULL, 54, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 09:11:30', '2024-09-18 09:11:30'),
(262, 'Case Study Writing', 'case-study-writing', NULL, NULL, NULL, NULL, 54, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 09:11:37', '2024-09-18 09:11:37'),
(263, 'White Paper Creation', 'white-paper-creation', NULL, NULL, NULL, NULL, 54, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 09:11:44', '2024-09-18 09:11:44'),
(264, 'Product Copywriting', 'product-copywriting', NULL, NULL, NULL, NULL, 54, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 09:11:52', '2024-09-18 09:11:52'),
(265, 'Ad Campaign Copywriting', 'ad-campaign-copywriting', NULL, NULL, NULL, NULL, 54, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 09:12:07', '2024-09-18 09:12:07'),
(266, 'Sales Page Copywriting', 'sales-page-copywriting', NULL, NULL, NULL, NULL, 54, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 09:12:14', '2024-09-18 09:12:14'),
(267, 'Email Marketing Content', 'email-marketing-content', NULL, NULL, NULL, NULL, 54, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 09:12:21', '2024-09-18 09:12:21'),
(268, 'Social Media Content Writing', 'social-media-content-writing', NULL, NULL, NULL, NULL, 54, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 09:12:30', '2024-09-18 09:12:30'),
(269, 'Press Release Writing', 'press-release-writing', NULL, NULL, NULL, NULL, 54, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 09:12:38', '2024-09-18 09:12:38'),
(270, 'UX and UI Copywriting', 'ux-and-ui-copywriting', NULL, NULL, NULL, NULL, 54, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 09:12:46', '2024-09-18 09:12:46'),
(271, 'Language Translation Services', 'language-translation-services', NULL, NULL, NULL, NULL, 55, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 09:13:01', '2024-09-18 09:13:01'),
(272, 'Localization for Global Markets', 'localization-for-global-markets', NULL, NULL, NULL, NULL, 55, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 09:13:09', '2024-09-18 09:13:09'),
(273, 'Audio & Video Transcription', 'audio-video-transcription', NULL, NULL, NULL, NULL, 55, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 09:13:16', '2024-09-18 09:13:16'),
(274, 'Interpretation Services', 'interpretation-services', NULL, NULL, NULL, NULL, 55, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 09:13:23', '2024-09-18 09:13:23'),
(275, 'Production & Writing', 'production-writing', NULL, 'null', 'null', 'null', 44, 0, NULL, NULL, NULL, 0, '', 1, NULL, 'null', 'null', '2024-09-18 10:32:16', '2024-09-18 10:42:12'),
(276, 'Audio Producers', 'audio-producers', NULL, 'null', 'null', 'null', 275, 0, NULL, NULL, NULL, 0, '', 1, NULL, 'null', 'null', '2024-09-18 10:33:54', '2024-09-18 10:42:57'),
(277, 'Audio Composition Services', 'audio-composition-services', NULL, 'null', 'null', 'null', 275, 0, NULL, NULL, NULL, 0, '', 1, NULL, 'null', 'null', '2024-09-18 10:34:04', '2024-09-18 10:43:22'),
(278, 'Vocalists & Singers', 'vocalists-singers', NULL, NULL, NULL, NULL, 275, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:34:14', '2024-09-18 10:34:14');
INSERT INTO `categorys` (`id`, `name`, `slug`, `description`, `meta_title`, `meta_description`, `meta_keyword`, `parent_id`, `commission`, `fixcommission`, `product_sell_qty`, `getAmount`, `sort_order`, `file`, `status`, `speacial_status`, `mobile_view_class`, `keyword`, `created_at`, `updated_at`) VALUES
(279, 'Session Instrumentalists', 'session-instrumentalists', NULL, NULL, NULL, NULL, 275, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:34:22', '2024-09-18 10:34:22'),
(280, 'Audio writing Services', 'audio-writing-services', NULL, 'null', 'null', 'null', 275, 0, NULL, NULL, NULL, 0, '', 1, NULL, 'null', 'null', '2024-09-18 10:34:29', '2024-09-18 10:44:12'),
(281, 'Jingles & Intro Tracks', 'jingles-intro-tracks', NULL, NULL, NULL, NULL, 275, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:34:37', '2024-09-18 10:34:37'),
(282, 'Custom Audio Creation', 'custom-audio-creation', NULL, 'null', 'null', 'null', 275, 0, NULL, NULL, NULL, 0, '', 1, NULL, 'null', 'null', '2024-09-18 10:34:44', '2024-09-18 10:44:31'),
(283, 'Mixing and Mastering', 'mixing-and-mastering', NULL, NULL, NULL, NULL, 57, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:35:05', '2024-09-18 10:35:05'),
(284, 'Audio Editing Services', 'audio-editing-services', NULL, NULL, NULL, NULL, 57, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:35:12', '2024-09-18 10:35:12'),
(285, 'Vocal Pitch Correction', 'vocal-pitch-correction', NULL, NULL, NULL, NULL, 57, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:35:20', '2024-09-18 10:35:20'),
(286, '24-Hour Voiceover Services', '24-hour-voiceover-services', NULL, NULL, NULL, NULL, 61, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:35:36', '2024-09-18 10:35:36'),
(287, 'Female Voiceover Artists', 'female-voiceover-artists', NULL, NULL, NULL, NULL, 61, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:35:44', '2024-09-18 10:35:44'),
(288, 'Male Voiceover Artists', 'male-voiceover-artists', NULL, NULL, NULL, NULL, 61, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:36:06', '2024-09-18 10:36:06'),
(289, 'French Language Voiceover', 'french-language-voiceover', NULL, NULL, NULL, NULL, 61, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:36:15', '2024-09-18 10:36:15'),
(290, 'German Language Voiceover', 'german-language-voiceover', NULL, NULL, NULL, NULL, 61, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:36:21', '2024-09-18 10:36:21'),
(291, 'Podcast Creation & Production', 'podcast-creation-production', NULL, NULL, NULL, NULL, 58, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:37:00', '2024-09-18 10:37:00'),
(292, 'Audiobook Production Services', 'audiobook-production-services', NULL, NULL, NULL, NULL, 58, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:37:11', '2024-09-18 10:37:11'),
(293, 'Audio Ad Creation', 'audio-ad-creation', NULL, NULL, NULL, NULL, 58, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:37:18', '2024-09-18 10:37:18'),
(294, 'AI Voice & Synthesis', 'ai-voice-synthesis', NULL, NULL, NULL, NULL, 58, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:37:25', '2024-09-18 10:37:25'),
(295, 'Custom Sound Design', 'custom-sound-design', NULL, NULL, NULL, NULL, 59, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:48:49', '2024-09-18 10:48:49'),
(296, 'Meditation & Relaxation Music', 'meditation-relaxation-music', NULL, NULL, NULL, NULL, 59, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:48:57', '2024-09-18 10:48:57'),
(297, 'Audio Logos & Sonic Branding', 'audio-logos-sonic-branding', NULL, NULL, NULL, NULL, 59, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:49:09', '2024-09-18 10:49:09'),
(298, 'Custom Audio Samples & Patches', 'custom-audio-samples-patches', NULL, NULL, NULL, NULL, 59, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:49:17', '2024-09-18 10:49:17'),
(299, 'Audio Plugin Development', 'audio-plugin-development', NULL, NULL, NULL, NULL, 59, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:49:25', '2024-09-18 10:49:25'),
(300, 'Online Audio Lessons', 'online-audio-lessons', NULL, NULL, NULL, NULL, 60, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:50:04', '2024-09-18 10:50:04'),
(301, 'Audio Transcription Services', 'audio-transcription-services', NULL, NULL, NULL, NULL, 60, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:50:16', '2024-09-18 10:50:16'),
(302, 'Music & Audio Consulting', 'music-audio-consulting', NULL, NULL, NULL, NULL, 60, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:50:24', '2024-09-18 10:50:24'),
(303, 'Accounting Services', 'accounting-services', NULL, NULL, NULL, NULL, 62, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:51:06', '2024-09-18 10:51:06'),
(304, 'Tax Consulting', 'tax-consulting', NULL, NULL, NULL, NULL, 62, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:51:18', '2024-09-18 10:51:18'),
(305, 'Financial Planning & Analysis', 'financial-planning-analysis', NULL, NULL, NULL, NULL, 62, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:51:24', '2024-09-18 10:51:24'),
(306, 'Corporate Finance', 'corporate-finance', NULL, NULL, NULL, NULL, 62, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:51:32', '2024-09-18 10:51:32'),
(307, 'Personal Finance', 'personal-finance', NULL, NULL, NULL, NULL, 62, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:51:40', '2024-09-18 10:51:40'),
(308, 'Fundraising', 'fundraising', NULL, NULL, NULL, NULL, 62, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:51:50', '2024-09-18 10:51:50'),
(309, 'Applications & Registrations', 'applications-registrations', NULL, NULL, NULL, NULL, 63, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:52:05', '2024-09-18 10:52:05'),
(310, 'Legal Documents & Contracts', 'legal-documents-contracts', NULL, NULL, NULL, NULL, 63, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:52:13', '2024-09-18 10:52:13'),
(311, 'Legal Review', 'legal-review', NULL, NULL, NULL, NULL, 63, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:52:22', '2024-09-18 10:52:22'),
(312, 'Legal Research', 'legal-research', NULL, NULL, NULL, NULL, 63, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:52:30', '2024-09-18 10:52:30'),
(313, 'Business Registration', 'business-registration', NULL, NULL, NULL, NULL, 64, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:52:44', '2024-09-18 10:52:44'),
(314, 'Business Plans', 'business-plans', NULL, NULL, NULL, NULL, 64, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:52:51', '2024-09-18 10:52:51'),
(315, 'Business Consulting', 'business-consulting', NULL, NULL, NULL, NULL, 64, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:52:58', '2024-09-18 10:52:58'),
(316, 'Sustainability Consulting', 'sustainability-consulting', NULL, NULL, NULL, NULL, 64, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:53:08', '2024-09-18 10:53:08'),
(317, 'HR Consulting', 'hr-consulting', NULL, NULL, NULL, NULL, 64, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:53:16', '2024-09-18 10:53:16'),
(318, 'Market Research', 'market-research', NULL, NULL, NULL, NULL, 64, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:53:23', '2024-09-18 10:53:23'),
(319, 'Presentations', 'presentations', NULL, NULL, NULL, NULL, 64, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:53:29', '2024-09-18 10:53:29'),
(320, 'Supply Chain Management', 'supply-chain-management', NULL, NULL, NULL, NULL, 64, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:53:36', '2024-09-18 10:53:36'),
(321, 'Project Management', 'project-management', NULL, NULL, NULL, NULL, 64, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:53:44', '2024-09-18 10:53:44'),
(322, 'AI Strategy', 'ai-strategy', NULL, NULL, NULL, NULL, 65, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:54:20', '2024-09-18 10:54:20'),
(323, 'AI Lessons', 'ai-lessons', NULL, NULL, NULL, NULL, 65, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:54:27', '2024-09-18 10:54:27'),
(324, 'Product Research', 'product-research', NULL, NULL, NULL, NULL, 66, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:54:46', '2024-09-18 10:54:46'),
(325, 'Store Management', 'store-management', NULL, NULL, NULL, NULL, 66, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:54:53', '2024-09-18 10:54:53'),
(326, 'Amazon Experts', 'amazon-experts', NULL, NULL, NULL, NULL, 66, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:55:00', '2024-09-18 10:55:00'),
(327, 'Shopify Experts', 'shopify-experts', NULL, NULL, NULL, NULL, 66, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:55:07', '2024-09-18 10:55:07'),
(328, 'Etsy Experts', 'etsy-experts', NULL, NULL, NULL, NULL, 66, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:55:16', '2024-09-18 10:55:16'),
(329, 'Data Visualization', 'data-visualization', NULL, NULL, NULL, NULL, 67, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:55:28', '2024-09-18 10:55:28'),
(330, 'Data Analytics', 'data-analytics', NULL, NULL, NULL, NULL, 67, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 10:55:36', '2024-09-18 10:55:36'),
(331, 'Sales', 'sales', NULL, NULL, NULL, NULL, 68, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:00:19', '2024-09-18 11:00:19'),
(332, 'Lead Generation', 'lead-generation', NULL, NULL, NULL, NULL, 68, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:00:28', '2024-09-18 11:00:28'),
(333, 'Call Center & Calling', 'call-center-calling', NULL, NULL, NULL, NULL, 68, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:00:37', '2024-09-18 11:00:37'),
(334, 'Customer Care', 'customer-care', NULL, NULL, NULL, NULL, 68, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:00:45', '2024-09-18 11:00:45'),
(335, 'Virtual Assistant', 'virtual-assistant', NULL, NULL, NULL, NULL, 69, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:01:00', '2024-09-18 11:01:00'),
(336, 'Online Investigations', 'online-investigations', NULL, NULL, NULL, NULL, 69, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:01:14', '2024-09-18 11:01:14'),
(337, 'Fact Checking', 'fact-checking', NULL, NULL, NULL, NULL, 69, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:01:21', '2024-09-18 11:01:21'),
(338, 'Legal Consulting', 'legal-consulting', NULL, NULL, NULL, NULL, 70, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:02:27', '2024-09-18 11:02:27'),
(339, 'Writing & Translation', 'writing-translation', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:27:36', '2024-09-18 11:27:36'),
(341, 'Editing and Critique', 'editing-and-critique', NULL, NULL, NULL, NULL, 339, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:34:51', '2024-09-18 11:34:51'),
(342, 'Book and eBook Publishing', 'book-and-ebook-publishing', NULL, NULL, NULL, NULL, 339, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:35:25', '2024-09-18 11:35:25'),
(344, 'Business and Marketing Copy', 'business-and-marketing-copy', NULL, NULL, NULL, NULL, 339, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:36:38', '2024-09-18 11:36:38'),
(345, 'Translation and  Transcription', 'translation-and-transcription', NULL, NULL, NULL, NULL, 339, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:37:04', '2024-09-18 11:37:04'),
(346, 'Industry Specific Contentnew', 'industry-specific-contentnew', NULL, NULL, NULL, NULL, 339, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:37:23', '2024-09-18 11:37:23'),
(347, 'Business advisory', 'business-advisory', NULL, NULL, NULL, NULL, 70, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:40:50', '2024-09-18 11:40:50'),
(348, 'Human resources consulting', 'human-resources-consulting', NULL, NULL, NULL, NULL, 70, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:41:02', '2024-09-18 11:41:02'),
(349, 'Artificial intelligence consulting', 'artificial-intelligence-consulting', NULL, NULL, NULL, NULL, 70, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:41:09', '2024-09-18 11:41:09'),
(350, 'Business strategy development', 'business-strategy-development', NULL, NULL, NULL, NULL, 70, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:41:18', '2024-09-18 11:41:18'),
(351, 'Online retail consulting', 'online-retail-consulting', NULL, NULL, NULL, NULL, 70, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:41:26', '2024-09-18 11:41:26'),
(352, 'Content Strategy', 'content-strategy', NULL, NULL, NULL, NULL, 71, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:42:01', '2024-09-18 11:42:01'),
(353, 'Social Media Strategy', 'social-media-strategy', NULL, NULL, NULL, NULL, 71, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:42:11', '2024-09-18 11:42:11'),
(354, 'Influencers Strategy', 'influencers-strategy', NULL, NULL, NULL, NULL, 71, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:42:20', '2024-09-18 11:42:20'),
(355, 'Video Marketing Consulting', 'video-marketing-consulting', NULL, NULL, NULL, NULL, 71, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:42:28', '2024-09-18 11:42:28'),
(356, 'SEM Strategy', 'sem-strategy', NULL, NULL, NULL, NULL, 71, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:42:37', '2024-09-18 11:42:37'),
(357, 'PR Strategy', 'pr-strategy', NULL, NULL, NULL, NULL, 71, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:42:45', '2024-09-18 11:42:45'),
(359, 'Databases Consulting', 'databases-consulting', NULL, NULL, NULL, NULL, 72, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:43:08', '2024-09-18 11:43:08'),
(361, 'Career Counseling', 'career-counseling', NULL, NULL, NULL, NULL, 73, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:43:30', '2024-09-18 11:43:30'),
(362, 'Life Coaching', 'life-coaching', NULL, NULL, NULL, NULL, 73, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:43:38', '2024-09-18 11:43:38'),
(363, 'Game Coaching', 'game-coaching', NULL, NULL, NULL, NULL, 73, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:43:46', '2024-09-18 11:43:46'),
(364, 'Styling & Beauty Advice', 'styling-beauty-advice', NULL, NULL, NULL, NULL, 73, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:43:53', '2024-09-18 11:43:53'),
(365, 'Travel Advice', 'travel-advice', NULL, NULL, NULL, NULL, 73, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:44:03', '2024-09-18 11:44:03'),
(366, 'Nutrition Coachingnew', 'nutrition-coachingnew', NULL, NULL, NULL, NULL, 73, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:44:10', '2024-09-18 11:44:10'),
(367, 'Mindfulness Coaching new', 'mindfulness-coaching-new', NULL, NULL, NULL, NULL, 73, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:44:27', '2024-09-18 11:44:27'),
(368, 'Website Consulting', 'website-consulting', NULL, NULL, NULL, NULL, 75, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:44:47', '2024-09-18 11:44:47'),
(369, 'Mobile App Consulting', 'mobile-app-consulting', NULL, NULL, NULL, NULL, 75, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:44:55', '2024-09-18 11:44:55'),
(370, 'Game Development Consulting', 'game-development-consulting', NULL, NULL, NULL, NULL, 75, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:45:03', '2024-09-18 11:45:03'),
(371, 'Software Development Consulting', 'software-development-consulting', NULL, NULL, NULL, NULL, 75, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:45:10', '2024-09-18 11:45:10'),
(372, 'Cybersecurity Consulting', 'cybersecurity-consulting', NULL, NULL, NULL, NULL, 75, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:45:30', '2024-09-18 11:45:30'),
(373, 'Marketing Mentorship', 'marketing-mentorship', NULL, NULL, NULL, NULL, 76, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:45:44', '2024-09-18 11:45:44'),
(374, 'Design Mentorship', 'design-mentorship', NULL, NULL, NULL, NULL, 76, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:45:51', '2024-09-18 11:45:51'),
(375, 'Writing Mentorship', 'writing-mentorship', NULL, NULL, NULL, NULL, 76, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:45:59', '2024-09-18 11:45:59'),
(376, 'Video Mentorship', 'video-mentorship', NULL, NULL, NULL, NULL, 76, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:46:08', '2024-09-18 11:46:08'),
(377, 'Audio Mentorship', 'audio-mentorship', NULL, NULL, NULL, NULL, 76, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:46:32', '2024-09-18 11:46:32'),
(378, 'AI Applications', 'ai-applications', NULL, NULL, NULL, NULL, 77, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:47:03', '2024-09-18 11:47:03'),
(380, 'Custom Writing Prompts', 'custom-writing-prompts', NULL, NULL, NULL, NULL, 77, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:52:42', '2024-09-18 11:52:42'),
(381, 'AI Chatbot', 'ai-chatbot', NULL, NULL, NULL, NULL, 77, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:52:50', '2024-09-18 11:52:50'),
(382, 'AI Agents', 'ai-agents', NULL, NULL, NULL, NULL, 77, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:52:58', '2024-09-18 11:52:58'),
(383, 'AI Fine-Tuning', 'ai-fine-tuning', NULL, NULL, NULL, NULL, 77, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:53:06', '2024-09-18 11:53:06'),
(384, 'OpenAI GPT Storenew', 'openai-gpt-storenew', NULL, NULL, NULL, NULL, 77, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:53:15', '2024-09-18 11:53:15'),
(385, 'Data Science & ML', 'data-science-ml', NULL, NULL, NULL, NULL, 78, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:53:37', '2024-09-18 11:53:37'),
(388, 'Midjourney Artists', 'midjourney-artists', NULL, NULL, NULL, NULL, 79, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:54:14', '2024-09-18 11:54:14'),
(389, 'DALL-E Artists', 'dall-e-artists', NULL, NULL, NULL, NULL, 79, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:54:23', '2024-09-18 11:54:23'),
(391, 'Stable Diffusion Artists', 'stable-diffusion-artists', NULL, NULL, NULL, NULL, 79, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:56:18', '2024-09-18 11:56:18'),
(392, 'All AI Art Services', 'all-ai-art-services', NULL, NULL, NULL, NULL, 79, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:56:29', '2024-09-18 11:56:29'),
(393, 'AI Consulting', 'ai-consulting', NULL, NULL, NULL, NULL, 80, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:56:47', '2024-09-18 11:56:47'),
(396, 'AI Music Videos', 'ai-music-videos', NULL, NULL, NULL, NULL, 81, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:57:23', '2024-09-18 11:57:23'),
(397, 'AI Video Art', 'ai-video-art', NULL, NULL, NULL, NULL, 81, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:57:50', '2024-09-18 11:57:50'),
(398, 'AI Spokespersons Videos', 'ai-spokespersons-videos', NULL, NULL, NULL, NULL, 81, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:58:03', '2024-09-18 11:58:03'),
(399, 'Voice Synthesis & AI', 'voice-synthesis-ai', NULL, NULL, NULL, NULL, 82, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 11:58:30', '2024-09-18 11:58:30'),
(400, 'Text to Speech', 'text-to-speech', NULL, NULL, NULL, NULL, 82, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:02:55', '2024-09-18 12:02:55'),
(401, 'AI Content Editing', 'ai-content-editing', NULL, NULL, NULL, NULL, 83, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:03:09', '2024-09-18 12:03:09'),
(403, 'Online Tutoring', 'online-tutoring', NULL, NULL, NULL, NULL, 84, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:04:03', '2024-09-18 12:04:03'),
(404, 'Language Lessons', 'language-lessons', NULL, NULL, NULL, NULL, 84, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:04:24', '2024-09-18 12:04:24'),
(413, 'Modeling & Acting', 'modeling-acting', NULL, NULL, NULL, NULL, 85, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:08:10', '2024-09-18 12:08:10'),
(414, 'Styling & Beauty', 'styling-beauty', NULL, NULL, NULL, NULL, 85, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:08:24', '2024-09-18 12:08:24'),
(416, 'Trend Forecasting new', 'trend-forecasting-new', NULL, NULL, NULL, NULL, 85, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:08:39', '2024-09-18 12:08:39'),
(418, 'Fitness', 'fitness', NULL, NULL, NULL, NULL, 86, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:08:52', '2024-09-18 12:08:52'),
(419, 'Nutrition', 'nutrition', NULL, NULL, NULL, NULL, 86, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:09:01', '2024-09-18 12:09:01'),
(429, 'Game Matchmakingnew', 'game-matchmakingnew', NULL, NULL, NULL, NULL, 87, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:10:34', '2024-09-18 12:10:34'),
(431, 'Ingame Creation', 'ingame-creation', NULL, NULL, NULL, NULL, 87, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:10:44', '2024-09-18 12:10:44'),
(432, 'Gameplay Experience & Feedbacknew', 'gameplay-experience-feedbacknew', NULL, NULL, NULL, NULL, 87, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:10:55', '2024-09-18 12:10:55'),
(435, 'Game Recordings & Guides', 'game-recordings-guides', NULL, NULL, NULL, NULL, 87, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:11:06', '2024-09-18 12:11:06'),
(436, 'Astrology & Psychics', 'astrology-psychics', NULL, NULL, NULL, NULL, 88, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:11:18', '2024-09-18 12:11:18'),
(437, 'Arts & Crafts', 'arts-crafts', NULL, NULL, NULL, NULL, 88, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:11:26', '2024-09-18 12:11:26'),
(438, 'Cosplay Creationnew', 'cosplay-creationnew', NULL, NULL, NULL, NULL, 88, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:11:32', '2024-09-18 12:11:32'),
(440, 'Puzzle & Game Creation', 'puzzle-game-creation', NULL, NULL, NULL, NULL, 88, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:11:42', '2024-09-18 12:11:42'),
(441, 'Traveling', 'traveling', NULL, NULL, NULL, NULL, 88, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:11:50', '2024-09-18 12:11:50'),
(442, 'Collectibles', 'collectibles', NULL, NULL, NULL, NULL, 88, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:12:07', '2024-09-18 12:12:07'),
(453, 'Illustration', 'illustration', NULL, NULL, NULL, NULL, 105, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:18:41', '2024-09-18 12:18:41'),
(455, 'AI Avatar Designnew', 'ai-avatar-designnew', NULL, NULL, NULL, NULL, 105, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:18:58', '2024-09-18 12:18:58'),
(456, 'Children\'s Book Illustration', 'children-s-book-illustration', NULL, NULL, NULL, NULL, 105, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:19:06', '2024-09-18 12:19:06'),
(457, 'Portraits & Caricatures', 'portraits-caricatures', NULL, NULL, NULL, NULL, 105, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:19:18', '2024-09-18 12:19:18'),
(458, 'Cartoons & Comics', 'cartoons-comics', NULL, NULL, NULL, NULL, 105, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:19:25', '2024-09-18 12:19:25'),
(460, 'Pattern Design', 'pattern-design', NULL, NULL, NULL, NULL, 105, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:19:34', '2024-09-18 12:19:34'),
(462, 'Tattoo Design', 'tattoo-design', NULL, NULL, NULL, NULL, 105, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:19:43', '2024-09-18 12:19:43'),
(463, 'Storyboards', 'storyboards', NULL, NULL, NULL, NULL, 105, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:19:50', '2024-09-18 12:19:50'),
(464, 'NFT Art', 'nft-art', NULL, NULL, NULL, NULL, 105, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:19:56', '2024-09-18 12:19:56'),
(467, 'Website Design', 'website-design', NULL, NULL, NULL, NULL, 106, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:20:16', '2024-09-18 12:20:16'),
(468, 'App Design', 'app-design', NULL, NULL, NULL, NULL, 106, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:20:27', '2024-09-18 12:20:27'),
(470, 'UX Design', 'ux-design', NULL, NULL, NULL, NULL, 106, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:20:35', '2024-09-18 12:20:35'),
(471, 'Landing Page Design', 'landing-page-design', NULL, NULL, NULL, NULL, 106, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:20:42', '2024-09-18 12:20:42'),
(472, 'Icon Design', 'icon-design', NULL, NULL, NULL, NULL, 106, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:20:49', '2024-09-18 12:20:49'),
(474, 'Industrial & Product Design', 'industrial-product-design', NULL, NULL, NULL, NULL, 107, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:21:04', '2024-09-18 12:21:04'),
(475, 'Character Modeling', 'character-modeling', NULL, NULL, NULL, NULL, 107, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:21:11', '2024-09-18 12:21:11'),
(477, 'Game Art', 'game-art', NULL, NULL, NULL, NULL, 107, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:21:21', '2024-09-18 12:21:21'),
(479, 'Graphics for Streamers', 'graphics-for-streamers', NULL, NULL, NULL, NULL, 107, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:21:37', '2024-09-18 12:21:37'),
(480, 'Flyer Design', 'flyer-design', NULL, NULL, NULL, NULL, 108, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:21:54', '2024-09-18 12:21:54'),
(482, 'Brochure Design', 'brochure-design', NULL, NULL, NULL, NULL, 108, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:22:01', '2024-09-18 12:22:01'),
(483, 'Poster Design', 'poster-design', NULL, NULL, NULL, NULL, 108, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:22:08', '2024-09-18 12:22:08'),
(485, 'Catalog Design', 'catalog-design', NULL, NULL, NULL, NULL, 108, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:22:20', '2024-09-18 12:22:20'),
(486, 'Menu Design', 'menu-design', NULL, NULL, NULL, NULL, 108, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:22:28', '2024-09-18 12:22:28'),
(487, 'Image Editing', 'image-editing', NULL, NULL, NULL, NULL, 109, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:22:39', '2024-09-18 12:22:39'),
(489, 'AI Image Editingnew', 'ai-image-editingnew', NULL, NULL, NULL, NULL, 109, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:22:47', '2024-09-18 12:22:47'),
(490, 'Presentation Design', 'presentation-design', NULL, NULL, NULL, NULL, 109, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:22:54', '2024-09-18 12:22:54'),
(491, 'Background Removal', 'background-removal', NULL, NULL, NULL, NULL, 109, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:23:01', '2024-09-18 12:23:01'),
(493, 'Infographic Design', 'infographic-design', NULL, NULL, NULL, NULL, 109, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:23:13', '2024-09-18 12:23:13'),
(495, 'Vector Tracing', 'vector-tracing', NULL, NULL, NULL, NULL, 109, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:23:24', '2024-09-18 12:23:24'),
(496, 'Resume Design', 'resume-design', NULL, NULL, NULL, NULL, 109, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:23:31', '2024-09-18 12:23:31'),
(498, 'Social Media Design', 'social-media-design', NULL, NULL, NULL, NULL, 110, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:24:21', '2024-09-18 12:24:21'),
(499, 'Social Posts & Banners', 'social-posts-banners', NULL, NULL, NULL, NULL, 110, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:24:30', '2024-09-18 12:24:30'),
(500, 'Email Design', 'email-design', NULL, NULL, NULL, NULL, 110, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:24:37', '2024-09-18 12:24:37'),
(501, 'Web Banners', 'web-banners', NULL, NULL, NULL, NULL, 110, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:24:44', '2024-09-18 12:24:44'),
(502, 'Signage Design', 'signage-design', NULL, NULL, NULL, NULL, 110, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:24:51', '2024-09-18 12:24:51'),
(503, 'Packaging & Label Design', 'packaging-label-design', NULL, NULL, NULL, NULL, 111, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:25:14', '2024-09-18 12:25:14'),
(504, 'Book Design', 'book-design', NULL, NULL, NULL, NULL, 111, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:25:23', '2024-09-18 12:25:23'),
(505, 'Book Covers', 'book-covers', NULL, NULL, NULL, NULL, 111, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:25:32', '2024-09-18 12:25:32'),
(506, 'Album Cover Design', 'album-cover-design', NULL, NULL, NULL, NULL, 111, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:25:39', '2024-09-18 12:25:39'),
(507, 'Architecture & Interior Design', 'architecture-interior-design', NULL, NULL, NULL, NULL, 112, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:26:15', '2024-09-18 12:26:15'),
(508, 'Landscape Design', 'landscape-design', NULL, NULL, NULL, NULL, 112, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:27:12', '2024-09-18 12:27:12'),
(509, 'Building Engineering', 'building-engineering', NULL, NULL, NULL, NULL, 112, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:27:21', '2024-09-18 12:27:21'),
(511, 'T-Shirts & Merchandise', 't-shirts-merchandise', NULL, NULL, NULL, NULL, 113, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:27:36', '2024-09-18 12:27:36'),
(512, 'Fashion Design', 'fashion-design', NULL, NULL, NULL, NULL, 113, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:27:45', '2024-09-18 12:27:45'),
(513, 'Jewelry Design', 'jewelry-design', NULL, NULL, NULL, NULL, 113, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:27:54', '2024-09-18 12:27:54'),
(515, '3D Architecture', '3d-architecture', NULL, NULL, NULL, NULL, 114, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:28:15', '2024-09-18 12:28:15'),
(517, '3D Industrial Design', '3d-industrial-design', NULL, NULL, NULL, NULL, 114, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:28:25', '2024-09-18 12:28:25'),
(518, '3D Fashion & Garment', '3d-fashion-garment', NULL, NULL, NULL, NULL, 114, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:28:32', '2024-09-18 12:28:32'),
(520, '3D Printing Characters', '3d-printing-characters', NULL, NULL, NULL, NULL, 114, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:28:49', '2024-09-18 12:28:49'),
(521, '3D Landscape', '3d-landscape', NULL, NULL, NULL, NULL, 114, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:29:17', '2024-09-18 12:29:17'),
(522, '3D Game Art', '3d-game-art', NULL, NULL, NULL, NULL, 114, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:29:28', '2024-09-18 12:29:28'),
(523, '3D Jewelry Design', '3d-jewelry-design', NULL, NULL, NULL, NULL, 114, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:29:39', '2024-09-18 12:29:39'),
(525, 'Health & Medical Writing', 'health-medical-writing', NULL, NULL, NULL, NULL, 346, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:36:59', '2024-09-18 12:36:59'),
(529, 'News and Political Writing', 'news-and-political-writing', NULL, NULL, NULL, NULL, 346, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:41:32', '2024-09-18 12:41:32'),
(530, 'Marketing and Advertising Copy', 'marketing-and-advertising-copy', NULL, NULL, NULL, NULL, 346, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:41:52', '2024-09-18 12:41:52'),
(531, 'Real Estate Writing', 'real-estate-writing', NULL, NULL, NULL, NULL, 346, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-18 12:42:10', '2024-09-18 12:42:10'),
(532, 'Others apps/software', 'others-apps-software', NULL, NULL, NULL, NULL, 3, NULL, NULL, NULL, NULL, 0, '', 1, NULL, NULL, NULL, '2024-09-19 14:24:00', '2024-09-19 14:24:00');

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
  `stn_source_file` varchar(255) DEFAULT NULL COMMENT 'Standard',
  `premium_price` double(10,2) NOT NULL COMMENT 'Premium',
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

INSERT INTO `gig` (`id`, `user_id`, `category_id`, `subcategory_id`, `insubcategory_Id`, `name`, `gig_slug`, `thumbnail_images`, `types`, `language_name`, `language_type`, `gig_description`, `price`, `delivery_day`, `basic_price`, `basic_description`, `basic_delivery_days`, `source_file`, `standard_price`, `stn_descrition`, `stn_delivery_days`, `stn_source_file`, `premium_price`, `premium_description`, `premium_delivery_days`, `premium_source_file`, `status`, `created_at`, `updated_at`) VALUES
(1, 2, 1, NULL, NULL, 'I will design modern websites in figma or adobe xd', 'i-will-design-modern-websites-in-figma-or-adobe-xd-22', '/backend/gig/g-1.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 910.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-29 06:07:12'),
(2, 2, 1, NULL, NULL, 'I will Stunning Modern Website Design in Figma or Adobe XD', 'i-will-stunning-modern-website-design-in-figma-or--23-adobe-xd', '/backend/gig/g-2.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 920.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-29 06:08:23'),
(3, 2, 1, NULL, NULL, 'I will Professional Website UI/UX Design in Figma or Adobe XD', 'i-will-professional-website-ui/ux-design-in-figma-or-adobe-xd-24', '/backend/gig/g-3.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 940.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-29 06:08:28'),
(4, 2, 1, NULL, NULL, 'I will Create Custom Modern Websites in Figma or Adobe XD', 'i-will-create-custom-modern-websites-in-figma-or-adobe-xd-25', '/backend/gig/g-4.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 950.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-29 06:10:00'),
(5, 2, 2, NULL, NULL, 'I will Modern and Responsive Website Design with Figma or Adobe XD', 'i-will-modern-and-responsive-website-design-with-figma-or-adobe-xd', '/backend/gig/g-5.jpg', '1', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 980.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(6, 2, 2, NULL, NULL, 'I will Eye-Catching Website Design Using Figma or Adobe XD', 'i-will-eye-catching-website-design-using-figma-or-adobe-xd-26', '/backend/gig/g-6.jpg', '1', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 990.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(7, 2, 2, NULL, NULL, 'I will Crafting Sleek Modern Websites in Figma or Adobe XD', 'i-will-crafting-sleek-modern-websites-in-figma-or-adobe-xd-27', '/backend/gig/g-7.jpg', '1', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 1000.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(8, 2, 2, NULL, NULL, 'I will Design Your Dream Website in Figma or Adobe XD', 'i-will-design-your-dream-website-in-figma-or-adobe-xd', '/backend/gig/g-8.jpg', '1', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 1500.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(9, 2, 2, NULL, NULL, 'I will High-Quality Website Designs in Figma or Adobe XD', 'i-will-high-quality-website-designs-in-figma-or-adobe-xd-28', '/backend/gig/g-9.jpg', '1', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 800.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(10, 2, 2, NULL, NULL, 'I will Expert Website UI Design with Figma or Adobe XD', 'i-will-expert-website-ui-design-with-figma-or-adobe-xd', '/backend/gig/g-10.jpg', '1', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 120.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(11, 2, 3, NULL, NULL, 'I Will Modern Web Design and Prototyping in Figma or Adobe XD', 'i-will-modern-web-design-and-prototyping-in-figma-or-adobe-xd-29', '/backend/gig/g-11.jpg', '1', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 180.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(12, 2, 3, NULL, NULL, 'I will Creative Website Design Services in Figma or Adobe XD', 'i-will-creative-website-design-services-in-figma-or-adobe-xd-30', '/backend/gig/g-12.jpg', '1', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 220.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(13, 2, 3, NULL, NULL, 'I will Premium Modern Website Design in Figma or Adobe XD', 'i-will-premium-modern-website-design-in-figma-or-adobe-xd-31', '/backend/gig/g-13.jpg', '1', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 780.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(14, 2, 3, NULL, NULL, 'I will Modern UI/UX Website Design for Businesses in Figma or Adobe XD', 'i-will-modern-ui/ux-website-design-for-businesses-in-figma-or-adobe-xd-32', '/backend/gig/g-14.jpg', '1', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 150.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-29 06:10:08'),
(15, 2, 2, NULL, NULL, 'I will Transform Ideas into Websites with Figma or Adobe XD', 'i-will-transform-ideas-into-websites-with-figma-or-adobe-xd-33', '/backend/gig/g-15.jpg', '1', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 100.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(16, 2, 2, NULL, NULL, 'I will Sleek Website UI Design in Figma or Adobe XD', 'i-will-sleek-website-ui-design-in-figma-or-adobe-xd-34', '/backend/gig/g-16.jpg', '1', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 200.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(17, 2, 1, NULL, NULL, 'I will Modern Landing Page & Website Design in Figma or Adobe XD', 'i-will-modern-landing-page-and-website-design-in-figma-or-adobe-xd-35', '/backend/gig/g-17.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 450.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(18, 2, 1, NULL, NULL, 'I will  Create Stunning Website Mockups in Figma or Adobe XD', 'i-will--create-stunning-website-mockups-in-figma-or-adobe-xd-36', '/backend/gig/g-18.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 800.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(19, 2, 1, NULL, NULL, 'I will Innovative Website Design in Figma or Adobe XD php', 'i-will-innovative-website-design-in-figma-or-adobe-xd-37', '/backend/gig/g-19.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 700.00, 2, 10.00, 'About It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less', 4, 'Yes', 100.00, 'About It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less', 10, 'Yes', 120.00, 'About It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less', 1, 'Yes', 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(20, 2, 1, NULL, NULL, 'I wil lDesign Clean and Modern Websites in Figma or Adobe XD', 'i-wil-ldesign-clean-and-modern-websites-in-figma-or-adobe-xd-38', '/backend/gig/g-20.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 600.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(21, 2, 1, NULL, NULL, 'I will Modern Web UI/UX Design for Startups in Figma or Adobe XD', 'i-will-modern-web-ui/ux-design-for-startups-in-figma-or-adobe-xd-39', '/backend/gig/g-21.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 100.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(22, 2, 1, NULL, NULL, 'I will Website Design and Wireframing in Figma or Adobe XD', 'i-will-website-design-and-wireframing-in-figma-or-adobe-xd-40', '/backend/gig/g-22.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 300.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(23, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design-test-41', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(24, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design-13', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(25, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design-100', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(26, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-des2ign-', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(27, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design-4', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(28, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design-5', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(29, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design-1198', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(30, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design-65', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(31, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design-12022', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(32, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design-17', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(33, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design-121', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(34, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design-12', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(35, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design-120', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(36, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design-119', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(37, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design-118', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(38, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design-117', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(39, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design--116', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(40, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design--115', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(41, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design--114', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(42, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design--113', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(43, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design--112', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(44, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design--111', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(45, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design--110', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44');
INSERT INTO `gig` (`id`, `user_id`, `category_id`, `subcategory_id`, `insubcategory_Id`, `name`, `gig_slug`, `thumbnail_images`, `types`, `language_name`, `language_type`, `gig_description`, `price`, `delivery_day`, `basic_price`, `basic_description`, `basic_delivery_days`, `source_file`, `standard_price`, `stn_descrition`, `stn_delivery_days`, `stn_source_file`, `premium_price`, `premium_description`, `premium_delivery_days`, `premium_source_file`, `status`, `created_at`, `updated_at`) VALUES
(46, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design--109', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(47, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design--108', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(48, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design--107', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(49, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design--106', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(50, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design--105', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(51, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design--104', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(52, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design--103', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(53, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design--102', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-27 08:53:44'),
(54, 2, 1, NULL, NULL, 'I will make modern design ', 'i-will-make-modern-design-101', '/backend/gig/g-23.jpg', '2', 'English', 'Fluent', 'About\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n\nServices I provide:\n\n1) Website Design\n\n2) Mobile App Design\n\n3) Brochure Design\n\n4) Business Card Design\n\n5) Flyer Design\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 400.00, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-27 08:53:44', '2024-09-29 06:06:10'),
(59, 2, 1, 24, NULL, 'I will do it make comptuer', 'i-will-do-it-make-comptuer', '/backend/gig/UprMpZ3hYvbSkk4IdxZL.jpg', '1', 'English', '1', 'Gig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig Descriptionsdf', 5000.00, 600, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-29 11:56:29', '2024-09-29 11:56:29'),
(60, 2, 1, 24, NULL, 'Testing gig', 'testing-gig', '/backend/gig/MxGz5mNX3TlqTzWPIiqw.jpg', '2', 'English', '1', 'Gig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig Description', 111.00, 2333, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0.00, NULL, NULL, NULL, 1, '2024-09-29 12:38:06', '2024-09-29 12:38:06'),
(61, 2, 1, 24, NULL, 'Do website', 'do-website', '/backend/gig/zQrrirXyf6tEAB5T4Mcx.jpg', '2', 'English', '1', '<b><span style=\"background-color: rgb(255, 255, 0);\">Gig DescriptionGig</span></b> DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig DescriptionGig Description', 522.00, 5, 100.00, 'Short Description:', 4, NULL, 150.00, NULL, 3, 'Yes', 1552.00, 'Short Description', 2, 'Yes', 1, '2024-09-29 12:47:54', '2024-09-29 12:47:54');

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
(1, 19, '/backend/gig/service-details-1 - 1ASDF58.jpg', '2024-09-27 14:38:15', '2024-09-27 14:38:15'),
(2, 19, '/backend/gig/347889.jpg', '2024-09-27 14:38:15', '2024-09-27 14:38:15'),
(3, 19, '/backend/gig/service-details-3 - 1ASDF58.jpg', '2024-09-27 14:38:15', '2024-09-27 14:38:15'),
(4, 58, '/backend/gig/RoIdyK1tu83DTm97H8Al.jpg', '2024-09-29 11:52:33', '2024-09-29 11:52:33'),
(5, 58, '/backend/gig/s4owO4AkxE1ppjaLmgMt.jpg', '2024-09-29 11:52:33', '2024-09-29 11:52:33'),
(6, 58, '/backend/gig/sXAPyxGrZnpZbnPgTSHH.jpg', '2024-09-29 11:52:33', '2024-09-29 11:52:33'),
(7, 58, '/backend/gig/KV15KuBxEyAsC7xEbvdg.jpg', '2024-09-29 11:52:33', '2024-09-29 11:52:33'),
(8, 58, '/backend/gig/kbUFxfbV3GT1oqR5XX97.jpg', '2024-09-29 11:52:33', '2024-09-29 11:52:33'),
(9, 58, '/backend/gig/mhy1dTfne205foXkZENb.jpg', '2024-09-29 11:52:33', '2024-09-29 11:52:33'),
(10, 58, '/backend/gig/rXQ7iyaMZLlw2zOZJmS5.jpg', '2024-09-29 11:52:33', '2024-09-29 11:52:33'),
(11, 58, '/backend/gig/3dd7AsHHF5lNLZwyEpNL.jpg', '2024-09-29 11:52:33', '2024-09-29 11:52:33'),
(12, 59, '/backend/gig/S8d42psgf5xqGVqwBju6.jpg', '2024-09-29 11:56:29', '2024-09-29 11:56:29'),
(13, 59, '/backend/gig/wDXLVeloERgWNbTDLd8j.jpg', '2024-09-29 11:56:29', '2024-09-29 11:56:29'),
(14, 59, '/backend/gig/jYRqqCAFD1W7RBgIEfC0.jpg', '2024-09-29 11:56:29', '2024-09-29 11:56:29'),
(15, 60, '/backend/gig/FyVaPbya2GWCWcd2U4B3.jpg', '2024-09-29 12:38:06', '2024-09-29 12:38:06'),
(16, 60, '/backend/gig/FbFAjYEAW6B8HlnqtWtJ.jpg', '2024-09-29 12:38:06', '2024-09-29 12:38:06'),
(17, 60, '/backend/gig/UgfHtYrAjjFjRf6iMoYj.jpg', '2024-09-29 12:38:06', '2024-09-29 12:38:06'),
(18, 60, '/backend/gig/2t6hfTffMBPvd44tXdK3.jpg', '2024-09-29 12:38:06', '2024-09-29 12:38:06'),
(19, 60, '/backend/gig/PdlOVbmwe9AzYb8V7MHE.jpg', '2024-09-29 12:38:06', '2024-09-29 12:38:06'),
(20, 61, '/backend/gig/HXheb9IGZzIMRVne3jeU.jpg', '2024-09-29 12:47:54', '2024-09-29 12:47:54'),
(21, 61, '/backend/gig/Ep8uhWMmK6RxoX7RTi3a.jpg', '2024-09-29 12:47:54', '2024-09-29 12:47:54'),
(22, 61, '/backend/gig/sh0t6sQ9P9hODFHRf3HT.jpg', '2024-09-29 12:47:55', '2024-09-29 12:47:55'),
(23, 61, '/backend/gig/rRQ3NEDu7l1qYZaRxMGY.jpg', '2024-09-29 12:47:55', '2024-09-29 12:47:55');

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
  `to_id` int(11) DEFAULT NULL COMMENT 'TO',
  `sender_id` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `community_slug` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `files` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `user_id`, `to_id`, `sender_id`, `username`, `community_slug`, `message`, `files`, `created_at`, `updated_at`) VALUES
(1, 4, 2, 4, 'deshimart@gmail.com', 'deshimart@gmail.com', 'Hello roman I\'m Desi mart this my 1st Messages', NULL, '2024-09-10 04:43:43', '2024-09-10 04:43:43'),
(2, 2, 4, 2, 'roman@gmail.com', 'roman@gmail.com', 'Yes also my this 1st message replay for you.', NULL, '2024-09-10 04:44:36', '2024-09-10 04:44:36'),
(3, 2, 4, 2, 'roman@gmail.com', 'roman@gmail.com', 'Second Messages', NULL, '2024-09-10 04:47:42', '2024-09-10 04:47:42'),
(4, 4, 2, 4, 'deshimart@gmail.com', 'deshimart@gmail.com', 'Roman when come to my shop', NULL, '2024-09-10 05:02:02', '2024-09-10 05:02:02'),
(5, 2, 4, 2, 'roman@gmail.com', 'roman@gmail.com', 'Day after tomorrow... brother', NULL, '2024-09-10 05:02:27', '2024-09-10 05:02:27'),
(6, 2, 4, 2, 'roman@gmail.com', 'roman@gmail.com', 'Okay selected', NULL, '2024-09-10 05:11:38', '2024-09-10 05:11:38'),
(7, 26, 5, 26, 'user1@gmail.com', 'user1@gmail.com', 'FSDFD', NULL, '2024-09-15 16:32:21', '2024-09-15 16:32:21'),
(8, 26, 5, 26, 'user1@gmail.com', 'user1@gmail.com', 'FVDSV', NULL, '2024-09-15 16:32:27', '2024-09-15 16:32:27'),
(9, 26, 5, 26, 'user1@gmail.com', 'user1@gmail.com', 'VFDVBDF', NULL, '2024-09-15 16:32:29', '2024-09-15 16:32:29'),
(10, 26, NULL, 26, 'user1@gmail.com', 'user1@gmail.com', 'tfyguhli', NULL, '2024-09-16 18:00:20', '2024-09-16 18:00:20'),
(11, 26, NULL, 26, 'user1@gmail.com', 'user1@gmail.com', 'y', NULL, '2024-09-16 18:00:27', '2024-09-16 18:00:27'),
(12, 26, NULL, 26, 'user1@gmail.com', 'user1@gmail.com', 'sdfgh', NULL, '2024-09-16 18:01:36', '2024-09-16 18:01:36'),
(13, 27, NULL, 27, 'amirnaseem2647@gmail.com', 'amirnaseem2647@gmail.com', '123', NULL, '2024-09-16 18:01:46', '2024-09-16 18:01:46'),
(14, 26, 4, 26, 'user1@gmail.com', 'user1@gmail.com', 'xsdfgh', NULL, '2024-09-16 18:01:50', '2024-09-16 18:01:50'),
(15, 26, 3, 26, 'user1@gmail.com', 'user1@gmail.com', 'adsfdgh', NULL, '2024-09-16 18:02:01', '2024-09-16 18:02:01'),
(16, 26, 6, 26, 'user1@gmail.com', 'user1@gmail.com', 'ertyu', NULL, '2024-09-16 18:02:12', '2024-09-16 18:02:12'),
(17, 27, NULL, 27, 'amirnaseem2647@gmail.com', 'amirnaseem2647@gmail.com', 'edsadfrwerrer', NULL, '2024-09-16 18:02:20', '2024-09-16 18:02:20'),
(18, 26, 18, 26, 'user1@gmail.com', 'user1@gmail.com', 'qawesrdt', NULL, '2024-09-16 18:02:22', '2024-09-16 18:02:22'),
(19, 27, NULL, 27, 'amirnaseem2647@gmail.com', 'amirnaseem2647@gmail.com', 'dgdfghfdgh', NULL, '2024-09-16 18:02:28', '2024-09-16 18:02:28'),
(20, 26, NULL, 26, 'user1@gmail.com', 'user1@gmail.com', 'sfdgg', NULL, '2024-09-16 18:02:46', '2024-09-16 18:02:46'),
(21, 26, NULL, 26, 'user1@gmail.com', 'user1@gmail.com', 'ssgrthy', NULL, '2024-09-17 11:29:57', '2024-09-17 11:29:57'),
(22, 26, NULL, 26, 'user1@gmail.com', 'user1@gmail.com', 'retghyujtiko', NULL, '2024-09-18 07:19:57', '2024-09-18 07:19:57'),
(23, 26, 3, 26, 'user1@gmail.com', 'user1@gmail.com', 'sdfrgt', NULL, '2024-09-18 07:20:09', '2024-09-18 07:20:09'),
(24, 26, 3, 26, 'user1@gmail.com', 'user1@gmail.com', 'Hdjd', NULL, '2024-09-18 07:24:09', '2024-09-18 07:24:09'),
(25, 26, 3, 26, 'user1@gmail.com', 'user1@gmail.com', 'Nzownx', NULL, '2024-09-18 07:24:20', '2024-09-18 07:24:20'),
(26, 26, 4, 26, 'user1@gmail.com', 'user1@gmail.com', 'Zmskos', NULL, '2024-09-18 07:25:08', '2024-09-18 07:25:08'),
(27, 2, 4, 2, 'roman@gmail.com', 'roman@gmail.com', 'Hello I send the picture', '/backend/files/1726659509.png', '2024-09-18 11:38:29', '2024-09-18 11:38:29'),
(28, 26, 0, 26, 'user1@gmail.com', 'user1@gmail.com', 'sdfgh', NULL, '2024-09-18 12:05:54', '2024-09-18 12:05:54'),
(29, 4, 0, 4, 'deshimart@gmail.com', 'deshimart@gmail.com', 'let mn give my money\'', NULL, '2024-09-21 09:45:09', '2024-09-21 09:45:09'),
(30, 4, 8, 4, 'deshimart@gmail.com', 'deshimart@gmail.com', 'hhhh', NULL, '2024-09-21 11:38:15', '2024-09-21 11:38:15'),
(31, 4, 26, 4, 'deshimart@gmail.com', 'deshimart@gmail.com', 'hello', NULL, '2024-09-21 11:38:38', '2024-09-21 11:38:38'),
(32, 4, 26, 4, 'deshimart@gmail.com', 'deshimart@gmail.com', 'hddlo', NULL, '2024-09-21 11:38:49', '2024-09-21 11:38:49'),
(33, 26, 18, 26, 'user1@gmail.com', 'user1@gmail.com', 'cfghj', NULL, '2024-09-21 11:40:32', '2024-09-21 11:40:32'),
(34, 26, 18, 26, 'user1@gmail.com', 'user1@gmail.com', 'xcvbn', NULL, '2024-09-21 11:40:37', '2024-09-21 11:40:37');

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
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `orderId` varchar(255) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `total` decimal(10,2) NOT NULL,
  `subtotal` decimal(10,2) NOT NULL,
  `order_status` int(11) NOT NULL DEFAULT 1 COMMENT 'Order Placed=1,Payment Processing=2,Order Confirmed=3,Item Shipped=4,In Transit=5,Out for Delivery=6,Delivered=7,Order Completed=8,Cancelled or Returned=9',
  `billing_name` varchar(255) DEFAULT NULL,
  `billing_email` varchar(255) DEFAULT NULL,
  `billing_phone_number` varchar(255) DEFAULT NULL,
  `billing_address` varchar(255) DEFAULT NULL,
  `billing_country` varchar(255) DEFAULT NULL,
  `billing_city` varchar(255) DEFAULT NULL,
  `shipper_name` varchar(255) DEFAULT NULL,
  `shipper_email` varchar(255) DEFAULT NULL,
  `shipper_phone_number` varchar(255) DEFAULT NULL,
  `shipper_address` varchar(255) DEFAULT NULL,
  `shipper_country` varchar(255) DEFAULT NULL,
  `shipper_city` varchar(255) DEFAULT NULL,
  `payment_type` varchar(255) DEFAULT NULL,
  `packed_status` text NOT NULL,
  `dispatched_status` text NOT NULL,
  `outForDelivery_status` text NOT NULL,
  `delivered_status` text NOT NULL,
  `cancel_status` text NOT NULL,
  `return_status` text NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `orderId`, `customer_id`, `total`, `subtotal`, `order_status`, `billing_name`, `billing_email`, `billing_phone_number`, `billing_address`, `billing_country`, `billing_city`, `shipper_name`, `shipper_email`, `shipper_phone_number`, `shipper_address`, `shipper_country`, `shipper_city`, `payment_type`, `packed_status`, `dispatched_status`, `outForDelivery_status`, `delivered_status`, `cancel_status`, `return_status`, `created_at`, `updated_at`) VALUES
(1, '112371-24', 1, 1034.85, 1094.85, 1, 'admin', 'admin@gmail.com', 'null', 'School road, mohakhali, Dhaka', NULL, NULL, 'admin', 'admin@gmail.com', 'null', 'School road, mohakhali, Dhaka', NULL, NULL, 'COD', '', '', '', '', '', '', '2024-04-02 13:19:08', '2024-04-02 13:19:08'),
(2, '125432-24', 1, 1034.85, 1094.85, 1, 'admin', 'admin@gmail.com', 'null', 'School road, mohakhali, Dhaka', NULL, NULL, 'admin', 'admin@gmail.com', 'null', 'School road, mohakhali, Dhaka', NULL, NULL, 'COD', '', '', '', '', '', '', '2024-04-02 13:19:17', '2024-04-02 13:19:17'),
(3, '119588-24', 1, 1034.85, 1094.85, 3, 'admin', 'admin@gmail.com', 'null', 'School road, mohakhali, Dhaka', NULL, NULL, 'admin', 'admin@gmail.com', 'null', 'School road, mohakhali, Dhaka', NULL, NULL, 'COD', '1', '1', '0', '0', '0', '0', '2024-04-02 13:20:01', '2024-04-02 14:28:52'),
(4, '210153-24', 2, 1998.75, 2078.75, 0, 'roman', 'roman@gmail.com', '019999999', 'Dhaka, Dhaka, Bangladesh, 01915728982', NULL, NULL, 'roman', 'roman@gmail.com', '019999999', 'DHK, Dhaka, Bangladesh, 01915728983', NULL, NULL, 'COD', '', '', '', '', '', '', '2024-09-10 20:46:20', '2024-09-24 06:06:34');

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

--
-- Dumping data for table `orders_product`
--

INSERT INTO `orders_product` (`id`, `order_id`, `product_id`, `price`, `discount`, `discount_status`, `vat`, `vat_status`, `last_price`, `qty`, `color`, `size`, `created_at`, `updated_at`) VALUES
(1, '177624-24', 217, 110.00000, 9.00000, 1, 0, 0, 100.10000, 1, 'Black', 'XL', '2024-04-01 19:54:14', '2024-04-01 19:54:14'),
(2, '177624-24', 211, 6899.00000, 85.00000, 1, 0, 0, 1034.85000, 1, 'Green', 'XL', '2024-04-01 19:54:14', '2024-04-01 19:54:14'),
(3, '119588-24', 211, 6899.00000, 85.00000, 1, 0, 0, 1034.85000, 1, 'Green', 'L', '2024-04-02 13:20:01', '2024-04-02 13:20:01'),
(4, '119250-24', 217, 98.00000, 9.00000, 1, 0, 0, 89.18000, 1, 'Black', 'M', '2024-04-04 14:16:57', '2024-04-04 14:16:57'),
(5, '210153-24', 12, 510.50000, 10.00000, 1, 5, 2, 481.95000, 1, '', '', '2024-09-10 20:46:20', '2024-09-10 20:46:20'),
(6, '210153-24', 211, 6899.00000, 85.00000, 1, 0, 0, 1034.85000, 1, 'Green', 'L', '2024-09-10 20:46:20', '2024-09-10 20:46:20'),
(7, '210153-24', 14, 510.50000, 10.00000, 1, 5, 2, 481.95000, 1, '', '', '2024-09-10 20:46:20', '2024-09-10 20:46:20');

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

--
-- Dumping data for table `order_history`
--

INSERT INTO `order_history` (`id`, `order_id`, `product_id`, `seller_id`, `quantity`, `price`, `total`, `created_at`, `updated_at`) VALUES
(1, 1, 217, 1, 1, 110, 110.00, '2024-04-01 19:54:14', '2024-04-01 19:54:14'),
(2, 1, 211, 1, 1, 6899, 7009.00, '2024-04-01 19:54:14', '2024-04-01 19:54:14'),
(3, 3, 211, 1, 1, 6899, 6899.00, '2024-04-02 13:20:01', '2024-04-02 13:20:01'),
(4, NULL, 217, 1, 1, 98, 98.00, '2024-04-04 14:16:57', '2024-04-04 14:16:57'),
(5, 4, 12, 4, 1, 510.5, 510.50, '2024-09-11 02:46:20', '2024-09-10 20:46:20'),
(6, 4, 211, 1, 1, 6899, 7409.50, '2024-09-11 02:46:20', '2024-09-10 20:46:20'),
(7, 4, 14, NULL, 1, 510.5, 7920.00, '2024-09-11 02:46:20', '2024-09-10 20:46:20');

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
(2, 'Payment Processing', 'After ordering, the system verifies payment info. Successful payments move to processing.', '2023-12-04 11:15:23', '2023-12-04 05:55:48'),
(3, 'Order Confirmed', 'Payment processed, order confirmed. System notifies customer and vendors. Vendors prep items for shipment.', '2023-12-04 11:15:23', '2023-12-04 05:56:14'),
(4, 'Item Shipped', 'Vendor ships, order status: \"Shipped.\" Customer gets confirmation and tracking.', '2023-12-04 11:15:23', '2023-12-04 05:56:45'),
(5, 'In Transit', 'Order in transit; customers track shipment with provided details.', '2023-12-04 11:15:23', '2023-12-04 05:57:14'),
(6, 'Out for Delivery', '\"Out for Delivery\" status means the package is en route and will be delivered soon, notifying the customer.', '2023-12-04 11:15:23', '2023-12-04 05:57:42'),
(7, 'Delivered', '\"Delivered\" means items received. System captures delivery confirmation, including date and time.', '2023-12-04 11:15:23', '2023-12-04 05:58:19'),
(8, 'Order Completed', '\"Completed\" status: delivery confirmed, order process concluded.', '2023-12-04 11:15:23', '2023-12-04 05:58:53'),
(9, 'Cancelled or Returned', 'Order status adapts to customer actions. \"Cancelled\" for cancellations, \"Returned\" for returns.', '2023-12-04 11:15:23', '2023-12-04 05:59:17');

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
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `description`) VALUES
(1, 'dfgdfg', 'dd'),
(2, '1.95', 'ssdf'),
(3, 'sdfsdfsdf', 'ss'),
(4, 'zxc', 'pop'),
(5, 'Beef tozo', 'l;;l;'),
(6, 'xcv', 'xcvxcv');

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
  `name` varchar(255) NOT NULL,
  `deposit_service_charge` int(11) DEFAULT NULL COMMENT '%',
  `convert_php_amt` float DEFAULT NULL,
  `withdraw_service_charge` int(11) DEFAULT NULL COMMENT '%',
  `withdraw_minimum_amount` int(11) DEFAULT NULL,
  `minimum_trade_amount` int(11) DEFAULT NULL,
  `minimum_deposit_amount` int(11) DEFAULT NULL,
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
  `setting_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `tbl_setting`
--

INSERT INTO `tbl_setting` (`name`, `deposit_service_charge`, `convert_php_amt`, `withdraw_service_charge`, `withdraw_minimum_amount`, `minimum_trade_amount`, `minimum_deposit_amount`, `trade_fee`, `first_up_lin_com`, `second_up_lin_com`, `third_up_lin_com`, `trade_percent`, `tel`, `email`, `address`, `hotline`, `emergency`, `photo`, `description`, `copyright`, `status`, `admin_photo`, `admin_name`, `admin_email`, `admin_phone`, `meta_keywords`, `meta_description`, `pphoto`, `bg_color`, `currency`, `openinig_balance_date`, `reffer_bonus`, `openinig_balance_comments`, `fblink`, `twitterlink`, `linkdinlink`, `instragramlink`, `store_policy`, `crypto_wallet_address`, `master_pass_acc_no`, `setting_id`) VALUES
('TRADING', 0, 64, 6, 10, 5, 10, 6, 9, 4, 3, 10, '+44245454545', 'info@abcd.com', 'Addres', '000000', '+000000', 'pic/2tAjiUpJ0X8GziIrKJJJ.png', 'Business Description', 'Copyright © 1995-2020 abc Inc. All Rights Reserved', 1, 'pic/ZOdc8nsWAMY1YELkp9zH.jpg', 'admin', 'info@admin.com', '+44245454545', NULL, NULL, '', '#ffffff', '£', '2020-05-13', 5, NULL, 'https://www.fiverr.com', 'https://www.facebook.com', 'https://web.whatsapp.com/', '#', '<p><strong>Cancellation / Return / Exchange Policy.</strong></p><p>We offer a minimum of 18 day returns guarantee on all our items and 30 day return on eligible items. If you are not completely satisfied with your item you may return the items to the seller, within the stipulated return period for a refund (&ldquo;money back guaranteed&rdquo;). Please, ensure you obtain a proof of return postage as items being returned are the responsibility of the customer until the items reach the seller. Refunds will take approximately 5 &ndash; 7 working days for the process once the goods have arrived to the seller. Sometimes it might take up to 30 days but in rare cases if you paid using credit card but in exceptional cases. We always advise payments are made through PayPal. Returned Items must be in their original packaging, and intact to avoid breakage in transit. . In the interest of hygiene, returns on earrings, cosmetics and underwear may not be accepted at any time. Swimwear may not be returned if the hygiene seal is broken. We guarantee to refund unworn or unwashed items when you return it in re-sellable condition,.</p><p><strong>Non-Returnable Items</strong></p><p>We don&rsquo;t accept returns for items such as food unless of course they&rsquo;re faulty. Our website and catalogue clearly show which items are excluded. If you&rsquo;re returning an electrical item, it must be unused and in its original sealed packaging.</p>', 'TPpMvdKfhENfJqYZsDJQLgEopMRBy15jeU', '225588996633', 1);

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
  `business_return_address` varchar(255) DEFAULT NULL,
  `business_return_phone` varchar(255) DEFAULT NULL,
  `business_logo` varchar(255) DEFAULT NULL,
  `show_password` varchar(225) DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(255) DEFAULT NULL,
  `entry_by` int(11) DEFAULT NULL,
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

INSERT INTO `users` (`id`, `role_id`, `employee_id`, `invite_code`, `userType`, `reffer_bonus`, `join_id`, `name`, `first_name`, `last_name`, `email`, `image`, `phone_number`, `address`, `address_1`, `country_1`, `country_2`, `address_2`, `address_3`, `website`, `github`, `twitter`, `instagram`, `facebook`, `business_owner_name`, `business_name`, `business_name_slug`, `business_register_num`, `business_address`, `business_warehouse_address`, `phone_1`, `phone_2`, `gender`, `business_email`, `business_phone`, `profession_name`, `business_return_name`, `birthdate`, `business_return_email`, `landmark_2`, `landmark_1`, `business_return_address`, `business_return_phone`, `business_logo`, `show_password`, `email_verified_at`, `password`, `remember_token`, `entry_by`, `created_at`, `updated_at`, `status`, `profile_status`, `home_status`, `city_1`, `city_2`) VALUES
(1, 1, NULL, NULL, NULL, 75, 2, 'admin', NULL, NULL, 'admin@gmail.com', '/backend/files/QghrRIJF2QIUpvBdeuQj.png', 'null', '', 'School road, mohakhali, Dhaka', '23', NULL, 'Banani, Mohakhali, Dhaka', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Web Developer', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'admin', NULL, '$2a$12$w3Sd7LSp69CLMh.xMEcXoux6NAwPlS2xqZAFsTg328wwSQH4g97Lu', NULL, NULL, '2023-12-17 02:13:10', '2023-12-17 02:13:10', 1, 0, NULL, NULL, NULL),
(2, 3, NULL, '1702800790', NULL, 90, 2, 'Bijon', '', '', 'bijon@gmail.com', '/backend/files/blog-1.jpg', '019999999', '', '', '23', 'Bangladesh', '', 'null', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, '', '01915728982', '01915728983', '1', '', '', '16', '', '2024-09-09', '', 'DHK', 'Dhaka', '', '', NULL, 'bijon@gmail.com', NULL, '$2a$12$G2IY/mLjxQdKJrdjVSZp..k3l2iqfbaIyRTyG1MkiHfGVsdfCYVh.', NULL, 1, '2023-12-17 02:13:10', '2023-12-17 02:13:10', 1, 1, NULL, 'Dhaka', 'Dhaka'),
(5, 3, NULL, NULL, NULL, NULL, NULL, 'Bazaar BD', 'Abc', 'def', 'Bazaarbd@gmail.com', '/backend/files/blog-2.jpg', '03425556466', NULL, NULL, '23', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'abc', 'abc', 'abc', '23456', 'asdfghj', 'asdfg', NULL, NULL, NULL, 'seller1@gmail.com', 'seller1@gmail.com', 'Web Developer', 'asdf', NULL, NULL, NULL, NULL, 'asdfg', 'seller1@gmail.com', '/backend/files/EDvQZKC6a4FZBXw0gI2a.png', 'password', NULL, '$2a$12$WRVu59xu0s710awg21ETnO2hb9ZYiQxo9LTu2ue7A4bgdoGsbpllK', NULL, NULL, '2024-01-27 03:42:22', '2024-03-05 06:26:18', 1, 0, 1, NULL, NULL),
(6, 3, NULL, NULL, NULL, NULL, NULL, 'Amar Deal', 'sdrftg', 'asdfbg', 'amardeal@gmail.com', '/backend/files/blog-3.jpg', '34567', NULL, NULL, '23', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'asdfg', 'asdfg', 'asdfg', 'wsedfg', 'asdfg', 'asdfg', NULL, NULL, NULL, 'seller4@gmail.com', 'asdfg', 'Web Developer', 'asdfg', NULL, NULL, NULL, NULL, 'asdfg', 'sdf', '/backend/files/cDhWwsPMaLbbXgM2Ci08.jpg', 'password', NULL, '$2a$12$WRVu59xu0s710awg21ETnO2hb9ZYiQxo9LTu2ue7A4bgdoGsbpllK', NULL, NULL, '2024-01-27 03:53:59', '2024-09-22 14:21:06', 1, 0, 1, NULL, NULL),
(7, 3, NULL, '1706591702', NULL, 15, 2, 'Ahmed1', NULL, NULL, 'Ahmed1@GMAIL.COM', '/backend/files/blog-4.jpg', NULL, NULL, NULL, '23', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Web Developer', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Ahmed1@GMAIL.COM', NULL, '$2y$10$1rNkkkIAklVZQJzPbD8KhuHDcGR8DL1OB.gKno0eeNRsr9MlgFrae', NULL, NULL, '2024-01-30 05:15:03', '2024-01-30 05:15:03', 1, 0, NULL, NULL, NULL),
(8, 3, NULL, '1706592621', NULL, NULL, 2, 'Nawazl1@gmail.com', NULL, NULL, 'nawazl1@gmail.com', '/backend/files/blog-5.jpg', NULL, NULL, NULL, '23', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Web Developer', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Nawazl1@gmail.com', NULL, '$2y$10$HJNnR.4vuUWfOABcJvSdQ.pT4XqBRIKiaCWWmfZwUM2jpgrIzMJnK', NULL, NULL, '2024-01-30 05:30:21', '2024-01-30 05:30:21', 1, 0, NULL, NULL, NULL),
(9, 3, NULL, '1706621085', NULL, 5, 7, 'Asad', NULL, NULL, 'asadmujahidforweb@gmail.com', '/backend/files/blog-6.jpg', NULL, NULL, NULL, '23', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Web Developer', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'vgfc1234', NULL, '$2y$10$Mx1fdSA5yrISaLVrffCD7egliJ1x7fz5THXheJHwJEW1MKVx7weVO', NULL, NULL, '2024-01-30 13:24:45', '2024-01-30 13:24:45', 1, 0, NULL, NULL, NULL),
(10, 3, NULL, '1706622106', NULL, 5, 9, 'Gulraiz', NULL, NULL, 'gulraizkhanforweb@gmaul.com', '/backend/files/blog-7.jpg', NULL, NULL, NULL, '23', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Web Developer', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'vgfc1234', NULL, '$2y$10$bqH83FsRJZRicBpjTyOxUuxtxXxCts6BWS0jRr7INY65hi6sqCGgC', NULL, NULL, '2024-01-30 13:41:46', '2024-01-30 13:41:46', 1, 0, NULL, NULL, NULL),
(11, 3, NULL, '1706622854', NULL, 5, 10, 'Mubeen', NULL, NULL, 'mubeenkhanforweb@gmail.com', '/backend/files/blog-8.jpg', NULL, NULL, NULL, '23', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Web Developer', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'vgfc1234', NULL, '$2y$10$Tu067w6lf6gtXFGLOmTmHOshEUltg7FDHKqSYiY3kbCBUxf1YVp/.', NULL, NULL, '2024-01-30 13:54:14', '2024-01-30 13:54:14', 1, 0, NULL, NULL, NULL),
(12, 3, NULL, '1706623062', NULL, 5, 11, 'Asad', NULL, NULL, 'asadkhanforweb@gmail.com', '/backend/files/blog-9.jpg', NULL, NULL, NULL, '23', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Web Developer', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'vgfc1234', NULL, '$2y$10$WOb7x/tKaohXqSv9w.tJG.JOHvKYG33h9fCq7eplXGjTYqqgQsduW', NULL, NULL, '2024-01-30 13:57:42', '2024-01-30 13:57:42', 1, 0, NULL, NULL, NULL),
(13, 3, NULL, '1706623140', NULL, NULL, 12, 'Asad', NULL, NULL, 'asadmujahidfkrweb2@gmail.com', '/backend/files/blog-10.jpg', NULL, NULL, NULL, '23', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Web Developer', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'vgfc1234', NULL, '$2y$10$EGMFBoPo9UP7qgEJuym8p.FSmQ5sKbX6TE3S6mqiV1PPIsMYxQWSq', NULL, NULL, '2024-01-30 13:59:00', '2024-01-30 13:59:00', 1, 0, NULL, NULL, NULL),
(14, 3, NULL, '1706625560', NULL, NULL, 7, 'Mastan', NULL, NULL, 'Maz1@gmail.com', '/backend/files/blog-11.jpg', NULL, NULL, NULL, '105', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Web Developer', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'ahrar24', NULL, '$2y$10$HYJM9b27lLEMYGw1xzJMpefwThFEswjjRFFTGYOZ9KzIlKQ1Ni0py', NULL, NULL, '2024-01-30 14:39:20', '2024-01-30 14:39:20', 1, 0, NULL, NULL, NULL),
(15, 3, NULL, '1706635167', NULL, NULL, 7, 'Ahmed2@gmail.com', NULL, NULL, 'Ahmed2@gmail.com', '/backend/files/blog-12.jpg', NULL, NULL, NULL, '105', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Web Developer', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Ahmed2@gmail.com', NULL, '$2y$10$c5Mb8H7jqurbUo359WMPLu488.Cw9gO4Y7DRbkCrS6z1C0Qw2Fcm6', NULL, NULL, '2024-01-30 17:19:27', '2024-01-30 17:19:27', 1, 0, NULL, NULL, NULL),
(18, 3, NULL, NULL, NULL, NULL, NULL, 'Bangla Buy', 'dhaka', 'store', 'BanglaBuy@gmail.com', '/backend/files/blog-1.jpg', '212313', NULL, NULL, '105', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Dhak astore', 'Dhaka Store', 'dhaka-store', '1312416455', 'dhaka', 'Dhaka', NULL, NULL, NULL, 'dhakastore@gmail.com', '14234', 'Web Developer', 'dhakastore@gmail.com', NULL, NULL, NULL, NULL, 'Dhaka', '14234', '/backend/files/MT34fO1Zu1wW2yS8qq4t.jpg', 'password', NULL, '$2a$12$WRVu59xu0s710awg21ETnO2hb9ZYiQxo9LTu2ue7A4bgdoGsbpllK', NULL, NULL, '2024-03-06 13:25:01', '2024-09-22 14:21:12', 1, 0, 1, NULL, NULL),
(19, 3, NULL, '1711242661', NULL, NULL, 0, 'Ahmed11@gmail.com', NULL, NULL, 'Ahmed11@gmail.com', '/backend/files/blog-2.jpg', NULL, NULL, NULL, '105', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Web Developer', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Ahmed11@gmail.com', NULL, '$2y$10$eLDPkMOs4Xg0LqdHHn2TGOnMOv3O7HmkzmwxoW2sdTxWpwczHS9rq', NULL, NULL, '2024-03-24 01:11:01', '2024-03-24 01:11:01', 1, 0, NULL, NULL, NULL),
(20, 3, NULL, '1712331516', NULL, NULL, 0, 'Julia', NULL, NULL, 'cristianajulia244@gmail.com', '/backend/files/blog-3.jpg', NULL, NULL, NULL, '105', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Web Developer', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Ekroybd.com2024', NULL, '$2y$10$VEJuF5l3kOlF2wIi4.2D.us5e6/Grx.9nm5FC9cbPzqwoSLn.uTsK', NULL, NULL, '2024-04-05 15:38:36', '2024-04-05 15:38:36', 1, 0, NULL, NULL, NULL),
(21, 3, NULL, '1712331759', NULL, NULL, 0, 'Handrix', NULL, NULL, 'hendrixsmith200@gmail.com', '/backend/files/blog-4.jpg', NULL, NULL, NULL, '105', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Web Developer', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Ekroybd.com2024', NULL, '$2y$10$xIrxIf97kNbIuPgKu6wj6.EZoD9MpXmGm10RZgYs9ODxLW2fFbryy', NULL, NULL, '2024-04-05 15:42:39', '2024-04-05 15:42:39', 1, 0, NULL, NULL, NULL),
(25, 3, NULL, '1714737414', NULL, NULL, 0, 'User', NULL, NULL, 'user@gmail.com', '/backend/files/blog-5.jpg', NULL, NULL, NULL, '105', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Web Developer', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'user@gmail.com', NULL, '$2y$10$5dKmRzRfjzlQR.P2NqGpnOg6RaEaOi4opGMN377LRoKPr/R7DY4eu', NULL, NULL, '2024-05-03 11:56:54', '2024-05-03 11:56:54', 1, 0, NULL, NULL, NULL),
(26, 3, NULL, '1715615070', NULL, NULL, 0, 'user1@gmail.com', NULL, NULL, 'user1@gmail.com', '/backend/files/blog-6.jpg', NULL, NULL, NULL, '105', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Web Developer', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'user1@gmail.com', NULL, '$2y$10$Pg6jYPmxjcmiyeBV2SFzyuO3Hs4hfbvEIKjpgTstkYl9kxtduPt1q', NULL, NULL, '2024-05-13 15:44:30', '2024-05-13 15:44:30', 1, 0, NULL, NULL, NULL),
(27, 3, NULL, '1726460883', NULL, NULL, 0, 'Amir', NULL, NULL, 'amirnaseem2647@gmail.com', '/backend/files/blog-7.jpg', NULL, NULL, NULL, '23', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Web Developer', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Amnailar2647', NULL, '$2y$10$IkYGyWRfHeA9OH4pqXEexed2pRGd3ofHRFNER/dE.Jt9Ch9mRiEQC', NULL, NULL, '2024-09-16 04:28:03', '2024-09-16 04:28:03', 1, 0, NULL, NULL, NULL),
(28, 2, NULL, '1727510945', NULL, NULL, 0, 'jobsnsdf', NULL, NULL, 'bangladesh', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'jonsb@gmail.com', NULL, '$2y$10$o9Qm6cOOhjDLy77be4JA6uXvLATjpdPZcsnYO1vxxsGx3vdQZJS7O', NULL, NULL, '2024-09-28 02:09:05', '2024-09-28 02:09:05', 1, 0, NULL, NULL, NULL),
(29, 2, NULL, '1727511163', NULL, NULL, 0, 'zahid', NULL, NULL, 'zahid@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '123456789', NULL, '$2y$10$du6dAtLFYg1SjQ2zsGCsQOiMT3XrglCwXEG89ztmUrlyZgivM8xFG', NULL, NULL, '2024-09-28 02:12:43', '2024-09-28 02:12:43', 1, 0, NULL, NULL, NULL),
(30, 2, NULL, '1727511258', NULL, 5, 0, 'Kamal', NULL, NULL, 'kamal@gmail.com', NULL, NULL, NULL, NULL, '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'kamal@gmail.com', NULL, '$2y$10$.Ptg/dkYUJ9XGC/tkj3Fyu56R/CYtLoRk8t2qPJyZL1iot2YoDW.C', NULL, NULL, '2024-09-28 02:14:18', '2024-09-28 02:14:18', 1, 0, NULL, NULL, NULL),
(31, 2, NULL, '1727511471', NULL, NULL, 30, 'kafrul', NULL, NULL, 'kafrul@gmail.com', NULL, NULL, NULL, NULL, '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1727511258', NULL, '$2y$10$HhWQbOPJ7yWUYKmrobGHAuEdz0GiFQ6gaznVAXkL4dnm48HO6QKlK', NULL, NULL, '2024-09-28 02:17:52', '2024-09-28 02:17:52', 1, 0, NULL, NULL, NULL),
(32, 2, NULL, '1727511560', NULL, NULL, 0, 'rana', NULL, NULL, 'rana@gmail.com', NULL, NULL, NULL, NULL, '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'rana@gmail.com', NULL, '$2y$10$dpSWA5ngbD.WJKJXE2jXGOUfFjDnjx9y68a1qYwEKhRXlBY2vHgA6', NULL, NULL, '2024-09-28 02:19:20', '2024-09-28 02:19:20', 1, 0, NULL, NULL, NULL),
(33, 2, NULL, '1727511666', NULL, NULL, 0, 'jannat', NULL, NULL, 'jannat@gmail.com', NULL, NULL, NULL, NULL, '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'jannat@gmail.com', NULL, '$2y$10$PUWgCmoPuDTMa.Td0D170.U/6LAqCnxPBNzTPqaVxGvlBpr2ga5qy', NULL, NULL, '2024-09-28 02:21:06', '2024-09-28 02:21:06', 1, 0, NULL, NULL, NULL),
(34, 2, NULL, '1727515359', 0, NULL, 0, 'ibraheem', NULL, NULL, 'ibraheem@gmail.com', NULL, NULL, NULL, NULL, 'Bangladesh', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'ibraheem', NULL, '$2y$10$85kIrlJ7R031BXcS/jeZCeOC4B/CDiiC1F0CCuENBbn8V26hBe8E6', NULL, NULL, '2024-09-28 03:22:39', '2024-09-28 03:22:39', 1, 0, NULL, NULL, NULL),
(35, 2, NULL, '1727515503', 0, NULL, 0, 'Fahim', NULL, NULL, 'fahim@gmail.com', NULL, NULL, NULL, NULL, '23', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'fahim@gmail.com', NULL, '$2y$10$VLYpfovgmMCFXOAaKRpaBubo6eGC1g2TOrxpzBK.zXOsD1FjfA5Zu', NULL, NULL, '2024-09-28 03:25:03', '2024-09-28 03:25:03', 1, 0, NULL, NULL, NULL),
(36, 2, NULL, '1727584943', 0, NULL, 2, 'Mr. Shuvo', NULL, NULL, 'shuvo@gmail.com', NULL, NULL, NULL, NULL, '23', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'shuvo@gmail.com', NULL, '$2y$10$3v.s7coXmYUlUjPX8iGK6eq00Bx2wbt5Z5jYh5QVTQG7xYYCJNpE6', NULL, NULL, '2024-09-28 22:42:23', '2024-09-28 22:42:23', 1, 0, NULL, NULL, NULL);

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

--
-- Indexes for dumped tables
--

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
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categorys`
--
ALTER TABLE `categorys`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

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
-- Indexes for table `gig_images_history`
--
ALTER TABLE `gig_images_history`
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
-- Indexes for table `send_message`
--
ALTER TABLE `send_message`
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
  ADD UNIQUE KEY `business_name_slug` (`business_name_slug`);

--
-- Indexes for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

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
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `categorys`
--
ALTER TABLE `categorys`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=533;

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
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gig`
--
ALTER TABLE `gig`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `gig_images_history`
--
ALTER TABLE `gig_images_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `manufacturers`
--
ALTER TABLE `manufacturers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `orders_product`
--
ALTER TABLE `orders_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `order_history`
--
ALTER TABLE `order_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `order_status`
--
ALTER TABLE `order_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

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
-- AUTO_INCREMENT for table `send_message`
--
ALTER TABLE `send_message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `wishlist`
--
ALTER TABLE `wishlist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
