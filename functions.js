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
  var pagecolor1 = "#f7e610";
  // Orange BG
  var pagecolor2 = "#f15a29";
  // Blue BG
  var pagecolor3 = "#38a4dd";
  // BG
  var pagecolor4 = "65499d";
  
  
  
  if (window.location.pathname == "/case-study-sony-catalyst-editing-suite") {
    
    // Orange BG
    //var pagecolor2 = "#f15a29";
    
    $target10.css('background-color', ("pagecolor2"));
    console.log('You are getting to the page2 color');
    
  } else if (window.location.pathname == "/case-study-vegas-pro-companion") {
  
    // Yellow BG
    //var pagecolor1 = "#f7e610";
    
    $target10.css('background-color', pagecolor1);
    console.log('You are getting to the page1 color');
  
  } else if (window.location.pathname == "/case-study-artifacts-deliverables") {
    
    //var pagecolor4 = "#65499d";
    $target10.css('background-color', pagecolor4);
    console.log('You are getting to the page4 color');
    
  } else if (window.location.pathname == "/case-study-vegas-pro-companion") {
  
    // Yellow BG
    // var pagecolor1 = "#f7e610";
    
    $target10.css('background-color', pagecolor1);
    console.log('You are getting to the page1 color');
    
    
    
  } else {
  
     // Blue BG
    var pagecolor3 = "#38a4dd";
    
    $target10.css('background-color', pagecolor3);
    console.log('You are getting to the page3 color');
  }
  
  inView('#testingbg_1').on('enter', function(el){
  		var color = $(el).attr('data-background-color');
  		$target1.css('background-color', color);
 }); 
  
  inView('#testingbg_1').on('exit', function(el){
  		$target1.css('background-color', ('transparent'));
 });
    
    inView('#testingbg_3').on('enter', function(el){
  		var color = $(el).attr('data-background-color');
  		$target3.css('background-color', color);
 }); 
  
  inView('#testingbg_3').on('exit', function(el){
  		$target3.css('background-color', ('transparent'));
 });
    
    inView('#testingbg_5').on('enter', function(el){
  		var color = $(el).attr('data-background-color');
  		$target5.css('background-color', color);
 }); 
  
  inView('#testingbg_5').on('exit', function(el){
  		$target5.css('background-color', ('transparent'));
 });
    
    inView('#testingbg_7').on('enter', function(el){
  		var color = $(el).attr('data-background-color');
  		$target7.css('background-color', color);
 }); 
  
  inView('#testingbg_7').on('exit', function(el){
  		$target7.css('background-color', ('transparent'));
 });
    
    inView('#testingbg_9').on('enter', function(el){
  		var color = $(el).attr('data-background-color');
  		$target9.css('background-color', color);
 }); 
  
  inView('#testingbg_9').on('exit', function(el){
  		$target9.css('background-color', ('transparent'));
 });
  
});


