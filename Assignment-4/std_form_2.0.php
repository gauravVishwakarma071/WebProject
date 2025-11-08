<?php

//connect to MySQL server
$servername = "localhost";
$usernsme = "root";
$password = "";

$conn = mysqli_connect($servername,$usernsme,$password);
if(!conn){
    die("Connection failed: " .mysqli_connect_error());
}
echo "Connect to MySQL server successfully<br>";

//Create a database
$dbname = "user_db";
$sql = "CREATE DATABASE IF NOT EXISTS $dbname";
if(mysqli_query($conn,$sql)){
    echo "Database '$dbname' created successfully<br>";
}else{
    die("Error creating database:" .mysqli_error($conn));
}

//Select the database
mysqli_select_db($conn,$dbname);
echo "Using database '$dbname'<br>";

//Create table
$sql = "CREATE TABLE IF NOT EXISTS users(
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
email VARCHAR(500) NOT NULL
)";if(mysqli_query($conn,$sql)){
    echo "Table 'users' created successfully<br>";
}else{
    die("Error creating table: " .mysqli_error($conn));
}

//Insert some data
$sql = "INSERT INTO users (name, email) 
VALUES
('ACB', 'abc@example.com'),
('XYZ', 'xyz@example.com'),
";

if(mysqli_query($conn,$sql)){
    echo "Data inserted sucessfully<br>";
}else{
    die("Error inserting data:" .mysqli_error($conn));
}

//Update some data
$sql = "UPDATE users SET email = 'abc123@gmail.com' WHERE name = 'ABC'";
if(mysqli_query($conn, $sql)){
    echo "Data updated succesfully<br>";
}else{
    die("Error while updating data:" .mysqli_error($conn));
}

//Delete some data
$sql = "DELETE FROM users WHERE name = 'ABC'";
if(mysqli_query($conn, $sql)){
    echo "Data deleted sucessfully<br>";
}else{
    die("Error while deleting data:" .mysqli_error($conn));
}

//Disconnect Database
mysqli_close($conn);
echo "Connection Closed<br>";

//Connect again
$conn = mysqli_connect($servername,$usernsme,$password);
if($conn){
    echo "Server connected..";
}else{
    die("Server connection failed")
}

//Delete the table
$sql = "DROP TABLE IF EXISTS users";
if(mysqli_query($conn, $sql)){
    echo "Table deleted sucessfully<br>";
}else{
    die("Error while deleting table:" .mysqli_error($conn));
}

//Delete the database
$sql = "DROP DATABASE IF EXISTS $dbname";
if(mysqli_query($conn, $sql)){
    echo "database deleted sucessfully<br>";
}else{
    die("Error while deleting database:" .mysqli_error($conn));
}

//Disconnecting connection
mysqli_close($conn);
echo "final connection closed<br>";
?>