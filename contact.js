// ================= EMAILJS CONFIG =================

(function () {
  emailjs.init("9sb09pm0-9fkbfVyH");
})();

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contact-form");
  const loading = document.querySelector(".loading");
  const errorMessage = document.querySelector(".error-message");
  const successMessage = document.querySelector(".sent-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    errorMessage.innerHTML = "";
    successMessage.style.display = "none";
    loading.style.display = "block";

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.querySelector("textarea[name='message']").value
    };

    // Mail vers moi
    emailjs.send("service_btylw54", "template_gaq5alh", formData)
      .then(function () {

        // Auto-reply vers utilisateur
        return emailjs.send("service_btylw54", "template_zdtmfrw", formData);

      })
      .then(function () {

        // Succès global
        loading.style.display = "none";
        successMessage.style.display = "block";
        form.reset();

      })
      .catch(function (error) {

        loading.style.display = "none";
        errorMessage.innerHTML = "Erreur lors de l'envoi.";
        console.error("EmailJS Error:", error);

      });

  });

});