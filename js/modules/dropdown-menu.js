export default function initDropdownMenu() {

}
//you can refer a callback function to various events like this
/*

dropdownMenu.addEventListener('touchstart', handleEvent)
dropdownMenu.addEventListener('click', handleEvent)

*/

const dropdownMenus = document.querySelectorAll('[data-dropdown]')

dropdownMenus.forEach((dropdownMenu) =>{
  dropdownMenu.addEventListener('click', handleEvent)
  //or like this
  /*
  ['touchstart', 'click'].forEach(userEvent => {
  dropdownMenu.addEventListener(userEvent, handleEvent)
  })*/
})


function handleEvent(event) {
  event.preventDefault()
  this.classList.toggle('active')

  //outsideClick(this, () => console.log('ativou'))
}


// function outsideClick(element, callback) {
//   const html = document.documentElement;
//   html.addEventListener('click', handleOutsideClick)

//   function handleOutsideClick() {
//     callback();
//   }
// }