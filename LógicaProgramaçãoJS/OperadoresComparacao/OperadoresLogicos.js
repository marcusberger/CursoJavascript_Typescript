/*
&& -> AND Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR  Uma das expressões precisam ser verdadeira para retornar true
!  -> NOT 
*/

const usuario = 'Marcus'
const senha = '123456'

const vaiLogar = usuario === 'Marcus' && senha === '123456'
console.log(vaiLogar);
console.log(!false);