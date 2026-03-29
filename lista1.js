const produtos = [
  { nome: "Notebook", preco: 3000 },
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 150 },
  { nome: "Monitor", preco: 1200 },
];

// EXERCÍCIO 1:
// Retorne um array apenas com produtos acima de 100 reais,
// contendo somente o nome dos produtos.

const produtosAcimaCem = produtos
.filter((produto) => produto.preco > 100)
.map(produto => produto.nome);

// console.log(produtosAcimaCem);


// EXERCÍCIO 2:
// Some todos os preços do array produtos.

const total = produtos.reduce((acc, p) => acc + p.preco, 0);



// EXERCÍCIO 3:
// Encontre o produto com nome "Monitor".

const monitor = produtos.find(p => p.nome === "Monitor")
console.log(monitor);

// EXERCÍCIO 4:
// Ordene os produtos do mais caro para o mais barato.

const ordenado = [...produtos].sort((a, b) => b.preco - a.preco);

const numeros = [1, 2, 2, 3, 4, 4, 5];

// EXERCÍCIO 5:
// Retorne um array sem números repetidos.


const pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "João", idade: 20 },
  { nome: "Carlos", idade: 25 }
];

// EXERCÍCIO 6:
// Agrupe as pessoas por idade no formato:
// {
//   20: ["Ana", "João"],
//   25: ["Carlos"]
// }