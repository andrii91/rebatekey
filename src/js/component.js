$(document).ready(function() { 
  $('.toggle-form').click(function(e){
    e.preventDefault();
//    $(this).parents('form').addClass('show-form');
    $(this).parents('form').find('.form-more').slideDown(200);
    $(this).parents('form').find('.btn-coupon').text('Save');
    $(this).hide();
    
  })
});