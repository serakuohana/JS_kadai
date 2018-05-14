$(function() {
  $('.toggle').click(function() {
    $(this).toggleClass("active");
        if($(this).hasClass('active')) {
            $('.global_nav').addClass('active');
        } else {
            $('.global_nav').removeClass('active');
        }
  });
});
