function simulateQR() {
  alert("QR Scanned! Redirecting...");
  window.location.href = "dashboard.html";
}

function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  if (email && pass) {
    alert("Login success!");
    window.location.href = "dashboard.html";
  } else {
    alert("Enter email and password");
  }
}
