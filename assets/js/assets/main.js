//* NAV NORMAL STATIC *//
jQuery(document).ready(function($){
	$('.cd-main-nav').on('click', function(event){
		if($(event.target).is('.cd-main-nav')) $(this).children('ul').toggleClass('is-visible');
	});
});
//* OPEN/CLOSE CAPTION SLIDER BOOTSTRAP *//
$('a[id="infoModal"]').on('click', function(){
  $('a[id="infoModal"]').toggleClass('rotate-text');
  if ($('.carousel-caption').css('opacity')==0) $('.carousel-caption').css({opacity:1});
  else $('.carousel-caption').css({opacity:0});
});
//* LOADER *//
$('body').toggleClass('loaded');
$(document).ready(function() {
    setTimeout(function(){
        $('body').addClass('loaded');
        $('p').addClass('animated fadeIn');
    }, 3500);
});
$(".loader > span").each(function() {
  $(this)
    .data("origWidth", $(this).width())
    .width(0)
    .animate({
      width: $(this).data("origWidth") // or + "%" if fluid
    }, 3500);
});
// LINK TOP EASING *//
$(function(){
      $('.internal').on('click',function(e){
        e.preventDefault();
        var strAncla=$(this).attr('href');
        $('body,html').stop(true,true).animate({
        scrollTop: $(strAncla).offset().top
        },1000);
      });
    });
// CAROUSEL BOOTSTRAP MODS *//
$("#slider").owlCarousel({
      autoPlay: 4500,
      items : 1,
      lazyLoad : true,
      navigation : true,
      responsive: true,
      lazyEffect : "fade",
      dragBeforeAnimFinish : true,
      mouseDrag : true,
      touchDrag : true,
      addClassActive : true,
      stopOnHover : true
    });