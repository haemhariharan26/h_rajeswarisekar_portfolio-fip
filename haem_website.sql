-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2023 at 07:28 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `haem_website`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(25) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` varchar(800) NOT NULL,
  `email` varchar(50) NOT NULL,
  `date` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `subject`, `message`, `email`, `date`) VALUES
(1, 'Ryan Miller', 'Feedback on your service', 'Providing positive feedback on your services.', 'ryan.miller@email.com', '2023-11-01'),
(2, 'Jessica Taylor', 'Inqury', 'Inquiring about job opportunities.', 'jessica.taylor@email.com', '2023-11-02'),
(3, 'Kevin Brown', 'Need Support', 'Seeking customer support for a recent purchase.', 'kevin.brown@email.com', '2023-11-03'),
(4, 'Olivia White', 'Just need some info', 'Interested in your upcoming events.', ' olivia.white@email.com', '2023-11-04'),
(5, 'Michael Chen', 'need to know more about latest website', 'Requesting a demo of your latest website.', 'michael.chen@email.com', '2023-11-05'),
(6, 'Emma Davis', 'service info', 'Interested in your services, please provide more information.', 'emma.davis@email.com', '2023-11-09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
