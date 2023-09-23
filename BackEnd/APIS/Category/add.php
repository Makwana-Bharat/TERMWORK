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
        $response['success'] = true;
        $response['message'] = 'Data retrieved successfully';
        $response['data'] = $data;
    } else {
        $response['message'] = 'No data found';
    }
    echo json_encode($response);
} catch (PDOException $e) {
    $response['message'] = 'Error: ' . $e->getMessage();
    echo json_encode($response);
}
