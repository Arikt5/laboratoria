// perguntar idade por meio de um prompt
let age = parseInt(prompt("Qual é a sua idade?"))

// converter a idade em segundos
let ageInSeconds = age*365*24*60*60

console.log(ageInSeconds);

//mostrar o resultado na página web pelo document.write()
document.write("Em seus" + age + "anos de vida, se passaram" + ageInSeconds + "segundos")
