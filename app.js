let amigos = [];

function adicionarAmigo() {
    let inputUser = document.getElementById('amigo').value;
    if (inputUser == '') {
        alert('Por favor, insira um nome.');
        return
    }
    amigos.push(inputUser);
    limparCampo();
    listarAmigos();
}
function limparCampo() {
    inputUser = document.getElementById('amigo');
    inputUser.value = '';
}

function listarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        let novoAmigo = document.createElement('li');
        novoAmigo.innerText = amigo;
        listaAmigos.appendChild(novoAmigo);
    });
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione amigos para começar o sorteio.');
        return
    }
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let resultado = document.getElementById('resultado');
    resultado.innerText = amigos[indiceSorteado];
}