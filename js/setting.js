$(document).ready(function() {
  $('input[name="set-month"]').on('change', function() {
    if ($('#setMonthAll').is(':checked')) {
      $('p.date input[type="date"]').prop('disabled', true);
    } else if ($('#setMonthSelect').is(':checked')) {
      $('p.date input[type="date"]').prop('disabled', false);
    }
  });
});
