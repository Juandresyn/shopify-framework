(function (InlineCart, $, undefined) {

  var $inlineCart = $('[data-inline-cart]');
  var $lineItemEntryPoint = $('[data-cart-contents]');

  InlineCart.update = function (callback) {
    $.get('/cart?view="contents"', function (response) {
      $inlineCart.html(response);
      if (typeof callback === 'function') {
        callback();
      }
    });
  };

  InlineCart.show = function () {
    $inlineCart.addClass('is-active');
  };

  InlineCart.hide = function () {
    $inlineCart.removeClass('is-active');
  };

  InlineCart.init = function () {
    InlineCart.update();
  };

}(window.InlineCart = window.InlineCart || {}, jQuery));
