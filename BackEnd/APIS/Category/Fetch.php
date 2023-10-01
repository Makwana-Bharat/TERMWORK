<?php
require_once('../connection.php');

$response = [
    'success' => false,
    'message' => '',
    'data' => [],
];

try {
    $sql = "SELECT * FROM category";
    $stmt = $pdo->query($sql);

    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($data) {
        // Extract category names and concatenate them with commas
        $categoryNames = array_column($data, 'Name');
        $concatenatedNames = implode(',', $categoryNames);
        // Use nested implode and explode to achieve the same result
        $splitNames = explode(',', implode(',', $categoryNames));

        // Remove duplicates from the split names array
        $uniqueNames = array_unique($splitNames);

        $response['success'] = true;
        $response['message'] = 'Data retrieved successfully';
        $response['data'] = $uniqueNames; // Set the response data to the unique names array
    } else {
        $response['message'] = 'No data found';
    }
    echo json_encode($response);
} catch (PDOException $e) {
    $response['message'] = 'Error: ' . $e->getMessage();
    echo json_encode($response);
}
