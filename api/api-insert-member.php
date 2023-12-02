<?php
$data = json_decode(file_get_contents("php://input"), true);

$membername = $data[ 'membername' ];
$membercontact = $data['membercontact'];
$memberemail = $data['memberemail'];
$memberaddress = $data['memberaddress'];
$memberusername = $data['memberusername'];
$membernid = $data['membernid'];

include "config.php";

$sql = "INSERT INTO member(membername,membercontact,memberemail,memberaddress,memberusername,membernid) VALUES ('$membername', '$membercontact', '$memberemail', '$memberaddress', '$memberusername', '$membernid')";

if(mysqli_query($con, $sql)){
    echo json_encode(array('message' => 'Member Information Inserted', 'status' => true));
}else{
    echo json_encode(array('message' => 'Member Information not Inserted', 'status' => false));
}
?>