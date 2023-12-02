<?php
include "../config.php";

$id = $_GET['id'];

$sql = "SELECT * FROM meal WHERE meal_id = {$id}";

$result = mysqli_query($con, $sql) or die("SQL Query Not Done.");

if (mysqli_num_rows($result) > 0) {
    $display = mysqli_fetch_assoc($result);
    echo json_encode($display);
} else {
    echo json_encode(array('message' => 'No Information Found.', 'status' => false));
}
?>