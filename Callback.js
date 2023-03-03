/* miFuncion2();
miFuncion1();

function miFuncion1(){
    console.log('mi Funcion 1');
}
function miFuncion2(){
    console.log('mi Funcion 2');
}

//Funcion call back
function imprimir(mensaje){
    console.log(mensaje);
}
function sumar(op1, op2, functionCallback){
    let res = op1 + op2;
    functionCallback(`Resultado: ${res}`);
}

sumar(5,3, imprimir);

//Llamadas asinconcronas con uso setTimeout
function miFuncionCallback(){
    console.log('saludo asincrono 3 seg');
}

setTimeout(miFuncionCallback, 3000); //despues de 3 seg

setTimeout( function(){console.log('saludo asincrono 2')}, 4000);

*/
let reloj = () => {
 let fecha = new Date();
 console.log(`${fecha.getHours()}: ${fecha.getMinutes()}: ${fecha.getSeconds()}`) ;
}

setInterval(reloj, 1000);