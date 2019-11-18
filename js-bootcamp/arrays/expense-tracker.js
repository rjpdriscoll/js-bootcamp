const account = {
    name: 'Ryan Driscoll',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({description: description, amount: amount});
    },
    addIncome: function (description, amount) {
        this.income.push({description: description, amount: amount});
    },
    getAccountSummary: function () {
        let expenseTotal = 0;
        let incomeTotal = 0;
        this.expenses.forEach(function (expense) {
            expenseTotal += expense.amount;
        });
        this.income.forEach(function (income) {
            incomeTotal += income.amount;
        });
        return `${this.name} has a balance of $${incomeTotal - expenseTotal}. $${incomeTotal} in income. $${expenseTotal} in expenses.`;
    }
};

// 1. Add income array to account
// 2. setup addIncome method -> description (str), amount (int)
// 3. tweak getAccountSummary (income - expense = balance)

// Ryan Driscoll has a balance of $10. $100 in income. $90 in expenses.

account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addIncome('Job', 1000);
console.log(account.getAccountSummary());