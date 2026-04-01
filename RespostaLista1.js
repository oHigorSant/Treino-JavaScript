// Exercício 1: Dobrar números
const dados1 = [1,2,3,4,5];
const resultado1 = dados1.map(num => num * 2);
console.log('Exercício 1 - Dobrar números:', resultado1);

// Exercício 2: Filtrar pares
const dados2 = [1,2,3,4,5,6];
const resultado2 = dados2.filter(num => num % 2 === 0);
console.log('Exercício 2 - Filtrar pares:', resultado2);

// Exercício 3: Somar
const dados3 = [10,20,30];
const resultado3 = dados3.reduce((acc, num) => acc + num, 0);
console.log('Exercício 3 - Somar:', resultado3);

// Exercício 4: Inverter string
const dados4 = "hello";
const resultado4 = dados4.split('').reverse().join('');
console.log('Exercício 4 - Inverter string:', resultado4);

// Exercício 5: Maiúsculas
const dados5 = "world";
const resultado5 = dados5.toUpperCase();
console.log('Exercício 5 - Maiúsculas:', resultado5);

// Exercício 6: Adicionar 10
const dados6 = [5,15,25];
const resultado6 = dados6.map(num => num + 10);
console.log('Exercício 6 - Adicionar 10:', resultado6);

// Exercício 7: Remover duplicatas
const dados7 = [1,2,2,3,3,3];
const resultado7 = [...new Set(dados7)];
console.log('Exercício 7 - Remover duplicatas:', resultado7);

// Exercício 8: Ordenar
const dados8 = [3,1,4,1,5];
const resultado8 = dados8.sort((a, b) => a - b);
console.log('Exercício 8 - Ordenar:', resultado8);

// Exercício 9: Contar ocorrências
const dados9 = ["a","b","a","c"];
const resultado9 = dados9.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
console.log('Exercício 9 - Contar ocorrências:', resultado9);

// Exercício 10: Mesclar arrays
const dados10 = [[1,2],[3,4]];
const resultado10 = dados10.flat();
console.log('Exercício 10 - Mesclar arrays:', resultado10);

// Exercício 11: Máximo
const dados11 = [10,5,20,15];
const resultado11 = Math.max(...dados11);
console.log('Exercício 11 - Máximo:', resultado11);

// Exercício 12: Mínimo
const dados12 = [10,5,20,15];
const resultado12 = Math.min(...dados12);
console.log('Exercício 12 - Mínimo:', resultado12);

// Exercício 13: Média
const dados13 = [10,20,30,40];
const resultado13 = dados13.reduce((acc, num) => acc + num, 0) / dados13.length;
console.log('Exercício 13 - Média:', resultado13);

// Exercício 14: Todos positivos
const dados14 = [1,-2,3,4];
const resultado14 = dados14.every(num => num > 0);
console.log('Exercício 14 - Todos positivos:', resultado14);

// Exercício 15: Algum negativo
const dados15 = [1,2,-3,4];
const resultado15 = dados15.some(num => num < 0);
console.log('Exercício 15 - Algum negativo:', resultado15);

// Exercício 16: Transformar em objetos
const dados16 = ["nome","idade"];
const resultado16 = dados16.map(key => ({ [key]: key }));
console.log('Exercício 16 - Transformar em objetos:', resultado16);

// Exercício 17: Strings > 3 chars
const dados17 = ["a","ab","abc","abcd"];
const resultado17 = dados17.filter(str => str.length > 3);
console.log('Exercício 17 - Strings > 3 chars:', resultado17);

// Exercício 18: Substituir vogais por '*'
const dados18 = "aeiou";
const resultado18 = dados18.replace(/[aeiou]/g, '*');
console.log('Exercício 18 - Substituir vogais por \'*\':', resultado18);

// Exercício 19: Fatorial 5
const dados19 = 5;
function fatorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * fatorial(n - 1);
}
const resultado19 = fatorial(dados19);
console.log('Exercício 19 - Fatorial 5:', resultado19);

// Exercício 20: Fibonacci 10
const dados20 = 10;
function fibonacci(n) {
  const seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq.slice(0, n);
}
const resultado20 = fibonacci(dados20);
console.log('Exercício 20 - Fibonacci 10:', resultado20);

// Exercício 21: Remover nulos
const dados21 = [1,null,3,null];
const resultado21 = dados21.filter(item => item !== null);
console.log('Exercício 21 - Remover nulos:', resultado21);

// Exercício 22: Agrupar por propriedade
const dados22 = [{tipo:"a",val:1},{tipo:"b",val:2},{tipo:"a",val:3}];
const resultado22 = dados22.reduce((acc, item) => {
  if (!acc[item.tipo]) acc[item.tipo] = [];
  acc[item.tipo].push(item);
  return acc;
}, {});
console.log('Exercício 22 - Agrupar por propriedade:', resultado22);

// Exercício 23: Soma de propriedades
const dados23 = [{x:1,y:2},{x:3,y:4}];
const resultado23 = dados23.reduce((acc, obj) => {
  acc.x += obj.x;
  acc.y += obj.y;
  return acc;
}, {x: 0, y: 0});
console.log('Exercício 23 - Soma de propriedades:', resultado23);

// Exercício 24: Inverter ordem palavras
const dados24 = "hello world";
const resultado24 = dados24.split(' ').reverse().join(' ');
console.log('Exercício 24 - Inverter ordem palavras:', resultado24);

// Exercício 25: Contar palavras
const dados25 = "this is a test";
const resultado25 = dados25.split(' ').length;
console.log('Exercício 25 - Contar palavras:', resultado25);
