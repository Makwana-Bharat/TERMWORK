<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    require_once '../connection.php';

    // Get form fields
    $name = $_POST["name"];
    $visibility = $_POST["visibility"];
    $description = $_POST["description"];
    $projectTag = $_POST["tag"];
    $githubLink = $_POST["github"];
    $liveLink = $_POST["live"];
    $uid = $_COOKIE["UID"];
    $path = "./upload/$uid/$name/";

    // Create the directory if it doesn't exist
    if (!is_dir($path . "screenshots/")) {
        mkdir($path . "screenshots/", 0777, true);
    }

    $uploadStatus = [];
    $status = true;
    $screenshotsCount = 0; // Initialize the screenshots count

    foreach ($_FILES as $key => $file) {
        $file_path = "./upload/$uid/$name/$key";
        if (move_uploaded_file($file["tmp_name"], $file_path . "." . pathinfo($file['name'], PATHINFO_EXTENSION))) {
            if (strpos($key, "screenshot") !== false) {
                // Increment the screenshots count for screenshot files
                $screenshotsCount++;
            }
            $uploadStatus[] = [
                "filename" => $file["name"],
                "status" => "success",
            ];
        } else {
            $status = false;
            $uploadStatus[] = [
                "filename" => $file["name"],
                "status" => "fail",
            ];
        }
    }

    if ($status) {
        // Assuming you have a database connection already established in 'connection.php'
        // Define your procedure call
        $procedureCall = "CALL addProject(:p_projectName, :p_visibility, :p_description, :p_projectTag, :p_githubLink, :p_liveLink, :p_screenshots, :p_projectFileName, :p_uid)";

        // Prepare the statement
        $stmt = $pdo->prepare($procedureCall);

        // Bind the parameters
        $stmt->bindParam(':p_projectName', $name, PDO::PARAM_STR);
        $stmt->bindParam(':p_visibility', $visibility, PDO::PARAM_STR);
        $stmt->bindParam(':p_description', $description, PDO::PARAM_STR);
        $stmt->bindParam(':p_projectTag', $projectTag, PDO::PARAM_STR);
        $stmt->bindParam(':p_githubLink', $githubLink, PDO::PARAM_STR);
        $stmt->bindParam(':p_liveLink', $liveLink, PDO::PARAM_STR);
        $stmt->bindParam(':p_screenshots', $screenshotsCount, PDO::PARAM_INT); // Send the screenshots count
        $stmt->bindParam(':p_projectFileName', $name, PDO::PARAM_STR); // Assuming the project file name is the same as the project name
        $stmt->bindParam(':p_uid', $uid, PDO::PARAM_STR);

        // Execute the stored procedure
        $stmt->execute();

        $response = [
            "status" => "success",
            "message" => "Files uploaded successfully and stored in the database",
            "uploads" => $uploadStatus,
        ];
    } else {
        $response = [
            "status" => "fail",
            "message" => "Some files failed to upload",
            "uploads" => $uploadStatus,
        ];
    }

    echo json_encode($response);
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(["error" => "Invalid request method"]);
}
