const select = {
  dateWidget: {
    startDateInput: 'input[name="start-date"]',
    endDateInput: 'input[name="end-date"]',
  },
  menu: {
    menuWidget: '.intro i',
    mobileMenu: '.mobile-wrapper',
  },
  chat: {
    chatLink: '#chat-link',
    chatWindow: '#chat',
    close: '.icon-close',
  },
  topMenu: {
    exitIcon: '.quit',
    cancelButton: '.logout-box .cancel',
    quitButton: '.logout-box .quit',
  }
}

init();

function init() {
  initDatePicker();
  menuClickHandler();
  addClickListenersToLinks();
  exitChat();
  cancelQuit();
  closeModal();
  createChart();
}

function initDatePicker() {
  const startDateInput = document.querySelectorAll(select.dateWidget.startDateInput);
  const endDateInput = document.querySelectorAll(select.dateWidget.endDateInput);

  let today = new Date;
  console.log('today', today);

  flatpickr (startDateInput, {
    dateFormat: "d-m-Y",
    defaultDate: today,
    maxDate: today,
  });

  flatpickr(endDateInput, {
    dateFormat: "d-m-Y",
    defaultDate: today,
    maxDate: today,
    locale: {
      firstDayOfWeek: 1
    },
  });
}

function menuClickHandler() {
  const menuWidget = document.querySelector(select.menu.menuWidget);
  const mobileMenu = document.querySelector(select.menu.mobileMenu)

  menuWidget.addEventListener('click', function() {
    event.preventDefault();
    console.log('menu clicked');

    mobileMenu.classList.toggle('active');
  });
}

function addClickListenersToLinks() {
  const links = document.querySelectorAll('a');

  for (let link of links) {
    link.addEventListener('click', linkClickHandler);
  }
}

function makeSectionUnactive() {
  const activeSections = document.querySelectorAll('section.active');
  for (let activeSection of activeSections) {
    activeSection.classList.remove('active');
  }
}

function linkClickHandler() {
  event.preventDefault();

  const sections = document.querySelectorAll('section');
  const hrefAttribute = this.getAttribute('href');
  const id = hrefAttribute.replace('#', '');

  makeSectionUnactive();

  for (let section of sections) {
    const sectionId = section.getAttribute('id');

    if (id === sectionId) {
      section.classList.add('active');
    }
  }
}

function exitChat() {
  const closeIcon = document.querySelector(select.chat.close);

  closeIcon.addEventListener('click', function() {
    event.preventDefault();
    makeSectionUnactive();
  });
}

function cancelQuit() {
  const cancelButton = document.querySelector(select.topMenu.cancelButton);
  const logout = document.querySelector('#logout');

  cancelButton.addEventListener('click', function() {
    event.preventDefault();
    logout.classList.remove('active');
  });
}

function closeModal () {
  const overlays = document.querySelectorAll('.popup-wrapper');
  const loginOverlay = document.querySelector('#login .popup-wrapper');

  for (let overlay of overlays) {
    overlay.addEventListener('click', function(e) {
      if (e.target === loginOverlay) {
        console.log('fill in the form');
      } else if (e.target === this) {
        makeSectionUnactive();
      }
    });
  }

  document.addEventListener('keyup', function(e) {
    if (e.keyCode === 27) {
      makeSectionUnactive();
    }
  });
}

function createChart() {
  var ctx = document.getElementById('myChart').getContext('2d');

  var chart = new Chart(ctx, {
    // 1
    type: 'bar',
    data: {
        // 2
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        // 3
        datasets: [{
            // 4
            label: "Signups",
            // 5
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            // 6
            data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        {
            label: "Earned",
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
            // 7
            hidden: true,
        }]
    },
  });
}
