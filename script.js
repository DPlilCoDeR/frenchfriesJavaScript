var papas = {
    cantidad:0,
    cortadas:false,
    estado:"",
};
console.log(papas);

function cuantasPapas() {
    papas.cantidad ++;
    console.log("tienes", papas.cantidad)
    return;
}

function cortarPapas() {
    if (papas.cantidad === 0) {
        alert("no puedes cortar lo que no tienes :(");
        return;
    }
    papas.cortadas = true;
    return console.log(papas.cortadas);
}

