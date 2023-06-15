function validateEmail(email) {
    // Regular expression pattern for email validation
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Test the email against the pattern
    return pattern.test(email);
  }
  
  // Example usage
  var email = "test@yahoo.com";
  var isValid = validateEmail(email);
  
  if (isValid) {
    console.log("Email is valid");
  } else {
    console.log("Email is not valid");
  }
  