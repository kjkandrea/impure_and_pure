class EditCell extends HTMLElement {
  constructor () {
    super()

    this.render()
  }
  render() {
    this.innerText = this.value
    this.append(this.getEditInput(this.value))
  }
  getEditInput(value) {
    const input = document.createElement('input')
    this.bindEvent(input)
    input.readOnly = ''
    input.value = value
    return input
  }
  get value () {
    return  this.getAttribute('value');
  }
  bindEvent(input) {
    input.addEventListener('click', this.handleSwitchState)
    input.addEventListener('focusout', this.handleEditEnd)
  }
  handleSwitchState() {
    this.getAttribute('readonly') === '' && this.removeAttribute('readonly')
  }
  handleEditEnd(evt) {
    this.getAttribute('readonly') !== '' && this.setAttribute('readonly', '')
  }
}

export default EditCell;