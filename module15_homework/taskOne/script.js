const btn = document.querySelector('.btn');
const iconOne = document.querySelector('.btn__icon-one');
const iconTwo = document.querySelector('.btn__icon-two');

btn.addEventListener('click', () => {
  iconOne.classList.toggle('hidden');
  iconTwo.classList.toggle('hidden');
});