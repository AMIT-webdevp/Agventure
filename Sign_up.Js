document.getElementById('signUpForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // Basic password validation (ensure passwords match)
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    const requestData = {
      fullName: fullName,
      email: email,
      password: password,
    };
  
    try {
      // Replace with your actual API Gateway endpoint URL
      const response = await fetch('https://ikpizvf50k.execute-api.us-east-1.amazonaws.com/api/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        // Display success message and redirect to sign-in page
        alert(result);  // Display the success message from Lambda
        window.location.href = 'Sign_in.html'; // Redirect to sign-in page
      } else {
        // Display error message from the backend
        alert(result); // Display the error returned from Lambda (e.g., email already exists)
      }
    } catch (error) {
      // Handle network or unexpected errors
      alert('A network error occurred. Please check your connection and try again.');
      console.error('Error:', error);
    }
  });
