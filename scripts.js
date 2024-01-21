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

    
})