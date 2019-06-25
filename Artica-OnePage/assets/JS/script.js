;(function(d,w,$){

	var $doc=$(d);
	var $win=$(w);
	

	$doc.ready(function(){

		/* Main menu*/
		$('.canvas-open').click(function(){
			$('#menu').addClass('open');
		});
		$('.canvas-close').click( function(){
			$('#menu').removeClass('open');
		});		

		/* portfolio -  expand */
		$('.layer').click(function(){
			$( '#expand').removeClass('hidden');
			$( '#expand').removeClass('switch-hidden-l');
			$( '#expand').addClass('switch-show');
		});

		$('#expand i').click(function(){
			$( '#expand').removeClass('switch-show');
			$( '#expand').addClass('switch-hidden-r');
			
			setTimeout(function(){
				$( '#expand').addClass('hidden switch-hidden-l');
				$( '#expand').removeClass('switch-hidden-r');
			},3000);

		});
		// Personal Note: try with an other way 
		//var frames= $('.frame');
		//console.log($(frames[0])) =>first frame
		var $setImg=$('#main-img');

		$( '#portfolio #frame-upp .frame:nth-child(1) .layer' ).click(function(){
			$setImg.attr('src','assets/img/portfolio1.png');
		});
		$( '#portfolio #frame-upp .frame:nth-child(2) .layer' ).click(function(){
			$setImg.attr('src','assets/img/portfolio2.png');
		});
		$( '#portfolio #frame-upp .frame:nth-child(3) .layer' ).click(function(){
			$setImg.attr('src','assets/img/portfolio3.png');
		});
		$( '#portfolio #frame-upp .frame:nth-child(4) .layer' ).click(function(){
			$setImg.attr('src','assets/img/portfolio4.png');
		});
		$( '#portfolio #frame-down .frame:nth-child(1) .layer' ).click(function(){
			$setImg.attr('src','assets/img/portfolio5.png');
		});
		$( '#portfolio #frame-down .frame:nth-child(2) .layer' ).click(function(){
			$setImg.attr('src','assets/img/portfolio6.png');
		});
		$( '#portfolio #frame-down .frame:nth-child(3) .layer' ).click(function(){
			$setImg.attr('src','assets/img/portfolio7.png');
		});
		$( '#portfolio #frame-down .frame:nth-child(4) .layer' ).click(function(){
			$setImg.attr('src','assets/img/portfolio8.png');
		});

		/* employees - story - expand */

		$( '.shape').click(function(){
			$('#story').slideDown('slow');	
		});
			$('#story i').click(function(){
				$('#story').hide();
			});
	
	});
})(document,window,jQuery);
