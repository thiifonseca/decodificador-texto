
var textoCriptografar = document.getElementById('conteudo__textarea');
var textoNaTela = document.getElementById('resultadoTexto');
var conteudoMostrado = document.getElementById('conteudoMostrado');
var conteudoEscondido = document.getElementById('conteudoEscondido');
var nomeFooter = document.querySelector('#footer__nome');

textoCriptografar.addEventListener("keypress", function (e) {
    if (!checar(e)) {
        e.preventDefault();
    }
});

function checar(e) {

    const char = String.fromCharCode(e.keyCode);
    const pattern = '[a-z ]';

    if (char.match(pattern)) {
        console.log(char);
        return true;
    }
}

function criptografar() {
    let texto = textoCriptografar.value;
    if (texto == '') {
        conteudoMostrado.style.display = 'flex';
        conteudoEscondido.style.display = 'none';
    } else {
        let textoCriptografado = texto.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober')
            .replaceAll('u', 'ufat');
        conteudoMostrado.style.display = 'none';
        conteudoEscondido.style.display = 'flex';
        textoNaTela.innerHTML = textoCriptografado;
    }
}

function descriptografar() {
    let texto = textoCriptografar.value;
    if (texto == '') {
        conteudoMostrado.style.display = 'flex';
        conteudoEscondido.style.display = 'none';
    } else {
        let textoDescriptografado = texto.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o')
            .replaceAll('ufat', 'u');
        conteudoMostrado.style.display = 'none';
        conteudoEscondido.style.display = 'flex';
        textoNaTela.innerHTML = textoDescriptografado;
    }
}

function copiar() {
    textoNaTela.select();
    document.execCommand('copy')
}


nomeFooter.addEventListener('click', ()=>{
    nomeFooter.innerHTML = 'Desenvolvido por Thiago Junio Fonseca'
});


