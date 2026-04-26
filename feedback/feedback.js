(function(){
    emailjs.init("OaiCdC3DGtn3Serur");
})();

document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        service: document.getElementById("service").value,
        rating: document.getElementById("rating").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_embnveu", "template_b2w93ab", params)
    .then(function(response) {
        document.getElementById("successMsg").innerText = "Feedback sent successfully!";
        document.getElementById("feedbackForm").reset();
    }, function(error) {
        document.getElementById("successMsg").innerText = "Failed to send. Try again.";
    });
});