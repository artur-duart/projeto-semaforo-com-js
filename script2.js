"use strict"

const getId = (elemento) => document.getElementById(elemento)
let semaforo = getId("img")
let idVermelho
let idAmarelo
let idVerde

const sinalVermelho = () => {
    semaforo.src = "img/vermelho.png"
}

const sinalAmarelo = () => {
    semaforo.src = "img/amarelo.png"
}

const sinalVerde = () => {
    semaforo.src = "img/verde.png"
}

const sairAutomatico = () => {
    clearInterval(idVermelho)
    clearInterval(idAmarelo)
    clearInterval(idVerde)
}

const mudancaAutomatica = () => {
    const botaoAutomatico = getId("automatic")

    if (botaoAutomatico.textContent = "Automático") {
        idVermelho = setInterval(sinalVermelho, 500)
        idAmarelo = setInterval(sinalAmarelo, 1000)
        idVerde = setInterval(sinalVerde, 1500)
        botaoAutomatico.textContent = "Parar"
    } else {
        sairAutomatico()
        botaoAutomatico.textContent = "Automático"
    }

}

// Eventos
getId("red").addEventListener("click", sinalVermelho)
getId("yellow").addEventListener("click", sinalAmarelo)
getId("green").addEventListener("click", sinalVerde)
getId("automatic").addEventListener("click", mudancaAutomatica)