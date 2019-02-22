function checaIdade(idade) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return idade < 18 ? reject() : resolve();
        }, 2000);
    });
}

checaIdade(17)
    .then(function() {
        console.log('Maior que 18');
    })
    .catch(function() {
        console.log('Menor que 18');
    });
