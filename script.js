// Get references to DOM elements
const form = document.getElementById('data-collection-form');
const output = document.getElementById('output');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get values from form inputs
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    // Display the collected data
    output.innerHTML = `
        <h2>Collected Data:</h2>
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Feedback:</strong> ${feedback}</p>
    `;

    // Optionally, you can send the data to a server here
    // For example:
    // fetch('/submit-data', {
    //     method: 'POST',
    //     body: JSON.stringify({ username, email, feedback }),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });
    
    // Reset the form after submission
    form.reset();
});
