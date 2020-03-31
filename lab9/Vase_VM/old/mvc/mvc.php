<?php
require '../../../../lab6/examples_2015/virtualMuseum/mvc/view/load.php';
require '../../../../lab6/examples_2015/virtualMuseum/mvc/model/model.php';
require '../../../../lab6/examples_2015/virtualMuseum/mvc/controller/controller.php';
$pageURI =$_SERVER['REQUEST_URI'];
$pageURI =substr($pageURI,strrpos($pageURI,'index.php')+10);
	if (!$pageURI)
		new Controller('home');
	else
		new Controller($pageURI);
		
?>

