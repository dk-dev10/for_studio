const priceItem = document.querySelectorAll('.price__item');
const priceHead = document.querySelectorAll('.price__item__head');

priceHead.forEach((head) => {
  head.addEventListener('click', () => head.parentNode.classList.toggle('price__item--active'));
});
