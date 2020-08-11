const form = document.querySelector('#form-container form');
const input = document.querySelectorAll('#form-container form .form-group input');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    input.forEach((input) => {
       if (!input.value) {
           input.parentElement.classList.add('error');
       } else {
        input.parentElement.classList.remove('error');
       }
    });
}) ;