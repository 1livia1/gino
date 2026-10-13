const TERRA = "0xB96E54";
const A_TERRENO = 96;
const Y_TERRENO = 624;
const VERDE = "0x72A11D";
const ROSSO = "0xE44A4A";

const X_GINO = 200;
const L_GINO = 81;
const A_GINO = 84;

const L_FUNGO = 90;
const A_FUNGO = 63;

let gino;
let fungo;


function preload(s) {}


let terreno;

function create(s) {
    crea_terreno(s);
    crea_gino(s); 
    crea_fungo(s);
}

function crea_terreno(s) {
    terreno = PP.shapes.rectangle_add(
        s,
        LARGHEZZA / 2,
        Y_TERRENO + A_TERRENO / 2,
        LARGHEZZA,
        A_TERRENO,
        TERRA,
        1
    );
}

function crea_gino(s) {
    gino = PP.shapes.rectangle_add(
        s,
        X_GINO,
        Y_TERRENO - A_GINO / 2,
        L_GINO,
        A_GINO,
        VERDE,
        1
    );
}

function crea_fungo(s) {
    fungo = PP.shapes.rectangle_add(
        s,
        LARGHEZZA * 3 / 4,
        Y_TERRENO - A_FUNGO / 2,
        L_FUNGO,
        A_FUNGO,
        ROSSO,
        1
    );
}

function update(s) {}

function destroy(s) {}

PP.scenes.add("gino", preload, create, update, destroy);
