"use strict"

let idInterval

const semaforo = document.getElementById("semaforo")

const semaforoNoVermelho = () => semaforo.src.includes("vermelho")
const semaforoNoVerde = () => semaforo.src.includes("verde")
const semaforoNoAmarelo = () => semaforo.src.includes("amarelo")

//Funções

// function vermelho(){
//     semaforo.src = "img/vermelho.png"
// }

// function amarelo(){
//     semaforo.src = "img/amarelo.png"
// }

// function verde(){
//     semaforo.src = "img/verde.png"
// }

const vermelho = () => semaforo.src = "img/vermelho.png"

const amarelo = () => semaforo.src = "img/amarelo.png"

const verde = () => semaforo.src = "img/verde.png"



function trocarImagem(){
    if(semaforoNoVerde){
        vermelho()
    }
    else if (semaforoNoVermelho()){
        amarelo()
    }
    else {
        verde()
    }
}



function automatico(){
   
    const bAutomatico = document.getElementById("automatico")
    
    if(bAutomatico.textContent == "Automático"){
        setInterval(trocarImagem, 1000);
        bAutomatico.textContent = "Parar"
    }
    else{
        clearInterval(idInterval)
        bAutomatico.textContent = "Automático"
    }

}

//ARROW FUNCTION







document.getElementById("vermelho").addEventListener("click", vermelho)
document.getElementById("amarelo").addEventListener("click", amarelo)
document.getElementById("verde").addEventListener("click", verde)
document.getElementById("automatico").addEventListener("click", automatico)