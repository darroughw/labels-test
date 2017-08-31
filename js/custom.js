$(document).ready(function () {

$('[data-toggle="popover"]').popover()

$('body').scrollspy({ target: '#navbar-example' })

   $(window).scroll(function() {
        if ($('html,body').scrollTop() > 230) {
            $('.navbar-fixed-top').addClass('active');
        }
        else {
            $('.navbar-fixed-top').removeClass('active');
        }
    });


   $('.sectionNav li').click(function(){
	  var sectionName = $(this).attr('name');
	  $(this).parent().find('li').removeClass('active');
	  $(this).addClass('active');
	  $(this).parent().parent().find('.content').removeClass('active');
	  $('#' + sectionName + '-section').addClass('active');
	}); 

   	$('#podCard').click(function(){
   		$('#pods').load('pods/colors.html')
   	}); 	


   	$('.scroll').click(function(){

   		var missionTop = $('#mission').offset().top;
 
        $('html,body').animate({scrollTop: missionTop}, 500);
 
   	}); 


   	$('.more-text a').click(function(e){
   		e.stopPropagation();
   	}); 	

     $('.card').click(function(){

     	if ($(this).hasClass('pbc')) {
     		var pbcName = $(this).attr('id');
     		window.open(pbcName + '.html', pbcName); 
     	} else {

      var sectionId = $(this).closest('.container-fluid').attr('id');

	  var cardID = $(this).attr('id');
	  

	  if ($(this).prev('.card').length > 0) {
	  	$('#prev').show().attr('name', cardID );
	  } else {
	  	$('#prev').hide();
	  }	

	  if ($(this).next('.card').length > 0) {
	  	$('#next').show().attr('name', cardID );
	  } else {
	  	$('#next').hide();
	  }	




	  $(this).addClass('active');
	  $('#cardZone').addClass('active')
	  $(this).clone().appendTo('#cardZone').attr('id', cardID + '-clone').addClass('clone');
	  $('.goBack').attr('name', cardID  + '-clone')
	  var leftPos = $(this).offset().left;
	  var topPos = $(this).offset().top - $(window).scrollTop();

	  $('#' + cardID  + '-clone').attr('name', topPos + '-' + leftPos);

	  $('#' + cardID  + '-clone').css({
	  	'position': 'fixed',
	  	'left': leftPos,
	  	'top': topPos,
	  	'z-index': 9,
	  	'margin': 0
	  }).delay(50).queue(function() {
	  	$('#' + cardID  + '-clone').animate({
         'left':  0,
         'top': '0px',
         'height': '100%',
         'width': '100%'
        }, 400).queue(function() {
         $('#' + cardID  + '-clone').css({
	  		'position': 'absolute',
	  		'height': 'calc(100%-50px)',


	  		'overflow-x': 'hidden',
            'overflow-y': 'scroll'
	  	 }); 
	  	 $('body').css('overflow','hidden');
	 		
	 	 $(this).addClass('active');	
         $('.slideTop .dot').remove();
         dots(cardID);
         var cardCount = $('#' + cardID).index();
         $('.slideTop').addClass('active');
         $('.slideTop').find('.dot').eq(cardCount).addClass('active');

       	
         $( this ).dequeue();
      	}); 	

	  $( this ).dequeue();
      }); 
	}
	  
	}); 


      $('body').on('click', '.dot', function () {

     	cardId = $(this).attr('name');

     	$('.card').removeClass('active')
     	$('.clone').remove();

     	$('#' + cardId).addClass('active');
     	$('#' + cardId).clone().appendTo('#cardZone').attr('id', cardId + '-clone').addClass('clone');



     	$('#' + cardId  + '-clone').addClass('active').css({
	  	'position': 'fixed',
	  	'left': 0,
	  	'top': 0,
	  	'z-index': 9,
	  	'margin': 0,
         'height': '100%',
         'width': '100%',
	  	 'overflow-x': 'hidden',
         'overflow-y': 'scroll'
        });
        $('.goBack').attr('name',cardId);
        $(this).attr('name',cardId)
       if ($('#' + cardId).next('.card').length > 0) {
 	
	  		$('#next').show().attr('name', cardId );
	  	} else {
	  		$('#next').hide();
	  	}	
	  	$('#prev').show().attr('name', cardId);
	  	 $('.slideTop').find('.dot').remove();
	  	 dots(cardId);
         var cardCount = $('#' + cardId).index();
         $('.slideTop').addClass('active');
         $('.slideTop').find('.dot').eq(cardCount).addClass('active');

       	



    }); 
    


     $('#next').click(function(){
     	currentId = $(this).attr('name');

     	$('.clone').remove();
     	nextId = $('#' + currentId).next().attr('id');
     	$('.card').removeClass('active');
     	$('#' + nextId).addClass('active');
     	$('#' + nextId).clone().appendTo('#cardZone').attr('id', nextId + '-clone').addClass('clone');


     	$('#' + nextId  + '-clone').addClass('active').css({
	  	'position': 'fixed',
	  	'left': 0,
	  	'top': 0,
	  	'z-index': 9,
	  	'margin': 0,
         'height': '100%',
         'width': '100%', 
	  	'overflow-x': 'hidden',
           'overflow-y': 'scroll'
        });
        $('.goBack').attr('name',nextId);
        $(this).attr('name',nextId)
       if ($('#' + nextId).next('.card').length > 0) {
 	
	  		$('#next').show().attr('name', nextId );
	  	} else {
	  		$('#next').hide();
	  	}	
	  	$('#prev').show().attr('name', nextId );
	  	  $('.slideTop').find('.dot.active').removeClass('active').next().addClass('active');



    }); 

     $('#prev').click(function(){
     	currentId = $(this).attr('name');

     	$('.clone').remove();
     	prevId = $('#' + currentId).prev().attr('id');
     	$('.card').removeClass('active');
     	$('#' + prevId).addClass('active');
     	$('#' + prevId).clone().appendTo('#cardZone').attr('id', prevId + '-clone').addClass('clone');


     	$('#' + prevId  + '-clone').addClass('active').css({
	  	'position': 'fixed',
	  	'left': 0,
	  	'top': 0,
	  	'z-index': 9,
	  	'margin': 0,
         'height': '100%',
         'width': '100%',

	  		'overflow-x': 'hidden',
            'overflow-y': 'scroll'
        });
        $('.goBack').attr('name',prevId);
        $(this).attr('name',prevId)


         $('.slideTop').find('.dot.active').removeClass('active').prev().addClass('active');


       if ($('#' + prevId).prev('.card').length > 0) {
	  		$('#prev').show().attr('name', prevId );
	  	} else {
	  		$('#prev').hide();
	  	}	
	  	$('#next').show().attr('name', prevId );


    }); 


	  $('.goBack').click(function(){
	  	var cardID = $(this).attr('name');
	  	var XYPos = $('#' + cardID).attr('name');

	  	var XYPos = XYPos.split('-');
	    var topPos = parseInt(XYPos[0]);
	    var leftPos = parseInt(XYPos[1]);

	    $('#' + cardID ).animate({
         'left':  leftPos,
         'top': topPos,
         'height': '320px',
         'width': '300px'
        }, 400).queue(function() {
	        $('#' + cardID ).removeAttr('style').remove();
	        $('.slideTop').removeClass('active');
	        $('body').css({'overflow-y': 'auto', 'overflow-x': 'hidden'});
	        $('#cardZone').removeClass('active');
	        $('.card').removeClass('active');
	        $('.clone').remove();
			$( this ).dequeue();
      	}); 

	  }); 	

	  function dots(cardID)
	    {
	        
	 
	        var cardSection = $('#' + cardID).parent().attr('id');
	        $('#' + cardSection +  ' .card').each(function(){
	        	var dotId = $(this).attr('id');
	        	var dotTitle = $(this).find('.card-title').text();
    
    			$('.slideTop').append('<div class="dot" name="'+  dotId +'" id="' + dotId + '-dot"  data-container="body" data-trigger="hover" data-toggle="popover" data-placement="top" data-content="' + dotTitle + '"><div class="dotTitle"></div></div>');
    			$('.dot').popover()
			});
			
	       
	    }

	    



});
