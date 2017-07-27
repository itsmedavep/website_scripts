$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.Blue').css({
    'transform' : 'translate(0px, '+ wScroll /2 +'%)'
  });

  $('.Purple').css({
    'transform' : 'translate(0px, '+ wScroll /4 +'%)'
  });

  $('.Yellow').css({
    'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
  });
  
  $('.Orange').css({
    'transform' : 'translate(0px, -'+ wScroll /12 +'%)'
  });

});
