// Get form fields
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const phoneField = document.getElementById('phone');
const bgmiNameField = document.getElementById('bgmi-name');

// Select Razorpay button using its class after it's loaded
const razorpayButtonClass = 'razorpay-payment-button';

// Function to check if all form fields are filled
function validateForm() {
    const razorpayButton = document.querySelector(`.${razorpayButtonClass}`);

    if (razorpayButton) {
        if (
            nameField.value.trim() !== '' &&
            emailField.value.trim() !== '' &&
            phoneField.value.trim() !== '' &&
            bgmiNameField.value.trim() !== ''
        ) {
            // Show payment button if all fields are filled
            razorpayButton.style.display = 'block';
        } else {
            // Hide payment button if any field is empty
            razorpayButton.style.display = 'none';
        }
    }
}

// Attach event listeners to form fields
[nameField, emailField, phoneField, bgmiNameField].forEach(field => {
    field.addEventListener('input', validateForm);
});

// Ensure Razorpay button is hidden initially
window.addEventListener('load', () => {
    const razorpayButton = document.querySelector(`.${razorpayButtonClass}`);
    if (razorpayButton) {
        razorpayButton.style.display = 'none';
    }
});

// Periodically check if the Razorpay button is added and run the validation
const intervalId = setInterval(() => {
    const razorpayButton = document.querySelector(`.${razorpayButtonClass}`);
    if (razorpayButton) {
        validateForm(); // Run validation once the button is present
        clearInterval(intervalId); // Stop checking once the button is found
    }
}, 500);
