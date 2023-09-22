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
        // Define the URL of the OTP API
        $otpApiUrl = 'http://localhost/TERMWORK/BackEnd/APIS/Auth/SendOTP.php'; // Modify the URL as needed

        // Prepare the data to send to the OTP API
        $postData = array(
            'EMAIL' => $email,
        );

        // Initialize cURL session
        $ch = curl_init();

        // Set cURL options
        curl_setopt($ch, CURLOPT_URL, $otpApiUrl);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));

        // Execute cURL session and retrieve the OTP API response
        $otpApiResponse = curl_exec($ch);

        // Close cURL session
        curl_close($ch);

        // Check if the OTP API response is valid JSON
        $otpData = json_decode($otpApiResponse);
        if ($otpData !== null && isset($otpData->OTP)) {
            $otp = $otpData->OTP;

            // Define the SQL query with placeholders for parameters
            $sqlUpdate = "UPDATE `user_credentials` SET `isVerify` = 1, `OTP` = :otp WHERE `EMAIL` = :email";

            // Prepare the SQL statement
            $stmt = $pdo->prepare($sqlUpdate);

            $stmt->bindParam(':email', $email, PDO::PARAM_STR);
            $stmt->bindParam(':otp', $otp, PDO::PARAM_STR);

            // Execute the query
            if ($stmt->execute()) {
                // Registration successful
                $response = array(
                    'success' => true,
                    'message' => 'Check your mailbox for otp',
                );
                echo json_encode($response);
            } else {
                // Registration failed
                $response = array(
                    'success' => false,
                    'message' => 'User Credentials Creation failed' . $otp,
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
