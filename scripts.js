document.getElementById("btnElement").addEventListener("click", function addExpense() {
    
    const expense = document.createTextNode(document.getElementById("inputExpense").value)
    const date = document.createTextNode(document.getElementById("inputDate").value)
    const amount = document.createTextNode(document.getElementById("inputAmount").value)
    const symbol = document.createTextNode("$")
    const trElement = document.createElement("tr")
    const expenseElement = document.createElement("td")
    const dateElement = document.createElement("td")
    const amountElement = document.createElement("td")
    const deleteElement = document.createElement("button")
    deleteElement.innerHTML = `<i class="fas fa-trash"></i>`

    if(!expense.length || !date.length || !amount.length ) {
        alert("Empty Inputs!")
    }
    else {
        document.getElementById("commentElement").style.display = "none"
        expenseElement.appendChild(expense)
        dateElement.appendChild(date)
        amountElement.appendChild(symbol)
        amountElement.appendChild(amount)
        trElement.append(expenseElement, dateElement, amountElement, deleteElement)
        document.getElementById("writeExpense").append(trElement)
        deleteElement.addEventListener("click", function deleteExpense() {
            document.getElementById("writeExpense").removeChild(trElement)
        })
    }
})