const botaoVoltar = document.getElementById("botaoVoltar");

const secoes = [
    document.getElementById("inicio"),
    document.getElementById("sobre"),
    document.getElementById("produto"),
    document.getElementById("videos"),
    document.getElementById("contato")
];

window.addEventListener("scroll", function () {

    let secaoAtual = 0;

    for (let i = 0; i < secoes.length; i++) {

        const distancia = Math.abs(
            secoes[i].getBoundingClientRect().top
        );

        if (distancia < window.innerHeight / 2) {
            secaoAtual = i;
        }
    }

    if (secaoAtual === 0) {
        botaoVoltar.style.display = "none";
    } else {
        botaoVoltar.style.display = "flex";
        botaoVoltar.href = "#" + secoes[secaoAtual - 1].id;
    }

});

const btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", function() {

    btnEnviar.textContent = "MENSAGEM ENVIADA!";

});