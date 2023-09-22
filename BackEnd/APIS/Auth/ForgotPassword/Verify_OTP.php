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
    $jsonInput = file_get_contents('php://input');
    $requestData = json_decode($jsonInput);

    // Check if the JSON data is valid
    if ($requestData !== null) {
        $email = $requestData->email;
        $otp = $requestData->otp;

        // Fetch OTP from the database
        $sqlFetchOTP = "SELECT `OTP` FROM `user_credentials` WHERE `EMAIL` = :email";
        $stmtFetchOTP = $pdo->prepare($sqlFetchOTP);
        $stmtFetchOTP->bindParam(':email', $email, PDO::PARAM_STR);
        $stmtFetchOTP->execute();
        $fetchedOTP = $stmtFetchOTP->fetchColumn();

        // Check if fetched OTP matches the provided OTP
        if ($fetchedOTP === $otp) {
            // Update the database to set isVerify=1 and OTP=null
            $sqlUpdate = "UPDATE `user_credentials` SET `OTP` = NULL WHERE `EMAIL` = :email";
            $stmtUpdate = $pdo->prepare($sqlUpdate);
            $stmtUpdate->bindParam(':email', $email, PDO::PARAM_STR);

            if ($stmtUpdate->execute()) {
                // OTP verification successful
                $response = array(
                    'success' => true,
                    'message' => 'OTP Verification Done..'
                );
                echo json_encode($response);
            } else {
                // Database update failed
                $response = array(
                    'success' => false,
                    'message' => 'Database update failed'
                );
                echo json_encode($response);
            }
        } else {
            // OTP mismatch
            $response = array(
                'success' => false,
                'message' => $fetchedOTP
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
