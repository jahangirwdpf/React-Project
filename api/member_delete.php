<?php
$data = json_decode(file_get_contents("php://input"), true);
$member_id = $_GET['id'];
include "config.php";

$sql = "DELETE FROM member WHERE mem_id = {$member_id}";

if(mysqli_query($con, $sql)){
	echo json_encode(array('message' => 'Member Information Deleted.', 'status' => true));
}else{
 	echo json_encode(array('message' => 'Member Information not Deleted.', 'status' => false));
} 
?>