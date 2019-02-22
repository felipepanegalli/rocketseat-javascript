const inputElement = document.querySelector('#user');
const listElement = document.querySelector('#listRepo');

function render(repositorios) {
    listElement.innerHTML = '';
    for (repositorio of repositorios) {
        const itemElement = document.createElement('li');
        const textItemElement = document.createTextNode(repositorio.name);
        itemElement.appendChild(textItemElement);
        listElement.appendChild(itemElement);
    }
}

function gerarTexto(texto) {
    listElement.innerHTML = '';
    const loadingElement = document.createElement('li');
    const textLoadingElement = document.createTextNode(texto);
    loadingElement.appendChild(textLoadingElement);
    listElement.appendChild(loadingElement);
}

function searchRepo() {
    gerarTexto('Carregando...');
    user = inputElement.value;
    axios
        .get('https://api.github.com/users/' + user + '/repos')
        .then(function(response) {
            render(response.data);
        })
        .catch(function(error) {
            listElement.innerHTML = '';
            gerarTexto('Usuário não encontrado.');
        });
}
