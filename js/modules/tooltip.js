export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]')

  tooltips.forEach((tooltip) => {
    tooltip.addEventListener('mouseover', onMouseOver)
  } )

  function onMouseOver() {
    const tooltipCreated = createTooltip(this)

      this.addEventListener('mouseleave', onMouseLeave)
      onMouseLeave.tooltip = tooltipCreated 
      onMouseLeave.element = this 

      this.addEventListener('mousemove', onMouseMove)
      onMouseMove.tooltip = tooltipCreated;
  }

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

