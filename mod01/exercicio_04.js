let exp;

function experiencia(anos) {
  if (anos >= 0 && anos <= 1) {
    exp = "Iniciante";
  } else if (anos >= 1 && anos <= 3) {
    exp = "Intermediário";
  } else if (anos >= 3 && anos <= 6) {
    exp = "Avançado";
  } else {
    exp = "Jedi Master";
  }
  return exp;
}
var anosEstudo = 7;

console.log(experiencia(anosEstudo));
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
