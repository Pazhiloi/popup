const btn = document.getElementById('open-modal')
 const modal = document.getElementById('modall') 
 const closeBtn = document.querySelector('.modal__close')

 btn.onclick = () => {
   modal.classList.add('modal__active')

   closeBtn.addEventListener('click', closeModal)

   modal.addEventListener('click', hideModal)

   function closeModal() {
      modal.classList.remove('modal__active')
      closeBtn.removeEventListener('click', closeModal)
      modal.removeEventListener('click', hideModal)
   }
   function hideModal(event) {
     if (event.target === modal) {
       closeModal() 
     }
     
   }
 } 
 
 