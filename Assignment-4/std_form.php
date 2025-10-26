<?php
// Database configuration
$servername = "localhost";
$username = "root"; // 
$password = "";     
$dbname = "student_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Collect form data safely
$full_name   = $_POST['full_name'] ?? '';
$father_name = $_POST['father_name'] ?? '';
$mother_name = $_POST['mother_name'] ?? '';
$roll_number = $_POST['roll_number'] ?? '';
$university  = $_POST['university'] ?? '';
$course      = $_POST['course'] ?? '';
$year        = $_POST['year'] ?? '';
$email       = $_POST['email'] ?? '';
$phone       = $_POST['phone'] ?? '';
$gender      = $_POST['gender'] ?? '';
$dob         = $_POST['dob'] ?? '';
$address     = $_POST['address'] ?? '';

// Prepare SQL query (using prepared statement to avoid SQL injection)
$stmt = $conn->prepare("INSERT INTO students 
  (full_name, father_name, mother_name, roll_number, university, course, year, email, phone, gender, dob, address)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

$stmt->bind_param("ssssssssssss", 
  $full_name, $father_name, $mother_name, $roll_number, 
  $university, $course, $year, $email, $phone, $gender, $dob, $address
);

// Execute and check
if ($stmt->execute()) {
    echo "<h3 style='color: lime;'>Student record saved successfully!</h3>";
} else {
    echo "<h3 style='color: red;'>Error: " . $stmt->error . "</h3>";
}

// Close connection
$stmt->close();
$conn->close();
?>
