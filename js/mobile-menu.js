(() => {
  const refs = {
    openMenuBtn: document.querySelector(".data-menu-button"),
    closeMenuBtn: document.querySelector(".open"),
    menu: document.querySelector(".close"),
    body: document.querySelector("body"),
  };
  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();