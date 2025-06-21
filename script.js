function calculate() {
    const walletAmount = parseFloat(document.getElementById('value1').value);
    const grantPrice = parseFloat(document.getElementById('value2').value);
    
    // Validate input
    if (isNaN(walletAmount) || isNaN(grantPrice) || grantPrice <= 0) {
        document.getElementById('result').innerText = "Please enter valid numbers.";
        return;
    }

    // Calculations
    const walletAmountPerQuarter = walletAmount / 4;
    const amountPerGrantPrice = walletAmountPerQuarter / grantPrice;
    const shareQuantity = Math.ceil(amountPerGrantPrice); // Round up

    // Display results
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Results:</h2>
        <p>Wallet Amount Per Quarter: $${walletAmountPerQuarter.toFixed(2)}</p>
        <p>Grant Price: $${grantPrice.toFixed(2)}</p>
        <p>Amount Per Grant Price: $${amountPerGrantPrice.toFixed(2)}</p>
        <p>Share Quantity: ${shareQuantity}</p>`;
}
