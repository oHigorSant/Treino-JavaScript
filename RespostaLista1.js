// Exercício 1: Dobrar números
const dados1 = [1, 2, 3];
const resultado1 = dados1.map(x => x * 2);
console.log(resultado1);

// Exercício 2: Filtrar números pares
const dados2 = [1, 2, 3, 4];
const resultado2 = dados2.filter(x => x % 2 === 0);
console.log(resultado2);

// Exercício 3: Somar números
const dados3 = [1, 2, 3];
const resultado3 = dados3.reduce((a, b) => a + b, 0);
console.log(resultado3);

// Exercício 4: Inverter string
const dados4 = "hello";
const resultado4 = dados4.split('').reverse().join('');
console.log(resultado4);

// Exercício 5: Converter para maiúsculas
const dados5 = "hello";
const resultado5 = dados5.toUpperCase();
console.log(resultado5);

// Exercício 6: Remover duplicatas
const dados6 = [1, 2, 2, 3];
const resultado6 = [...new Set(dados6)];
console.log(resultado6);

// Exercício 7: Ordenar números
const dados7 = [3, 1, 4, 1];
const resultado7 = dados7.sort((a, b) => a - b);
console.log(resultado7);

// Exercício 8: Contar elementos
const dados8 = [1, 2, 3];
const resultado8 = dados8.length;
console.log(resultado8);

// Exercício 9: Mesclar arrays
const dados9 = [[1, 2], [3, 4]];
const resultado9 = dados9.flat();
console.log(resultado9);

// Exercício 10: Encontrar máximo
const dados10 = [1, 5, 3];
const resultado10 = Math.max(...dados10);
console.log(resultado10);

// Exercício 11: Encontrar mínimo
const dados11 = [1, 5, 3];
const resultado11 = Math.min(...dados11);
console.log(resultado11);

// Exercício 12: Calcular média
const dados12 = [1, 2, 3, 4];
const resultado12 = dados12.reduce((a, b) => a + b, 0) / dados12.length;
console.log(resultado12);

// Exercício 13: Verificar se todos são positivos
const dados13 = [1, 2, -3];
const resultado13 = dados13.every(x => x > 0);
console.log(resultado13);

// Exercício 14: Transformar em objetos
const dados14 = [1, 2, 3];
const resultado14 = dados14.map(x => ({ value: x }));
console.log(resultado14);

// Exercício 15: Substituir caracteres
const dados15 = "hello world";
const resultado15 = dados15.replace(/o/g, 'x');
console.log(resultado15);

// Exercício 16: Calcular fatorial
const dados16 = 5;
function fatorial(n) { return n <= 1 ? 1 : n * fatorial(n - 1); }
const resultado16 = fatorial(dados16);
console.log(resultado16);

// Exercício 17: Gerar sequência
const dados17 = 5;
const resultado17 = Array.from({ length: dados17 }, (_, i) => i + 1);
console.log(resultado17);

// Exercício 18: Remover nulos
const dados18 = [1, null, 3, null];
const resultado18 = dados18.filter(x => x !== null);
console.log(resultado18);

// Exercício 19: Agrupar por paridade
const dados19 = [1, 2, 3, 4];
const resultado19 = dados19.reduce((acc, x) => ({ ...acc, [x % 2]: (acc[x % 2] || []).concat(x) }), {});
console.log(resultado19);

// Exercício 20: Somar propriedades
const dados20 = [{ a: 1 }, { a: 2 }];
const resultado20 = dados20.reduce((sum, obj) => sum + obj.a, 0);
console.log(resultado20);

// Exercício 21: Inverter ordem de palavras
const dados21 = "hello world";
const resultado21 = dados21.split(' ').reverse().join(' ');
console.log(resultado21);

// Exercício 22: Contar palavras
const dados22 = "hello world hello";
const resultado22 = dados22.split(' ').length;
console.log(resultado22);

// Exercício 23: Filtrar strings maiores que 3
const dados23 = ["a", "abcd", "ab"];
const resultado23 = dados23.filter(s => s.length > 3);
console.log(resultado23);

// Exercício 24: Converter array para string
const dados24 = [1, 2, 3];
const resultado24 = dados24.join(',');
console.log(resultado24);

// Exercício 25: Encontrar índice de elemento
const dados25 = [1, 2, 3];
const resultado25 = dados25.indexOf(2);
console.log(resultado25);