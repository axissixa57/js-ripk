(function () {
  const toggle = document.querySelector(".c-hamburger");
  const menu = document.querySelector(".menu");
  const cross = document.querySelector(".cross");
  const button = document.querySelector(".menu-button button");
  const sectionGame = document.querySelector(".game");
  const table = document.querySelector(".game table");
  const col = document.getElementById('col');
  const row = document.getElementById('row');
  const bomb = document.getElementById('bomb');

  function toggleHandler(toggle) {

    toggle.addEventListener("click", function (e) {

      if (this.classList.contains("is-active") === true) {
        this.classList.remove("is-active");
        menu.style.top = "-400px";
        document.body.style.backgroundColor = "#fdfe41";
      } else {
        this.classList.add("is-active");
        menu.style.top = "320px";
        document.body.style.backgroundColor = "#0d6311";
        sectionGame.style.display = "none";
      }

    });

  }
  toggleHandler(toggle);

  function validateSizeOfArea() {
    let regColAndRow = /^(1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30)$/;
    if (regColAndRow.test(col.value) == false) {
      alert('Введите число столбцов от 1 до 30');
      return false;
    }

    if (regColAndRow.test(row.value) == false) {
      alert('Введите число строк от 1 до 30');
      return false;
    }

    return true;
  }

  cross.addEventListener('click', () => {
    toggle.classList.remove("is-active");
    menu.style.top = "-400px";
    document.body.style.backgroundColor = "#fdfe41";

    if (table.children.length > 0) {
      sectionGame.style.display = "block";
    }
  });

  button.addEventListener('click', () => {
    if (validateSizeOfArea()) {
      // если есть элементы в table
      if (table.children.length > 0) {
        for (let i = 0; i < table.children.length;) {
          table.removeChild(table.children[i]); // когда удалит первый, следующий станет на его место
        }
      }

      // добавление размера поля
      for (let i = 0; i < parseInt(col.value); i++) {
        const tr = document.createElement('tr');

        for (let j = 0; j < parseInt(row.value); j++) {
          const td = document.createElement('td');
          tr.appendChild(td);
        }

        table.appendChild(tr);
      }

      toggle.classList.remove("is-active");
      menu.style.top = "-400px";
      document.body.style.backgroundColor = "#fdfe41";
      sectionGame.style.display = "block";
    }
  });

})();











