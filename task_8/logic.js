(function() {
  const toggle = document.querySelector(".c-hamburger");
  const menu = document.querySelector(".menu");
  const cross = document.querySelector(".cross");
  const button = document.querySelector(".menu-button button");
  const sectionGame = document.querySelector(".game");

  console.log(button);

  function toggleHandler(toggle) {

    toggle.addEventListener( "click", function(e) {

      if(this.classList.contains("is-active") === true) {
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

  cross.addEventListener('click', () => {
    toggle.classList.remove("is-active");
    menu.style.top = "-400px";
    document.body.style.backgroundColor = "#fdfe41";
  });

  button.addEventListener('click', () => {
    toggle.classList.remove("is-active");
    menu.style.top = "-400px";
    document.body.style.backgroundColor = "#fdfe41";

    sectionGame.style.display = "block";
  });
})();









