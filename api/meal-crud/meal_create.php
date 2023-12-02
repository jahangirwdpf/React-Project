<?php
include "../config.php";

$data = json_decode(file_get_contents("php://input"), true);

$date = $data['date'];
$meal = $data[ 'meal' ];

$sql = "INSERT INTO meal(date, meal) VALUES ('$date', '$meal')";

if(mysqli_query($con, $sql)){
    echo json_encode(array('message' => 'Meal Inserted', 'status' => true));
}else{
    echo json_encode(array('message' => 'Meal not Inserted', 'status' => false));
}
?>