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

const botonPedir = document.getElementById("dameCarta") as HTMLButtonElement;
const botonMePlanto = document.getElementById("mePlanto")  as HTMLButtonElement;
const botonReiniciar = document.getElementById("reiniciar")  as HTMLButtonElement;
const botonRevelar = document.getElementById("revelaCarta")  as HTMLButtonElement;
let elementoMsj = document.getElementById("msj") as HTMLDivElement;

function muestraPuntuacion () {
    const puntuacion = document.getElementById("puntuacion");
    if (puntuacion && puntuacion instanceof HTMLDivElement) {
        puntuacion.innerHTML = puntuacionUsuario.toString();
    } 
}

function deshabilitarBoton(boton : HTMLButtonElement){
    if (boton && boton instanceof HTMLButtonElement) {
        boton.disabled = true;
    }
}

function habilitarBoton(boton : HTMLButtonElement){
    if (boton && boton instanceof HTMLButtonElement) {
        boton.disabled = false;
    }
}

document.addEventListener("DOMContentLoaded", ()=> {
    muestraPuntuacion();

    deshabilitarBoton(botonReiniciar);
    deshabilitarBoton(botonRevelar);

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
    let alt = "";

    switch(carta){
        case AS:
            carta = 1,
            imagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg",
            alt = "As de copas"
            break;
        case DOS:
            imagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg",
            carta = 2,
            alt = "Dos de copas"
            break;
        case TRES:
            imagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg",
            carta = 3,
            alt = "Tres de copas"
            break;
        case CUATRO:
            imagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg",
            carta = 4,
            alt = "Cuatro de copas"
            break;
        case CINCO:
            imagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg",
            carta = 5,
            alt = "Cinco de copas"
            break;
        case SEIS:
            imagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg",
            carta = 6,
            alt = "Seis de copas"
            break;
        case SIETE:
            imagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg",
            carta = 7,
            alt = "Siete de copas"
            break;
        case SOTA:
            imagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg",
            carta = 10,
            alt = "Sota de copas"
            break;
        case CABALLO:
            imagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg",
            carta = 11,
            alt = "Caballo de copas"
            break;
        case REY:
            imagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg",
            carta = 12,
            alt = "Rey de copas"
            break;
    }

    let imagenCarta = document.getElementById("carta");
    if(imagenCarta && imagenCarta instanceof HTMLImageElement){
        imagenCarta.src = imagen;
        imagenCarta.alt = alt;
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
        if(elementoMsj && elementoMsj instanceof HTMLDivElement){
            elementoMsj.innerHTML = "Has perdido";
        }
        deshabilitarBoton(botonPedir);
        deshabilitarBoton(botonMePlanto);
        habilitarBoton(botonReiniciar);
    }
}

function hasGanado(puntuacionUsuario : number){
    if (puntuacionUsuario === 7.5) {
        if(elementoMsj && elementoMsj instanceof HTMLDivElement){
            elementoMsj.innerHTML = "Has ganado";
        }
        deshabilitarBoton(botonPedir);
        deshabilitarBoton(botonMePlanto);
        habilitarBoton(botonReiniciar);
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

    if(elementoMsj && elementoMsj instanceof HTMLDivElement){
        elementoMsj.innerHTML = mensaje;
    }

    deshabilitarBoton(botonMePlanto);
    habilitarBoton(botonReiniciar);
    habilitarBoton(botonRevelar);
}

function handleClickCarta(){
    let carta = dameCarta();
    muestraCarta(carta);
    puntuacionUsuario = sumarCartas(carta, puntuacionUsuario);
    muestraPuntuacion();
    hasGanado(puntuacionUsuario);
    gameOver(puntuacionUsuario);
}

function handleClickPlanto(){
    mePlanto(puntuacionUsuario);
    
    deshabilitarBoton(botonPedir);
}

function handleClickReiniciar(){
    location.reload();
}

function handleClickRevelarCarta(){
    let cartaRevelada = 0;

    cartaRevelada = dameCarta();
    muestraCarta(cartaRevelada);
    puntuacionUsuario = sumarCartas(cartaRevelada, puntuacionUsuario);
    muestraPuntuacion();

    deshabilitarBoton(botonRevelar);
    
    if(elementoMsj && elementoMsj instanceof HTMLDivElement){
        elementoMsj.innerHTML = `Si no te hubieses plantado habrías conseguido una puntuación de ${puntuacionUsuario}`;
    }

}

if(botonPedir && botonPedir instanceof HTMLButtonElement){
    botonPedir.addEventListener("click", handleClickCarta);
}

if(botonMePlanto && botonMePlanto instanceof HTMLButtonElement){
    botonMePlanto.addEventListener("click", handleClickPlanto);
}

if(botonReiniciar && botonReiniciar instanceof HTMLButtonElement){
    botonReiniciar.addEventListener("click", handleClickReiniciar);
}

if(botonRevelar && botonRevelar instanceof HTMLButtonElement){
    botonRevelar.addEventListener("click", handleClickRevelarCarta);
}