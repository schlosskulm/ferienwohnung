// EmailJS Contact Service Code

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('service_fcm8eeh', 'schlosskulm_template', this)
            .then(function () {
                window.location.href = 'https://schlosskulm.github.io/ferienwohnung/index.html';
            }, function (error) {
                console.log('FAILED...', error);
                alert('Unfortunately your message has not been sent due to an error. Please try again.');
            });
    });
};