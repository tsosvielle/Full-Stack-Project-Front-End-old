'use strict'
// require get form fields, my api file, and my ui object
const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const newUserclick = function () {
  $('#sign-up').show()
  $('#new-user').hide()
  $('#returning-user').hide()
}

const returningUserclick = function () {
  $('#sign-in').show()
  $('#new-user').hide()
  $('#returning-user').hide()
}

const accountClick = function () {
  $('#change-password').show()
  $('#sign-out').show()
  $('#user-management').hide()
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

const showProjectsClick = function (event) {
  event.preventDefault()

  api.getGames()
    .then(ui.getProjectsSuccess)
    .catch(ui.getProjectsFailure)
}

const onUpdateProject = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.updateProjectSuccess)
    .catch(ui.updateProjectFailure)
}

const onDeleteProject = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.deleteProjectSuccess)
    .catch(ui.deleteProjectFailure)
}


const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#new-user').on('click', newUserclick)
  $('#returning-user').on('click', returningUserclick)
  $('#user-management').on('click', accountClick)
  $('#postNewProject').on('click', ui.projectReveal)
  $('#newProject').on('submit', onNewProject)
}

module.exports = {
  addHandlers,
}
