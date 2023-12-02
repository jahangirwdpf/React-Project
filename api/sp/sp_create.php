<?php
include "../config.php";

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'];
$house_rent = $data[ 'house_rent' ];
$meal = $data[ 'meal' ];
$cost = $data[ 'cost' ];
$deposite = $data[ 'deposite' ];
$debit = $data[ 'debit' ];
$paybale = $data[ 'paybale' ];

$sql = "INSERT INTO meal(name, house_rent, meal, cost, deposite, debit, paybale) VALUES ('$name', '$house_rent', '$meal','$cost', '$deposite', '$debit', '$paybale' )";

if(mysqli_query($con, $sql)){
    echo json_encode(array('message' => 'Meal Inserted', 'status' => true));
}else{
    echo json_encode(array('message' => 'Meal not Inserted', 'status' => false));
}
?>