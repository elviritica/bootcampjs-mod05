let puntuacionUsuario = 0;

const AS = 1;
const DOS = 2;
const TRES = 3;
const CUATRO = 4;
const CINCO = 5;
const SEIS = 6;
const SIETE = 7;
const SOTA = 10;
const CABALLO = 11;
const REY = 12;


function muestraPuntuacion () {
    const puntuacion = document.getElementById("puntuacion");
    if (puntuacion && puntuacion instanceof HTMLDivElement) {
        puntuacion.innerHTML = puntuacionUsuario.toString();
    } 
}

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

document.addEventListener("DOMContentLoaded", ()=> {
    const botonReiniciar = document.getElementById("reiniciar");
    if (botonReiniciar && botonReiniciar instanceof HTMLButtonElement) {
        botonReiniciar.disabled = true;
    }
});

function generarNumRandom (min : number, max : number) : number{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function dameCarta(){
    let num = generarNumRandom(1,10);
    let carta = 0;

    if (num > 7) {
        carta = num + 2;
    } else {
        carta = num;
    }

    return carta;
}


function muestraCarta(carta : number){
    let imagen = "";
    
    switch(carta){
        case AS:
            carta = 1,
            imagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg"
            break;
        case DOS:
            imagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg",
            carta = 2
            break;
        case TRES:
            imagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg",
            carta = 3
            break;
        case CUATRO:
            imagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg",
            carta = 4
            break;
        case CINCO:
            imagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg",
            carta = 5
            break;
        case SEIS:
            imagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg",
            carta = 6
            carta;
        case SIETE:
            imagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg",
            carta = 7
            break;
        case SOTA:
            imagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg",
            carta = 10
            break;
        case CABALLO:
            imagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg",
            carta = 11
            break;
        case REY:
            imagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg",
            carta = 12
            break;
    }

    let imagenCarta = document.getElementById("carta");
    if(imagenCarta && imagenCarta instanceof HTMLImageElement){
        imagenCarta.src = imagen;
    }

}

function sumarCartas(carta:number, puntuacionUsuario: number){
    if(carta < 10){
        puntuacionUsuario += carta;
    } else {
        puntuacionUsuario += 0.5;
    }
    return puntuacionUsuario;
}

function gameOver(puntuacionUsuario : number){
    if(puntuacionUsuario > 7.5){
        const puntuacion = document.getElementById("puntuacion");
        if (puntuacion && puntuacion instanceof HTMLDivElement) {
            puntuacion.innerHTML = "Has perdido";
        } 
        const botonPedir = document.getElementById("dameCarta");
        if(botonPedir && botonPedir instanceof HTMLButtonElement){
            botonPedir.disabled = true;
        }
        const botonMePlanto = document.getElementById("mePlanto");
        if(botonMePlanto && botonMePlanto instanceof HTMLButtonElement){
            botonMePlanto.disabled = true;
        }
        const botonReiniciar = document.getElementById("reiniciar");
        if (botonReiniciar && botonReiniciar instanceof HTMLButtonElement) {
            botonReiniciar.disabled = false;
        }
    }
}

function mePlanto(puntuacionUsuario : number){
    let mensaje = "";
    if(puntuacionUsuario <= 4){
        mensaje = "Has sido muy conservador";
    } else if (puntuacionUsuario > 4 && puntuacionUsuario < 6) {
        mensaje = "Te ha entrado el canguelo, eh?";
    } else if (puntuacionUsuario >= 6 && puntuacionUsuario <= 7) {
        mensaje = "Casi, casi...";
    } else if (puntuacionUsuario === 7.5){
        mensaje = "¡Lo has clavado! ¡Enhorabuena!";
    }

    let elementoMsj = document.getElementById("msj");
    if(elementoMsj && elementoMsj instanceof HTMLDivElement){
        elementoMsj.innerHTML = mensaje;
    }

    const botonMePlanto = document.getElementById("mePlanto");
    if(botonMePlanto && botonMePlanto instanceof HTMLButtonElement){
        botonMePlanto.disabled = true;
    }

    const botonReiniciar = document.getElementById("reiniciar");
    if (botonReiniciar && botonReiniciar instanceof HTMLButtonElement) {
        botonReiniciar.disabled = false;
    }
}

function reiniciar(){
    location.reload();
}


function handleClickCarta(){
    let carta = dameCarta();
    console.log(carta); // Comprobacion carta
    muestraCarta(carta);
    puntuacionUsuario = sumarCartas(carta, puntuacionUsuario);
    muestraPuntuacion();
    gameOver(puntuacionUsuario);    
}

function handleClickPlanto(){
    mePlanto(puntuacionUsuario);
    const botonPedir = document.getElementById("dameCarta");
    if(botonPedir && botonPedir instanceof HTMLButtonElement){
        botonPedir.disabled = true;
    }
}

function handleReiniciar(){
    reiniciar();
}

const botonPedir = document.getElementById("dameCarta");
if(botonPedir && botonPedir instanceof HTMLButtonElement){
    botonPedir.addEventListener("click", handleClickCarta);
}

const botonMePlanto = document.getElementById("mePlanto");
if(botonMePlanto && botonMePlanto instanceof HTMLButtonElement){
    botonMePlanto.addEventListener("click", handleClickPlanto);
}

const botonReiniciar = document.getElementById("reiniciar");
if(botonReiniciar && botonReiniciar instanceof HTMLButtonElement){
    botonReiniciar.addEventListener("click", handleReiniciar);
}