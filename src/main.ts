function generarRandom () : number{
    return Math.floor(Math.random() * 101);
}

const numParaAcertar : number = generarRandom();

type Estado = 
    | "NO_ES_UN_NUMERO"
    | "EL_NUM_SECRETO_ES_MAYOR"
    | "EL_NUM_SECRETO_ES_MENOR"
    | "SI_ES_EL_NUM_SECRETO"
    | "GAME_OVER";


const MAX_INTENTOS : number = 5;
let numIntentos : number = 0;

function hasSuperadoNumIntentos () : boolean{
    return numIntentos >= MAX_INTENTOS;
}

function mostrarIntentos (){
    let numeroIntentos = document.getElementById("intentos");
    if(numeroIntentos){
        numeroIntentos.innerHTML = `${numIntentos} de ${MAX_INTENTOS}`;
    }      
}

document.addEventListener("DOMContentLoaded", mostrarIntentos);

function gestionarGameOver(estado : Estado){
    if(estado === "GAME_OVER"){
        const botonComprobar = document.getElementById("comprobar") as HTMLButtonElement;

        if(botonComprobar){
            botonComprobar.disabled = true;
        }
    }
}

function muestraMensajeComprobacion(input : string, estado : Estado){
    let mensaje = "";
    switch(estado){
        case "NO_ES_UN_NUMERO":
            mensaje = "No es un número, prueba de nuevo"
            break;
        case "EL_NUM_SECRETO_ES_MAYOR":
            mensaje = `El número secreto es MAYOR que ${input}, prueba de nuevo`
            break;
        case "EL_NUM_SECRETO_ES_MENOR":
            mensaje = `El número secreto es MENOR que ${input}, prueba de nuevo`
            break;
        case "SI_ES_EL_NUM_SECRETO":
            mensaje = "Has acertado"
            break;
        case "GAME_OVER":
            mensaje = "GAME OVER, has perdido"
            break;
        default: "No sé qué ha pasado, pero no deberías estar aquí";
    }

    let resultado = document.getElementById("resultado") as HTMLDivElement;
    if (resultado) {
       resultado.innerHTML = mensaje;
    }

}

function comprobarNumero(input : string) : Estado{
    const numero = parseInt(input);
    const esUnNum = !isNaN(numero);
    
    if(!esUnNum) {
        return "NO_ES_UN_NUMERO";
    } 
    if (numero === numParaAcertar) {
        return "SI_ES_EL_NUM_SECRETO";
    } 
    if(hasSuperadoNumIntentos()){
        return "GAME_OVER";
    }
    numIntentos++;
    mostrarIntentos();
    return numero > numParaAcertar
    ? "EL_NUM_SECRETO_ES_MENOR"
    : "EL_NUM_SECRETO_ES_MAYOR";
};

function handleCompruebaClick(){
    let texto : string = "";
    const input = document.getElementById("numero");
    if(input && input instanceof HTMLInputElement){
        texto = input.value;
    }
    const estado : Estado = comprobarNumero(texto);
    muestraMensajeComprobacion(texto, estado);
    gestionarGameOver(estado);
};

const botonComprobar = document.getElementById("comprobar");

if(botonComprobar && botonComprobar instanceof HTMLButtonElement){
    botonComprobar.addEventListener("click", handleCompruebaClick);
}
