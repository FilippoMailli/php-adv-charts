<?php

    include 'data.php';

    header('Content-Type: application/json');
    $database = json_encode($data);

    echo $database;


 ?>
