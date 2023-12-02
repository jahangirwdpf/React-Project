<?php
    include "../config.php";

    $sql = "SELECT * FROM meal ORDER BY meal_id DESC;
    ";

    $result = mysqli_query($con, $sql) or die("SQL Query Undone.");
    if(mysqli_num_rows($result) > 0 ){
        $display = mysqli_fetch_all($result, MYSQLI_ASSOC);
        echo json_encode($display);
    }else{
        echo json_encode(array('message' => 'No Information Found.', 'status' => false));
    }
?>