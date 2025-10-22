<?php
$servername = "localhost";
$username = "root"; // default for XAMPP
$password = "";     // your MySQL password if set
$dbname = "student_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Collect form data
$full_name = $_POST['full_name'];
$father_name = $_POST['father_name'];
$mother_name = $_POST['mother_name'];
$roll_number = $_POST['roll_number'];
$university = $_POST['university'];
$course = $_POST['course'];
$year = $_POST['year'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$gender = $_POST['gender'];
$dob = $_POST['dob'];
$address = $_POST['address'];

// Insert query
$sql = "INSERT INTO students (full_name, father_name, mother_name, roll_number, university, course, year, email, phone, gender, dob, address)
        VALUES ('$full_name', '$father_name', '$mother_name', '$roll_number', '$university', '$course', '$year', '$email', '$phone', '$gender', '$dob', '$address')";

if ($conn->query($sql) === TRUE) {
  echo "<h3>✅ Student record saved successfully!</h3>";
  echo "<a href='student_form.html'>Go Back</a>";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
