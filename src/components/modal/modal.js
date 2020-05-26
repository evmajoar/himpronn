$('input[type="tel"]').inputmask(
  {
    "mask": "+7 (999) 999-99-99",
    showMaskOnHover: false
  }
);

var modals = $('.modals')

$('.js-modal').on('click', function (e) {
  var name = $(this).data('target').toString().trim();

  $('body')
    .css('overflow', 'hidden')
    .find('.modals')
    .addClass('modals--open')
    .find('.modal--' + name)
    .addClass('modal--open')
    .siblings()
    .removeClass('modal--open');

  if($(this).hasClass('products__list-item-button')) {
    var title = $(this).siblings('.products__list-item-title').text();
    
    $('body').find('.modal--' + name + ' input[type="hidden"]').val(title);
  }  

});

$('.modal__close').on('click', function () {
  $('body').css('overflow', 'visible');

  $(this)
    .closest('.modal')
    .removeClass('modal--open')
    .parent()
    .removeClass('modals--open');
});

$('.modals .overlay').on('click', function () {
  $('.modal__close').trigger( "click" );
});

$(document).keyup(function(e) {
  if (e.keyCode === 27) {
    $('.modal__close').trigger( "click" );
  }
});