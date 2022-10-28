'use strict';

$(document).ready(function(){
  // callback start
  function closePopup(){
		$('.form__container').fadeOut(400);
		$('html, body').removeClass('dont-move');
    $(document).unbind('touchmove');
	};
    // callback form 
  $('.callback').click(function(){
  	let formTitle = $(this).attr("aria-label");
    $('.form__container').fadeIn(400).css("display", "flex");
    $('html, body').addClass('dont-move');
    $(document).bind('touchmove', false);
    $('.callback__title').text(formTitle);
  });

  $('.form__container').click(function(event){
    if(event.target == this){
      closePopup();
    };
  });

	$('.form__container_close').click(function(){
		closePopup();
  });
  
  // validation callback form
	$('input[type="tel"]').inputmask({"mask": "+7 (999) 999-9999"});
  $('#email').inputmask("email");

	
	$('form').each(function () {
		$(this).validate({
			errorPlacement: function(error, element) {
				return true;
			},
			focusInvalid: false,
			rules: {
				Телефон: {
					required: true,
				},
				Имя: {
					required: true,
					minlength: 3,
				},
				email: {
					required: true,
					email: true,
				}
			},
			submitHandler: function(form) {
				let doneMsg = $('<div class="done-msg">Заявка отправлена!</div>');
				let th = $(form);
        $.ajax({
					type: 'POST',
					url: 'php/mail.php',
					data: th.serialize(),
				// eslint-disable-next-line func-names
				}).done( function() {
					th.trigger('reset');
					th.replaceWith(doneMsg);
					setTimeout(function(){closePopup()}, 2500);
				});
				return false;
			},
		});
	});



  // callback end

  // sliders start
  $('.waterproof__slider').slick({
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 10000,
    fade: true,
    responsive: [
      {
        breakpoint: 0,
        settings: {
          autoplay: true
        }
      }
    ]
  });

  $('.examples__slider').slick({
    // variableWidth: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 981,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 741,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // sliders end

  // actual year
	$(function() {
		$(".year-now").text( (new Date).getFullYear() );
  });
  
  // slow scroll to point
	$('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    $('html, body').animate({scrollTop: dn}, 1000);
  });





  // warerproof cards buttons
  $(function() {
    $('.waterproof__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.waterproof__list').removeClass('notdisplay');  
      $('.waterproof__size').addClass('notdisplay').removeClass('flex');
      $('.waterproof__color').addClass('notdisplay').removeClass('flex');
      $('.waterproof__ico-wrap').children().removeClass('waterproof__ico--active');   
    });

    $('.ico-size').on('click', function(){
      if ($('.ico-color').hasClass('waterproof__ico--active')){
        $('.waterproof__list').removeClass('notdisplay');  
        $('.waterproof__color').addClass('notdisplay').removeClass('flex');
        $('.ico-color').removeClass('waterproof__ico--active');    
      }
      
      $(this).parent().parent().children('.waterproof__text').children('.waterproof__list').toggleClass('notdisplay');
      $(this).parent().parent().children('.waterproof__text').children('.waterproof__size').toggleClass('notdisplay').toggleClass('flex');
      $(this).toggleClass('waterproof__ico--active');
    });

    $('.ico-color').on('click', function(){
      if ($('.ico-size').hasClass('waterproof__ico--active')){
        $('.ico-size').removeClass('waterproof__ico--active');
        $('.waterproof__size').addClass('notdisplay').removeClass('flex');
        $('.waterproof__list').removeClass('notdisplay');
      }
      
      $(this).parent().parent().children('.waterproof__text').children('.waterproof__list').toggleClass('notdisplay');
      $(this).parent().parent().children('.waterproof__text').children('.waterproof__color').toggleClass('notdisplay').toggleClass('flex');
      $(this).toggleClass('waterproof__ico--active');

      let modelName;
      let modelColors;
      $('.waterproof__color').children().remove();
      if ($(this).hasClass('karaat')){
        modelName = 'karaat';
        modelColors = ['453-10', '453-20', '453-30', '453-50', '453-60', '453-70', '453-80', '453-90', '453-105', '453-107', '453-130', '4598-103', '4598-130'];
      } else if ($(this).hasClass('microluxx')){
        modelName = 'microluxx';
        modelColors = ['ocean-blue', 'stardust-grey', 'storm-granit-emg'];    
      } else if ($(this).hasClass('colorstar')){
        modelName = 'colorstar';
        modelColors = ['c01-white', 'c02-light-grey', 'c03-mid-grey', 'c04-dark-grey', 'c05-anthracite', 'c06-black', 'c07-cool-anthracite', 'c08-cool-grey', 'c09-orange', 'c10-light-orange', 'c11-gold', 'c12-yellow', 'c13-lemon', 'c14-limegreen', 'c15-dark-green', 'c16-olive', 'c17-grass-green', 'c18-glen-green', 'c19-forest-green', 'c20-turquoise', 'c21-sea-blue', 'c22-cobalt-blue', 'c23-marine-blue', 'c24-lagoon-blue', 'c25-sky-blue', 'c26-light-blue', 'c27-mid-blue', 'c28-royal-blue', 'c29-navy', 'c30-deep-blue', 'c31-purple', 'c32-dark-purple', 'c33-burgundy', 'c34-wine', 'c35-dark-fuchsia', 'c36-fuchsia', 'c37-hot-pink', 'c38-bright-red', 'c39-red', 'c40-ruby', 'c41-brick-red', 'c42-chocolate', 'c43-walnut', 'c44-brown', 'c45-sandalwood', 'c46-taupe', 'c47-light-beige', 'c48-violet', 'c49-peach', 'c50-soft-orange', 'c51-pink', 'c52-raspberry', 'c53-coral', 'c54-salmon', 'c55-light-yellow', 'c56-cactus', 'c57-mint', 'c58-moss', 'c59-azure', 'c60-lavender', 'c61-charcoal', 'c62-dark-ash', 'c63-grey-ash', 'c64-light-ash', 'c65-warm-grey', 'c66-light-green'];    
      } else if ($(this).hasClass('bartex')){
        modelName = 'bartex';
        modelColors = ['6003', '6005', '6010', '6012', '6013', '6014', '6015', '6017', '6021', '6025', '6029', '6035', '6036', '6042', '6048', '6102', '6105', '6115', '6134', '7438', '9166', '9176', '9183', '9270', '9278', '9317', '9383', '9384', '9405', '9445', '9457', '9470', '9474', '9475', '9476', '9489', '9506', '9571', '9601', '9604', '9607', '9610', '9612'];    
      } else if ($(this).hasClass('whaterhog')){
        modelName = 'whaterhog';
        modelColors = ['classic-150-camel', 'classic-154-charcoal', 'classic-156-mediumblue', 'classic-157-mediumgrey', 'diamond-camel', 'diamond-charcoal', 'diamond-medium-blue', 'diamond-medium-grey', 'plus-4600-70', 'impressions-1-3', 'impressions-2-3', 'impressions-3-1', 'impressions-4', 'impressions-5', 'impressions-6', 'impressions-7', 'impressions-8', 'impressions-9', 'impressions-10', 'impressions-11', 'impressions-12-2', 'impressions-13', 'impressions-14-1', 'impressions-15-1-1', 'impressions-16', 'impressions-17', 'impressions-18', 'impressions-19', 'impressions-20', 'impressions-21', 'impressions-22-1', 'impressions-23', 'impressions-24-1', 'impressions-25', 'impressions-26-5', 'impressions-27', 'impressions-28-1', 'impressions-29-1-1', 'impressions-30-1-1', 'impressions-31-1-1', 'impressions-32', 'impressions-33', 'impressions-34', 'impressions-35', 'impressions-36', 'impressions-37-1', 'impressions-38', 'impressions-39', 'impressions-40-1', 'impressions-41', 'impressions-42', 'impressions-43', 'impressions-44', 'impressions-45', 'impressions-46', 'impressions-47', 'impressions-48', 'impressions-49', 'impressions-50', 'impressions-53', 'impressions-54', 'impressions-g3-1', 'impressions-g4-1', 'impressions-g7-1', 'impressions-g8-1'];    
      }

      $.each(modelColors, function(_, value){
        let imgColor = 'style="background-image: url(../img/colors/' + modelName + '/' + value + '.jpg);"';
        let bigColor = '<span class="waterproof__color-big" ' + imgColor + '><p>' + value + '</p></span>';
        let newColor = $('<li ' + imgColor + '>' + bigColor + '</li>');
        newColor.prependTo($('.waterproof__color'));
      });

    });
  

  });

});

