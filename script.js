document.getElementById('credit-card-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var cardNumber = document.getElementById('card-number').value;
    var expiryDate = document.getElementById('expiry-date').value;
    var cvv = document.getElementById('cvv').value;

    // Validation (You can implement more thorough validation as needed)
    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
        alert('Please enter a valid 16-digit card number.');
        return;
    }

    if (!expiryDate.match(/^\d{2}\/\d{2}$/)) {
        alert('Please enter a valid expiry date in MM/YY format.');
        return;
    }

    if (cvv.length !== 3 || isNaN(cvv)) {
        alert('Please enter a valid 3-digit CVV.');
        return;
    }

    // If all validation passes, you can proceed with submitting the form or further processing
    alert('Be Careful Of Where Your Information Is Going To! BE AWARE!!!');
});
