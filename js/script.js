{
  const $topButton = document.querySelector("#toTop")
  const init = () => {
    $topButton.addEventListener(`click`, () => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }))
  };
  init();
}
