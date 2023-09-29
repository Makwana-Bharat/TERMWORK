-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- Generation Time: Sep 29, 2023 at 09:07 PM
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
CREATE DEFINER=`root`@`localhost` PROCEDURE `addProject` (IN `p_projectName` VARCHAR(50), IN `p_visibility` VARCHAR(20), IN `p_description` TEXT, IN `p_projectTag` VARCHAR(100), IN `p_githubLink` VARCHAR(1000), IN `p_liveLink` VARCHAR(1000), IN `p_screenshots` VARCHAR(1000), IN `p_projectFileName` VARCHAR(1000), IN `p_uid` VARCHAR(20))   BEGIN
    DECLARE categoryID VARCHAR(20);
    DECLARE projectID VARCHAR(20);

    DECLARE myGeneratedID VARCHAR(20); -- Declare a variable for your generated ID

    SET myGeneratedID = generateRandomId(); -- Store your generated ID

    -- Insert into category table if necessary and retrieve the CID
    INSERT IGNORE INTO category (`CID`, `Name`)
    VALUES (myGeneratedID, p_projectTag)
    ON DUPLICATE KEY UPDATE `CID` = `CID`;

    SELECT `CID` INTO categoryID FROM category WHERE `Name` = p_projectTag;

    -- Insert into project table
    INSERT INTO project (`UID`, `PID`, `NAME`,  `isVisible`)
    VALUES (p_uid, myGeneratedID, p_projectName, p_visibility);

    SET projectID = myGeneratedID; -- Use your generated ID as the project ID

    -- Insert into project_meta table
    INSERT INTO project_meta (`PID`,`MID`, `Download`, `Repolink`, `LiveLink`, `Screenshot`)
    VALUES (projectID, generateRandomId(),p_githubLink, p_githubLink, p_liveLink, p_screenshots);

    -- Insert into project_tag table
    INSERT INTO project_tag (`PID`, `CID`, `TID`)
    VALUES (projectID, categoryID, generateRandomId());
    
    -- Now, projectID is set to your generated ID and can be used in subsequent queries
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteProject` (IN `p_projectID` VARCHAR(20))   BEGIN
    DECLARE categoryID VARCHAR(20);

    DELETE FROM project_tag WHERE `PID` = p_projectID;

    DELETE FROM project WHERE `PID` = p_projectID;

    SELECT COUNT(*) INTO categoryID FROM project_tag WHERE `CID` = categoryID;

    IF categoryID IS NOT NULL AND categoryID != '' THEN
        DELETE FROM category WHERE `CID` = categoryID;
    END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `updateProject` (IN `p_projectID` VARCHAR(20), IN `p_projectName` VARCHAR(50), IN `p_visibility` VARCHAR(20), IN `p_description` TEXT, IN `p_projectTag` VARCHAR(100), IN `p_githubLink` VARCHAR(1000), IN `p_liveLink` VARCHAR(1000))   BEGIN
    DECLARE categoryID VARCHAR(20);

    -- Update project information
    UPDATE project
    SET `NAME` = p_projectName,
        `isVisible` = p_visibility
    WHERE `PID` = p_projectID;

    -- Update project description in project_meta table
    UPDATE project_meta
    SET `Download` = p_githubLink,
        `LiveLink` = p_liveLink
    WHERE `PID` = p_projectID;

    -- Update project tag (category)
    -- Insert into category table if necessary and retrieve the CID
    INSERT IGNORE INTO category (`CID`, `Name`)
    VALUES (generateRandomId(), p_projectTag)
    ON DUPLICATE KEY UPDATE `CID` = `CID`;

    SELECT `CID` INTO categoryID FROM category WHERE `Name` = p_projectTag;

    -- Update project tag in project_tag table
    UPDATE project_tag
    SET `CID` = categoryID
    WHERE `PID` = p_projectID;
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
('3MLSXXKSX29V89BJHJZZ', '.NET'),
('OESDAZRMLSWVE2UT9JNF', 'Android'),
('J1A132SFI1B7VD2VXOEP', 'Android,Firebase'),
('7L6S3TJZ1X83HUJVIL5P', 'API'),
('ALU4TIR2R9SUL6UFB0UW', 'C'),
('GMEW2B5JWL16E9V7873J', 'C++'),
('LDVYV9CN0TS564TEAXJM', 'Farming Simulation'),
('KF2UR0FVRY7UE5BSS8KT', 'Flutter'),
('JE6CYICV4PVYXHD47CV2', 'Game'),
('3TIT8F8N6PP369HC1W3J', 'iOS'),
('3LEX6TBW6Z22X5PQCA28', 'JAVA'),
('U1GXXKQRBYM0V2GTGIWO', 'Lib'),
('T2MO8VF7FBZQEKDVZZPC', 'MARN'),
('NBDKGC22SFLDUT9MZRMK', 'MERN'),
('MZV4R2TMDO20MQLJJS1K', 'React'),
('8F6BSNO6M7WM3C7QRAYK', 'React Native'),
('H4SEB4B1V2DELJL16JVI', 'Shell Script'),
('C7RUOMUZ6NFVUCW71B7U', 'Swift'),
('9132URYA7XRQ4665Y130', 'UI/UX');

--
-- Triggers `category`
--
DELIMITER $$
CREATE TRIGGER `categoryIDSetter` BEFORE INSERT ON `category` FOR EACH ROW SET NEW.CID=generateRandomId()
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Stand-in structure for view `fetch_projects_info`
-- (See below for the actual view)
--
CREATE TABLE `fetch_projects_info` (
`UID` varchar(20)
,`Username` varchar(20)
,`PID` varchar(20)
,`NAME` varchar(50)
,`rating` float
,`Download` varchar(1000)
,`LiveLink` varchar(1000)
,`Repolink` varchar(1000)
,`Screenshot` int(11)
,`Tag` varchar(20)
);

-- --------------------------------------------------------

--
-- Table structure for table `mostviewed`
--

CREATE TABLE `mostviewed` (
  `MID` int(3) NOT NULL,
  `PID` varchar(20) NOT NULL,
  `Views` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mostviewed`
