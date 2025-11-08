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
?>