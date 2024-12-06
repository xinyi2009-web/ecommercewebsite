document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const fullName = document.getElementById('fullName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const address = document.getElementById('address').value;
    const country = document.getElementById('country').value;
    const selectedCity = document.getElementById('CitySelect').value;

    console.log('Full Name:', fullName);
    console.log('Phone Number:', phoneNumber);
    console.log('Address:', address);
    console.log('Selected City:', selectedCity);
});

// Validation
if (!fullName || !phoneNumber || !address || !country || !city) {
    // If any field is empty, show error message
    document.getElementById('checkoutMessage').innerHTML = "<p style='color:red;'>All fields must be filled!</p>";
    return;
}

// Optional: You can add more validation (e.g., check if the phone number is valid)

// Simulate order completion
document.getElementById('checkoutMessage').innerHTML = `
    <p style="color:green;">Checkout successful!</p>
    <p><strong>Order Summary:</strong></p>
    <p>Name: ${fullName}</p>
    <p>Phone: ${phoneNumber}</p>
    <p>Address: ${address}</p>
    <p>Country: ${country}</p>
    <p>City: ${city}</p>
    <p>Total: RM0.00</p>
`;


