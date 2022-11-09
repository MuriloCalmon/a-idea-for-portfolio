var typed = new Typed('.dev-text', {
  strings: ['Dev front end', 'Analista de sistemas', 'Tec. em TI'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
})

function fillSkillsAccordingToLevel() {

  const skills = document.querySelector('.skills')
  const numberOfChildrenOfDivSkills = (skills.childElementCount)
  const childrenInSkills = skills.children

  for (let children = 0; children < numberOfChildrenOfDivSkills; children++) {
    if (children % 2 == 0) {
      if (childrenInSkills[children].innerText === 'HTML') {
        document.querySelector('.div-html-color').style.width = '60%'
      } else if (childrenInSkills[children].innerText === 'CSS') {
        document.querySelector('.div-css-color').style.width = '60%'
      } else if (childrenInSkills[children].innerText === 'Java Script') {
        document.querySelector('.div-js-color').style.width = '40%'
      } else if (childrenInSkills[children].innerText === 'Node js') {
        document.querySelector('.div-nd-color').style.width = '20%'
      } else if (childrenInSkills[children].innerText === 'Type Script') {
        document.querySelector('.div-ts-color').style.width = '20%'
      } else if (childrenInSkills[children].innerText === 'React js') {
        document.querySelector('.div-rs-color').style.width = '20%'
      } else if (childrenInSkills[children].innerText === 'Inglês') {
        document.querySelector('.div-in-color').style.width = '15%'
      }
    }
  }
}

const menuMobile = document.querySelector('#menu-mobile')

function handleToggleMenu() {
  const nav = document.querySelector("#navigation").classList.toggle('active')
}

menuMobile.addEventListener("click", () => {
  const body = document.querySelector("body").classList.toggle('body')
})

menuMobile.addEventListener("click", handleToggleMenu)

fillSkillsAccordingToLevel()


