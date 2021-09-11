document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
      },
      initialDate: new Date(),
      navLinks: true, // can click day/week names to navigate views
      businessHours: true, // display business hours
      editable: true,
      selectable: true,
      locale: 'sv',
      buttonText:
      {
          today:'',
          month:'',
          week:'',
          day:'',
          list:''
      },
      events: [
        {
          title: 'Meeting',
          start: '2021-09-03T13:00:00',
          end: '2021-09-05',
          color:'red'
        },
        {
            title: 'Meeting 2',
            start: '2021-10-03T13:00:00',
            end: '2021-10-10',
            color:'blue'
          },
        //   {
        //     title: 'Meeting',
        //     start: '2020-09-03T13:00:00',
        //     end: '2021-09-05',
        //     color:'red'
        //   },
          
     
      ]
    });

    calendar.render();
  });
