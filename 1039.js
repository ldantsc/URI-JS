var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let mediaAluno = lines
  .shift()
  .split(" ")
  .map((x) => parseFloat(x));
let notaExame = parseFloat(lines.shift());
let pesos = [2, 3, 4, 1];
let mediaMultiplicada = [];

for (let i = 0; i < pesos.length; i++) {
  const valores = mediaAluno[i] * pesos[i];
  mediaMultiplicada.push(valores);
}

const somaPesos = pesos.reduce(
  (valorAtual, valorProximo) => valorAtual + valorProximo
);
const somaMedia = mediaMultiplicada.reduce(
  (valorAtual, valorProximo) => valorAtual + valorProximo
);

const mediaFinal = somaMedia / somaPesos;

console.log(`Media: ${mediaFinal.toFixed(1)}`);

if (mediaFinal >= 7.0) {
  console.log("Aluno aprovado.");
} else if (mediaFinal >= 5 && mediaFinal <= 6.9) {
  console.log("Aluno em exame.");
  console.log(`Nota do exame: ${notaExame.toFixed(1)}`)
  examApprove(mediaFinal, notaExame);
} else {
  console.log("Aluno reprovado.");
}

function examApprove(media, value) {
  let mediaExam = (media + value) / 2;
  if (mediaExam < 4.9) {
    console.log("Aluno reprovado.");
  } else {
    console.log("Aluno aprovado.");
  }
  console.log(`Media final: ${mediaExam.toFixed(1)}`);
}
