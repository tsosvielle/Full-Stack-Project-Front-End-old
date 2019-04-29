'use strict'
const store = require('../store')
const showProjectsTemplate = require('../templates/book-listing.handlebars')

const signUpSuccess = function (data) {
  $('form').trigger('reset')
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#message').text('')
}

const signUpFailure = function (data) {
  $('form').trigger('reset')
  $('#message').text('Error beep boop')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('form').trigger('reset')
  $('#message').text('')
  $('#sign-in').hide()
  $('#user-management').show()
  $('#postNewProject').show()
  $('#message').text('succesfully signed in!')
}

const signInFailure = function (data) {
  $('#message').text('Error beep boop')
  $('form').trigger('reset')
  $('#returning-user').show()
  $('#new-user').show()
  $('#sign-in').hide()
}

const changePwSuccess = function (data) {
  $('form').trigger('reset')
  $('#change-password').hide()
  $('#message').text('Succesfully changed password')
}

const changePwFailure = function (data) {
  $('form').trigger('reset')
  $('#message').text('Error beep boop')
}

const signOutSuccess = function () {
  $('form').trigger('reset')
  $('#user-management').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#returning-user').show()
  $('#message').hide()
  $('#new-user').show()
  $('#postNewProject').hide()
  $('#message').text('')

  store.user = null
}

const signOutFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Error beep boop')
}

const projectReveal = function(){
  $('#newProject').show()
}

const clearProjects = function () {
  $('#content').empty()
}

const newProjectSuccess = function (data) {
  $('form').trigger('reset')
  $('#postNewProject').hide()
  $('.content').html(showProjectsHtml)
}

const newProjectFailure = function (data) {
  $('form').trigger('reset')
  $('#message').text('Error beep boop')
}

const getProjectsSuccess = (data) => {
  const showProjectsHtml = showProjectsTemplate({ projects: data.projects })
  $('.content').html(showProjectsHtml)
}

const getProjectFailure = function (data) {
  $('form').trigger('reset')
  $('#message').text('Error beep boop')
}

const updateProjectSuccess = function (data) {
  $('form').trigger('reset')
}

const updateProjectFailure = function (data) {
  $('form').trigger('reset')
  $('#message').text('Error beep boop')
}

const deleteProjectSuccess = function (data) {
  $('form').trigger('reset')
  $('#message').text('Successfully Deleted')
}

const deleteProjectFailure = function (data) {
  $('form').trigger('reset')
  $('#message').text('Error beep boop')
}



module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePwSuccess,
  changePwFailure,
  signOutSuccess,
  signOutFailure,
  projectReveal,
  clearProjects,
  getProjectFailure,
  getProjectsSuccess,
  deleteProjectFailure,
  deleteProjectSuccess,
  updateProjectSuccess,
  updateProjectFailure
}
