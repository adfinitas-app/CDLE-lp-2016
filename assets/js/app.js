$(document).ready(function() {
  $('.bxslider').bxSlider({
    pager: false,
    infiniteLoop: true,
    easing: 'ease-out',
    preloadImages: 'all',
    responsive: 'false',
    controls: true,
    auto:'true',
    speed: '1000',
    nextSelector: '#arrow-next',
    prevSelector: '#arrow-prev',
    nextText: '<img src="https://s3.amazonaws.com/heroku-adfinitas-campaign/CDLE-LP-2016/img-arrow.png">',
    prevText: '<img src="https://s3.amazonaws.com/heroku-adfinitas-campaign/CDLE-LP-2016/img-arrow.png">'});

  $(window).on('resize',function(){
    $('bxslider').reloadSlider();
});
  
  var x = ($(window).innerWidth() - $('#cta-video').innerWidth()) / 2;
  console.log($('#cta-video').innerWidth());
  $('#cta-video').css({"right" : x + 'px'});

  $('#video-header').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() - $('#header').innerHeight() + 'px'});
  $('#container-video-header').css({height: $(window).innerHeight() - $('#header').innerHeight() + 'px'})
});

$(window).resize(function(){
  $('#video-header').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
});

$('#cta-video').click( function() {
  $('html').css({"overflow" : "visible", "height": "auto"});
  $('body').css({"overflow" : "visible", "height": "auto"});
  $('#header').css({"position" : "fixed"});
  scrollToBis($('#page'));
});

$("#c_projet").click(function(){
    scrollTo("#projet");
});

$("#c_chiffres").click(function(){
    scrollTo("#chiffres");
});

$("#c_relations").click(function(){
    scrollTo("#relations");
});

$("#c_video").click(function(){
    scrollTo("#container-video-header");
});

function 	scrollTo(next){

    $('html').css({"overflow" : "visible", "height": "auto"});
    $('body').css({"overflow" : "visible", "height": "auto"});
    $('#header').css({"position" : "fixed"});
    if ($(next).length != 0)
    {
        $('html, body').stop().animate({
          scrollTop: $(next).offset().top + 1
      }, 700, 'swing');
        return false;
    }
};

$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() > $(document).height() - 90) {
    $('#header').slideUp();
}else{
   $('#header').slideDown();
}
});

function    scrollToBis(next){
  var x = 35;

  if ($(next).length != 0)
  {
    $('html, body').stop().animate({
      scrollTop: $(next).offset().top + 1 - x
  }, 700, 'swing');
    return false;
}
};