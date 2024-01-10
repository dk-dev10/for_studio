const slider = document.querySelectorAll('.project__item');
const prevBtn = document.querySelector('.slider__btn-prev');
const nextBtn = document.querySelector('.slider__btn-next');

let currentSlide = 0;

const showSlide = (slideIndex) => {
  slider.forEach((slide, index) => {
    slide.classList.remove(
      'project__item--active',
      'project__item--second',
      'project__item--close'
    );

    if (index === slideIndex) {
      slide.classList.add('project__item--active');
    } else if (index === slideIndex + 1) {
      slide.classList.add('project__item--second');
    } else if (index === slideIndex - 1) {
      slide.classList.add('project__item--close');
    }
  });
};

const updateSlider = () => {
  showSlide(currentSlide);

  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === slider.length - 1;
};

updateSlider();

prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentSlide < slider.length - 1) {
    currentSlide++;
    updateSlider();
  }
});
