$('.textarea__textarea').blur(function(){
  if($(this).val() != '') {
    $('.textarea__placeholder').hide();
  } else {
    $('.textarea__placeholder').show();
  }
});