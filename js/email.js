function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var location = document.getElementById("location").value;
    var message = document.getElementById("message").value;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "joshuakelex413@gmail.com",
        Password: "3F53318EC4C5284A9A9ABA02CFAF385FD26D",
        To: "ekelechi413@gmail.com",
        From: email,
        Subject: "New Message from Contact Form",
        Header: "test header",
        Body: "Name: " + name + "<br>Email: " + email + "<br>phone: " + phone + "<br>Location: " + location + "<br>Message: " + message
    }).then(function (response) {
        if (response === "OK") {
            alert("Message sent successfully. We will get back to you");
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("location").value = "";
            document.getElementById("message").value = "";
        } else {
            alert("Message failed to send. Please try again later.");
        }
        console.log(response)
    });

    console.log(message)
}