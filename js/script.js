const select = {
  dateWidget: {
    startDateInput: 'input[name="start-date"]',
    endDateInput: 'input[name="end-date"]',
  }
}

initPlugin();

function initPlugin() {
  console.log('plugin function on');

  const startDateInput = document.querySelectorAll(select.dateWidget.startDateInput);
  console.log('startDateInput', startDateInput);

  const endDateInput = document.querySelectorAll(select.dateWidget.endDateInput);

  let today = new Date().toJSON().slice(0, 10);
  console.log('today', today);

  flatpickr (startDateInput, {
    dateFormat: "d-m-Y",
    defaultDate: today,
    maxDate: today,
  })

  flatpickr(endDateInput, {
    dateFormat: "d-m-Y",
    defaultDate: today,
    maxDate: today,
    locale: {
      firstDayOfWeek: 1
    },
  })
}
