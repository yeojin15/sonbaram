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

  // modal close
  $('.modalClose').click(function(){
    $('.modal').removeClass('modalOn');
  });

  // popup close
  $('.popClose').click(function(){
    $('.popup').removeClass('popOpen');
  })

  // 팝업창 내 탭 선택
  $('.pop-tablist li').each(function(){
    $(this).click(function(){
      let idx = $(this).index();
      $('.pop-tablist li').removeClass('active');
      $(this).addClass('active');
      $('.pop-tab').removeClass('active');
      $('.pop-tab').eq(idx).addClass('active')
    });
  })
  
  // 이미지업로드
  $('.input-images').each(function(){
    $(this).imageUploader();
  })

  // input disabled 처리
  $('input:not([type="radio"]):not([type="checkbox"])').each(function() {
    if($(this).attr('value')!=undefined) $(this).prop('disabled', true)
  });

  // 등록일 설정 체크 시 input date abled
  $('input[name="set-month"]').on('change', function() {
    if ($('#setMonthAll').is(':checked')) {
      $('p.date input[type="date"]').prop('disabled', true);
    } else if ($('#setMonthSelect').is(':checked')) {
      $('p.date input[type="date"]').prop('disabled', false);
    }
  });
});
