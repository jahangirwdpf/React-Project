<?php
$data = json_decode(file_get_contents("php://input"), true);

$houserent = $data[ 'houserent' ];
$gasbill = $data['gasbill'];
$currentbil = $data['currentbil'];
$sweeperbill = $data['sweeperbill'];
$buabill = $data['buabill'];
$wifibill = $data['wifibill'];

include "config.php";

$sql = "INSERT INTO house_rent(houserent,gasbill,currentbil,sweeperbill,buabill,wifibill) VALUES ('$houserent', '$gasbill', '$currentbil', '$sweeperbill', '$buabill', '$wifibill')";

if(mysqli_query($con, $sql)){
    echo json_encode(array('message' => 'Other Information Inserted', 'status' => true));
}else{
    echo json_encode(array('message' => 'Other Information not Inserted', 'status' => false));
}
?>