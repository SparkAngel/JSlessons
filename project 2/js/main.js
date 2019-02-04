'use strict';

let startBtn = document.getElementById('start'),
budgetValue = document.getElementsByClassName('budget-value')[0],
daybudgetValue = document.getElementsByClassName("daybudget-value")[0],
levelValue = document.getElementsByClassName("level-value")[0],
expensesValue = document.getElementsByClassName("expenses-value")[0],
incomeValue = document.getElementsByClassName("income-value")[0],
monthsavingsValue = document.getElementsByClassName("monthsavings-value")[0],
yearsavingsValue = document.getElementsByClassName("yearsavings-value")[0],
optionalexpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
expensesItem = document.getElementsByClassName('expenses-item'),
expensesItemBtn = document.getElementsByTagName('button')[0],
optionalexpensesBtn = document.getElementsByTagName('button')[1],
countBudgetBtn = document.getElementsByTagName('button')[2],
optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
chooseIncome = document.querySelector(".choose-income"),
savings = document.querySelector("#savings"),
incomeItem = document.querySelector('.choose-income'),
chooseSum = document.querySelector(".choose-sum"),
yearValue = document.querySelector(".year-value"),
percentValue = document.querySelector('.choose-percent'),
monthValue = document.querySelector(".month-value"),
dayValue = document.querySelector(".day-value");




let money, time;

expensesItemBtn.disabled = true;
optionalexpensesBtn.disabled = true;
countBudgetBtn.disabled = true;

startBtn.addEventListener('click', function(){
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
	money = +prompt("Ваш бюджет на месяц?", '');
	

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
}
appData.budget = money;
appData.timeData = time;
budgetValue.textContent = money.toFixed();
yearValue.value = new Date(Date.parse(time)).getFullYear();
monthValue.value = new Date(Date.parse(time)).getMonth()+1;
dayValue.value = new Date(Date.parse(time)).getDate();

expensesItemBtn.disabled = false;
optionalexpensesBtn.disabled = false;
countBudgetBtn.disabled = false;
});

expensesItemBtn.addEventListener('click', function(){
let sum = 0;

	for (let i = 0; i < expensesItem.length; i++) {
		let a = expensesItem[i].value,
			b = expensesItem[++i].value;
	
		if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
	
			console.log ("Vse verno");
	
			appData.expenses[a] = b;
			sum += +b;
		} else {                            
			console.log ("bad result");
			i--;
		}
	
	}
	expensesValue.textContent = sum;
});

optionalexpensesBtn.addEventListener('click', function(){
	for (let i = 0; i <= optionalexpensesItem.length; i++) {
		let opt = optionalexpensesItem[i].value;
			appData.optionalExpenses[i] = opt;
			optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
		
		}	
});

countBudgetBtn.addEventListener('click', function(){
	if (appData.budget != undefined) {
		appData.moneyPerDay = (appData.budget - +expensesValue.textContent / 30).toFixed();
		daybudgetValue.textContent = appData.moneyPerDay;
	
		if (appData.moneyPerDay < 100) {
			levelValue.textContent = "Это минимальный уровень достатка!";
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			levelValue.textContent = "Это средний уровень достатка!";
		} else if (appData.moneyPerDay > 2000) {
			levelValue.textContent = "Это высокий уровень достатка!";
		} else {
			levelValue.textContent = "Произошла ошибка";
		}	
	} else {
		daybudgetValue.textContent = "Произошла ошибка";
	}
	
});

incomeItem.addEventListener('input', function(){
	let items = incomeItem.value;
	appData.income = items.split(',  ');
	incomeValue.textContent = appData.income;
});

savings.addEventListener('click', function(){
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		 appData.savings = true;
	}
});

chooseSum.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +chooseSum.value,
		    percent = +percentValue.value;

		appData.monthIncome = sum/100/12*percent;
		appData.yearIncome = sum/100*percent;

		monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

percentValue.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +chooseSum.value,
		    percent = +percentValue.value;

		appData.monthIncome = sum/100/12*percent;
		appData.yearIncome = sum/100*percent;

		monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});



let appData = {
	budget: money, 
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false,
};

