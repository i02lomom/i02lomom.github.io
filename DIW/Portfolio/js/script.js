$(function() {
	let pos;
	
	$(".sobremi").click(function(evento) {
		evento.preventDefault();
		pos = $("#sobremi").offset().top;
		$("html, body").animate({
			scrollTop: pos
		}, 2000);
	});

	$(".proyectos").click(function(evento) {
		evento.preventDefault();
		pos = $("#proyectos").offset().top;
		$("html, body").animate({
			scrollTop: pos
		}, 2000);
	});
});