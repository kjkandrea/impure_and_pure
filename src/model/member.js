import storage from './storage.js'
import { members } from './const.js'

const NAME_SPACE = 'member'

const member = {
  data: fetchData(),
  get() {
    return this.data
  },
  post() {
    storage.set(NAME_SPACE, this.data)
  }
}

function fetchData () {
  const savedData = storage.get(NAME_SPACE)
  if (savedData) {
    return savedData;
  } else {
    storage.set(NAME_SPACE, members)
    return storage.get(NAME_SPACE)
  }
}

export default member