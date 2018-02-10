$(document).ready(function(){
	$(window).scroll(function(){
		var st = $(this).scrollTop();
		console.log(st);
		if(st > 400){ $('.about_me').css({'opacity':1});}
		if(st > 550){ $('.hobby_container').css({'opacity':1});}
		if(st > 1000){ $('.portfolio').css({'opacity':1});}
		if(st > 1400){ $('.our_team').css({'opacity':1});}
	});
	$('.menu_item:nth-child(1)').click(function(){
			$(window).scrollTop(700);
		});
	$('.menu_item:nth-child(2)').click(function(){
			$(window).scrollTop(1173);
		});
	$('.menu_item:nth-child(3)').click(function(){
			$(window).scrollTop(1626);
		});
});