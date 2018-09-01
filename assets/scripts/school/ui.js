'use strict'
const store = require('./../store.js')

const removeMessage = function () {
  $('#message').removeClass()
  $('#message').text('')
}

const clearData = function () {
  $('#sign-up input').val('')
  $('#sign-in input').val('')
  $('#change-password input').val('')
}

const schoolDetailsSuccess = function () {
  $('#message').text('School submitted!')
  $('#message').removeClass()
  $('#message').addClass('success')
  clearData()
  setTimeout(removeMessage, 2000)
}

const schoolDetailsFailure = function () {
  $('#message').text('School Submission Failed!')
  $('#message').removeClass()
  $('#message').addClass('fail')
  clearData()
  setTimeout(removeMessage, 2000)
}

module.exports = {
  schoolDetailsSuccess,
  schoolDetailsFailure
}
