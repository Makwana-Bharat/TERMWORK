<?php

require_once 'User/User.php';
require_once './Project/Project.php';
require_once './Project/ProjectTag.php';

use User\User;
// Dummy data based on the JSON structure
$data = [
    "UID" => "user123",
    "Username" => "john_doe",
    "email" => "john.doe@example.com",
    "github" => "https://github.com/johndoe",
    "Linkedid" => "https://linkedin.com/in/johndoe",
    "Bio" => "A passionate developer",
    "Projects" => [
        [
            "PID" => "project1",
            "NAME" => "Project One",
            "Thumbnail" => "https://example.com/thumbnail1.jpg",
            "Download" => "https://example.com/project1.zip",
            "RepoLink" => "https://github.com/johndoe/project1",
            "OtherLinks" => ["https://example.com/project1-demo", "https://example.com/project1-docs"],
            "Visibility" => "Public",
            "Description" => "This is the first project.",
            "ProjectTags" => [
                ["TID" => "tag1", "Tag" => "Web Development"],
                ["TID" => "tag2", "Tag" => "JavaScript"]
            ],
            "Contributor" => ["user456", "user789"]
        ],
        [
            "PID" => "project2",
            "NAME" => "Project Two",
            "Thumbnail" => "https://example.com/thumbnail2.jpg",
            "Download" => "https://example.com/project2.zip",
            "RepoLink" => "https://github.com/johndoe/project2",
            "OtherLinks" => ["https://example.com/project2-demo"],
            "Visibility" => "Private",
            "Description" => "This is the second project.",
            "ProjectTags" => [
                ["TID" => "tag3", "Tag" => "Mobile App"],
                ["TID" => "tag4", "Tag" => "React Native"]
            ],
            "Contributor" => ["user123", "user789"]
        ]
    ]
];

// Create a User object using the dummy data
$user = new User(
    $data["UID"],
    $data["Username"],
    $data["email"],
    $data["github"],
    $data["Linkedid"],
    $data["Bio"],
    $data["Projects"]
);

// Accessing User attributes and Project attributes
echo '<pre>';
print_r($user);
echo '</pre>';
