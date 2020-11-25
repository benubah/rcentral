document.addEventListener('DOMContentLoaded', function() {
  var initialTimeZone = 'local';
  var timeZoneSelectorEl = document.getElementById('time-zone-selector');
  var loadingEl = document.getElementById('loading');
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridWeek,listWeek,dayGridMonth,timeGridDay'
    },
initialDate: '2021-07-04',
    timeZone: initialTimeZone,
    initialView: 'timeGridWeek',
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    selectable: true,
    dayMaxEvents: true, // allow "more" link when too many events


 eventDidMount: function(info) {
      var tooltip = new Tooltip(info.el, {
        title: info.event.extendedProps.description,
        placement: 'top',
        trigger: 'hover',
        container: 'body'
      });
    },


       events: 'user2021.json',
    loading: function(bool) {
      if (bool) {
        loadingEl.style.display = 'inline'; // show
      } else {
        loadingEl.style.display = 'none'; // hide
      }
    },

    eventTimeFormat: { hour: 'numeric', minute: '2-digit', timeZoneName: 'short' }
  });

  calendar.render();

  // load the list of available timezones, build the <select> options
  // it's highly encouraged to use your own AJAX lib instead of using FullCalendar's internal util
  FullCalendar.requestJson('GET', 'timezones.json', {}, function(timeZones) {
    timeZones.forEach(function(timeZone) {
      var optionEl;

      if (timeZone !== 'UTC') { // UTC is already in the list
        optionEl = document.createElement('option');
        optionEl.value = timeZone;
        optionEl.innerText = timeZone;
        timeZoneSelectorEl.appendChild(optionEl);
      }
    });
  }, function() {
    // failure
  });

  // when the timezone selector changes, dynamically change the calendar option
  timeZoneSelectorEl.addEventListener('change', function() {
    calendar.setOption('timeZone', this.value);
  });

});