import outsideClick from './outside-click.js'

// let's help mobile users
// click event takes 300 milliseconds to take action while touchstart is immediate.

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]')

  //you can refer a callback function to various events by this:
  /*
  dropdownMenu.addEventListener('touchstart', handleEvent)
  dropdownMenu.addEventListener('click', handleEvent)
  */

  dropdownMenus.forEach((dropdownMenu) =>{  
    ['touchstart', 'click'] .forEach(event => {
      dropdownMenu.addEventListener(event, handleEvent)
    })
  })

  function handleEvent(event) {
    event.preventDefault()
    this.classList.add('active')
    outsideClick(this, () => this.classList.remove('active'), ['touchstart', 'click'])
  }
}
