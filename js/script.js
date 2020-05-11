{
  const $topButton = document.querySelector("#toTop")
  const $nav = document.querySelector('.navbar')
  const $logo = document.querySelector('#logo')
  const $navLinks = document.querySelectorAll('.scroll')

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

  const scrollToFunction = (e) => {
    e.preventDefault();
    document.querySelector('#' + e.currentTarget.dataset.id + '').scrollIntoView({
      behavior: 'smooth'
    })
  }

  const init = () => {
    $navLinks.forEach(link => link.addEventListener(`click`, scrollToFunction))
    window.addEventListener(`scroll`, scrollFunction);
    $topButton.addEventListener(`click`, () => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }))
  };
  init();
}
