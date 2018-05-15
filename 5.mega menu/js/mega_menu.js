$(function(){
  $('.pc-nav > ul > li').hover(function(){
    Panel = $(this).children('.Wrap');
    Panel.each(function(){
    Panel.css({display:'block',opacity:'0'}).stop().animate({opacity:'1'},200);
    });
  },function(){
    Panel.css({display:'none'});
  });
});
