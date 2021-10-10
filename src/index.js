import member from './model/member.js'
const { pipe } = window.R

const app = {
  memberListEl: document.getElementById('member-list'),
  init () {
    app.render().error(console.error)
  },
  async render () { // render main 함수. impure + pure 합성
    const members = await app.fetchMembers()
    pipe(
      data => app.getRowsEl(data),
      rows => app.appendElements(rows, app.memberListEl)
    )(members)
  },
  fetchMembers () { // impure
    return member.get()
  },
  appendElements(els, targetEl) { // pure
    els.forEach(el => targetEl.append(el))
  },
  getRowsEl (members) { // pure
    return members.map(member => app.getRowEl(member))
  },
  getRowEl (object) { // pure
    const tr = document.createElement('tr')
    Object
      .values(object)
      .map(data => app.getColEl(data))
      .forEach(col => tr.append(col))
    return tr
  },
  getColEl (data) { // pure
    const td = document.createElement('td')
    td.innerText = data
    return td
  },
}

document.addEventListener('DOMContentLoaded', app.init.bind(undefined))
