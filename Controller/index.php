<?php
$host = 'localhost'; // Replace with your database host
$username = 'your_username'; // Replace with your database username
$password = 'your_password'; // Replace with your database password
$database = 'your_database'; // Replace with your database name

// Create a database connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
