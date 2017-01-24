$(document).ready(function(){

	if($(window).width()<696){
		$("nav").hide();
	}

	else{
		$("nav").show();
	}

	$(".toggle-mnu").click(function() {
	  			$(this).toggleClass("on");
	  			$("nav").slideToggle();
	  			return false;
	});

	$(window).on('resize', function(){
		if($(window).width()<696){
			$("nav").hide();
		}

		else{
			$("nav").show();
		}
	});
});