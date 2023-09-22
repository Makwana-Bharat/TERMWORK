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
        $email = filter_var($requestData->email, FILTER_SANITIZE_EMAIL);
        $password = password_hash($requestData->password, PASSWORD_DEFAULT);
        $cpassword = $requestData->confirm_password;

        if ($requestData->password !== $cpassword) {
            $response = array(
                'success' => false,
                'message' => 'Password doesn`t match...',
            );
            echo json_encode($response);
            exit;
        }
            $sql = "UPDATE  `user_credentials` SET `PASSWORD`= :password WHERE EMAIL=:email";

            // Prepare the SQL statement
            $stmt = $pdo->prepare($sql);

            // Bind the parameters to the placeholders
            $stmt->bindParam(':password', $password, PDO::PARAM_STR);
            $stmt->bindParam(':email', $email, PDO::PARAM_STR);

            // Execute the query
            if ($stmt->execute()) {
                // Registration successful
                $response = array(
                    'success' => true,
                    'message' => 'Password is updated...',
                );
                echo json_encode($response);
            } else {
                // Registration failed
                $response = array(
                    'success' => false,
                    'message' => 'User Credentials Updation failed' . $otp,
                );
                echo json_encode($response);
            }
        } else {
            // Failed to extract OTP from the OTP API response
            $response = array(
                'success' => false,
                'message' => 'Failed to extract OTP from the OTP API response',
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
