function searchFlights() {
    // Get form values
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const departure = document.getElementById('departure').value;
    const returnDate = document.getElementById('return').value;

    // Simple validation
    if (from === '' || to === '' || departure === '') {
        alert('Please fill in all required fields.');
        return;
    }

    // Generate a simple flight result (mock data)
    const results = `
        <h3>Available Flights</h3>
        <p>From: ${from} To: ${to}</p>
        <p>Departure: ${departure}</p>
        ${returnDate ? `<p>Return: ${returnDate}</p>` : ''}
        <ul>
            <li>Flight 101 - $299</li>
            <li>Flight 202 - $349</li>
            <li>Flight 303 - $399</li>
        </ul>
    `;

    // Display the results
    document.getElementById('flight-results').innerHTML = results;
}
