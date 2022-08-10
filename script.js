const scriptURL =
  "https://script.google.com/macros/s/AKfycbwRNCBlYNYz8K7Nm27Do-WJ4i-Joizrjp40tPgemv1ZR3a68Get2a0vMaZZ5cEJR5NfhA/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  alert("Thankyou ! Your problem will be solved fastly");
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) }).then(
    (response) => ((msg.innerHTML = "Complaint Successfully😉"), 1000)
  );
  setTimeout(function () {
    msg.innerHTML = "Complaint Successfully😉 ";
  }, 100);
  form.reset().catch((error) => console.error("Error!", error.message));
});
