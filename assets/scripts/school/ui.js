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

const listSchoolsSuccess = function (response) {
  $('#schools').show()
  $('#school').html('')
  response.schools.forEach((school) => {
    console.log('list displaying!')
    const schoolsHTML = `
      <p>
        ID: ${school.id}<br>
        Name: ${school.name}<br>
        City: ${school.city}<br>
        User: ${school.user}<br>
        UserId: ${school.user.id}<br>
      </p>
    `
    $('#school').append(schoolsHTML)
  })
  if (response.schools.length < 1) {
    $('#message').text('You haven\'t created any schools!')
  }
}

const listSchoolsFailure = function () {
  $('#message').text('There was an error')
}

module.exports = {
  schoolDetailsSuccess,
  schoolDetailsFailure,
  listSchoolsSuccess,
  listSchoolsFailure
}
