<?php
/** 
 *   Autor: Miguel Angel Lopez Moyano
 *
 *   Descripcion:  Cabecera en función de la estación del año.
 */
?>

<html>
<head>
	<?php
		include '../includes/header.php';
		include '../includes/body.php';
		echo "<h1> Cabecera en función de la estación del año</h1><br>";
		$dia=date('z');
		if ($dia < 79)
			echo "<img src='../../invierno.png' </img><br><br>";
		elseif ($dia>80 && $dia<=171)
			echo "<img src='../../primavera.png' </img><br><br>";
		elseif ($dia>171 && $dia<=264)
			echo "<img src='../../verano.png' </img><br><br>";
		elseif ($dia>264 && $dia<=355)
			echo "<img src='../../otono.png' </img><br><br>";
		else
			echo "<img src='../../invierno.png' </img><br><br>";
	?>
	<br>
	<a href="http://localhost/DWES/ejercicios/ver.php?src=
		<?php
    	echo basename($_SERVER['PHP_SELF'],'DWES/ejercicios/') ?>
     	">Ver codigo
    </a>	
</body>
</html>