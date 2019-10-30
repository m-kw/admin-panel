const select = {
  dateWidget: {
    startDateInput: 'input[name="start-date"]',
    endDateInput: 'input[name="end-date"]',
  },
  menu: {
    menuWidget: '.intro i',
    mobileMenu: '.mobile-wrapper',
  },
}

initPlugin();
menuClickHandler();

function initPlugin() {
  const startDateInput = document.querySelectorAll(select.dateWidget.startDateInput);
  const endDateInput = document.querySelectorAll(select.dateWidget.endDateInput);

  let today = new Date().toJSON().slice(0, 10);

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

function menuClickHandler() {
  const menuWidget = document.querySelector(select.menu.menuWidget);
  const mobileMenu = document.querySelector(select.menu.mobileMenu)

  menuWidget.addEventListener('click', function() {
    console.log('menu clicked');

    mobileMenu.classList.toggle('active');
  });
}
