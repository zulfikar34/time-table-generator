function generateTable() {
    const numberInput = document.getElementById("numberInput").value;
    const errorMessage = document.getElementById("errorMessage");
    const tableContainer = document.getElementById("tableContainer");

    // Clear previous table and error message
    tableContainer.innerHTML = "";
    errorMessage.textContent = "";

    // Validate input
    if (numberInput === "" || isNaN(numberInput)) {
        errorMessage.textContent = "Please enter a valid number (1-20).";
        return;
    }

    const number = parseInt(numberInput);

    
    if (number <= 0) {
        errorMessage.textContent = "Please enter a number greater than 0!";
        return;
    }

    // Check if the number is greater than 10
    if (number > 20) {
        errorMessage.textContent = "Please enter a number between 1 and 20.";
        return;
    }

    // Generate the table
    let tableHTML = "<table>";
    tableHTML += "<tr><th>Multiplier</th><th>Result</th></tr>";

    for (let i = 1; i <= 10; i++) {
        tableHTML += `<tr><td>${number} x ${i}</td><td>${number * i}</td></tr>`;
    }

    tableHTML += "</table>";
    tableContainer.innerHTML = tableHTML;
}