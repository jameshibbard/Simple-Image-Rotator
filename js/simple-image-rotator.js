/*global $:false */
'use strict';

var SimpleImageRotator = (function () {
  var slides = $('ul.rotator li'),
      currSlide = slides.first(),
      cbBrake, i;

  function getNextSlide(){
    var nextSlide = currSlide.next();
    if(nextSlide.length === 0){
      nextSlide = slides.first();
    }
    return nextSlide;
  }

  function cycle(){
    var nextSlide = getNextSlide();
    currSlide.fadeOut(1500, 'swing');
    nextSlide.fadeIn(1500, 'swing');
    currSlide = nextSlide;
  }

  function bindUIActions(){
    slides.on('click', function(){
      clearInterval(i);
    });

    $(document).on('cbox_closed', function(){
      clearTimeout(cbBrake);
      cbBrake = setTimeout(function(){
        i = setInterval(cycle, 5000);
      }, 300);
    });
  }

  function init(){
    bindUIActions();
    slides.hide();
    currSlide.show();
    i = setInterval(cycle, 5000);
  }

  return {init: init};
})();
