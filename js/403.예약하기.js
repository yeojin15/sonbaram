$(document).ready(function(){
  // 옵션 체크되었을 때 select 활성화
  $('.book-list__option input[type="checkbox"]').change(function() {
    if ($(this).is(':checked')) {
      $(this).parent().siblings('.option-sel').children('select').prop('disabled', false);
    } else {
      $(this).parent().siblings('.option-sel').children('select').prop('disabled', true);
    }
  });

  // 동의 체크박스
  $('#agreeAll').change(function() {
    $('#agree_1, #agree_2, #agree_3').prop('checked', this.checked);
  });
  $('#agree_1, #agree_2, #agree_3').change(function() {
    if ($('#agree_1').is(':checked') && $('#agree_2').is(':checked') && $('#agree_3').is(':checked')) {
      $('#agreeAll').prop('checked', true);
    } else {
      $('#agreeAll').prop('checked', false);
    }
  });

  // 약관동의 상세확인
  $('.popBtn_agree').click(function() {
    let targetId = $(this).data('target');
    $('#' + targetId).addClass('popOpen');
  });
})
