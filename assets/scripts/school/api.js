'use strict'
const config = require('./../config.js')
const store = require('./../store.js')

const schoolDetails = function (data) {
  return $.ajax({
    url: config.apiUrl + '/schools',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  schoolDetails
}
