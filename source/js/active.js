'use strict';
(function () {
  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop: true,
      nav:false,
      responsive: {
       0:{
            items:1,
        },
        768:{
            items:2,
        },
        1200:{
            items:3,
            nav:true,
            navText: ["<img src='../img/icon-back.svg'>", "<img src='../img/icon-next.svg'>"]
        }
      }
    });
  });
  $.jqCart({
      buttons: '.add_item',
      handler: './php/handler.php',
      cartLabel: '.label-place',
      visibleLabel: true,
      openByAdding: false,
  });
  $('#open').click(function(){
    $.jqCart('openCart');
  });
  $('#clear').click(function(){
    $.jqCart('clearCart');
  });
})();
