$(document).ready(function() {
  var i = 1;

  $(".bg-holder").parallaxScroll({
    friction: 0.5,
    direction: "vertical"
  });

  $('a.scrollTo').click(function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 800);
  });

  $('#slider').bjqs({
    animtype      : 'slide',
    height        : 516,
    width         : 780,
    responsive    : true,
    randomstart   : true,
    showcontrols  : false
  });

  $('#slider .bjqs-markers li a').html('');

  $('#slider .bjqs-markers li a').each(function() {
    $(this).addClass('c'+(i++));
    if(i == 5) i = 1
  });
  
  $("#slider .bjqs-markers").detach().insertBefore(".bjqs-wrapper");

  $(".gallery").click(function(e) {
    e.preventDefault();
    $.fancybox.open([
      {
        href : 'img/1_b.jpg',
        title : 'Título'
      }, {
        href : 'img/2_b.jpg',
        title : 'Título 2'
      }, {
        href : 'img/3_b.jpg'
      }
    ]);
  });
});