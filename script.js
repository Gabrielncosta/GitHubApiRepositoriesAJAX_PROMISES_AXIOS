const buttonElement = document.querySelector('button');
const inputElement = document.querySelector('input');
const ul = document.querySelector('ul');




buttonElement.onclick = function() {
    ul.innerHTML = '';
    let user = inputElement.value;
    inputElement.value = '';

    if (!user) return;    

    renderLoading()

    axios.get(`https://api.github.com/users/${user}/repos`) 
        .then(function (response) {
            let a = response.data;
            console.log(response.data);
            fetch(response.data);
        })
        .catch(function (error) {
            renderError();
        })
    } 

function fetch(repositorie) {
    
    
    ul.innerHTML = '';
    for(i = 0; i < repositorie.length; i++) {
        
        let li = document.createElement('li');
        let text = document.createTextNode(repositorie[i].name);

        

        li.appendChild(text);
        ul.appendChild(li);
    }
}

function renderError() {
    ul.innerHTML = '';
    let li = document.createElement('li');
    let text = document.createTextNode('Erro! Usuário não encontrado.');
    li.style.color= '#F00';

    li.appendChild(text);
    ul.appendChild(li);
}

function renderLoading(loading) {
    ul.innerHTML = "";
    var textElement = document.createTextNode('Carregando...');
    var loadingElement = document.createElement('li');
    loadingElement.appendChild(textElement);
    ul.appendChild(loadingElement);
  }

  renderLoading();