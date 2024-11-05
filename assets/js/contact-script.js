// EmailJS Contact Service Code

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('service_fcm8eeh', 'schlosskulm_template', this)
            .then(function () {
                Swal.fire({
                    icon: "success",
                    text: "Danke für deine Nachricht! Wir werden uns zeitnah mit dir in Verbindung setzen."
                });
                document.getElementById("contact-form").reset();
            }, function (error) {
                Swal.fire({
                    icon: "error",
                    text: "Leider hat es nicht geklappt, die Nachricht zu verschicken. Versuche es später noch einmal."
                });
            });
    });

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