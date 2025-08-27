export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]')

  tooltips.forEach((tooltip) => {
    tooltip.addEventListener('mouseover', onMouseOver)
  } )

  function onMouseOver() {
    const tooltipCreated = createTooltip(this)

    //1st way of removing the tooltip once it leaves the map.
    //arrow functions or a function here would work out.
    /*this.addEventListener('mouseleave', () => {
      tooltipCreated.remove()
    })*/

      this.addEventListener('mouseleave', onMouseLeave) //passing an object as a callback.
      onMouseLeave.tooltip = tooltipCreated //associating the tooltipCreated variable to the tooltip property from the onMouseLeave object =]

      onMouseLeave.element = this //associated the tooltipCreated to the element property from the onMouseLeave object to remove the onMouseLeave eventListener from the DevTools (F12 > Elements > Event Listeners)

      this.addEventListener('mousemove', onMouseMove)
      onMouseMove.tooltip = tooltipCreated;
  }

  //2nd way of way of removing the tooltip once it leaves the map.
  //But to use it outside of the function onMouseOver you need to pass an object as a callback function, because if you try to create a function here you won't have access to the tooltipCreated variable. 

  //To use an object here, you need to use a method called handleEvent()
  const onMouseLeave = {
    handleEvent() {
      this.tooltip.remove()
      this.element.removeEventListener('mouseleave', onMouseLeave)
      this.element.removeEventListener('mousemove', onMouseMove)
    }
  }

  function createTooltip(tooltip) {
    const element = document.createElement('div')
    element.classList.add('tooltip')
    const text = tooltip.getAttribute('aria-label')
    element.innerText = text
    document.body.appendChild(element)
    return element;
  }

  const onMouseMove = {
    handleEvent(event) {
      this.tooltip.style.top = event.pageY + 20 + 'px'
      this.tooltip.style.left = event.pageX + 20 + 'px'
    }
  }
}

