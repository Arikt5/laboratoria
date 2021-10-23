// perguntar o nome e sobrenome da pessoa
let name = prompt("Qual seu nome e Sobrenome?");

// pegar a primeira letra do primeira nome
let firstInitial = name.slice(0,1);

// pegar a posição da primeira letra do segundo nome
let secondInitialPosition = name.indexOf(" ") + 1;

// pegar a primeira letra do segundo nome
let secondInitial = name.slice(secondInitialPosition, secondInitialPosition + 1);

// mostrar as iniciais na página web
document.write("Suas iniciais são: " + firstInitial.toUpperCase() + secondInitial.toUpperCase());



