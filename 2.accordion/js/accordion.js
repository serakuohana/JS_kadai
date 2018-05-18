
$(function(){
  $('.toggle dt').click(function(){
    if($(this).next().not(':animated').length >= 1){
      $(this).next().slideToggle();
    }
  });
});
