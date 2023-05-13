$(document).ready(function() {
  // pc header
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

  // mo header
  $('#HEADER_MO .toggle').click(function(){
    $('#HEADER_MO').toggleClass('toggleOn');
  });
  $('.aside-back, .snb-info li, .snb-menu li').click(function(){
    $('#HEADER_MO').removeClass('toggleOn');
  })

  // mo 제목 탭
  $('.tab-list li').each(function(){
    $(this).click(function(){
      let idx = $(this).index();
      $('.tab-list li').removeClass('active');
      $(this).addClass('active');
      $('.app-tab').removeClass('active');
      $('.app-tab').eq(idx).addClass('active')
    });
  })

  $('input:not([type="radio"]):not([type="checkbox"])').each(function() {
    if($(this).attr('value')!=undefined) $(this).prop('disabled', true)
  });
});
