const asyncBack = (data, ms = 250) =>
  new Promise(resolve => setTimeout(() => resolve(data), ms))

const member = {
  data: [
    {
      id: 1,
      name: 'mummu',
      age: 3,
      job: 'chief'
    },
    {
      id: 2,
      name: 'jk',
      age: 29,
      job: 'developer'
    },
    {
      id: 3,
      name: 'sj',
      age: 29,
      job: 'devops'
    },
    {
      id: 4,
      name: 'andrea',
      age: 30,
      job: 'developer'
    },
  ],
  get() {
    return asyncBack(this.data)
  }
}

export default member