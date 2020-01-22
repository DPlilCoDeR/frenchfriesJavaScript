var papas = {
    cantidad:0,
    cortadas:false,
    estado:["crudo","Hecho","quemado"],
};
console.log(papas);

function cuantasPapas() {
    papas.cantidad ++;
    console.log("tienes", papas.cantidad)
    return;
}

function cortarPapas() {
    if (papas.cantidad === 0) {
        alert("no puedes cortar lo que no tienes");
        return;
    }
    papas.cortadas = true;
    return console.log(papas.cortadas);
}

function freirPapas() {
    if (papas.cortadas == false) {
        alert("no puedes freirlas si estan enteras");
        return;
    }
    setInterval(freirPapas(),5000);
    return;
}