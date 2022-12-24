const btn = document.querySelector(".btn");
const iconOne = document.querySelector(".btn__icon-one");
const iconTwo = document.querySelector(".btn__icon-two");

btn.addEventListener("click", () => {
  iconOne.classList.toggle("hidden");
  iconTwo.classList.toggle("hidden");
});

// task 2
const windowWidth = window.screen.width;
const windowHeight = window.screen.height;
const availWidth = window.screen.availWidth;
const browserWidth = window.outerWidth;
const browserHeight = window.outerHeight;
const contentBrowserWidth = document.documentElement.scrollWidth;
const contentBrowserHeight = document.documentElement.scrollHeight;
const availHeight = window.screen.availHeight;
const viewAreaWidth = document.documentElement.clientWidth;
const viewAreaHeight = document.documentElement.clientHeight;
const fullViewAreaWidth = window.innerWidth;
const fullViewAreaHeight = window.innerHeight;

function showWindowData() {
  alert(`
  Ширина экрана: ${windowWidth}px
  Высота экрана: ${windowHeight}px
  Достуная ширина экрана: ${availWidth}px
  Достуная высота экрана: ${availHeight}px
  Ширина вшешнего размера окна браузера: ${browserWidth}px
  Высота вшешнего размера окна браузера: ${browserHeight}px
  Ширина отображаемого контента браузера: ${contentBrowserWidth}px
  Высота отображаемого контента браузера: ${contentBrowserHeight}px
  Ширина области просмотра: ${viewAreaWidth}px
  Высота области просмотра: ${viewAreaHeight}px
  Ширина области просмотра + скролл: ${fullViewAreaWidth}px
  Высота области просмотра + скролл: ${fullViewAreaHeight}px
  `);
}
btn.addEventListener("click", showWindowData);
