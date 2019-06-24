'use strict'
const userEvents = require('./auth/events.js')

$(() => {
  // your JS code goes here
  userEvents.addHandlers()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').hide()
  $('#user-management').hide()
  $('#newProject').hide()
  $('#postNewProject').hide()
  $('#changePassword').hide()
  $('.goBack').hide()
})
