$('.s-menu').find('> li').click(function() {
$('.s-menu > li').not(this).find('ul').slideUp();
$(this).find('ul').slideToggle(200);
});
