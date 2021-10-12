import { pipe, curry } from 'ramda'

/**
 * form Data 를 post 하기
 * 1. 유효성 검증
 * 2. post 요청 양식에 맞게 request 가공
 * 3. post 요청
 * 4. post 이행된 후 next ( 다음에 무엇을 할지 )
 */

// sample
const formData = {
  id: 'andrea', // userid
  password: '111111a!',
  confirmPassword: '111111a!', // password
  phoneNumber: '010-1234-5678', // phone. 하이픈 제거
  companyName: 'nhn commerce',
  policyAgree: true // 검증단계에서 사용하고 리퀘스트에서 제거
}

const post = async req => {
  await fetch(req)
}

const goLogin = () => {}

// new spec
const isBusiness = true
const goBusinessLogin = () => {}
const goCommonLogin = () => {}

// develop
const validation = data => {
  // ... throw
  return data
}

const makeRequest = pipe(
  filterProperties,
  mapPropertiesKey,
  mapPropertiesValue,
)

const submit = (next, data) => pipe (
  validation,
  makeRequest,
  post,
  next // login 된 유저일 경우/아닐 경우
)(data)

const curring = curry(submit)

const business = curring(goBusinessLogin)
const common = curring(goCommonLogin)

const main = formData => isBusiness
  ? business(formData)
  : common(formData)

main(formData)

// hoisted
function filterProperties () { return {} }
function mapPropertiesKey () { return {} } // bug here!
function mapPropertiesValue () { return {} }




