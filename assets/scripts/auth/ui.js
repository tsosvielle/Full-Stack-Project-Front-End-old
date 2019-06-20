'use strict'
const store = require('../store')
const showProjectsTemplate = require('../templates/project-listing.handlebars')

const signUpSuccess = function (data) {
  $('#message').text('')
  $('form').trigger('reset')
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#returning-user').hide()
  $('#new-user').hide()
  $('#signUpModalTitle').hide()
  $('#signUpMessage').show()
  $('#signInMessage').text('Sign up successfull! Please login.')
  $('#signUpModal').modal('hide');
  $('#signInModal').modal('show');
  $('#signInModalTitle').hide()


}

const signUpFailure = function (data) {
  $('#message').text('')
  $('form').trigger('reset')
  $('#signUpMessage').show()
  $('#signUpMessage').text('Error beep boop')
  $('#signUpModalTitle').hide()
  $('#returning-user').show()
  $('#new-user').show()
  $('#signUp').hide()
  $('#signIn').hide()
  $('#signUpButton').hide()
  $('.signUpFields').hide()
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#message').text('')
  $('form').trigger('reset')
  $('.close').hide()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#user-management').show()
  $('#postNewProject').show()
  $('#getProjectsButton').show()
  $('#clearProjectsButton').show()
  $('#returning-user').hide()
  $('#new-user').hide()
  $('#signInModalTitle').hide()
  $('#signInMessage').show()
  $('#signInMessage').text('Sign in successfull!')
  setTimeout(function() { $('#signInModal').modal('hide'); }, 2000);
}

const signInFailure = function (data) {
  $('#message').text('')
  $('form').trigger('reset')
  $('#returning-user').show()
  $('#new-user').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#signUpButton').hide()
  $('.signUpFields').hide()
  $('#signInMessage').show()
  $('#signInMessage').text('Error beep boop')
  $('#signInModalTitle').hide()
}

const closeClick = function () {
  $('#change-password').hide()
  $('#message').text('')
  $('#postNewProject').hide()
  $('#sign-in').hide()
  $('#sign-out').hide()
  $('#signUpButton').hide()
  $('#user-management').hide()

  $('#clearProjectsButton').show()
  $('.close').hide()
  $('#getProjectsButton').show()
  $('#new-user').show()
  $('#returning-user').show()
  $('.signUpFields').hide()
}

const changePwSuccess = function (data) {
  $('#message').text('')
  $('form').trigger('reset')
  $('#change-password').hide()
  $('#message').show()
  $('#message').text('Succesfully changed password')
  $('#message').fadeOut(3000)
}

const changePwFailure = function (data) {
  $('#message').text('')
  $('form').trigger('reset')
  $('#message').show()
  $('#message').text('Error beep boop')
  $('#message').fadeOut(3000)
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
  $('.close').hide()
  $('#message').text('')


  store.user = null
}

const signOutFailure = function () {
  $('#message').text('')
  $('form').trigger('reset')
  $('#message').show()
  $('#message').text('Error beep boop')
  $('#message').fadeOut(3000)
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
  const showProjectsHtml = showProjectsTemplate({ projects: data.projects })
  $('.content').html(showProjectsHtml)
  $('#newProject').hide()
  $('.projectField').hide()
  $('.projectDiv').hide()
  $('#message').show()
  $('#message').text('Project posted!')
  $('#message').fadeOut(3000)
}

const newProjectFailure = function (data) {
  $('#message').text('')
  $('#projectField').hide()
  $('form').trigger('reset')
  $('#postNewProject').show()
  $('.projectField').hide()
  $('#newProject').hide()
  $('.projectDiv').hide()
  $('#message').show()
  $('#message').text('Error beep boop')
  $('#message').fadeOut(3000)
}

const getProjectsSuccess = (data) => {
  $('#message').text('')
  const showProjectsHtml = showProjectsTemplate({ projects: data.projects })
  $('.content').html(showProjectsHtml)
  $('#message').show()
  $('#message').text('Active Projects')
  $('#message').fadeOut(3000)
}

const getProjectFailure = function (data) {
  $('#message').text('')
  $('form').trigger('reset')
  $('#message').show()
  $('#message').text('Error beep boop')
  $('#message').fadeOut(3000)
}

const updateProjectSuccess = function (data) {
  $('#message').text('')
  $('form').trigger('reset')
  $('#message').show()
  $('#message').text('Project updated!')
  $('#message').fadeOut(3000)
}

const updateProjectFailure = function (data) {
  $('#message').text('')
  $('form').trigger('reset')
  $('#message').show()
  $('#message').text('Error beep boop')
  $('#message').fadeOut(3000)
}

const deleteProjectSuccess = function (data) {
  $('#message').text('')
  $('form').trigger('reset')
  $('#message').show()
  $('#message').text('Successfully Deleted')
  $('#message').fadeOut(3000)
}

const deleteProjectFailure = function (data) {
  $('#message').text('')
  $('form').trigger('reset')
  $('#message').show()
  $('#message').text('Error beep boop')
  $('#message').fadeOut(3000)
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
