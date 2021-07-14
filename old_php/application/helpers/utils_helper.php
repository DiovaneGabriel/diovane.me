<?php
function dump($object, $die = true){
	echo "<pre>";
	var_dump($object);
	echo "</pre>";
	if($die){
		die();
	}
}
