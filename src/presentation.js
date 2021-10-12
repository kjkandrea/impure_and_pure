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

// develop
const validation = () => {}

const makeRequest = pipe(
  filterProperties,
  mapPropertiesKey,
  mapPropertiesValue,
)

const oldMain = formData => {
  validation(formData)
  const filtered = filterProperties(formData);
  const mappedKey = mapPropertiesKey(filtered)
  const mapped = mapPropertiesValue(mappedKey)
  post(mapped).then(goCommonLogin)
}

const main = (next, data) => pipe (
  validation,
  makeRequest,
  post,
  next // login 된 유저일 경우/아닐 경우
)(data)

const curryMain = curry(main)

const goBusinessLogin = () => {}
const goCommonLogin = () => {}
const businessMain = curryMain(goBusinessLogin)
const commonMain = curryMain(goCommonLogin)

isBusiness
  ? businessMain(formData)
  : commonMain(formData)


function filterProperties () { return {} }
function mapPropertiesKey () { return {} } // bug here!
function mapPropertiesValue () { return {} }




