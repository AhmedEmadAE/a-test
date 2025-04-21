function validateInput() {
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();

    const fullNameRegex = /^[a-zA-Z]{3,}(?:\s[a-zA-Z]{3,})+$/;

    if (!fullNameRegex.test(fullName)) {
      alert("Invalid Full Name. It should contain only characters, at least 3 characters per name part, separated by spaces.");
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|net|edu|org)\.eg$/;

    if (!emailRegex.test(email)) {
      alert("Invalid Email Address. It must be from Egypt (.com.eg, .net.eg, .edu.eg, or .org.eg).");
      return;
    }
    alert("Input is valid!");
  }