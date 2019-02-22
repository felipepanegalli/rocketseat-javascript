var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};

function gerarFrase(end) {
  return (
    "O usuário mora em " +
    end.cidade +
    " / " +
    end.uf +
    ", no bairro " +
    end.bairro +
    ", na " +
    end.rua +
    " com nº" +
    end.numero
  );
}

console.log("Exercício 01: ", gerarFrase(endereco));
