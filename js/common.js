$(document).ready(function() {
  // aside 토글 액션
  $('#HEADER_PC .toggle').click(function(){
    $('#HEADER_PC').toggleClass('toggleOn');
    $('#PAGE').toggleClass('toggleOn');
    $('#SNB_PC').toggleClass('toggleOn');
  });
  $('.snb li').click(function(){
    $('#HEADER_PC').removeClass('toggleOn');
    $('#PAGE').removeClass('toggleOn');
    $('#SNB_PC').removeClass('toggleOn');
  })


  $('input:not([type="radio"]):not([type="checkbox"])').each(function() {
    if($(this).attr('value')!=undefined) $(this).prop('disabled', true)
  });
});
