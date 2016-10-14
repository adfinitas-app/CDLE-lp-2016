$(document).ready(function() {
  var ImagePauses = [5000,10000,15000,20000];
  $('.bxslider').bxSlider({
    pager: false,
    infiniteLoop: true,
    easing: 'ease-out',
    preloadImages: 'all',
    responsive: 'false',
    controls: true,
    auto:'true',
    pause: ImagePauses[1],
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
  SendDataToWoopra();
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

function extractUrlParams(){    
  var t = document.location.search.substring(1).split('&'); var f = [];
  for (var i=0; i<t.length; i++){
    var x = t[ i ].split('=');
    f[x[0]]=decodeURIComponent(x[1]);
}
return f;
};

function SendDataToWoopra() {
  var p = extractUrlParams();

  woopra.identify({
    email: p['email'],
    name: p['firstname'] + " " + p['lastname'],
    firstname: p['firstname'],
    lastname: p['lastname'],
});

  woopra.track("interaction", {
    action: "clic",
    category: "btn-video-more_campaign-PA",
    value: "",
    url: document.location.href,
    title: document.title,
});

}

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