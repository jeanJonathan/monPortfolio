// ================= EMAILJS CONFIG =================

// Initialisation EmailJS
(function () {
  emailjs.init("9sb09pm0-9fkbfVyH");
})();


// ================= FORM HANDLER =================

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contact-form");
  const loading = document.querySelector(".loading");
  const errorMessage = document.querySelector(".error-message");
  const successMessage = document.querySelector(".sent-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Reset messages
    errorMessage.innerHTML = "";
    successMessage.style.display = "none";
    loading.style.display = "block";

    // Récupération des données
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.querySelector("textarea[name='message']").value
    };

    // ================= ENVOI EMAIL =================

    emailjs.send("service_btylw54", "template_gaq5alh", formData)
      .then(function () {

        // Succès
        loading.style.display = "none";
        successMessage.style.display = "block";

        form.reset();

      })
      .catch(function (error) {

        // Erreur
        loading.style.display = "none";
        errorMessage.innerHTML = "Erreur lors de l'envoi. Réessayez.";

        console.error("EmailJS Error:", error);

      });

  });

});