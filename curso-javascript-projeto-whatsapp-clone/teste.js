var pessoas = [
  { id: 1, nome: "juca", sobrenome: "da silva", idade: 42 },
  { id: 2, nome: "daniel", sobrenome: "gonçalves", idade: 21 },
  { id: 3, nome: "matheus", sobrenome: "garcia", idade: 28 },
  { id: 4, nome: "gabriel", sobrenome: "pinheiro", idade: 21 }
];

pessoas.forEach(e => {
  e.nome = `${e.nome.charAt(0).toUpperCase() + e.nome.substring(1)}`;
  console.log("Olá, " + e.nome + " " + e.sobrenome + "!");
});
