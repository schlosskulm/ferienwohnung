// EmailJS Contact Service Code

/*window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('service_fcm8eeh', 'contact_form', this)
            .then(function () {
                alert('SUCCESS!');
                window.location.href = 'https://8000-schlosskulm-ferienwohnu-0gymsjmku15.ws-eu116.gitpod.io/';
            }, function (error) {
                console.log('FAILED...', error);
                alert('Unfortunately your message has not been sent due to an error. Please try again.');
            });
    });
};*/

function sendMail(){
    let parms = {
        name : document.getElementById("user_name").value,
        email : document.getElementById("user_email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_fcm8eeh", "schlosskulm_template",parms).then(alert("Die E-Mail wurde abgeschickt!"))
}