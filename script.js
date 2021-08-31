"use strict"

//VARIÁVEIS
const semaforo = document.getElementById("semaforo")

let intervalo

const semaforoNoVermelho = () => semaforo.src.includes("vermelho")
const semaforoNoVerde = () => semaforo.src.includes("verde")
const semaforoNoAmarelo = () => semaforo.src.includes("amarelo")
const semaforoDesligado = () => semaforo.src.includes("desligado")

//FUNÇÕES NORMAIS

function vermelho(){
    semaforo.src = "img/vermelho.png"
}

function amarelo(){
    semaforo.src = "img/amarelo.png"
}

function verde(){
    semaforo.src = "img/verde.png" 
}


// function trocarImagem(){
    
//     if(semaforoNoVerde() || semaforoDesligado ()){
//         vermelho()
//     }
//     else if (semaforoNoVermelho()){
//         amarelo()
//     }
//     else {
//         verde()
//     }
// }

// function automatico(){
   
//     const bAutomatico = document.getElementById("automatico")
    
//     if(bAutomatico.textContent == "Automático"){
//         setInterval(trocarImagem, 1000);
//         bAutomatico.textContent = "Parar"
//     }
//     else{
//         clearInterval(idInterval)
//         bAutomatico.textContent = "Automático"
//     }
// }

//ARROW FUNCTION

// const vermelho = () => semaforo.src = "img/vermelho.png"

// const amarelo = () => semaforo.src = "img/amarelo.png"

// const verde = () => semaforo.src = "img/verde.png"



const trocarImagem = () => {
    
    if(semaforoNoVerde() || semaforoDesligado ()){
        vermelho()
    }
    else if (semaforoNoVermelho()){
        amarelo()
    }
    else {
        verde()
    }
}

const deixarAutomatico = () => {
   
    const bAutomatico = document.getElementById("automatico")
    
    if(bAutomatico.textContent == "Automático"){
        intervalo = setInterval(trocarImagem, 1000);
        bAutomatico.textContent = "Parar"
    }
    else{
        clearInterval(intervalo)
        bAutomatico.textContent = "Automático"
    }
}




document.getElementById("vermelho").addEventListener("click", vermelho)
document.getElementById("amarelo").addEventListener("click", amarelo)
document.getElementById("verde").addEventListener("click", verde)
document.getElementById("automatico").addEventListener("click", deixarAutomatico)