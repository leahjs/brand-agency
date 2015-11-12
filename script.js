$(document).ready(function() {
      // $('.my-slider').unslider();
      // $('.hero-slider').unslider();
      // $('.default-slider').unslider();
  var slider = $('.my-slider').unslider();
  infinite:true;
  slider.on('unslider.ready', function() {
    // alert('Slider is set up!');
  });

  $('.nav-bar').on('mouseenter', 'a', function(){
    $(this).addClass('nav-color');
  })

  $('.nav-bar').on('mouseleave', 'a', function(){
    $(this).removeClass('nav-color');
  })


  $('.hero-slider').on('mouseenter', 'a', function(){
    $(this).addClass('button-topa');
  })

  $('.hero-slider').on('mouseleave', 'a', function(){
    $(this).removeClass('button-topa');
  })

  $('.imgs').on('mouseenter', 'img', function(){
    $(this).css('width', '350px');
    $(this).css('height', '350px');
  })

  $('.imgs').on('mouseleave', 'img', function(){
    $(this).css('width', '330px');
    $(this).css('height', '330px');
  })



  $('.our-clients').on('mouseenter', 'img', function(){
    $(this).css('-webkit-filter', 'grayscale(0)');
  })

  $('.our-clients').on('mouseleave', 'img', function(){
    $(this).css('-webkit-filter','grayscale(1)');
  })

  $('.our-clients').on('mouseenter', 'a', function(){
    $(this).addClass('bigger-button');
  })

  $('.our-clients').on('mouseleave', 'a', function(){
    $(this).removeClass('bigger-button');
  })


  $('footer nav').on('mouseenter', 'a', function(){
    $(this).css('color', '#cccc00');
  })

  $('footer nav').on('mouseleave', 'a', function(){
    $(this).css('color', '#ffffff');
  })

});

