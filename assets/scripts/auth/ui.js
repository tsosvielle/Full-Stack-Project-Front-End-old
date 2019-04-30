'use strict'
const store = require('../store')
const showProjectsTemplate = require('../templates/book-listing.handlebars')

const signUpSuccess = function (data) {
  $('#message').text('')
  $('form').trigger('reset')
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#returning-user').hide()
  $('#new-user').hide()
  $('#message').text('sign up successfull!')
}

const signUpFailure = function (data) {
  $('#message').text('')
  $('form').trigger('reset')
  $('#message').text('Error beep boop')
  $('#returning-user').show()
  $('#new-user').show()
  $('#signUp').hide()
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#message').text('')
  $('form').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#user-management').show()
  $('#postNewProject').show()
  $('#returning-user').hide()
  $('#new-user').hide()
  $('#message').text('succesfully signed in!')
}

const signInFailure = function (data) {
  $('#message').text('')
  $('form').trigger('reset')
  $('#returning-user').show()
  $('#new-user').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#message').text('Error beep boop')
}

const closeClick = function () {
  $('#message').text('')
  $('#user-management').show()
  $('#postNewProject').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#getProjectsButton').show()
  $('#clearProjectsButton').show()
  $('#close').hide()
}

const changePwSuccess = function (data) {
  $('#message').text('')
  $('form').trigger('reset')
  $('#change-password').hide()
  $('#message').text('Succesfully changed password')
}

const changePwFailure = function (data) {
  $('#message').text('')
  $('form').trigger('reset')
  $('#message').text('Error beep boop')
}

const signOutSuccess = function () {
  $('#message').text('')
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
  $('#message').text('')
  $('form').trigger('reset')
  $('#message').text('Error beep boop')
}

const projectReveal = function(){
  $('#newProject').show()
}

const clearProjects = function () {
  $('#content').empty()
  $('#message').text('')
}

const newProjectSuccess = function (data) {
  $('#message').text('')
  $('form').trigger('reset')
  $('#postNewProject').show()
  $('.content').html(showProjectsHtml)
  $('#newProject').hide()
  $('.projectField').hide()
  $('.projectDiv').hide()
  $('#message').text('Project posted!')
}

const newProjectFailure = function (data) {
  $('#message').text('')
  $('#projectField').hide()
  $('form').trigger('reset')
  $('#postNewProject').show()
  $('.projectField').hide()
  $('#newProject').hide()
  $('.projectDiv').hide()
  $('#message').text('Error beep boop')
}

const getProjectsSuccess = (data) => {
  $('#message').text('')
  const showProjectsHtml = showProjectsTemplate({ projects: data.projects })
  $('.content').html(showProjectsHtml)
  $('#message').text('Active Projects')
}

const getProjectFailure = function (data) {
  $('#message').text('')
  $('form').trigger('reset')
  $('#message').text('Error beep boop')
}

const updateProjectSuccess = function (data) {
  $('#message').text('')
  $('form').trigger('reset')
  $('#message').text('Project updated!')
}

const updateProjectFailure = function (data) {
  $('#message').text('')
  $('form').trigger('reset')
  $('#message').text('Error beep boop')
}

const deleteProjectSuccess = function (data) {
  $('#message').text('')
  $('form').trigger('reset')
  $('#message').text('Successfully Deleted')
}

const deleteProjectFailure = function (data) {
  $('#message').text('')
  $('form').trigger('reset')
  $('#message').text('Error beep boop')
}



module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  closeClick,
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
  updateProjectFailure,
  newProjectSuccess,
  newProjectFailure
}
