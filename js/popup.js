const openPopup = (btnClass) => {
  const callPopupBtn = document.querySelector(`.${btnClass}`);
  const body = document.querySelector('body');
  const popup = document.querySelector('.popup');
  const popupBtn = document.querySelector('.popup__btn');
  const form = document.querySelector('.popup__form');
  const popupLoading = document.querySelector('.loading__wrapper');
  const popupSuccess = document.querySelector('.popup__success');

  let timerClearFirst;
  let timerClearSecond;

  const showPopup = () => {
    body.style.overflow = 'hidden';
    popup?.classList.add('visible');
    form?.classList.add('visible');
  };

  const hidePopup = () => {
    const popups = [popup, form, popupLoading, popupSuccess];
    clearTimeout(timerClearFirst);
    clearTimeout(timerClearSecond);
    popups.forEach((popup) => popup.classList.remove('visible'));
    body.style.overflow = 'visible';
  };

  const handlePopupClick = (e) => {
    if (e.target === popup) {
      hidePopup();
    }
  };

  callPopupBtn?.addEventListener('click', showPopup);
  popupBtn?.addEventListener('click', hidePopup);

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    form.classList.remove('visible');
    popupLoading.classList.add('visible');

    timerClearFirst = setTimeout(() => {
      popupLoading.classList.remove('visible');
      popupSuccess.classList.add('visible');
      timerClearSecond = setTimeout(hidePopup, 10000);
    }, 2000);
  });

  popup?.addEventListener('click', handlePopupClick);
};
