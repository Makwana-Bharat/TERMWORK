-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- Generation Time: Sep 19, 2023 at 07:24 PM
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
-- Database: `live_store`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `addProject` (IN `p_projectName` VARCHAR(50), IN `p_visibility` VARCHAR(20), IN `p_description` TEXT, IN `p_projectTag` VARCHAR(100), IN `p_githubLink` VARCHAR(1000), IN `p_liveLink` VARCHAR(1000), IN `p_screenshotFileName` VARCHAR(1000), IN `p_projectFileName` VARCHAR(1000), IN `p_uid` VARCHAR(20))   BEGIN
    DECLARE categoryID INT;
    DECLARE projectID INT;

    -- Insert into category table if necessary and retrieve the CID
    INSERT IGNORE INTO category (`CID`, `Name`)
    VALUES (generateRandomId(), p_projectTag)
    ON DUPLICATE KEY UPDATE `CID` = `CID`;

    SELECT `CID` INTO categoryID FROM category WHERE `Name` = p_projectTag;

    -- Insert into project table
    INSERT INTO project (`UID`, `PID`, `NAME`, `Thumbnail`, `isVisible`)
    VALUES (p_uid, generateRandomId(), p_projectName, CONCAT('uploads/', p_screenshotFileName), 1);

    SELECT LAST_INSERT_ID() INTO projectID;

    -- Insert into project_meta table
    INSERT INTO project_meta (`PID`, `Download`, `Repolink`, `LiveLink`, `Screenshot`)
    VALUES (projectID, CONCAT('uploads/', p_projectFileName), p_githubLink, p_liveLink, projectID);

    -- Insert into project_tag table
    INSERT INTO project_tag (`PID`, `CID`, `TID`)
    VALUES (projectID, categoryID, projectID);
END$$

--
-- Functions
--
CREATE DEFINER=`root`@`localhost` FUNCTION `generateRandomId` () RETURNS VARCHAR(20) CHARSET utf8mb4 COLLATE utf8mb4_general_ci  BEGIN
    DECLARE characters VARCHAR(36) DEFAULT 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    DECLARE randomString VARCHAR(20) DEFAULT '';
    DECLARE i INT DEFAULT 1;

    WHILE i <= 20 DO
        SET randomString = CONCAT(randomString, SUBSTRING(characters, FLOOR(1 + RAND() * 36), 1));
        SET i = i + 1;
    END WHILE;

    RETURN randomString;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `CID` varchar(20) NOT NULL,
  `Name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`CID`, `Name`) VALUES
('1021', 'React Native,PHP');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `UID` varchar(20) NOT NULL,
  `PID` varchar(20) NOT NULL,
  `NAME` varchar(50) NOT NULL,
  `Thumbnail` varchar(1000) NOT NULL,
  `isVisible` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`UID`, `PID`, `NAME`, `Thumbnail`, `isVisible`) VALUES
('1121', '0', 'Algorithm Visualization', 'uploads/img1.png,img2.png', 1);

-- --------------------------------------------------------

--
-- Table structure for table `project_meta`
--

CREATE TABLE `project_meta` (
  `PID` varchar(20) NOT NULL,
  `MID` varchar(20) NOT NULL,
  `Download` varchar(1000) DEFAULT NULL,
  `Repolink` varchar(1000) DEFAULT NULL,
  `LiveLink` varchar(1000) DEFAULT NULL,
  `Screenshot` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `project_meta`
--

INSERT INTO `project_meta` (`PID`, `MID`, `Download`, `Repolink`, `LiveLink`, `Screenshot`) VALUES
('0', '0', 'uploads/avl.apk', 'https://github/bharat/avl.git', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `project_tag`
--

CREATE TABLE `project_tag` (
  `PID` varchar(20) NOT NULL,
  `CID` varchar(20) NOT NULL,
  `TID` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `UID` varchar(20) NOT NULL,
  `Username` varchar(20) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `GitHub` varchar(255) DEFAULT NULL,
  `LinkedIn` varchar(255) NOT NULL,
  `Bio` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UID`, `Username`, `Password`, `Email`, `GitHub`, `LinkedIn`, `Bio`) VALUES
('1121', 'Bharat', '$2y$10$MQU3vDgoN10.JxyJ1m9UQOEqFy.Jg3D8tmHdZUAAkcpGFRwkbbLfi', '2018bharatmakwana@gmail.com', 'cdf', 'cfsd', 'dsdfds');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`CID`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`PID`),
  ADD KEY `UID` (`UID`);

--
-- Indexes for table `project_meta`
--
ALTER TABLE `project_meta`
  ADD PRIMARY KEY (`MID`),
  ADD KEY `PID` (`PID`);

--
-- Indexes for table `project_tag`
--
ALTER TABLE `project_tag`
  ADD PRIMARY KEY (`TID`),
  ADD KEY `CID` (`CID`),
  ADD KEY `PID` (`PID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `project`
--
ALTER TABLE `project`
  ADD CONSTRAINT `project_ibfk_1` FOREIGN KEY (`UID`) REFERENCES `user` (`UID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `project_meta`
--
ALTER TABLE `project_meta`
  ADD CONSTRAINT `project_meta_ibfk_1` FOREIGN KEY (`PID`) REFERENCES `project` (`PID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `project_tag`
--
ALTER TABLE `project_tag`
  ADD CONSTRAINT `project_tag_ibfk_1` FOREIGN KEY (`CID`) REFERENCES `category` (`CID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `project_tag_ibfk_2` FOREIGN KEY (`PID`) REFERENCES `project` (`PID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
