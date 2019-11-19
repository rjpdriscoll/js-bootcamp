let myAccount = {
    name: 'Ryan Driscoll',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses += amount;
}

let addIncome = function (account, amount) {
    account.income += amount;
}

let resetAccount = function (account) {
    account.expenses = 0;
    account.income = 0;
}

let getAccountSummary = function (account) {
    balance = account.income - account.expenses;
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`;
}

addIncome(myAccount, 1500);   // addIncome
addExpense(myAccount, 150);   // addExpense
addExpense(myAccount, 725);   // addExpense
console.log(getAccountSummary(myAccount));  // getAccountSummary
resetAccount(myAccount);   // resetAccount
console.log(getAccountSummary(myAccount));   // getAccountSummary

