'use strict'
const store = require('./../store.js')
const showSchools = require('../templates/list-schools.handlebars')

const removeMessage = function () {
  $('#message').removeClass()
  $('#message').text('')
}

const clearData = function () {
  $('#sign-up input').val('')
  $('#sign-in input').val('')
  $('#change-password input').val('')
  $('#school-details input').val('')
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

const listSchoolsSuccess = function (response) {
  if (response.schools.length < 1) {
    $('#message').text('You haven\'t created any schools!')
  } else {
    $('#school-details-shell').hide()
    $('#schools').show()
    $('#school').empty()
    // response.schools.forEach((school) => {
    console.log('list displaying!')
    const schoolsHTML = showSchools({ schools: response.schools })
    $('#school').append(schoolsHTML)
  }
}

const failure = function () {
  $('#message').text('There was an error')
}

module.exports = {
  schoolDetailsSuccess,
  schoolDetailsFailure,
  listSchoolsSuccess,
  failure
}
