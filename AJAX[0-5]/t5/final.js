const btn = document.querySelector(".btn");

const smartRequest = () => {
  const value1 = document.getElementById("page").value;
  const value2 = document.getElementById("limit").value;
  const result = document.querySelector(".result");
  const textMessage = document.querySelector(".result");

  // проверка isNaN() не требуется input - (type='number')
  if (value1 == "" || value2 == "") {
    textMessage.textContent = "Номер страницы и лимит не заданы";
    return;
  } else if ((value2 < 1 || value2 > 10) && (value1 < 1 || value1 > 10)) {
    textMessage.textContent = "Номер страницы и лимит вне диапазона от 1 до 10";
    return;
  } else if (value2 < 1 || value2 > 10) {
    textMessage.textContent = "Лимит вне диапазона от 1 до 10";
    return;
  } else if (value1 < 1 || value1 > 10) {
    textMessage.textContent = "Номер страницы вне диапазона от 1 до 10";
    return;
  } else {
    localStorage.setItem("page", value1);
    localStorage.setItem("limit", value2);
    return fetch(`https://picsum.photos/v2/list?page=${value1}&limit=${value2}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        let list = document.querySelector(".posts");
        let key;
        let cards = "";
        for (key in response) {
          const cardBlock = (list.innerHTML += `
              <li class="post">
                  <img class="img" src="${response[key].download_url}" alt"broken-foto">
              </li>`);
          cards = cards = +cardBlock;
        }
      })
      .catch(() => console.log("error"));
  }
};

btn.addEventListener("click", async () => {
  const requestResult = await smartRequest();
});

function showLastRequest() {
  let page = +localStorage.getItem("page");
  let limit = +localStorage.getItem("limit");
  let post = document.querySelector(".img");
  const value1 = document.getElementById("page").value;
  const value2 = document.getElementById("limit").value;
  if (!post && page && limit) {
    return fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        let list = document.querySelector(".posts");
        let key;
        let cards = "";
        for (key in response) {
          const cardBlock = (list.innerHTML += `
                <li class="post">
                    <img class="img" src="${response[key].download_url}" alt"broken-foto(">
                </li>`);
          cards = cards = +cardBlock;
        }
      })
      .catch(() => console.log("error"));
  }
}
showLastRequest();
