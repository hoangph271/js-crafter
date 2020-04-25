// ? document.querySelector('#login-form')
var loginForm = document.getElementById('login-form')

loginForm.addEventListener('submit', handleLogin)

function handleLogin(e) {
  e.preventDefault()

  var user = {}

  user.email = document.getElementById('email').value
  user.password = document.getElementById('password').value
  user.printMe = printMe

  user.printMe()

  // TODO: Send user to server...!
}

function printMe() {
  console.info(this)
}

printMe()
