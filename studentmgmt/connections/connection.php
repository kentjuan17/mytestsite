<?php 

function connection(){

$host = "localhost";
$username = "root";
$password = "1ntrud3r";
$database = "student_sys";

$con = new mysqli($host, $username, $password, $database);

if($con->connect_error){
    echo $con->connect_error;
} else {
    return $con;
}

}



?>