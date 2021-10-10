import Member from '../model/member/index.js'
import EditCell from './EditCell.js'

export const member = new Member()

class MemberList extends HTMLElement {
  constructor () {
    super()
    this.el = document.createElement('div')
    this.el.className = 'table'

    const data = member.get();
    if (data) this.render(data)
    this.bindEvent()
    this.append(this.el)
  }
  render(data) {
    this.el.innerHTML = `
      <div class="head">
        <div class="row">
          <div>id</div>
          <div>name</div>
          <div>age</div>
          <div>job</div>
        </div>
      </div>
      <div class="body">
        ${data.map(member => `
          <div class="row">
              <div>${member.id}</div>
              <div class="cell">
                <edit-cell uid=${member.id} value=${member.name} />
              </div>
              <div>${member.age}</div>
              <div>${member.job}</div>
          </div>
        `).join('')}
      </div>
    `
  }
  bindEvent() {

  }
}

customElements.define('edit-cell', EditCell)

export default MemberList
