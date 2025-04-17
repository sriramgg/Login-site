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

function registerUser() {
  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  if (name && email && password) {
    const otp = Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userOTP", otp);
    alert("OTP Sent: " + otp); // For demo only
    window.location.href = "verify.html";
  } else {
    alert("Fill all fields");
  }
}
