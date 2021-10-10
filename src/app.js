import MemberList from './components/MemberList.js'

import member from './model/member.js'

class App extends HTMLElement {
  constructor() {
    super()
    this.id = 'app'
    this.render()
  }
  render () {
    this.appendChild(this.titleEl)
    this.appendChild(this.memberList)
  }
  get titleEl () {
    const h1 = document.createElement('h1')
    h1.innerText = this.title
    return h1
  }
  get memberList () {
    return document.createElement('member-list')
  }
}

customElements.define('app-component', App)
customElements.define('member-list', MemberList)