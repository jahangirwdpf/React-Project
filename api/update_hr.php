<?php
include "config.php";
$data = json_decode(file_get_contents("php://input"), true);
    
    $id = $_GET['id'];
    $houserent = $data[ 'houserent' ];
    $gasbill = $data['gasbill'];
    $currentbil = $data['currentbil'];
    $sweeperbill = $data['sweeperbill'];
    $buabill = $data['buabill'];
    $wifibill = $data['wifibill'];

$sql = "UPDATE  house_rent SET
	houserent = '{$houserent}',
    gasbill = '{$gasbill}',
    currentbil = '{$currentbil}',
    sweeperbill = '{$sweeperbill}',
    buabill = '{$buabill}',
    wifibill = '{$wifibill}'

	WHERE hr_id = {$id} ";
        if(mysqli_query($con, $sql)){
            echo json_encode(array('message' => 'HR Information Inserted.', 'status' => true));
        }else{
            echo json_encode(array('message' => 'HR Information Not Inserted.', 'status' => false));
        }
?>
