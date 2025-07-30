import { multiplicacao } from './multiplicacao';
import { saudacao } from './saudacao';

// Teste da multiplicação
const multResultado = multiplicacao(5, 4);
console.log(`multiplicacao(5, 4) = ${multResultado}`);  
// Deve imprimir: multiplicacao(5, 4) = 20

// Teste da saudação
const saudResultado = saudacao('Mateus');
console.log(saudResultado);  
// Deve imprimir: Olá Mateus
