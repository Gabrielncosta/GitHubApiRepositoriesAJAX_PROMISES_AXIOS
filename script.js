buttonElement = document.querySelector('button');
buttonElement.onclick = list;

const inputElement = document.querySelector('input');

const listUl = document.querySelector('ul');



function renderRepositories(repositories) {

    for(repo of repositories) {
        let listLi = document.createElement('li');
        let text = document.createTextNode(repo.name);
        
        listLi.appendChild(text);
        listUl.appendChild(listLi);
    }
}

function list() {

    let value = inputElement.value;


    axios.get(`https://api.github.com/users/${value}/repos`)
    .then(function(response) {
        renderRepositories(response.data);
    }) 
}
