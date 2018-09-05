'use strict'
const store = require('./../store.js')
const api = require('./api.js')
const showSchools = require('../templates/list-schools.handlebars')
const viewSchool = require('../templates/view-school.handlebars')

const removeMessage = function () {
  $('#message').removeClass()
  $('#message').text('')
}

const clearData = function () {
  $('#sign-up input').val('')
  $('#sign-in input').val('')
  $('#change-password input').val('')
  $('#school-details input').val('')
  $('#update-school input').val('')
}

const schoolDetailsSuccess = function () {
  $('#message').text('School submitted!')
  $('#message').removeClass()
  $('#message').addClass('success')
  clearData()
  api.listSchools()
    .then(listSchoolsSuccess)
    .catch(failure)
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
  $('#school-details-shell').hide()
  $('#submit-school').hide()
  $('#update-school-shell').hide()
  $('#schools').show()
  $('#school').empty()
  if (response.schools.length < 1) {
    $('#message').text('You haven\'t created any schools!')
    setTimeout(removeMessage, 2000)
  } else {
    const schoolsHTML = showSchools({ schools: response.schools })
    $('#school').append(schoolsHTML)
  }
}
const deleteSchoolSuccess = function (response) {
  $('#message').text('That school has been deleted!')
  setTimeout(removeMessage, 2000)
  api.listSchools()
    .then(listSchoolsSuccess)
    .catch(failure)
}

const updateSchoolSuccess = function () {
  $('#message').text('School Updated!')
  $('#message').removeClass()
  $('#message').addClass('success')
  clearData()
  api.listSchools()
    .then(listSchoolsSuccess)
    .catch(failure)
  setTimeout(removeMessage, 2000)
}

const updateSchoolFailure = function () {
  $('#message').text('School Update Failed!')
  $('#message').removeClass()
  $('#message').addClass('fail')
  clearData()
  setTimeout(removeMessage, 2000)
}

const viewSchoolSuccess = function (response) {
  $('#school-details-shell').hide()
  $('#submit-school').hide()
  $('#update-school-shell').hide()
  $('#schools').show()
  $('#school').empty()
  const schoolsHTML = viewSchool(response)
  $('#school').append(schoolsHTML)
}
const failure = function () {
  $('#message').text('There was an error')
}

module.exports = {
  schoolDetailsSuccess,
  schoolDetailsFailure,
  listSchoolsSuccess,
  deleteSchoolSuccess,
  updateSchoolSuccess,
  updateSchoolFailure,
  viewSchoolSuccess,
  failure
}
