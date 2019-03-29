
$(document).ready(function(){
	$("#header").css("background" , "black");  
	$('#kela').css("color" , "white");
	$('.lil').css("color" , "white");
	$('#mobile-nav ul li a').css("color" , "white");
	
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 30) {
	    $("#header").css("background" , "white");
	    $('#logo a').css("color" , "black");
		$('.lil').css("color" , "black");
	$('#mobile-nav ul li a').css("color" , "white");
	  }

	  else if(scroll<=30 || scroll==0){
		  $("#header").css("background" , "black");  
		  $('#kela').css("color" , "white");
		  $('.lil').css("color" , "white");
	$('#mobile-nav ul li a').css("color" , "white");
	  }
  });
});