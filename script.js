"use strict"

const getId = (elemento) => document.getElementById(elemento)
const img = getId("img")
const buttons = getId("buttons")
let indiceDaCor = 0
let intervalId = null

const trocaDeCores = (evento) => {
    sairAutomatico()
    ligar[evento.target.id]()
}

const proximoIndice = () => {

    indiceDaCor = indiceDaCor < 2 ? ++indiceDaCor : 0
}

const mudancaAutomatica = () => {
    const cores = ["red", "yellow", "green"]
    const cor = cores[indiceDaCor]
    ligar[cor]()
    proximoIndice()
}

const sairAutomatico = () => {
    clearInterval(intervalId)
}


const ligar = {
    "red": () => img.src = "./img/vermelho.png",
    "yellow": () => img.src = "./img/amarelo.png",
    "green": () => img.src = "./img/verde.png",
    "automatic": () => intervalId = setInterval(mudancaAutomatica, 1000)
}

// Eventos
buttons.addEventListener("click", trocaDeCores)