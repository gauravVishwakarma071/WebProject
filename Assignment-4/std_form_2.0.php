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
$sql = "CREATE TABLE IF NOT EXISTS user(
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
    die("Error inserting data" .mysqli_error($conn));
}


?>