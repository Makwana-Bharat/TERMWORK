
DELIMITER $$
--
-- Procedures
--
CREATE OR REPLACE PROCEDURE `addProject` (IN `p_projectName` VARCHAR(50), IN `p_visibility` VARCHAR(20), IN `p_description` TEXT, IN `p_projectTag` VARCHAR(100), IN `p_githubLink` VARCHAR(1000), IN `p_liveLink` VARCHAR(1000), IN `p_screenshots` VARCHAR(1000), IN `p_projectFileName` VARCHAR(1000), IN `p_uid` VARCHAR(20))   BEGIN
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

CREATE  OR REPLACE PROCEDURE `deleteProject` (IN `p_projectID` VARCHAR(20))   BEGIN
    DECLARE categoryID VARCHAR(20);

    DELETE FROM project_tag WHERE `PID` = p_projectID;

    DELETE FROM project WHERE `PID` = p_projectID;

    SELECT COUNT(*) INTO categoryID FROM project_tag WHERE `CID` = categoryID;

    IF categoryID IS NOT NULL AND categoryID != '' THEN
        DELETE FROM category WHERE `CID` = categoryID;
    END IF;
END$$

CREATE  OR REPLACE PROCEDURE `updateProject` (IN `p_projectID` VARCHAR(20), IN `p_projectName` VARCHAR(50), IN `p_visibility` VARCHAR(20), IN `p_description` TEXT, IN `p_projectTag` VARCHAR(100), IN `p_githubLink` VARCHAR(1000), IN `p_liveLink` VARCHAR(1000))   BEGIN
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
CREATE OR REPLACE  FUNCTION `generateRandomId` () RETURNS VARCHAR(20) CHARSET utf8mb4 COLLATE utf8mb4_general_ci  BEGIN
    DECLARE characters VARCHAR(36) DEFAULT 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    DECLARE randomString VARCHAR(20) DEFAULT '';
    DECLARE i INT DEFAULT 1;

    WHILE i <= 20 DO
        SET randomString = CONCAT(randomString, SUBSTRING(characters, FLOOR(1 + RAND() * 36), 1));
        SET i = i + 1;
    END WHILE;

    RETURN randomString;
END$$

CREATE OR REPLACE TRIGGER `categoryIDSetter` BEFORE INSERT ON `category`
 FOR EACH ROW SET NEW.CID=generateRandomId()

DELIMITER ;


--
-- Most Recent View
--

CREATE OR REPLACE VIEW `view_project_data` AS
SELECT
    u.UID AS UID,
    p.PID AS PID,
    mv.MID,
    u.Username AS UserName,
    p.NAME AS ProjectName,
    mv.Views AS Views,
    p.isVisible AS IsVisible,
    p.rating AS Rating,
    pt.CID AS CID,
    pt.TID AS TID,
    pm.Download AS DownloadLink
FROM
    mostviewed mv
INNER JOIN
    project p ON mv.PID = p.PID
INNER JOIN
    user u ON p.UID = u.UID
LEFT JOIN
    project_tag pt ON p.PID = pt.PID
INNER JOIN 
    project_meta pm ON pm.PID=p.PID;



--
-- Fetch All Projects
--
CREATE OR REPLACE VIEW fetch_Projects_Info AS
SELECT
    u.UID,
    u.Username,
    p.PID,
    p.NAME,
    p.rating,
    pm.Download,
    pm.LiveLink,
    pm.Repolink,
    pm.Screenshot,
    c.Name AS 'Tag'
FROM
    project AS p
JOIN
    USER AS u ON p.UID = u.UID
JOIN
    project_meta AS pm ON p.PID = pm.PID
JOIN
    project_tag AS pt ON p.PID = pt.PID
JOIN
    category AS c ON pt.CID = c.CID
LEFT JOIN
    mostviewed AS v ON p.PID = v.PID
WHERE
    p.isVisible = "1"
    AND v.PID IS NULL
GROUP BY
    p.PID
ORDER BY 
    u.UID;
