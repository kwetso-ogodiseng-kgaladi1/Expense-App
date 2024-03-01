/**
 * This function adds an expense entry to the expense tracker table when the button is clicked.
 * It retrieves input values for expense, date, and amount from the corresponding input fields,
 * creates HTML elements to represent the expense entry, and appends them to the expense tracker table.
 * It also adds an event listener to the delete button for each expense entry to allow deletion.
 */
document.getElementById("btnElement").addEventListener("click", function addExpense() {
    
    // Retrieve input values
    const expense = document.createTextNode(document.getElementById("inputExpense").value);
    const date = document.createTextNode(document.getElementById("inputDate").value);
    const amount = document.createTextNode(document.getElementById("inputAmount").value);
    const symbol = document.createTextNode("$");

    // Create HTML elements
    const trElement = document.createElement("tr");
    const expenseElement = document.createElement("td");
    const dateElement = document.createElement("td");
    const amountElement = document.createElement("td");
    const deleteElement = document.createElement("button");

    // Set delete button's inner HTML
    deleteElement.innerHTML = `<i class="fas fa-trash"></i>`;

    // Check if any input field is empty
    if(!expense.length || !date.length || !amount.length ) {
        alert("Empty Inputs!");
    }
    else {
        // Hide comment element
        document.getElementById("commentElement").style.display = "none";

        // Append input values to respective elements
        expenseElement.appendChild(expense);
        dateElement.appendChild(date);
        amountElement.appendChild(symbol);
        amountElement.appendChild(amount);

        // Append elements to the table row
        trElement.append(expenseElement, dateElement, amountElement, deleteElement);

        // Append the row to the expense tracker table
        document.getElementById("writeExpense").append(trElement);

        // Add event listener to delete button for deletion of the expense entry
        deleteElement.addEventListener("click", function deleteExpense() {
            document.getElementById("writeExpense").removeChild(trElement);
        });
    }
});
