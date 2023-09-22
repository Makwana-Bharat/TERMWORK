<?php
require_once('../../connection.php');
require_once('../../Helper/keyGenerator.php');
require_once('../../Helper/customSenitize.php');

// Handle preflight requests (OPTIONS method)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204); // No content in response for preflight requests
    exit;
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Read the incoming JSON data from the request body
    $jsonInput = file_get_contents('php://input');
    $requestData = json_decode($jsonInput);

    // Check if the JSON data is valid
    if ($requestData !== null) {

        $uid = $requestData->uid;
        $linkedIn = $requestData->linkedIn;
        $github = $requestData->github;
        $other = $requestData->other;

        $sql = "INSERT INTO `user_social`(`UID`, `LinkedIn`, `GitHub`, `Other`) VALUES (:uid,:linkedin,:github,:other)";
        $stmt = $pdo->prepare($sql);

        $stmt->bindParam(':uid', $uid, PDO::PARAM_STR);
        $stmt->bindParam(':linkedin', $linkedIn, PDO::PARAM_STR);
        $stmt->bindParam(':github', $github, PDO::PARAM_STR);
        $stmt->bindParam(':other', $other, PDO::PARAM_STR);

        if ($stmt->execute()) {
            // Registration successful
            $response = array(
                'success' => true,
                'message' => 'Registration Success..',
                'UID' => $uid
            );
            echo json_encode($response);
        } else {
            // Registration failed
            $response = array(
                'success' => false,
                'message' => 'User Creation failed'
            );
            echo json_encode($response);
        }
    } else {
        // Invalid JSON data
        $response = array(
            'success' => false,
            'message' => 'Invalid JSON data',
        );
        echo json_encode($response);
    }
} else {
    // Invalid request method
    $response = array(
        'success' => false,
        'message' => 'Invalid request method',
    );

    echo json_encode($response);
}
