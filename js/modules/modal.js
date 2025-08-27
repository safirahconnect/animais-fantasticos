export default function initModal() {
  const openBtn = document.querySelector("[data-modal='abrir']")
  const closeBtn = document.querySelector("[data-modal='fechar']")
  const containerModal = document.querySelector("[data-modal='container']")

  if(openBtn && closeBtn && containerModal) {

    openBtn.addEventListener('click', toggleModal)
    closeBtn.addEventListener('click', toggleModal)
    containerModal.addEventListener('click', closeOutsideModal)

    function toggleModal(event) {
    event.preventDefault()
    containerModal.classList.toggle('active')
    }

    function closeOutsideModal(event) {
      if(event.target === this) {
        toggleModal(event)
      }
    }
  }
}

