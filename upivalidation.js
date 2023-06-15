function validateUPI(upiId) {
    // Regular expression pattern for UPI ID validation
    var pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+$/;
  
    // Test the UPI ID against the pattern
    return pattern.test(upiId);
  }
  
  // Example usage
  var upiId = "abc@ybl";
  var isValid = validateUPI(upiId);
  
  if (isValid) {
    console.log("UPI ID is valid");
  } else {
    console.log("UPI ID is not valid");
  }
  