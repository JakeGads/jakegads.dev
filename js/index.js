document.getElementById('contact').addEventListener("click", function() {
    document.querySelector('.bg-modal').style.display = "flex";
    document.querySelector('.modal-contents').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
    document.querySelector('.bg-modal').style.display = "none";
    document.querySelector('.modal-contents').style.display = "none";
});

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "dsuWebDesignThrowAway@gmail.com", //make an easy acess gmail account
        Password: "LetMeIn!",
        To: 'jake.gads@gmail.com',
        From: document.getElementById("email").textContent,
        Subject: "CONTACT FORM - " + document.getElementById("name").textContent,
        Body: document.getElementById("message").textContent
    }).then(
        message => alert("mail sent successfully")
    );
}