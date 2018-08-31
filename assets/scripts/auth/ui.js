'use strict'
const store = require('./../store.js')
const signIn = function () {
  $('#sign-up-shell').hide()
  $('#sign-in-shell').hide()
  $('#change-password-shell').show()
  $('#sign-out-shell').show()
  $('#new-school-shell').show()
  $('#school-list-shell').show()
}
const signOut = function () {
  $('#sign-up-shell').show()
  $('#sign-in-shell').show()
  $('#change-password-shell').hide()
  $('#sign-out-shell').hide()
  $('#ticTac').hide()
  $('#new-school-shell').hide()
  $('#school-list-shell').hide()
  $('#history').hide()
}
const removeMessage = function () {
  $('#message').removeClass()
  $('#message').text('')
}
const clearData = function () {
  $('#sign-up input').val('')
  $('#sign-in input').val('')
  $('#change-password input').val('')
}
const signUpSuccess = function () {
  $('#message').text('Account created!')
  $('#message').removeClass()
  $('#message').addClass('success')
  clearData()
  setTimeout(removeMessage, 2000)
}
const signUpFailure = function () {
  $('#message').text('Creation Failed!')
  $('#message').removeClass()
  $('#message').addClass('fail')
  clearData()
  setTimeout(removeMessage, 2000)
}

const signInSuccess = function (response) {
  $('#message').text('Welcome Back!')
  $('#message').removeClass()
  $('#message').addClass('success')
  clearData()
  signIn()
  setTimeout(removeMessage, 2000)
  store.user = response.user
}
const signInFailure = function () {
  $('#message').text('Sign In Failed!')
  $('#message').removeClass()
  $('#message').addClass('fail')
  clearData()
  setTimeout(removeMessage, 2000)
}

const changePasswordSuccess = function () {
  $('#message').text('Password has been changed!')
  $('#message').removeClass()
  $('#message').addClass('success')
  clearData()
  setTimeout(removeMessage, 2000)
}
const changePasswordFailure = function () {
  $('#message').text('Request Failed!')
  $('#message').removeClass()
  $('#message').addClass('fail')
  clearData()
  setTimeout(removeMessage, 2000)
}

const signOutSuccess = function () {
  $('#message').text('You have successfully signed out!')
  $('#message').removeClass()
  $('#message').addClass('success')
  clearData()
  signOut()
  setTimeout(removeMessage, 2000)
}
const signOutFailure = function () {
  $('#message').text('Failed to sign out')
  $('#message').removeClass()
  $('#message').addClass('fail')
  clearData()
  setTimeout(removeMessage, 2000)
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
