<?php
include "config.php";

$data = json_decode(file_get_contents("php://input"), true);

$date = $data['date'];
$bazar = $data[ 'bazar' ];
$others = $data['others'];

$sql = "INSERT INTO deposite(date,bazar,others) VALUES ('$date', '$bazar', '$others')";

if(mysqli_query($con, $sql)){
    echo json_encode(array('message' => 'Deposite Inserted', 'status' => true));
}else{
    echo json_encode(array('message' => 'Deposite not Inserted', 'status' => false));
}
?>