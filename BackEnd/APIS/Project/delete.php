<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    require_once '../connection.php';

    $projectID = $_POST["projectID"];

    $procedureCall = "CALL deleteProject(:p_projectID)";

    $stmt = $pdo->prepare($procedureCall);

    $stmt->bindParam(':p_projectID', $projectID, PDO::PARAM_STR);

    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        $response = [
            "status" => "success",
            "message" => "Project deleted successfully",
        ];
    } else {
        $response = [
            "status" => "fail",
            "message" => "Project deletion failed",
        ];
    }

    echo json_encode($response);
} else {
    http_response_code(405);
    echo json_encode(["error" => "Invalid request method"]);
}
