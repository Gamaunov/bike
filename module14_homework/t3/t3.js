function pageLoaded() {
  function useRequest(url, callback) {
    const value = document.querySelector(".input");
    const showText = document.querySelector('.result');
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function () {
      if (xhr.status != 200 || input.value <= 0 || input.value > 10) {
        showText.textContent = 'число вне диапазона от 1 до 10: '
      } else {
        const result = JSON.parse(xhr.response);
        if (callback) {
          callback(result);
          console.log(result);
        }
      }
    };
    xhr.onerror = function () {
      console.log("Ошибка! Статус ответа: ", xhr.status);
    };
    xhr.send();
  }
  const resultNode = document.querySelector(".j-result");
  const btnNode = document.querySelector(".j-btn-request");
  // function validateInput() {
  //   let validated = true;
  //   // let checkNumber = /1|2|3|4|5|6|7|8|9|10/g;
  //   if (input.value === '' || isNaN(+input.value) || !checkNumber) {
  //     validated = false;
  //   }
  //   return validated;
  // }
  function displayResult(apiData) {
    let cards = "";
    apiData.forEach((item) => {
      const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
        </div>
      `;
      cards = cards + cardBlock;
    });
    resultNode.innerHTML = cards;
  }
  btnNode.addEventListener("click", () => {
    useRequest(
      `https://picsum.photos/v2/list/?limit=${input.value}`,
      displayResult
    );
  });
}
document.addEventListener("DOMContentLoaded", pageLoaded);
