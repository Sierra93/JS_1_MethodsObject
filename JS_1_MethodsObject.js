let money, time;
function Start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    // Если оставили пустоую строку либо ввели не число
    while (isNaN(money) || money === "" || money === null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
Start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");
            if (typeof (a) === "string" && (a !== null) && a !== ""
                && b !== "" &&
                a.length < 50) {
                console.log("done");
                appData[a] = b;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        // Необходимые проверки
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        }
        else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        }
        else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        }
        else {
            console.log("Ошибка");
        }
    },
    checkSavings: function () {
        // Если есть сбережения
        if (appData.savings === true) { 
            let save = +prompt("Какова сумма накоплений?");
            let percent = +prompt("Под какой процент:");
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего дипозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 2; i++) {
            let opt = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    // Дополнительный доход
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительных доход (Перечислите через запятую)", "");
        while (typeof (items) !== "string" && items === "") {
            let items = prompt("Что принесет дополнительных доход (Перечислите через запятую)", "");
        }
        appData.income = items.split(", ");
        appData.income.push(prompt("Может что то еще?"));
        appData.income.sort();  // Сортируем по алфавиту
        let res;
        appData.income.forEach(function (elem) {
            res = elem;
        });
        alert("Способы доп.заработка: " + res);
        // Просто вывод всех данных объекта
        for (let elem in appData) {
            console.log("Наша программа включает в себя данные: " + elem);
        }        
    }
};