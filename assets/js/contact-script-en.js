// EmailJS Contact Service Code for English Page

window.onload = function () {
    document.getElementById('contact-form-en').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('service_fcm8eeh', 'schlosskulm_english', this)
            .then(function () {
                Swal.fire({
                    icon: "success",
                    text: "Thank you for your message! We will get in touch with you soon."
                });
                document.getElementById("contact-form-en").reset();
            }, function (error) {
                Swal.fire({
                    icon: "error",
                    text: "Unfortunately there was an error sending your message. Please try again later."
                });
            });
    });
};