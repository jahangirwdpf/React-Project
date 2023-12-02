<?php
$data = json_decode(file_get_contents("php://input"), true);
$dep_id = $_GET['id'];
include "config.php";

$sql = "DELETE FROM deposite WHERE dep_id = {$dep_id}";

if(mysqli_query($con, $sql)){
	echo json_encode(array('message' => 'Deposite Deleted.', 'status' => true));
}else{
 	echo json_encode(array('message' => 'Deposite not Deleted.', 'status' => false));
}
?>