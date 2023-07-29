document.addEventListener("DOMContentLoaded", function() {
  const openModal = document.getElementById('openModal');
  const closeModal = document.getElementById('closeModal');
  const modal = document.getElementById('modal');
  const overlay = document.getElementById('overlay');
  const submitEmail = document.getElementById('submitEmail');
  const emailInput = document.getElementById('emailInput');
  const formEl = document.getElementById('subscribeForm');
  const thankyouModal = document.getElementById('thankyouModal');

  function hideModal() {
    // modal.classList.add('hidden');
    modal.classList.add('slide-up');
    modal.classList.remove('slide-down');
  }

  document.body.addEventListener('click', function(e) {
    if (e.target.id === 'openModal') {
      modal.classList.remove('hidden');
      modal.classList.remove('slide-up');
      modal.classList.add('slide-down');
    }
  });

  overlay.addEventListener('click', hideModal);
  closeModal.addEventListener('click', hideModal);

  window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      hideModal();
    }
  });

  submitEmail.addEventListener('click', function() {
    const emailValue = emailInput.value
    if (!emailValue) {
      return
    }

    const data = new FormData(formEl)

    fetch('https://7737a90f.sibforms.com/serve/MUIFALeTVOJo5SmMvrMKFp5w8oKB81Ol0VxQc3sBwKZzfeydpqXVjbOx1MTWuoeCFc_KIdVetnaN7OgSFtb6KpA46vBn6iJezjI4VD_Kt8MMLeVcgC7pO3MQqU_MnjrrrdzuFg-OQXkEC33VYAU9yDwEDC5qcD6Xsxs0COvkpfA7kUq19QkIQ2vKjfglxN8_x0i8wDq_6GDa3gfN?isAjax=1', {
      method: 'POST',
      body: data,
    })
    .then(response => response.json())
    .then(data => {
      hideModal();
      thankyouModal.classList.remove('hidden');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });
});

