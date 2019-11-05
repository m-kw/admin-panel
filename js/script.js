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
}

function initDatePicker() {
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
  })
}

function cancelQuit() {
  const cancelButton = document.querySelector(select.topMenu.cancelButton);
  const logout = document.querySelector('#logout');

  cancelButton.addEventListener('click', function() {
    event.preventDefault();
    logout.classList.remove('active');
  })
}
