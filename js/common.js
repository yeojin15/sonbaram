$(document).ready(function() {
  $('input:not([type="radio"]):not([type="checkbox"])').each(function() {
    if($(this).attr('value')!=undefined) $(this).prop('disabled', true)
  });
});
