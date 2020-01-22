-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 11, 2019 at 02:19 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
-- Table structure for table `hiraganaUserTable`
--

CREATE TABLE `hiraganaUserTable` (
  `userName` varchar(30) NOT NULL,
  `passWord` varchar(30) NOT NULL,
  `quizScore` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hiraganaUserTable`
--

INSERT INTO `hiraganaUserTable` (`userName`, `passWord`, `quizScore`) VALUES
('Billy', 'abcd', 0),
('Paul', '1234', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hiraganaUserTable`
--
ALTER TABLE `hiraganaUserTable`
  ADD PRIMARY KEY (`userName`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
