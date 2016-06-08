$(document).ready(function(){
	
//Scrol
$('#menu li a, #logo').click(function() {
	var elementClicked = $(this).attr("href");
	var destination = $(elementClicked).offset().top;
	$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination-0}, 1000 );		   
	return false;
});	

var current_nav = 'home';

scroll_function = function(){
	
	$(".scrol-page,").each(function(index) {
		var h = $(this).offset().top;
		var y = $(window).scrollTop();
					
		if(y + 360 >= h && y < h + jQuery(this).height() && $(this).attr('id') != current_nav) {
			
			current_nav = $(this).attr('id');
			
			$('#menu a').removeClass('current');
			$('.nav_' + current_nav).addClass('current').show("fast");	
				
		}
	});	
}
$(window).scroll(function(){
		scroll_function();
});

 
//Scrol
//jQuery('#menu a, #logo, .scrol').click(function() {
	//var elementClicked = jQuery(this).attr("href");
	//var destination = jQuery(elementClicked).offset().top;
	//jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination-0}, 1000 );		   
	//return false;
//});	
		
});


 