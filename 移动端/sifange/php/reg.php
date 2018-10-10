<?php
$code=$_GET["code"];
// echo $code;
session_start();
// print $_SESSION["code"];

//strtolower 字符串转小写的函数

if(strtolower($code) === strtolower($_SESSION["code"])){
    //验证成功
    echo '{"result":"success"}';
}else{
    //验证失败
    echo '{"result":"fail"}';
}
?>