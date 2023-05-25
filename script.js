// let idade = 18

// //ifs alinhados


// // if(idade >= 13){
// //     if(idade <= 17){
// //         console.log("A pessoa dependente já pode ter um cartão de crédito }vinculado ao seu")
// //     }else{
// //         console.log("Idade maior ou igual a 18")
// //     }
// // } else {
// //     console.log("Console outras possibilidades do labank")
// // }

// // com operadores lógicos

// // if(idade >= 13 && idade <= 17){
// //     console.log("A pessoa dependente já pode ter um cartão de crédito }vinculado ao seu")
// // }else if(idade >= 18){
// //     console.log("A idade é maior ou igual a 18")
// // } else{
// //     console.log("Consulte outras possibilidades do labank")
// // }





// const possuiConta = prompt("Você já possui conta no Labank ? Responda sim ou não. ")

// // if(possuiConta.toLocaleLowerCase() === "sim"){
// //     console.log("Boas vindas")
// // } else {
// //     console.log("Faça já o seu cadastro")
// // }


// //if ternário

// // possuiConta.toLocaleLowerCase() === "sim" ?
// //     console.log("Boas vindas") :
// //     console.log("Faça já o seu cadastro")




// let cartao
// let ramal = Number(prompt("Digite o ramal desejado"))

// // if(ramal === "1"){
// //     cartao = "Fácil"
// // }else if(ramal === "2"){
// //     cartao = "Black"
// // }else if(ramal === "3"){
// //     cartao = "Platinium"
// // }else if (ramal === "4"){
// //     cartao = "Master Gold"
// // } else {
// //     console.log("Escolha uma das 4 opções disponíveis")
// // }


// // switch-case
// switch(ramal){
//     case 1:
//          cartao = "Fácil"
//         break;
//     case 2:
//         cartao = "Black"
//          break;
//     case 3:
//         cartao = "Platinium"
//          break;
//     case 4:
//         cartao = "Master Gold"
//         break;
//     default:
//         console.log("Escolha uma das 4 opções disponíveis")
// }

// console.log(cartao)



let num = Number(prompt("Digite um número: "))

if(num % 2 === 0 && num % 3 === 0){
    console.log("O Número é divisível por 2 e 3")
    num === 30 ?
    console.log("Ufa, acertei"):
    console.log("Não foi dessa vez :(")
} else{
    console.log("O número não é divisível por 2 ou por 3")
}


switch(num){
    case 6:
        num = console.log("Parabéns vc acertou o número 6")
        break;
    case 12:
        num = console.log("Parabéns vc acertou o número 12")
        break;
    case 18:
        num = console.log("Parabéns vc acertou o número 18")
        break;
    case 24:
        num = console.log("Parabéns vc acertou o número 24")
        break;
    case 30:
        num = console.log("Parabéns vc acertou o número 30")
        break;
    default:
        console.log("O número é maior que 30 ou menor que 6! ")
}

