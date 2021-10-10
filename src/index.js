import member from './model/member.js'
const { pipe } = window.R

const app = {
  memberListEl: document.getElementById('member-list'),
  init () {
    app.render().catch(console.error)
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

    const buttonCol = tr.append(app.getColEl(app.getButton('details')))
    return tr
  },
  getColEl (data) { // pure
    const isEl = typeof data === 'object' && data instanceof HTMLElement

    const td = document.createElement('td')
    isEl ? td.append(data) : td.innerText = data
    return td
  },
  getButton (text) {
    const button = document.createElement('button')
    button.innerText = text
    return button
  }
}

document.addEventListener('DOMContentLoaded', app.init.bind(undefined))
