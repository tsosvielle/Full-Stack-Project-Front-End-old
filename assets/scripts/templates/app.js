'use strict'
const userEvents = require('./auth/events.js')

$(() => {
  // your JS code goes here
  userEvents.addHandlers()
  $('.row').hide()
  $('#change-password').hide()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').hide()
  $('#user-management').hide()
})
