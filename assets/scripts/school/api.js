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

const listSchools = function () {
  return $.ajax({
    url: config.apiUrl + '/schools',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  schoolDetails,
  listSchools
}
