const nav = document.querySelector('.nav__wrapper');
const navBtn = document.querySelector('.nav__btn--toggle');

navBtn.addEventListener('click', () => {
  nav.classList.toggle('nav__wrapper--open');
  document.querySelector('body').classList.toggle('overflow');

  navBtn.innerHTML = nav.classList.contains('nav__wrapper--open')
    ? '<img src="./assets/close.svg" alt="close" />'
    : '<hr />';
});

const stagesWrapper = document.querySelector('.stages');

function trackElement() {
  const stagesWrapper = document.querySelector('.stages');
  const stagesList = document.querySelectorAll('.stages__item');
  const stagesPreview = document.querySelectorAll('.stages__preview__item');

  const stagesWrapperPosition = stagesWrapper?.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  stagesList[0].classList.add('stages__item--active');
  if (stagesWrapperPosition < windowHeight) {
    for (let i = 0; i < stagesPreview.length; i++) {
      let coord = stagesPreview[i].getBoundingClientRect();

      if (
        coord.top < 0 &&
        coord.top + coord.height > 0 &&
        coord.bottom + coord.height > coord.height
      ) {
        stagesList[i].classList.add('stages__item--active');
      } else {
        stagesList[i].classList.remove('stages__item--active');
      }
    }
  } else {
  }
}

