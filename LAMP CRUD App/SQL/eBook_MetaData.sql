-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 20, 2019 at 11:40 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `CS230`
--

-- --------------------------------------------------------

--
-- Table structure for table `eBook_MetaData`
--

CREATE TABLE `eBook_MetaData` (
  `id` int(11) NOT NULL,
  `creator` text NOT NULL,
  `title` text NOT NULL,
  `type` text NOT NULL,
  `identifier` varchar(20) NOT NULL,
  `date` date NOT NULL,
  `language` varchar(10) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `eBook_MetaData`
--

INSERT INTO `eBook_MetaData` (`id`, `creator`, `title`, `type`, `identifier`, `date`, `language`, `description`) VALUES
(1, 'J.K Rowling', 'Harry Potter and Chamber of Secrets.', 'Fiction', '0-7475-3849-2', '1998-07-02', 'en-GB', 'The wizard boy is back.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `eBook_MetaData`
--
ALTER TABLE `eBook_MetaData`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `identifier` (`identifier`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `eBook_MetaData`
--
ALTER TABLE `eBook_MetaData`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
