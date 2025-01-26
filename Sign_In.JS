document.getElementById('signInForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form from submitting normally
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
        const response = await fetch('https://t4z11si9m6.execute-api.us-east-1.amazonaws.com/login/login_in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
  
        if (response.ok) {
            // Redirect to the navigation page directly after successful login
            window.location.href = 'Navigation.html';
        } else {
            const errorData = await response.json();
            alert(`Error: ${errorData}`);
            console.error('Error response:', errorData);
        }
    } catch (error) {
        console.error('An error occurred:', error);
        alert('An error occurred. Please try again later.');
    }
  });