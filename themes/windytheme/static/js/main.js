document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById('modal');
  const overlay = document.getElementById('overlay');
  const submitEmail = document.getElementById('submitEmail');
  const emailInput = document.getElementById('emailInput');
  const formEl = document.getElementById('subscribeForm');
  const thankyouMessage = document.getElementById('thankyouMessage');

  function hideModal() {
    modal.classList.add('slide-up');
    modal.classList.remove('slide-down');
  }

  document.body.addEventListener('click', function(e) {
    const clickedId = e.target.id

    if (clickedId === 'openModal') {
      modal.classList.remove('hidden');
      modal.classList.remove('slide-up');
      modal.classList.add('slide-down');

      return
    }

    if (clickedId === 'closeModal') {
      hideModal()

      return
    }
  });

  overlay.addEventListener('click', hideModal);

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

    document.getElementById('spinner-wrap').classList.remove('hidden')
    document.getElementById('submit-text-wrap').classList.add('hidden')

    const data = new FormData(formEl)

    fetch('https://7737a90f.sibforms.com/serve/MUIFALeTVOJo5SmMvrMKFp5w8oKB81Ol0VxQc3sBwKZzfeydpqXVjbOx1MTWuoeCFc_KIdVetnaN7OgSFtb6KpA46vBn6iJezjI4VD_Kt8MMLeVcgC7pO3MQqU_MnjrrrdzuFg-OQXkEC33VYAU9yDwEDC5qcD6Xsxs0COvkpfA7kUq19QkIQ2vKjfglxN8_x0i8wDq_6GDa3gfN?isAjax=1', {
      method: 'POST',
      body: data,
    })
    .then(response => response.json())
    .then(data => {
      //hideModal();
      document.getElementById('subscribeForm').classList.add('hidden')
      thankyouMessage.classList.remove('hidden');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });
});

