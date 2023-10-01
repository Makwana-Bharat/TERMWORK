<?php
include_once('../connection.php');
include_once('../Helper/customSenitize.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json_data = file_get_contents("php://input");
    $request_data = json_decode($json_data, true);

    if (isset($request_data['UID'])) {
        $uid = customSanitizeString($request_data['UID']);

        // Call the stored procedure to retrieve data
        $sql = "CALL View_User_Projects_By_ID(:uid)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':uid', $uid, PDO::PARAM_STR);
        $stmt->execute();

        // Fetch the result from the stored procedure
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $allTags = array_unique(array_map('trim', explode(',', implode(',', array_column($result, 'Tag')))));
        if ($result) {
            $tagviz = [];
            foreach ($allTags as $tag) {
                foreach ($result as $row) {
                    if (stripos($row['Tag'], $tag) !== false) {
                        $tagviz[$tag][] = $row;
                    }
                }
            }
            $response = [
                "status" => "success",
                "message" => "Data found",
                "data" => $tagviz
            ];
        } else {
            $response = [
                "status" => "error",
                "message" => "Record not found",
                "data" => []
            ];
        }
    } else {
        $response = [
            "status" => "error",
            "message" => "UID is required",
            "data" => []
        ];
    }
} else {
    $response = [
        "status" => "error",
        "message" => "Method not allowed",
        "data" => []
    ];
}

echo json_encode($response);
