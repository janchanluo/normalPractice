<?php
    header("content-Type:text/html;charset=utf-8");
    $filename="user.json";
    $arr=array();
    $data=file_get_contents($filename);
    $temp=json_decode($data,true);
    $arr["id"]=sizeof($temp);
    $arr["username"]=$_POST['username'];
    $arr["password"]=$_POST["password"];
    if(isset($temp[$arr['username']])){
        echo $arr["username"];exit;
    }
    $temp[$arr['username']]=$arr;
    file_put_contents($filename,json_encode($temp));
    $new_data=file_get_contents($filename);
    echo $new_data;

