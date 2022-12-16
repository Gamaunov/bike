const btn = document.querySelector(".btn");

const smartRequest = () => {
  const valueWidth = document.getElementById("input").value;
  const valueHeight = document.getElementById("input-two").value;
  const checkValue = document.querySelector(".result");

  if (valueWidth < 100 || valueWidth > 300 || valueHeight < 100 || valueHeight > 300){
    return checkValue.textContent = 'Одно из чисел вне диапазона от 100 до 300';
  } else {
    return fetch(`https://picsum.photos/${valueWidth}/${valueHeight}`)
    .then((response) => {
      const addSRC = document.querySelector('.img').src = response.url
    })
    .catch(() => { console.log('error') });
  };
};

btn.addEventListener("click", async () => {
  const requestResult = await smartRequest();
});
