$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.clue').css({
    'transform' : 'translate(0px, '+ wScroll /2 +'%)'
  });

  $('.purple').css({
    'transform' : 'translate(0px, '+ wScroll /4 +'%)'
  });

  $('.yellow').css({
    'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
  });
  
  $('.orange').css({
    'transform' : 'translate(0px, -'+ wScroll /12 +'%)'
  });

});
