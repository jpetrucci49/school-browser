'use strict'
const store = require('./../store.js')
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
  $('#update-school-shell').hide()
  $('#schools').hide()
  $('#school').empty()
}
const onDeleteSchool = (e) => {
  e.preventDefault()
  const id = $(e.target).parent().parent().data('id')
  console.log('Remove School', id)
  api.deleteSchool(id)
    .then(ui.deleteSchoolSuccess)
    .catch(ui.failure)
}
const updateSchool = (e) => {
  e.preventDefault()
  store.schoolId = $(e.target).parent().parent().data('id')
  console.log('Update School', store.schoolId)
  $('#school-details-shell').hide()
  $('#update-school-shell').show()
  $('#schools').hide()
  $('#school').empty()
}
const onUpdateSchool = (e) => {
  event.preventDefault()
  const data = fields(e.target)
  console.log(data)
  api.updateSchool(data)
    .then(ui.updateSchoolSuccess)
    .catch(ui.updateSchoolFailure)
}
const onViewSchool = (e) => {
  e.preventDefault()
  store.schoolId = $(e.target).parent().parent().data('id')
  console.log('View School', store.schoolId)
  api.viewSchool()
    .then(ui.viewSchoolSuccess)
    .catch(ui.failure)
}
const handler = function () {
  $('#school-details').on('submit', onSchoolDetails)
  $('#update-school').on('submit', onUpdateSchool)
  $('#school-list-shell').on('click', onListSchools)
  $('#new-school-shell').on('click', onNewSchool)
  $('#school').on('click', '#deleteSchoolButton', onDeleteSchool)
  $('#school').on('click', '#updateSchoolButton', updateSchool)
  $('#school').on('click', '#viewSchoolButton', onViewSchool)
}
module.exports = {
  handler
}
