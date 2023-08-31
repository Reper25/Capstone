-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: b0ike2q5rzsbsm7l1sza-mysql.services.clever-cloud.com:3306
-- Generation Time: Aug 31, 2023 at 10:15 AM
-- Server version: 8.0.22-13
-- PHP Version: 8.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `b0ike2q5rzsbsm7l1sza`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `Products` (
  `prodID` int NOT NULL,
  `prodName` varchar(40) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `amount` decimal(18,2) DEFAULT NULL,
  `Category` varchar(30) DEFAULT NULL,
  `prodUrl` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `Products` (`prodID`, `prodName`, `quantity`, `amount`, `Category`, `prodUrl`) VALUES
(1, 'name', NULL, 2500.00, 'sneakers', 'https://i.postimg.cc/ZY1C6mtm/166f4a67-d984-4af2-aebc-dc8ed178e3fe.webp'),
(2, 'name', NULL, 3000.00, 'sneakers', 'https://i.postimg.cc/0yGxMRxV/3f8ce7d9-7559-486c-b727-36691d22f47b.webp'),
(3, 'name', NULL, 3600.00, 'sneakers', 'https://i.postimg.cc/NMnwqQ7j/4345cb9b-22e9-4444-b751-5f50d68add64.webp'),
(4, 'name', NULL, 1900.00, 'sneakers', 'https://i.postimg.cc/9z5501k3/447f002d-b484-4f9b-afb9-63f0e682c785.webp'),
(5, 'name', NULL, 1500.00, 'sneakers', 'https://i.postimg.cc/1zJQBG86/8b63eac1-c941-4259-b811-3327920d6178.webp'),
(6, 'name', NULL, 2000.00, 'sneakers', 'https://i.postimg.cc/V6vcVJth/air-max-sc-shoes-2-Sw-X5s.jpg'),
(7, 'name', NULL, 2200.00, 'sneakers', 'https://i.postimg.cc/7PC5C6RX/b36ca206-a5d4-4c0e-9f87-83bb8c95befd.webp'),
(8, 'name', NULL, 2500.00, 'sneakers', 'https://i.postimg.cc/tJVG982t/e3575672-5caa-40f1-8d6d-f2b2488f903c.webp'),
(9, 'name', NULL, 1000.00, 'hoodies', 'https://i.postimg.cc/c4M5fsgt/02fd91b9-709b-44d8-84d1-2237253f2394.webp'),
(10, 'name', NULL, 1200.00, 'hoodies', 'https://i.postimg.cc/DzmjVLC1/dallas-mavericks-courtside-nba-fleece-sweatshirt-dz-JWp2.jpg'),
(11, 'name', NULL, 1000.00, 'hoodies', 'https://i.postimg.cc/8cdwdH5g/team-13-standard-issue-wnba-hoodie-vl-S0d9.jpg'),
(12, 'name', NULL, 1100.00, 'hoodies', 'https://i.postimg.cc/52s7knmx/team-13-standard-issue-wnba-hoodie-vl-S0d9-1.jpg'),
(13, 'name', NULL, 1100.00, 'hoodies', 'https://i.postimg.cc/9M7L0VHM/team-13-standard-issue-wnba-hoodie-vl-S0d9-2.jpg'),
(14, 'name', NULL, 1900.00, 'hoodies', 'https://i.postimg.cc/zX5xz9tz/team-31-courtside-nba-pullover-fleece-hoodie-Kgh4c-S.jpg'),
(15, 'name', NULL, 900.00, 'hoodies', 'https://i.postimg.cc/598PMxmK/team-31-standard-issue-dri-fit-nba-hoodie-4-SWx-BF.jpg'),
(16, 'name', NULL, 1000.00, 'hoodies', 'https://i.postimg.cc/L5FNZ7mV/team-31-standard-issue-dri-fit-nba-sweatshirt-0mg3rs.jpg'),
(17, 'name', NULL, 1100.00, 'hoodies', 'https://i.postimg.cc/CKtvw5tX/wnba-fleece-pullover-hoodie-Cb-WMx-J.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `userID` int NOT NULL,
  `firstname` varchar(30) DEFAULT NULL,
  `lastname` varchar(30) DEFAULT NULL,
  `userAge` int DEFAULT NULL,
  `Gender` varchar(7) DEFAULT NULL,
  `userRole` varchar(6) DEFAULT 'user',
  `emailAdd` varchar(100) DEFAULT NULL,
  `userPass` varchar(200) DEFAULT NULL,
  `userProfile` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`userID`, `firstname`, `lastname`, `userAge`, `Gender`, `userRole`, `emailAdd`, `userPass`, `userProfile`) VALUES
(1, 'laeeq ', ' Majal', 20, 'Male ', 'Admin ', 'laeeq.majal@gmail.com ', 'lm8545660 ', 'https://i.postimg.cc/Bnppn18D/IMG-20230513-WA0000.jpg  ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `Products`
  ADD PRIMARY KEY (`prodID`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `Products`
  MODIFY `prodID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `userID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
