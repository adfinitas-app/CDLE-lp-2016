$(document).ready(function(){

  $('.bxslider').bxSlider({
    pager: false,
    infiniteLoop: true,
    easing: 'ease-out',
    preloadImages: 'all',
    responsive: 'false',
    controls: true,
    auto:'true',
    nextSelector: '#arrow-next',
    prevSelector: '#arrow-prev',
    nextText: '<img src="https://s3.amazonaws.com/heroku-adfinitas-campaign/CDLE-LP-2016/img-arrow.png">',
    prevText: '<img src="https://s3.amazonaws.com/heroku-adfinitas-campaign/CDLE-LP-2016/img-arrow.png">'});

  $window.on('resize',function(){
      $('bxslider').reloadSlider();
  });

});