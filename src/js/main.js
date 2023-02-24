var typed = new Typed('.dev-text', {
  strings: ['Dev front end', 'Analista de sistemas', 'Tec. em TI'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
})

document.querySelector('#menu-mobile').addEventListener("click", () => {
  document.querySelector("body").classList.toggle('body')
  document.querySelector("#navigation").classList.toggle('active')
})
