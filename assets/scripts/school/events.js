'use strict'
const fields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSchoolDetails = function (e) {
  e.preventDefault()
  const data = fields(e.target)
  console.log(data)
  api.schoolDetails(data)
    .then(ui.schoolDetailsSuccess)
    .catch(ui.schoolDetailsFailure)
}

const onListSchools = function (e) {
  e.preventDefault()
  console.log('school list clicked')
  api.listSchools()
    .then(ui.listSchoolsSuccess)
    .catch(ui.failure)
}
const onNewSchool = function () {
  console.log('New school clicked')
  $('#school-details-shell').show()
  $('#schools').hide()
  $('#school').empty()
}
const onDeleteSchool = (event) => {
  event.preventDefault()
  const data = $(event.target).parent().parent().data('id')
  console.log('Remove School', data)
  api.deleteSchool(data)
    .then(ui.deleteSchoolSuccess)
    .catch(ui.failure)
}
const onUpdateSchool = (event) => {
  event.preventDefault()
  const data = $(event.target).parent().parent().data('id')
  console.log('Update School', data)
  // api.deleteSchool(data)
  //   .then(ui.deleteSchoolSuccess)
  //   .catch(ui.failure)
}
const onViewSchool = (event) => {
  event.preventDefault()
  const data = $(event.target).parent().parent().data('id')
  console.log('View School', data)
  // api.deleteSchool(data)
  //   .then(ui.deleteSchoolSuccess)
  //   .catch(ui.failure)
}
const handler = function () {
  $('#school-details').on('submit', onSchoolDetails)
  $('#school-list-shell').on('click', onListSchools)
  $('#new-school-shell').on('click', onNewSchool)
  $('#school').on('click', '#deleteSchoolButton', onDeleteSchool)
  $('#school').on('click', '#updateSchoolButton', onUpdateSchool)
  $('#school').on('click', '#viewSchoolButton', onViewSchool)
}
module.exports = {
  handler
}
