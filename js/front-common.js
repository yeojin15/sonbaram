$(document).ready(function(){
  // modal close
  $('.modalClose').click(function(){
    $('.modal').removeClass('modalOn');
  });

  // popup close
  $('.popClose').click(function(){
    $('.popup').removeClass('popOpen');
  });
});