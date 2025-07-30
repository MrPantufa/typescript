"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multiplicacao_1 = require("./multiplicacao");
const saudacao_1 = require("./saudacao");
// Teste da multiplicação
const multResultado = (0, multiplicacao_1.multiplicacao)(5, 4);
console.log(`multiplicacao(5, 4) = ${multResultado}`);
// Deve imprimir: multiplicacao(5, 4) = 20
// Teste da saudação
const saudResultado = (0, saudacao_1.saudacao)('Mateus');
console.log(saudResultado);
// Deve imprimir: Olá Mateus