--

INSERT INTO `mostviewed` (`MID`, `PID`, `Views`) VALUES
(1, '2Q7IOKHHPSIVNCJBRK73', 0),
(2, 'NLODH4UJVKVCW84NKM5N', 4);

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `UID` varchar(20) NOT NULL,
  `PID` varchar(20) NOT NULL,
  `NAME` varchar(50) NOT NULL,
  `isVisible` tinyint(1) NOT NULL DEFAULT 1,
  `rating` float NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`UID`, `PID`, `NAME`, `isVisible`, `rating`) VALUES
('47EQL9fyckbnXD8mwrsD', '2Q7IOKHHPSIVNCJBRK73', 'Farming Simulator', 1, 0),
('47EQL9fyckbnXD8mwrsD', 'NLODH4UJVKVCW84NKM5N', 'Free Fire', 1, 0),
('47EQL9fyckbnXD8mwrsD', 'WZXF3VT50BCG0DMN6NG0', 'Clash Of Empire', 1, 0);

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
('2Q7IOKHHPSIVNCJBRK73', 'A7ZXF5663PV19YQHZ7QT', 'https://github.com/jay/fs', 'https://github.com/jay/fs', '', 3),
('NLODH4UJVKVCW84NKM5N', 'DFSC49PH0A6R0FVT4Y28', 'https://github.com/Jay/FreeFIre', 'https://github.com/Jay/FreeFIre', '', 4),
('WZXF3VT50BCG0DMN6NG0', 'LN901X83GQ0NU2J75WPM', 'https://github.com/jay/coe', 'https://github.com/jay/coe', '', 2);

-- --------------------------------------------------------

