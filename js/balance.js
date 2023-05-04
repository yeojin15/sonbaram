$(document).ready(function() {
  $('input[name="balance-month"]').on('change', function() {
    if ($('#balanceMonthSelect').is(':checked')) {
      $('p.date input[type="date"]').prop('disabled', false);
    } else if ($('#balanceMonthAll').is(':checked')) {
      $('p.date input[type="date"]').prop('disabled', true);
    }
  });
});
