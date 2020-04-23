{
  const $topButton = document.querySelector("#toTop")
  const $nav = document.querySelector('header')
  const $logo = document.querySelector('#logo')


  const scrollFunction = () => {
    const y = window.scrollY;
    if (y > 300) {
      $nav.classList.add('bg-navbar')
      $logo.classList.add('fadeIn')
    } else {
      $nav.classList.remove('bg-navbar')
      $logo.classList.remove('fadeIn')

    }
  }

  const init = () => {
    window.addEventListener(`scroll`, scrollFunction)

    $topButton.addEventListener(`click`, () => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }))
  };
  init();
}
