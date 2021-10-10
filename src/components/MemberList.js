import member from '../model/member.js'

class MemberList extends HTMLElement {
  constructor () {
    super()
    this.el = document.createElement('div')
    this.el.className = 'table'

    const data = member.get();
    console.log(data)
    if(data) this.render(data)
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
              <div>${member.name}</div>
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
export default MemberList
