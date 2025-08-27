export default function outsideClick(element, callback, userEvents) {
    const html = document.documentElement;
    const inside = 'data-inside';

    if(!element.hasAttribute(inside)) {
      element.setAttribute(inside, '')
      userEvents.forEach(event => {
        html.addEventListener(event, handleOutsideClick)
      })
    }
    
    function handleOutsideClick(event) {
      if(!element.contains(event.target)) {
        element.removeAttribute(inside)
        userEvents.forEach(event => {
          html.removeEventListener(event, handleOutsideClick)
        })
        callback();
      }
    }
  }