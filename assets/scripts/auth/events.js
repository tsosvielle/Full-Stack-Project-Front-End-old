'use strict'
// require get form fields, my api file, and my ui object
const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const newUserclick = function () {
  $('#message').text('')
  $('#signUpMessage').text('')
  $('#signUpModalTitle').show()
  $('#sign-up').show()
  $('#new-user').hide()
  $('#returning-user').hide()
  $('#getProjectsButton').hide()
  $('#clearProjectsButton').hide()
  $('#signIn').show()
  $('#signUpButton').show()
  $('.signUpFields').show()
}

const returningUserclick = function () {
  $('#message').text('')
  $('#signInMessage').text('')
  $('#signInModalTitle').show()
  $('#sign-in').show()
  $('#new-user').hide()
  $('#returning-user').hide()
  $('.sign-in-fields').show()
  $('#signInButton').show()
  $('#getProjectsButton').hide()
  $('#clearProjectsButton').hide()
  $('#signInButton').show()


}

const accountClick = function () {
  $('#about-me').hide()
  $('#message').text('')
  $('#changePassword').show()
  $('#sign-out').show()
  $('#user-management').hide()
  $('#postNewProject').hide()
  $('#getProjectsButton').hide()
  $('#clearProjectsButton').hide()
  $('.goBack').show()
}

const changePasswordClick = function () {
$('#change-password').show()
$('#changePasswordModalTitle').show()
$('#changePasswordMessage').hide()
}

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePwSuccess)
    .catch(ui.changePwFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onNewProject = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.newProject(data)
    .then(ui.newProjectSuccess)
    .catch(ui.newProjectFailure)
}

const onShowProjects = (event) => {
  event.preventDefault()
  api.getProjects()
    .then(ui.getProjectsSuccess)
    .catch(ui.failure)
}


const onUpdateProject = function (event) {
  event.preventDefault()
  $('.modal-open').removeClass()
  $('.fade').hide()
  const data = getFormFields(event.target)
  const id = $(event.target).data('id')
  api.updateProject(id, data)
    .then(() => onShowProjects(event))
    .catch(ui.failure)
}

const onDeleteProject = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')

  api.deleteProject(id)
    .then(() => onShowProjects(event))
    .catch(ui.deleteProjectFailure)
}





const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#about-me-button').on('click', ui.aboutMe)
  $('#contact-me-button').on('click', ui.contactMe)
  $('#changePassword').on('click', changePasswordClick)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
  $('#new-user').on('click', newUserclick)
  $('#returning-user').on('click', returningUserclick)
  $('#user-management').on('click', accountClick)
  $('.goBack').on('click', ui.goBackClick)
  $('#postNewProject').on('click', ui.projectReveal)
  $('#newProject').on('submit', onNewProject)
  $('#getProjectsButton').on('click', onShowProjects)
  $('#content').on('click', '.delete', onDeleteProject)
  $('#content').on('submit', '.update-project', onUpdateProject)
  $('#clearProjectsButton').on('click', ui.clearProjects)
}

module.exports = {
  addHandlers,
}
