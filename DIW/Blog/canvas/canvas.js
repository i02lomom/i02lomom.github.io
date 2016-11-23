function cargaContextoCanvas(idCanvas){
	var elemento = document.getElementById(idCanvas);
	if(elemento && elemento.getContext){
		var contexto = elemento.getContext('2d');
		if(contexto){
			return contexto;
		}
	}
	return FALSE;
}

var contexto;

window.onload =function(){
		
	contexto = cargaContextoCanvas('micanvas');
	if (contexto) {
			
		contexto.strokeStyle = '#1B9AAA';
		contexto.lineWidth = "8";
		contexto.strokeRect(0, 0, 125, 80);

		contexto.beginPath();
		contexto.lineWidth = "4";
		contexto.moveTo(0,0);
		contexto.lineTo(62,50);
		contexto.lineTo(125,0);
		contexto.stroke();

		contexto.closePath();
	}
}