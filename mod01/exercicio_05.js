var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

for (let usuario of usuarios) {
  console.log(
    "O " + usuario.nome + " possui as habilidades: " + usuario.habilidades + "."
  );
}

/** Saida
 * O Diego possui as habilidades: Javascript, ReactJS, Redux
 * O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
 */

/** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of */
