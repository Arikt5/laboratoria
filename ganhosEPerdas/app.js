// perguntas entradas, saídas e porcentagens de impostos
// perguntar as entradas
let income = prompt("Qual é o valor da entrada?");

//saídas
let costs = prompt("Qual é o valor da saída?");

// porcentagem dos importos
let taxPercentage = prompt("Qual é a porcentagem dos impostos?");

// calcular a renda bruta
let grossProfit = income - costs;

// obter o valor dos impostos
let tax = grossProfit*taxPercentage/100;

// calcular renda liquida
let netIncome = grossProfit - tax;

// mostrando os valores na pag web
document.write("Sua renda líquida é de $" + netIncome);



