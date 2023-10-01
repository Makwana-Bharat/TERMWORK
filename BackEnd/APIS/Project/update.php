<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    require_once '../connection.php';

    // Get form fields
    $projectID = $_POST["projectID"]; // Assuming you have a unique identifier for the project
    $name = $_POST["name"];
    $visibility = $_POST["visibility"];
    $description = $_POST["description"];
    $projectTag = $_POST["tag"];
    $githubLink = $_POST["github"];
    $liveLink = $_POST["live"];

    // Check if the project exists and belongs to the user (you should implement this logic)

    // Assuming you have a database connection already established in 'connection.php'
    // Define your procedure call to update the project
    $procedureCall = "CALL updateProject(:p_projectID, :p_projectName, :p_visibility, :p_description, :p_projectTag, :p_githubLink, :p_liveLink)";

    // Prepare the statement
    $stmt = $pdo->prepare($procedureCall);

    // Bind the parameters
    $stmt->bindParam(':p_projectID', $projectID, PDO::PARAM_INT);
    $stmt->bindParam(':p_projectName', $name, PDO::PARAM_STR);
    $stmt->bindParam(':p_visibility', $visibility, PDO::PARAM_STR);
    $stmt->bindParam(':p_description', $description, PDO::PARAM_STR);
    $stmt->bindParam(':p_projectTag', $projectTag, PDO::PARAM_STR);
    $stmt->bindParam(':p_githubLink', $githubLink, PDO::PARAM_STR);
    $stmt->bindParam(':p_liveLink', $liveLink, PDO::PARAM_STR);

    // Execute the stored procedure
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        $response = [
            "status" => "success",
            "message" => "Project updated successfully",
        ];
    } else {
        $response = [
            "status" => "fail",
            "message" => "Project update failed",
        ];
    }

    echo json_encode($response);
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(["error" => "Invalid request method"]);
}
