<?php
require_once('../../connection.php');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query = "SELECT * from view_project_data";

    try {
        $stmt = $pdo->query($query);
        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $response = [
            'status' => 'success',
            'data' => $data
        ];

        echo json_encode($response);
    } catch (PDOException $e) {
        $response = [
            'status' => 'error',
            'message' => 'Failed to fetch data: ' . $e->getMessage()
        ];

        echo json_encode($response);
    }
} else {
    $response = [
        'status' => 'error',
        'message' => 'Only GET requests are allowed.'
    ];
    echo json_encode($response);
}
