(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-franchise]'),
      closeModalBtn: document.querySelector('[data-franchise-close]'),
      modal: document.querySelector('[data-modal-franchise]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

     function toggleModal() {
      document.body.classList.toggle("modal-open");
      refs.modal.classList.toggle('is-hidden');
    }
})();

(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-submit-franchise]'),
      closeModalBtn: document.querySelector('[data-submit-franchise-close]'),
      modal: document.querySelector('[data-modal-submit-franchise]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

     function toggleModal() {
      document.body.classList.toggle("modal-open");
      refs.modal.classList.toggle('is-hidden');
    }
})();
