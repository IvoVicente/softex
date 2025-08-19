let readline = require('readline-sync')

let nome = readline.question("Qual é o seu nome?")
console.log(`oi ${nome}`)

let numero = 1
let fruta = "banana"

if(numero >= 2 && fruta == "banana"){
    console.log("aprovado")

}else{
    console.log("reprovado")
}