/*
Marcus Berger tem 30 anos, pesa 76kg
tem 1.72 de altura  seu IMC é de 
Marcus Berger nasceu
*/

const nome = 'Marcus';
const sobrenome = 'Berger';
const idade = 30;
const peso = 76;
const altura = 1.72;
let imc = (peso/(altura*altura));
let anoNascimento;
anoNascimento = 1993;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`);
console.log(`tem ${altura} de altura e seu imc é ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em: ${anoNascimento}`);
