$('.nav__menu').on('click', function() {
  var that = $(this);
  var dataTargetClass = that.data('target-class');
  var dataTargetClassToggle = that.data('target-class-toggle');

  $('.' + dataTargetClass).toggleClass(dataTargetClassToggle);
});


var $anchor = $('.js-anchor');

if ($anchor !== 'undefined') {
  $anchor.on('click', function (event) {
    event.preventDefault();
    var $that = $(this), hb = $('body, html');

    if ($that.is('button')) {
      hb.stop().animate({
        scrollTop: $('.' + $that.data('id')).offset().top
      }, 1000, 'swing');
    } else if ($that.is('a')) {
      hb.stop().animate({
        scrollTop: $('.' + $that.attr('href').replace('#', '')).offset().top
      }, 1000, 'swing');
    }
  });
}
