<?php
include "../config.php";
$data = json_decode(file_get_contents("php://input"), true);

    $id = $_GET['id'];
    
    $date = $data['date'];
    $meal = $data[ 'meal' ];

$sql = "UPDATE  meal SET
	date = '{$date}',
    meal = '{$meal}'

	WHERE meal_id = {$id} ";
        if(mysqli_query($con, $sql)){
            echo json_encode(array('message' => 'Meal Inserted.', 'status' => true));
        }else{
            echo json_encode(array('message' => 'Meal Not Inserted.', 'status' => false));
        }
?>