document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    document.getElementById("formMessage").innerText = "Thanks for your message! I’ll get back to you soon.";
    this.reset();
  } else {
    document.getElementById("formMessage").innerText = "Please fill in all fields.";
  }
});
