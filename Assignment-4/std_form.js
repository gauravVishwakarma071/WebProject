document.getElementById("studentForm").addEventListener("submit", function(event) {
  const phoneInput = document.querySelector("input[name='phone']");
  const phone = phoneInput.value.trim(); // remove spaces

  if (!/^\d{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit phone number");
    phoneInput.focus(); // take user back to the field
    event.preventDefault();
  }
});
