$(document).ready(function() {
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

  $('.imgs-same').on('mouseenter', function(){
    $(this).animate({ opacity: "0.4" }, 200);
    // $(this).animate({ fontSize: "24px" }, 1000 );
  })

  $('.imgs-same').on('mouseleave', function(){
    $(this).animate({ opacity: "1"  }, 200 );
    // $(this).animate({ fontSize: "14px" }, 1000 );
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