<?php
require_once('../connection.php');
require_once('../Helper/keyGenerator.php');
require_once('../Helper/customSenitize.php');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $requestData = json_decode(file_get_contents("php://input"));

    // Check if all required fields are provided
    if (
        isset($requestData->Username)
        && isset($requestData->Password)
        && isset($requestData->Email)
        && isset($requestData->LinkedIn)
        && isset($requestData->Bio)
    ) {
        // Sanitize and validate input
        $username = customSanitizeString($requestData->Username);
        $linkedIn = customSanitizeString($requestData->LinkedIn);
        $bio = customSanitizeString($requestData->Bio);
        $password = $requestData->Password;
        $email = filter_var($requestData->Email, FILTER_SANITIZE_EMAIL);
        $gitHub = isset($requestData->GitHub) ? $requestData->GitHub : null;

        // Generate a unique UID using the keyGenerator.php file
        $uid = generateRandomKey(20);

        // Hash the password
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Query to insert a new user into the user table
        $sql = "INSERT INTO `user` (`UID`, `Username`, `Password`, `Email`, `GitHub`, `LinkedIn`, `Bio`) 
                VALUES (:uid, :username, :password, :email, :github, :linkedin, :bio)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':uid', $uid, PDO::PARAM_STR);
        $stmt->bindParam(':username', $username, PDO::PARAM_STR);
        $stmt->bindParam(':password', $hashedPassword, PDO::PARAM_STR);
        $stmt->bindParam(':email', $email, PDO::PARAM_STR);
        $stmt->bindParam(':github', $gitHub, PDO::PARAM_STR);
        $stmt->bindParam(':linkedin', $linkedIn, PDO::PARAM_STR);
        $stmt->bindParam(':bio', $bio, PDO::PARAM_STR);

        if ($stmt->execute()) {
            // Registration successful
            $response = array(
                'success' => true,
                'message' => 'Registration successful',
                'UID' => $uid
            );
            echo json_encode($response);
        } else {
            // Registration failed
            $response = array(
                'success' => false,
                'message' => 'Registration failed'
            );
            echo json_encode($response);
        }
    } else {
        // Missing required fields in the request
        $response = array(
            'success' => false,
            'message' => 'All required fields are mandatory'
        );
        echo json_encode($response);
    }
} else {
    // Invalid request method
    $response = array(
        'success' => false,
        'message' => 'Invalid request method'
    );
    echo json_encode($response);
}
