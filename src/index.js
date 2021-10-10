import member from './model/member.js'

const app = {
  memberListEl: document.getElementById('member-list'),

  async render () { // main 함수. impure + pure 합성
    const members = await app.fetchMembers()
    app.appendElements(app.getRowsEl(members), app.memberListEl)
  },

  fetchMembers () { // impure
    return member.get()
  },

  appendElements (els, targetEl) { // pure
    els.forEach(el => targetEl.append(el))
  },

  getRowsEl (members) { // pure
    return members.map(member => app.getRowEl(member))
  },

  getRowEl (member) { // pure
    const tr = document.createElement('tr')
    const button = app.getButtonEl('detail')
    button.addEventListener('click', () => app.viewDetail(member))
    const data = Object.values(member).concat(app.getColEl(button))
    const appendCols = (data, el) =>
      data
        .map(d => app.getColEl(d))
        .forEach(col => el.append(col)
    )

    appendCols(data, tr)

    return tr
  },

  getColEl (data) { // pure
    const isEl = typeof data === 'object' && data instanceof HTMLElement

    const td = document.createElement('td')
    isEl ? td.append(data) : td.innerText = data
    return td
  },

  getButtonEl (text) { // pure
    const button = document.createElement('button')
    button.innerText = text
    return button
  },

  viewDetail (member) { // pure
    alert(app.getDetailText(member))
  },

  getDetailText (member) { // pure
    return Object
      .entries(member)
      .map(([k, v]) => k + ' : ' + v)
      .join('\n')
  }
}

document.addEventListener('DOMContentLoaded', app.render)
