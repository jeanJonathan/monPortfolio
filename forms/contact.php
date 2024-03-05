<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Assainissez et assignez les valeurs des champs de formulaire
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($_POST["subject"]));
    $message = trim($_POST["message"]);

    // Vérifiez que les champs ne sont pas vides et que l'email est valide.
    if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Gérez l'erreur ici
        echo "Oups! Il y a eu un problème avec votre soumission. Veuillez vérifier le formulaire et réessayer.";
        exit;
    }

    // Email de réception
    $receiving_email_address = 'jeanjonathank2@gmail.com';

    // Construisez le contenu de l'email
    $email_content = "Nom: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Construisez l'en-tête de l'email
    $email_headers = "From: $name <$email>";

    // Envoie l'email
    if (mail($receiving_email_address, $subject, $email_content, $email_headers)) {
        // Succès
        echo "Merci! Votre message a été envoyé.";
    } else {
        // Échec
        echo "Oups! Quelque chose s'est mal passé et nous n'avons pas pu envoyer votre message.";
        echo "Cliquez directement sur le bloc <strong>Mon Email</strong> au-dessus pour m'envoyer un email directement en attendant que le problème soit réglé.";
    }

} else {
    // N'est pas une requête POST
    echo "Oups! Quelque chose s'est mal passé et nous n'avons pas pu envoyer votre message.";
}

?>
