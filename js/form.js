(function () {
  emailjs.init('ljXqQ96bYgHvyAgYA');
})();
(function () {
  'use strict';
  window.addEventListener(
    'load',
    function () {
      // Get the forms we want to add validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          'submit',
          function (event) {
            event.preventDefault();

            let alert = document.getElementById('email-alert');

            if (form.checkValidity() === false) {
              event.stopPropagation();
              form.classList.add('was-validated');
            } else {
              this.contact_number.value = (Math.random() * 100000) | 0;

              emailjs.sendForm('service_ec3t0wb', 'template_g1qb1zn', this).then(
                function () {
                  form.classList.remove('was-validated');

                  alert.textContent = 'Message sent';
                  alert.classList.add('alert-success');
                  $('.alert').addClass('show');
                  setTimeout(function () {
                    $('.alert').removeClass('show');
                  }, 5000);
                },

                function (error) {
                  console.log(error)
                  alert.textContent = error;
                  alert.classList.add('alert-danger');
                  $('.alert').addClass('show');
                  setTimeout(function () {
                    $('.alert').removeClass('show');
                  }, 5000);
                }
              );
            }
          },
          false
        );
      });
    },
    false
  );
})();