--
-- Table structure for table `project_tag`
--

CREATE TABLE `project_tag` (
  `PID` varchar(20) NOT NULL,
  `CID` varchar(20) NOT NULL,
  `TID` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `project_tag`
--

INSERT INTO `project_tag` (`PID`, `CID`, `TID`) VALUES
('2Q7IOKHHPSIVNCJBRK73', 'LDVYV9CN0TS564TEAXJM', 'K5R3Y5L84MF2Q7JS4X0Y'),
('WZXF3VT50BCG0DMN6NG0', 'JE6CYICV4PVYXHD47CV2', 'N5K3GR6BQHVOH5Y26E9T'),
('NLODH4UJVKVCW84NKM5N', 'JE6CYICV4PVYXHD47CV2', 'PI61FQ59KQOXDRFMHCZM');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `UID` varchar(20) NOT NULL,
  `Username` varchar(20) NOT NULL,
  `Bio` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UID`, `Username`, `Bio`) VALUES
('47EQL9fyckbnXD8mwrsD', 'Jay Valanki', 'I am Jay'),
('kA9P96TfEYVeoVGwJw6O', 'Prathvik Sankaliya', 'Hello I am From Limbdi'),
('p8N2ibaujKhrYU4eVeLG', 'MAKWANA BHARAT', 'Hello I am Makwana Bharat From Mahuva-Bhavanagar');

-- --------------------------------------------------------

--
-- Table structure for table `user_credentials`
--

CREATE TABLE `user_credentials` (
  `UID` varchar(20) NOT NULL,
  `EMAIL` varchar(255) NOT NULL,
  `PASSWORD` varchar(255) NOT NULL,
  `isVerify` tinyint(1) NOT NULL DEFAULT 0,
  `OTP` varchar(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_credentials`
--

INSERT INTO `user_credentials` (`UID`, `EMAIL`, `PASSWORD`, `isVerify`, `OTP`) VALUES
('p8N2ibaujKhrYU4eVeLG', '2018bharatmakwana@gmail.com', '$2y$10$0rJZKviZnqgUJbjAZpSN3uvEE.eB2hNSJFDXSEgNSouh9to/YpTbS', 1, NULL),
('47EQL9fyckbnXD8mwrsD', 'iamjay1820@gmail.com', '$2y$10$/ejIAvKc/vxMX7MV9HlDUOk3H.0KVV1ZvEl4yxbqmrLfE8gAB4e2G', 1, NULL),
('kA9P96TfEYVeoVGwJw6O', 'prathviksankaliya@gmail.com', '$2y$10$ufpaixMzSwfvNiAOu3V1pudPXD0yqfA89dUKPRNwwGt0Q83S74vuK', 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_social`
--

CREATE TABLE `user_social` (
  `UID` varchar(20) NOT NULL,
  `LinkedIn` varchar(1000) NOT NULL,
  `GitHub` varchar(1000) NOT NULL,
  `Other` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_social`
--

INSERT INTO `user_social` (`UID`, `LinkedIn`, `GitHub`, `Other`) VALUES
('47EQL9fyckbnXD8mwrsD', 'https://linked.com/jay', 'https://github.com/jay', ''),
('kA9P96TfEYVeoVGwJw6O', 'https://linkedin.com/prathvik-sankaliya', 'https://github.com/prathvik-sankaliya', 'https://leetcode.com/prathvik-sankaliya'),
('p8N2ibaujKhrYU4eVeLG', 'https://linkedin/makwana-bharat', 'https://github/makwana-bharat', '');

-- --------------------------------------------------------

--
-- Stand-in structure for view `view_project_data`
-- (See below for the actual view)
--
CREATE TABLE `view_project_data` (
`UID` varchar(20)
,`PID` varchar(20)
,`MID` int(3)
,`UserName` varchar(20)
,`ProjectName` varchar(50)
,`Views` int(2)
,`IsVisible` tinyint(1)
,`Rating` float
,`CID` varchar(20)
,`TID` varchar(20)
,`DownloadLink` varchar(1000)
);

-- --------------------------------------------------------

--
-- Structure for view `fetch_projects_info`
--
DROP TABLE IF EXISTS `fetch_projects_info`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `fetch_projects_info`  AS SELECT `u`.`UID` AS `UID`, `u`.`Username` AS `Username`, `p`.`PID` AS `PID`, `p`.`NAME` AS `NAME`, `p`.`rating` AS `rating`, `pm`.`Download` AS `Download`, `pm`.`LiveLink` AS `LiveLink`, `pm`.`Repolink` AS `Repolink`, `pm`.`Screenshot` AS `Screenshot`, `c`.`Name` AS `Tag` FROM (((((`project` `p` join `user` `u` on(`p`.`UID` = `u`.`UID`)) join `project_meta` `pm` on(`p`.`PID` = `pm`.`PID`)) join `project_tag` `pt` on(`p`.`PID` = `pt`.`PID`)) join `category` `c` on(`pt`.`CID` = `c`.`CID`)) left join `mostviewed` `v` on(`p`.`PID` = `v`.`PID`)) WHERE `p`.`isVisible` = '1' AND `v`.`PID` is null GROUP BY `p`.`PID` ORDER BY `u`.`UID` ASC ;

-- --------------------------------------------------------

--
-- Structure for view `view_project_data`
--
DROP TABLE IF EXISTS `view_project_data`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_project_data`  AS SELECT `u`.`UID` AS `UID`, `p`.`PID` AS `PID`, `mv`.`MID` AS `MID`, `u`.`Username` AS `UserName`, `p`.`NAME` AS `ProjectName`, `mv`.`Views` AS `Views`, `p`.`isVisible` AS `IsVisible`, `p`.`rating` AS `Rating`, `pt`.`CID` AS `CID`, `pt`.`TID` AS `TID`, `pm`.`Download` AS `DownloadLink` FROM ((((`mostviewed` `mv` join `project` `p` on(`mv`.`PID` = `p`.`PID`)) join `user` `u` on(`p`.`UID` = `u`.`UID`)) left join `project_tag` `pt` on(`p`.`PID` = `pt`.`PID`)) join `project_meta` `pm` on(`pm`.`PID` = `p`.`PID`)) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`CID`),
  ADD UNIQUE KEY `Name` (`Name`);

--
-- Indexes for table `mostviewed`
--
ALTER TABLE `mostviewed`
  ADD PRIMARY KEY (`MID`),
  ADD KEY `PID` (`PID`);

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
-- Indexes for table `user_credentials`
--
ALTER TABLE `user_credentials`
  ADD PRIMARY KEY (`EMAIL`),
  ADD KEY `UID` (`UID`);

--
-- Indexes for table `user_social`
--
ALTER TABLE `user_social`
  ADD UNIQUE KEY `UID` (`UID`),
  ADD UNIQUE KEY `LinkedIn` (`LinkedIn`) USING HASH,
  ADD UNIQUE KEY `GitHub` (`GitHub`) USING HASH;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mostviewed`
--
ALTER TABLE `mostviewed`
  MODIFY `MID` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `mostviewed`
--
ALTER TABLE `mostviewed`
  ADD CONSTRAINT `mostviewed_ibfk_1` FOREIGN KEY (`PID`) REFERENCES `project` (`PID`) ON DELETE CASCADE ON UPDATE CASCADE;

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

--
-- Constraints for table `user_credentials`
--
ALTER TABLE `user_credentials`
  ADD CONSTRAINT `user_credentials_ibfk_1` FOREIGN KEY (`UID`) REFERENCES `user` (`UID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_social`
--
ALTER TABLE `user_social`
  ADD CONSTRAINT `user_social_ibfk_1` FOREIGN KEY (`UID`) REFERENCES `user` (`UID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
