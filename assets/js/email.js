function sendMail(contactForm) {
  if ( document.getElementById("firstName").value && document.getElementById("lastName").value && document.getElementById("emailAddress").value && document.getElementById("message").value ) {
    emailjs
      .send("gmail", "tsc_form", {
        from_first_name: contactForm.firstName.value,
        from_last_name: contactForm.lastName.value,
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