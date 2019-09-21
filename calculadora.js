var valorAntigoTela = ""
var valorTela = "";
var acaoEscolhida;

function digitoParaString(digito) {
    if (digito === 0) {
        return "0";
    }

    return digito.toString();
}

function atualizaTela(valor) {
    var tela = document.getElementById("tela");
    valorTela = valor;
    tela.innerText = valor;
}

function botaoDigitoClick (e) {
    var digito = e.target.value;
    atualizaTela(`${valorTela}${digito}`);
}

function rodarAcao (acao) {
    if (acao === "=") {
        var resultado;
        if (acaoEscolhida === "+") {
            resultado = Number(valorAntigoTela) + Number(valorTela);
        }

        if (acaoEscolhida === "-") {
            resultado = Number(valorAntigoTela) - Number(valorTela);
        }


        if (acaoEscolhida === "/") {
            resultado = Number(valorAntigoTela) / Number(valorTela);
        }


        if (acaoEscolhida === "*") {
            resultado = Number(valorAntigoTela) * Number(valorTela);
        }

        valorAntigoTela = ""
        atualizaTela(resultado)
        return
    }

    if (acao === "l") {
        location.reload();
    }

    if (acao === "+" | acao === "-" | acao === "*" | acao === "/") {
        valorAntigoTela = valorTela;
        acaoEscolhida = acao;
        limparTela() 
    }
}

function limparTela () {
    var tela = document.getElementById("tela");
    valorTela = ""
    tela.innerText = ""
}

function botaoAcaoClick (e) {
    var acao = e.target.value;
    rodarAcao(acao);
}

document.addEventListener('DOMContentLoaded', function () {
    var botoesDigitos = document.getElementsByClassName('botaoDigito');
    botoesDigitos[0].addEventListener('click', botaoDigitoClick);
    botoesDigitos[1].addEventListener('click', botaoDigitoClick);
    botoesDigitos[2].addEventListener('click', botaoDigitoClick);
    botoesDigitos[3].addEventListener('click', botaoDigitoClick);
    botoesDigitos[4].addEventListener('click', botaoDigitoClick);
    botoesDigitos[5].addEventListener('click', botaoDigitoClick);
    botoesDigitos[6].addEventListener('click', botaoDigitoClick);
    botoesDigitos[7].addEventListener('click', botaoDigitoClick);
    botoesDigitos[8].addEventListener('click', botaoDigitoClick);
    botoesDigitos[9].addEventListener('click', botaoDigitoClick);

    var botoesAcoes = document.getElementsByClassName('botaoAcao');
    botoesAcoes[0].addEventListener('click', botaoAcaoClick);
    botoesAcoes[1].addEventListener('click', botaoAcaoClick);
    botoesAcoes[2].addEventListener('click', botaoAcaoClick);
    botoesAcoes[3].addEventListener('click', botaoAcaoClick);
    botoesAcoes[4].addEventListener('click', botaoAcaoClick);
    botoesAcoes[5].addEventListener('click', botaoAcaoClick);
    
})