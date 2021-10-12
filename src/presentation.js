import { pipe, curry } from 'ramda'

// sample
const something = () => {}
const formData = {
  //...
}
const isLoggedIn = true

// develop
const validation = () => something

const makeRequest = pipe(
  filterProperties,
  mapPropertiesKey,
  mapPropertiesValue,
)

const postRequest = () => something

const main = (data, next) => pipe (
  validation,
  makeRequest,
  postRequest,
  next // login 된 유저일 경우/아닐 경우
)(data)

const curryMain = curry(main)

const loggedInNext = () => something
const guestNext = () => something
const loggedInMain = curryMain(loggedInNext)
const guestMain = curryMain(guestNext)

isLoggedIn
  ? loggedInMain(formData)
  : guestMain(formData)


function filterProperties () { return something }
function mapPropertiesKey () { return something }
function mapPropertiesValue () { return something }



