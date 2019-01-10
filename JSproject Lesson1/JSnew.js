let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', ''),
    answer1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    answer11 = prompt("Во сколько обойдется?", ''),
    answer2 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    answer21 = prompt("Во сколько обойдется?", '');

let appData = {
	budget: money,
	expenses: {answer1 :  answer11, answer2 : answer21},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};


alert(appData.budget / 30);

console.log(appData["expenses"]);