<?php
class Load {
	function view( $file_name, $data = null )
	{
		if( is_array($data) ) {
			extract($data); //is used to import all variables from an array into the current file, so that our view can use them as variables rather than array elements.
		}
		include $file_name. '.php'; //includes value of the variable $file_name provided as an argument to view function.
	}
}
?>