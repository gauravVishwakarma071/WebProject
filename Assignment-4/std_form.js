document.getElementById("studentForm").addEventListener("submit", function(event) {
  const phone = document.querySelector("input[name='phone']").value;
  if (!/^[0-9]{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit phone number");
    event.preventDefault();
  }
});
