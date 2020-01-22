var papas = {
    cantidad:0,
    cortadas:false,
    cocinado:"",
};
console.log(papas);

function cantidad() {
    papas.cantidad ++;
    console.log("tienes", papas.cantidad);
    return;
}

function cortar() {
    if (papas.cantidad === 0) {
        alert("no puedes cortar lo que no tienes");
        return;
    }
    papas.cortadas = true;
    return console.log("estan cortadas correctamente.");
    
}
function queTanHechoEsta() {
    const estadodecoccion = ["crudo","poco hecho", "en su punto", "muy hecho", "quemado"];
    papas.cocinado = estadodecoccion[Math.floor(Math.random()*estadodecoccion.length)];        
    console.log(papas);
    return;
}

function Cocinar() {
    if (papas.cortadas == false) {
        alert("no puedes freirlas si estan enteras");
        return;
    }
    queTanHechoEsta();
    return;
}