function sendMail(contactForm) {
  let userEmail = document.getElementById("emailAddress").value;
  let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let emailValidate = userEmail.match(mailFormat);

  if ( document.getElementById("firstName").value && emailValidate && document.getElementById("message").value ) {
    emailjs
      .send("gmail", "tsc_form", {
        from_first_name: contactForm.firstName.value,
        from_email: contactForm.emailAddress.value,
        contact_message: contactForm.message.value,
      })
      .then(
        function (response) {
          console.log("SUCCESS", response);
        },
        function (error) {
          console.log("FAILED", error);
        }
      );

    // document.getElementById("contactForm").reset();

    alert("Thanks! I'll get back to you soon. Have a good one!");

    return false; // To block from loading a new page
  } else { return }
}