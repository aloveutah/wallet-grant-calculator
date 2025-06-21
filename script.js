function calculate() {
    const walletAmount = parseFloat(document.getElementById('value1').value);
    const grantPrice = parseFloat(document.getElementById('value2').value);
    
    // Validate input
    if (isNaN(walletAmount) || isNaN(grantPrice) || grantPrice <= 0) {
        document.getElementById('result').innerText = "Please enter valid numbers.";
        return;
    }

    // Calculations
    const walletAmountPerQuarter = walletAmount / 4;  // Calculate wallet amount per quarter
    const divisionResult = walletAmountPerQuarter / grantPrice;  // Wallet Amount Per Quarter / Grant Price
    const shareQuantity = Math.ceil(divisionResult); // Round up for share quantity

    // Display results
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Results:</h2>
        <p>Wallet Amount Per Quarter: $${walletAmountPerQuarter.toFixed(2)}</p> <!-- 2 decimal places with $ -->
        <p>Grant Price: $${grantPrice.toFixed(2)}</p> <!-- 2 decimal places with $ -->
        <p>Wallet Amount Per Quarter / Grant Price: ${divisionResult.toFixed(4)}</p> <!-- 4 decimal places -->
        <p>Share Quantity: ${shareQuantity}</p>`; // No specific formatting needed
}
