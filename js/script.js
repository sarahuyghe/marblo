{
  const $topButton = document.querySelector("#toTop")
  const $nav = document.querySelector('header')
  const $logo = document.querySelector('#logo')
  const $carouselItems = document.querySelectorAll('#carousel-itemText')
  const $carouselImages = document.querySelectorAll('.carousel-item')



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

  const slideCarousel = e => {
    $number = e.currentTarget.getAttribute(`data-slide-to`)
    $carouselItems.forEach(item => item.classList.remove(`active`))
    e.currentTarget.classList.add(`active`)
    $carouselImages.forEach(item => {
      item.classList.remove('active')
      if (item.getAttribute(`data-slide-to`) === $number) {
        item.classList.add('active')
      }
      item.getAttribute(`data-slide-to`)
    })
  }

  const init = () => {
    window.addEventListener(`scroll`, scrollFunction)
    $carouselItems.forEach(item => {
      item.addEventListener(`click`, slideCarousel)
    })
    $topButton.addEventListener(`click`, () => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }))
  };
  init();
}
