'use strict'
const store = require('./../store.js')
const fields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSchoolDetails = function (e) {
  e.preventDefault()
  const data = fields(e.target)
  api.schoolDetails(data)
    .then(ui.schoolDetailsSuccess)
    .catch(ui.schoolDetailsFailure)
}

const onListSchools = function (e) {
  e.preventDefault()
  api.listSchools()
    .then(ui.listSchoolsSuccess)
    .catch(ui.failure)
}
const onNewSchool = function () {
  $('#school-details-shell').show()
  $('#update-school-shell').hide()
  $('#schools').hide()
  $('#school').empty()
}
const onDeleteSchool = (e) => {
  e.preventDefault()
  const id = $(e.target).closest('section').data('id')
  api.deleteSchool(id)
    .then(ui.deleteSchoolSuccess)
    .catch(ui.failure)
}
const updateSchool = (e) => {
  e.preventDefault()
  store.schoolId = $(e.target).closest('section').data('id')
  $('#school-details-shell').hide()
  $('#update-school-shell').show()
  $('#schools').hide()
  $('#school').empty()
}
const onUpdateSchool = (e) => {
  event.preventDefault()
  const data = fields(e.target)
  api.updateSchool(data)
    .then(ui.updateSchoolSuccess)
    .catch(ui.updateSchoolFailure)
}
const onViewSchool = (e) => {
  e.preventDefault()
  store.schoolId = $(e.target).closest('section').data('id')
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
