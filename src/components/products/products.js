$('.products__item-button').on('click', function() {
  var that = $(this);
  var thatIndex = that.parent().index();
  var thatBg = that.data('bg');
  var thatImg = that.data('img');
  
  that.closest('.products__list').find('.products__item-button').removeClass('is-active');
  that.addClass('is-active');
  $('.products__picture img').attr('src', thatImg);
  $('.products__list-item').eq(thatIndex).addClass('is-active').siblings().removeClass('is-active');
  $('.products__bg img').removeClass('active');
  $('.products__bg img').eq(thatIndex).addClass('is-active').siblings().removeClass('is-active');
});

$('.products__list-item-tab-button').on('click', function() {
  var that = $(this);
  var thatIndex = that.parent().index();
  
  that.closest('.products__list-item-tabs').find('.products__list-item-tab-button').removeClass('is-active');
  that.addClass('is-active');
  that.closest('.products__list-item-tabs').siblings('.products__list-item-content').removeClass('is-active').eq(thatIndex).addClass('is-active');
});