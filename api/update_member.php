<?php
$data = json_decode(file_get_contents("php://input"), true);

    $id = $_GET['id'];
    $membername = $data['membername'];
    $membercontact = $data['membercontact'];
    $memberemail = $data['memberemail'];
    $memberaddress = $data['memberaddress'];
    $memberusername = $data['memberusername'];
    $membernid = $data['membernid'];
    // $memberrole = $data['memberrole'];

include "config.php";

$sql = "UPDATE  member SET
	membername = '{$membername}',
    membercontact = '{$membercontact}',
    memberemail = '{$memberemail}',
    memberaddress = '{$memberaddress}',
    memberusername = '{$memberusername}',
    membernid = '{$membernid}'

	WHERE mem_id = {$id} ";
        if(mysqli_query($con, $sql)){
            echo json_encode(array('message' => 'Member Information Inserted.', 'status' => true));
        }else{
            echo json_encode(array('message' => 'Failed', 'status' => false));
        }
?>
