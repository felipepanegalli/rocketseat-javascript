const inputElement = document.querySelector('#todoInput');
const ulElement = document.querySelector('#todoList');
const btnElement = document.querySelector('#addTodo');

const todos = JSON.parse(localStorage.getItem('list_todo')) || [];

function renderTodos() {
    ulElement.innerHTML = '';
    for (todo of todos) {
        let todoElement = document.createElement('li');
        let textElement = document.createTextNode(todo);

        /** Manipulação DOM Link */
        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        let pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
        let linkTextElement = document.createTextNode('Excluir');
        linkElement.appendChild(linkTextElement);
        /** Close DOM Link */

        todoElement.appendChild(textElement);
        todoElement.appendChild(linkElement);
        ulElement.appendChild(todoElement);
    }
}

/** Função que adiciona um novo TODO */
function addTodo() {
    let todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveLocalStorage();
}

/** Função que exlui um TODO pela posicao do TODO */
function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveLocalStorage();
}

/** Função utilizada para salvar no LocalStorage */
function saveLocalStorage() {
    localStorage.setItem('list_todo', JSON.stringify(todos));
}

/** Ação do botão Adicionar */
btnElement.onclick = addTodo;

/** Função responsável de atualizar o DOM */
renderTodos();
