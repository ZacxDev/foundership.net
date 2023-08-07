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

    fetch('https://d37a32c3.sibforms.com/serve/MUIFAPxZYOoPf7HMMBYINhyHv07dDEBwW119vNSYGTPSZ_gXjwLP1eOP5Rlp-z-ZAhKsvz6f8f5YLXrSxk-nsjUx3lDXSYswkWiLRnweOnbjgWhQYZfJeamX48P9QfGUmh41RV3zB_oaJtWG-SNKJKgQL2luKHa3Ng6dxoFtVubCn474iYAm9pLRY7PZ2WYvX1G4aIqs1QBD9pgu?isAjax=1', {
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

