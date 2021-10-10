const storage = {
  set(name, value) {
    localStorage.setItem(
      name,
      typeof value === 'object' ? JSON.stringify(value) : value
    )
  },
  get(name) {
    return JSON.parse(localStorage.getItem(name))
  }
}

export default storage