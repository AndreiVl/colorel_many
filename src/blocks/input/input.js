$('.input__input').on('input', function(){
  let $this = $(this);
  if ($this.val() == '') {
      $this.removeClass('cool-input__input_filled');
  } else {
      $this.addClass('cool-input__input_filled');
  }
});
$('.input--phone .input__input').mask('+7 (000) 000-0000');
