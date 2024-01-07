/*var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('n');
let [codigo, quantidade] = lines.shift().trim().split(' ').map((x) => parseInt(x));*/

var productCod = 4;
var quantity = 3;

const items = [
  { codigo: 1, especificacao: "Cachorro Quente", preco: 4.0 },
  { codigo: 2, especificacao: "X-Salada", preco: 4.5 },
  { codigo: 3, especificacao: "X-Bacon", preco: 5.0 },
  { codigo: 4, especificacao: "Torrada simples", preco: 2.0 },
  { codigo: 5, especificacao: "Refrigerante", preco: 1.5 },
];

const getProduct = items
  .filter((item) => {
    if (productCod === item.codigo) {
      return item;
    }
  })
  .map((teste) => {
    const price = parseFloat(teste.preco * quantity);
    return price;
  });

  console.log(getProduct)

console.log(`Total: R$ ${getProduct[0].toFixed(2)}`);
