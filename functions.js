/*

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

*/

$(document).ready(function(){
    //Code here
  
  var $target1 = $('#testingbg_1');
  var $target2 = $('#testingbg_2');
  var $target3 = $('#testingbg_3');
  var $target4 = $('#testingbg_4');
  var $target5 = $('#testingbg_5');
  var $target6 = $('#testingbg_6');
  var $target7 = $('#testingbg_7');
  var $target8 = $('#testingbg_8');
  var $target9 = $('#testingbg_9');
  var $target10 = $('.wrapper');
  
  // Yellow BG
  var pagecolor1 = {'color' : '#f7e610', 'background-color': '#f7e610'};
  // Orange BG
  var pagecolor2 = {'color' : '#f15a29', 'background-color': '#f15a29'};
  // Blue BG
  var pagecolor2 = {'color' : '#38a4dd', 'background-color': '#38a4dd'};
  
  
  if (window.location.pathname == "/case-study-sony-catalyst-editing-suite") {
    
    // Orange BG
    var pagecolor2 = "#f15a29";
    
    $target10.css('background-color', pagecolor2);
    
    inView('#testingbg_1').on('enter', function(el){
  		var color = $(el).attr('data-background-color');
  		$target10.css('background-color', color);
 }); 
  
  inView('#testingbg_1').on('exit', function(el){
  		$target10.css('background-color', ('transparent'));
 });
    
    console.log('You are getting to the page2 color');
    
  } else if (window.location.pathname == "/case-study-vegas-pro-companion") {
  
    // Yellow BG
    var pagecolor1 = "#f7e610";
    
    $target10.css('background-color', pagecolor1);
    
    console.log('You are getting to the page1 color');
  
  } 
  
  
  //inView.offset(100);
 
  /*
  
  inView('#testingbg_1').on('enter', function(el){
  		var color = $(el).attr('data-background-color');
  		$target10.css('background-color', color);
 }); 
  
  inView('#testingbg_1').on('exit', function(el){
  		$target10.css('background-color', ('transparent'));
 }); 
  
  inView('#testingbg_2').on('enter', function(el){
  		var color = $(el).attr('data-background-color');
  		$target10.css('background-color', color);
 }); 
  
  inView('#testingbg_2').on('exit', function(el){
  		$target10.css('background-color', ('#ffffff'));
 });
  
  inView('#testingbg_3').on('enter', function(el){
  		var color = $(el).attr('data-background-color');
  		$target10.css('background-color', color);
 }); 
  
  inView('#testingbg_3').on('exit', function(el){
  		$target10.css('background-color', ('#f7e610'));
 }); 
  
  inView('#testingbg_4').on('enter', function(el){
  		var color = $(el).attr('data-background-color');
  		$target10.css('background-color', color);
    	$target10.css('background-color', color);
 }); 
  
  inView('#testingbg_4').on('exit', function(el){
  		$target4.css('background-color', ('#f7e610'));
 });
  
  inView('#testingbg_5').on('enter', function(el){
  		var color = $(el).attr('data-background-color');
  		$target5.css('background-color', color);
    	$target4.css('background-color', color);
 }); 
  
  inView('#testingbg_5').on('exit', function(el){
  		$target5.css('background-color', ('#f7e610'));
    	
 }); 
  
  inView('#testingbg_6').on('enter', function(el){
  		var color = $(el).attr('data-background-color');
  		$target6.css('background-color', color);
 }); 
  
  inView('#testingbg_6').on('exit', function(el){
  		$target6.css('background-color', ('#ffffff'));
 });
  
  inView('#testingbg_7').on('enter', function(el){
  		var color = $(el).attr('data-background-color');
  		$target7.css('background-color', color);
 }); 
  
  inView('#testingbg_7').on('exit', function(el){
  		$target7.css('background-color', ('#f7e610'));
 });
  
  inView('#testingbg_8').on('enter', function(el){
  		var color = $(el).attr('data-background-color');
  		$target8.css('background-color', color);
 }); 
  
  inView('#testingbg_8').on('exit', function(el){
  		$target8.css('background-color', ('#f7e610'));
 });
  
  inView('#testingbg_9').on('enter', function(el){
  		var color = $(el).attr('data-background-color');
  		$target9.css('background-color', color);
 }); 
  
  inView('#testingbg_9').on('exit', function(el){
  		$target9.css('background-color', ('#ffffff'));
 });
  
  */
      
});


