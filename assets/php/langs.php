<?php
$webLang=trim($_GET["wlang"]);
if ($webLang<>"") {
		$expire=time()+60*60*24*30*6;
		setcookie("clang", $webLang, $expire);
} else {
	if (isset($_COOKIE["clang"])) {	
		$webLang=$_COOKIE["clang"];
	} else {  	
		$webLang = substr ($_SERVER["HTTP_ACCEPT_LANGUAGE"],0,2);
		if (($webLang<>"es") AND ($webLang<>"en")) {
				$webLang="en";
		}
		$expire=time()+60*60*24*30*6;
		setcookie("clang", $webLang, $expire);
	}
	if ($thisPageLang<>$webLang) {
		switch ($webLang) {
			case "es":
				Header('Location: es/');
				break;
			case "en":
				Header('Location: en/');
				break;
			default: 
				Header('Location: en/');
		}		
	}
}
?>
