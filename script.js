var papas = {
    cantidad:1,
    cortadas:false,
    estado:["crudo","Hecho","quemado"]
};
console.log(papas);

function cuantasPapas() {
    papas.cantidad ++;
    console.log("tienes", papas.cantidad);
    return;
}

function cortarPapas() {
    if (papas.cantidad === 0) {
        alert("no puedes cortar lo que no tienes");
        return;
    }
    papas.cortadas = true;
    return console.log("estan cortadas correctamente.");
    
}
function cambiarEstado() {
    const estado = papas.estado[Math.floor(Math.random()*papas.estado.length)];
    console.log(estado);        

    return;
}

function freirPapas() {
    if (papas.cortadas == false) {
        alert("no puedes freirlas si estan enteras");
        return;
    }
    cambiarEstado();
    return;
}