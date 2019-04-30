'use strict'

const config = require('../config')
// require my store object to have access to the user
// the user was saved in auth/ui.js signInSucess()
const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
    // same as data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
    // same as data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },

    data
    // same as data: data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const newProject = function (data) {
  return $.ajax({
    url: config.apiUrl + '/projects',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getProjects = function () {
  const options =  { url: config.apiUrl + '/projects',
    method: 'GET',
  }
  if (store.user) {
options.headers = {
  Authorization: 'Token token=' + store.user.token
}
}
  return $.ajax (options)
}

const deleteProject = function (id) {
  return $.ajax({
    url: config.apiUrl + `projects/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateProject = function (id, data) {
  return $.ajax({
    url: config.apiUrl + `projects/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}




module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  newProject,
  getProjects,
  deleteProject,
  updateProject
}
