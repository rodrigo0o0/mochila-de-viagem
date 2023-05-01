var listaLocalStorage = JSON.parse(localStorage.getItem('minhaLista')) || [];
montaTela(listaLocalStorage)
const form = document.getElementById('novoItem');




form.addEventListener(('submit'), event =>{
    event.preventDefault();
    var nome = event.target.elements['nome'];
    var quantidade = event.target.elements['quantidade'];
    console.log(nome.value + ' ' + quantidade.value);
    
    adicionaAtualiza(nome.value, quantidade.value);
});



function adicionaAtualiza(nome, quantidade){
    
    var existe = false;
    listaLocalStorage.forEach(
        item => {
            if(item.nome === nome){
                item.quantidade = quantidade;
                existe = true;
            }
        }
    );

    
    var item = {
        'id':listaLocalStorage.length,
        'nome':nome,
        'quantidade':quantidade,
    };
        
    if(!existe){
        listaLocalStorage.push(item);
    }
    
    localStorage.setItem('minhaLista', JSON.stringify(listaLocalStorage));
    location.reload();

}

function montaTela(listaItems){
    
    const listaElemento = document.getElementById('lista');
    
    listaItems.forEach((elemento) => {
        let linha = document.createElement('li');
        linha.classList.add('item');
        let strong = document.createElement('strong');
        strong.dataset.id = elemento.id;
        strong.textContent = elemento.quantidade;

        linha.appendChild(strong);
        linha.innerHTML += elemento.nome;
        linha.appendChild(botaoDeleta());

        listaElemento.appendChild(linha);
        console.log(linha);
    });
}



function botaoDeleta(){
    const elementoBotao = document.createElement('button');
    elementoBotao.innerText = 'X';
    elementoBotao.addEventListener('click', (event) =>{
        removeElemento(event.target.parentNode);
        var id = event.target.parentNode.querySelector('strong').dataset.id;
        listaLocalStorage.splice(listaLocalStorage.findIndex(elemento => {
            elemento.id === id
        }),1);
        localStorage.setItem('minhaLista', JSON.stringify(listaLocalStorage));
        console.log(id);
    })

    return elementoBotao;
}

function removeElemento(elemento){
    
    elemento.remove();
    location.reload();

}