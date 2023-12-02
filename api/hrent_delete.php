<?php
$data = json_decode(file_get_contents("php://input"), true);
$hrent_id = $_GET['id'];
include "config.php";

$sql = "DELETE FROM house_rent WHERE hr_id = {$hrent_id}";

if(mysqli_query($con, $sql)){
	echo json_encode(array('message' => 'HR Information Deleted.', 'status' => true));
}else{
 	echo json_encode(array('message' => 'HR Information not Deleted.', 'status' => false));
}
?>