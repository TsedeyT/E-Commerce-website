var classes = 'change-image_red change-image_white change-image_black';
     function replaceClass(className) {
        $('.shop_left').removeClass(classes);
        return $('.shop_left').addClass(className);
}


$(document).ready(function(){

	$('.menu-btn').click(function(){
		$('.menu-btn').toggleClass('close');
		$('.menu-nav').toggleClass('show');
		$('.menu').toggleClass('show');
		
	})
				
$('.nav-link').click(function(){
	$(this).parent().find('.sub-menu').toggleClass('show');
})


 let selected_color = '';
 let Red,Black,White,selected_size;
$('.selectable').click(function(){
	
selected_color= $(this).attr('class')
    if(selected_color == 'selectable dress-red'){
   		selected_color='Red';
	} else if (selected_color == 'selectable dress-black'){
     	selected_color='Black';
	}else {
		selected_color='White';
	}
})




let initValue= 0;
$('.plus').click(function(){
	$('#qty').val(++initValue);
		$(this).each(function () {
			var name = $(this).closest('.shop_right').find('h1.product-name').text();
			var x = $(this).closest('.shop-content').find('.product-price').text();

			var remove = "<button id='remove' class='remove'> X </button>";
			var itemPrice = "<span class='eachPrice'>" + (parseFloat($(this).closest('.shop-content').find('.product-price').text())) + "</span>";
			$("#list-item").append("<li class='test'>" +selected_color + ' , ' +name+ "-----" + "$" + itemPrice + remove + "</li>");

			//number of items in basket
			$("#items-basket").text("(" + ($("#list-item").children().length) + ")");
			$("#items-basket").text();
    
       
        	var totalPrice = 0;
	        $(".eachPrice").each(function (){ 
	          var itemPriceEach = parseFloat($(this).text());
	          totalPrice+=itemPriceEach;
	        });
	        $("#total-price").text("$" + totalPrice );
		});
	
})


$('#list-item').click(function(){
	if(initValue>=1){
		$(this).each(function () {
			var x= 	$(this).find('.test').remove();
				console.log(x)
			$('#qty').val(--initValue);  
				 var totalPrice = 0;
		        $(".eachPrice").each(function (){ 
		          var itemPriceEach = parseFloat($(this).text());
		          totalPrice+=itemPriceEach;
		        });
		       $("#total-price").text(totalPrice + "$");
			 $("#items-basket").text("(" + ($("#list-item").children().length) + ")");
		});
	}
});

$('.minus').click(function(){
	if(initValue>=1){
		$('#qty').val(--initValue);   
	}
	
})

$("#cart-items").slideUp();
$('.mini-cart__item').click(function(){
	$("#cart-items").slideToggle();
})

  

$('.footer_column__header').click(function(){
	$(this).parent().find('.footer_toggle__icon').toggleClass('show');
	$(this).parent().find('.footer_content_list').toggleClass('show_list');
})


$('.nav-item').click(function(){	
	$(this).addClass('current').siblings().removeClass('current');
})


$(window).scroll(function(){
 if ($(this).scrollTop() > 0) {

			$('.menu-branding').addClass('logo--smaller');
			$('header').addClass('fixed');
			$('.menu-nav').addClass('less-margin');
			
			$('body').addClass('scrolled');

		}else{
			$('.header__container').removeClass('fixed');
			$('.menu-branding').addClass('logo--smaller');
			$('header').removeClass('fixed');
			$('.menu-nav').removeClass('less-margin');

			$('body').removeClass('scrolled');
		}
		
});
$(window).scroll();
 

 	var $navbar =$('header');

 	 $('a[href^="#"]').on('click',function(e){
 		 e.preventDefault();
			var currentScroll = $(window).scrollTop();
			console.log(currentScroll);
			var scrollTop =
				$($(this).attr('href')).position().top;
        		$navbar.outerHeight();
        		console.log($navbar.outerHeight());
		    var ratio = Math.abs(currentScroll - scrollTop);
		    $('html, body').animate({ scrollTop: scrollTop }, ratio/10);
		 	});

});



