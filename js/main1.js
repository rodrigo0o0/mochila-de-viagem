var form = document.getElementById('novoItem');


var listaLocalStorage = JSON.parse(localStorage.getItem('minhaLista')) || [];


const lista = document.getElementById('lista');


if(listaLocalStorage.length > 0){
    console.log("INICIANDO Criação de objetos");
    
    console.log(localStorage);

    listaLocalStorage.forEach(item => {
        montaListaLocalStorage(item.nome, item.quantidade);
    });
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);

    //pega valor dos inputs
    var nome = event.target.elements['nome'];
    var quantidade = event.target.elements['quantidade'];
    event.target.elements['nome'].focus();
    
    
    
    montaLista(nome.value, quantidade.value);
    event.target.elements['nome'].value = "";
    event.target.elements['quantidade'].value = "";


    
});

var linhas = document.querySelectorAll('.item');

linhas.forEach((elemento) => {
    elemento.addEventListener('dblclick', (event) => {
        
        console.log(event.target.textContent);
        <li class="item"><strong>1</strong>galho</li>

        //location.reload();
    });
});



    

function montaListaLocalStorage(nome, quantidade){
    let novoItem = document.createElement('li');
    novoItem.classList.add('item');

    let numeroItem = document.createElement('strong');
    numeroItem.innerHTML  = quantidade;


    novoItem.appendChild(numeroItem);

    novoItem.innerHTML += nome;
    lista.appendChild(novoItem);
};

function montaLista(nome, quantidade){

    lista.appendChild(novoItem);
    const item = {
        "nome":nome,
        "quantidade":quantidade
    };


    listaLocalStorage.push(item);

    localStorage.setItem('minhaLista',JSON.stringify(listaLocalStorage));
    location.reload();

}

