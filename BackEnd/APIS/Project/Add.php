<?php
function validate($key, $file)
{
    $name = $key;
    $size = $file["size"];
    $isProjectFile = (strpos($name, "projectFile") !== false);

    if ($isProjectFile) {
        if ($size > 1024 * 1024 * 1024) {
            return false;
        }
    } else {
        $allowedExtensions = ["jpg", "jpeg", "png", "gif"];
        $fileExtension = pathinfo($name, PATHINFO_EXTENSION);

        // if (!in_array($fileExtension, $allowedExtensions) || $size > 1024 * 1024 * 10) {
        //     return false;
        // }
    }

    return true;
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    require_once '../connection.php';

    // Get form fields
    $name = $_POST["name"];
    $visibility = $_POST["visibility"];
    $description = $_POST["description"];
    $projectTag = $_POST["tag"];
    $githubLink = $_POST["github"];
    $liveLink = $_POST["live"];
    $uid = $_COOKIE["UID"];
    $path = "./upload/$uid/$name/";

    // Create the directory if it doesn't exist
    if (!is_dir($path . "screenshots/")) {
        mkdir($path, 0777, true);
    }

    $uploadStatus = [];

    foreach ($_FILES as $key => $file) {
        $file_path = "./upload/$uid/$name/$key";
        move_uploaded_file($file["tmp_name"], $file_path . "." . pathinfo($file['name'], PATHINFO_EXTENSION));
    }

    $response = [
        "status" => "success",
        "message" => "Files uploaded successfully",
        "uploads" => $uploadStatus,
    ];

    echo json_encode($response);
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(["error" => "Invalid request method"]);
}
