<?php
require_once('../connection.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $requestData = json_decode(file_get_contents("php://input"));

    // Check if both email and password are provided
    if (isset($requestData->email) && isset($requestData->password)) {
        // Sanitize and validate input (you can add more validation)
        $email = filter_var($requestData->email, FILTER_SANITIZE_EMAIL);
        $password = $requestData->password;

        // Query to fetch user data by email
        $sql = "SELECT * FROM `user` WHERE `Email` = :email";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':email', $email, PDO::PARAM_STR);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        // Check if a user with the provided email exists
        if ($user) {
            // Verify the password (you should use password_hash and password_verify for secure password handling)
            if (password_verify($password, $user['Password'])) {
                // Password is correct, generate a response
                $response = array(
                    'success' => true,
                    'message' => 'Login successful',
                    'user' => $user
                );
                echo json_encode($response);
            } else {
                // Password is incorrect
                $response = array(
                    'success' => false,
                    'message' => 'Incorrect password'
                );
                echo json_encode($response);
            }
        } else {
            // User with the provided email does not exist
            $response = array(
                'success' => false,
                'message' => 'User not found'
            );
            echo json_encode($response);
        }
    } else {
        // Missing email or password in the request
        $response = array(
            'success' => false,
            'message' => 'Email and password are required'
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
