$(document).ready(function(){
  const Calendar = window.tui.Calendar;
  const container = document.getElementById('fullCalendar');
  const options = {
    defaultView: 'month',
    useCreationPopup: false,
    useDetailPopup: false,
    month: {
      dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    },
    timezone: {
      zones: [
        {
          timezoneName: 'Asia/Seoul',
          displayLabel: 'Seoul',
        },
      ],
    },
    theme: 'DEFAULT_THEME',
  };
  const calendar = new Calendar(container, options)

  function updateYearMonth() {
    const currentDate = calendar.getDate();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    $('#currentYearMonth').text(`${year}/${month}`);
  }
  updateYearMonth();

  $('#prevMonthBtn').on('click', function() {
    calendar.prev();
    updateYearMonth();
  });

  $('#nextMonthBtn').on('click', function() {
    calendar.next();
    updateYearMonth();
  });

  $('#todayBtn').on('click', function() {
    calendar.today();
    updateYearMonth();
  });
});
