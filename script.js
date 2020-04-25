// * D.O.M: HTML ~~> JS
const divCc = document.getElementById('cc')
const divCl = document.getElementById('cl')

// ? Default globals
console.info(document)
console.info(window)

divCc.innerText = '@HHP'

function hideCl() {
  divCl.style.display = 'none'
}
function hideCc() {
  divCc.style.display = 'none'
}
function showCc() {
  divCc.style.display = ''
}
function showCl() {
  divCl.style.display = ''
}

function toggleClCc() {
  const ccHidden = divCc.style.display === 'none'
  const clHidden = divCl.style.display === 'none'
  const toogleButton = document.querySelector('button')

  if (ccHidden && clHidden) {
    toogleButton.style.backgroundColor = '#fdcb6e'
    showCc()
    showCl()
  } else {
    toogleButton.style.backgroundColor = '#d63031'
    hideCc()
    hideCl()
  }
}
