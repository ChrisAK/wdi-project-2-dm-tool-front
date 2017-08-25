'use strict'

const ui = require('./ui')
const api = require('./api')
const getFormFields = require('../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  console.log(event)
  const data = getFormFields(event.target)
  console.log(data)
  api.signUp(data)
    .done(ui.signUpSuccess)
    .fail(ui.failure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.failure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
    .done(ui.signOutSuccess)
    .fail(ui.failure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.failure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
}
module.exports = {
  addHandlers
}
