var skills = ["Javascript", "ReactJS", "React Native"];

function temHabilidade(search) {
  return skills.indexOf(search) >= 0 ? true : false;
}
console.log(temHabilidade("Javascript")); // true ou false

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
