$(document).ready(function() {
  $('input[name="balance-month"]').on('change', function() {
    if ($('#balanceMonthAll').is(':checked')) {
      $('p.date input[type="date"]').prop('disabled', true);
    } else if ($('#balanceMonthSelect').is(':checked')) {
      $('p.date input[type="date"]').prop('disabled', false);
    }
  });
});
