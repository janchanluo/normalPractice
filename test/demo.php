<?php
use sinacloud\sae\Storage as Storage;
 $s= new Storage();
//  $s->putBucket("test");
  $s->deleteObject("test");
  var_dump($s)
?>