<?php
include "../config.php";

$data = json_decode(file_get_contents("php://input"), true);
$meal_id = $_GET['id'];

$sql = "DELETE FROM meal WHERE meal_id = {$meal_id}";

if(mysqli_query($con, $sql)){
	echo json_encode(array('message' => 'Meal Information Deleted.', 'status' => true));
}else{
 	echo json_encode(array('message' => 'Meal Information not Deleted.', 'status' => false));
}
?>