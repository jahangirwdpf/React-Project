<?php
include "config.php";
$data = json_decode(file_get_contents("php://input"), true);

    $id = $_GET['id'];
    
    $date = $data['date'];
    $bazar = $data[ 'bazar' ];
    $others = $data['others'];

$sql = "UPDATE  deposite SET
	date = '{$date}',
    bazar = '{$bazar}',
    others = '{$others}'

	WHERE dep_id = {$id} ";
        if(mysqli_query($con, $sql)){
            echo json_encode(array('message' => 'Deposite Inserted.', 'status' => true));
        }else{
            echo json_encode(array('message' => 'Deposite Not Inserted.', 'status' => false));
        }
?>
