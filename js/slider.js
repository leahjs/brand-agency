$(document).ready(function() {
      // $('.my-slider').unslider();
      // $('.hero-slider').unslider();
      // $('.default-slider').unslider();
  var slider = $('.my-slider').unslider();
  infinite:true;
  slider.on('unslider.ready', function() {
    // alert('Slider is set up!');
  });
});