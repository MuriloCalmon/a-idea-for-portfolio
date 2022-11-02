var typed = new Typed('.dev-text', {
  strings: ['Dev front end', 'Analista de sistemas', 'Tec. em TI'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
})

const categories = document.querySelector('.categories')

const n = (categories.childElementCount)


for (let i = 0; i < n; i++) {
  if (i % 2 == 0) {
    if (categories.children[i].innerText === 'HTML') {
      document.querySelector('.div-html-color').style.width = '60%'
    } else if (categories.children[i].innerText === 'CSS') {
      document.querySelector('.div-css-color').style.width = '60%'
    } else if (categories.children[i].innerText === 'Java Script') {
      document.querySelector('.div-js-color').style.width = '40%'
    } else if (categories.children[i].innerText === 'Node js') {
      document.querySelector('.div-nd-color').style.width = '20%'
    } else if (categories.children[i].innerText === 'Type Script') {
      document.querySelector('.div-ts-color').style.width = '20%'
    } else if (categories.children[i].innerText === 'React js') {
      document.querySelector('.div-rs-color').style.width = '20%'
    } else if (categories.children[i].innerText === 'Inglês') {
      document.querySelector('.div-in-color').style.width = '15%'
    }
  }
}


