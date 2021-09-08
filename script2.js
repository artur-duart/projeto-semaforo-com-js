"use strict"

const getId = (elemento) => document.getElementById(elemento)
const semaforo = getId("img")
let idInterval

const ligarVerde = () => semaforo.src = "img/verde.png"
const ligarAmarelo = () => semaforo.src = "img/amarelo.png"
const ligarVermelho = () => semaforo.src = "img/vermelho.png"
const desligarSemaforo = () => semaforo.src = "img/desligado.png"

const semaforoVerde = () => semaforo.src.includes("verde")
const semaforoAmarelo = () => semaforo.src.includes("amarelo")
const semaforoVermelho = () => semaforo.src.includes("vermelho")

const automatico = () => {
    if (semaforoVerde()) {
        ligarAmarelo()
    } else if (semaforoAmarelo()) {
        ligarVermelho()
    } else {
        ligarVerde()
    }
}

const funcionar = () => {
    const buttonAutomatico = getId("automatic")
    if (buttonAutomatico.textContent == "Automático") {
        buttonAutomatico.textContent = "Parar"
        idInterval = setInterval(automatico, 1000)
    } else {
        clearInterval(idInterval)
        buttonAutomatico.textContent = "Automático"
    }
}

//Eventos
getId("green").addEventListener("click", ligarVerde)
getId("yellow").addEventListener("click", ligarAmarelo)
getId("red").addEventListener("click", ligarVermelho)
getId("img").addEventListener("dblclick", desligarSemaforo)
getId("automatic").addEventListener("click", funcionar)