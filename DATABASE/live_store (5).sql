-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- Generation Time: Sep 26, 2023 at 04:09 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

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
-- Table structure for table `mostviewed`
--

CREATE TABLE `mostviewed` (
  `MID` int(3) NOT NULL,
  `PID` varchar(20) NOT NULL,
  `Views` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
('47EQL9fyckbnXD8mwrsD', '2Q7IOKHHPSIVNCJBRK73', 'Farming Simulator', 0, 0),
('47EQL9fyckbnXD8mwrsD', 'NLODH4UJVKVCW84NKM5N', 'Free Fire', 0, 0),
('47EQL9fyckbnXD8mwrsD', 'WZXF3VT50BCG0DMN6NG0', 'Clash Of Empire', 0, 0);

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
('p8N2ibaujKhrYU4eVeLG', '2018bharatmakwana@gmail.com', '$2y$10$hNUOApUPooubuvDdwkSZaexVvQz/QYGvt3aUV7GS0MQump8zrxb2.', 1, NULL),
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
  MODIFY `MID` int(3) NOT NULL AUTO_INCREMENT;

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
