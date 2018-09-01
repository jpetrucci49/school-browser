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

const handler = function () {
  $('#school-details').on('submit', onSchoolDetails)
}
module.exports = {
  handler
}
