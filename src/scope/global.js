// variables

var a; //declarando
var b = 'b'; //declaramos y asignamos
b = 'bb'; //reasignación
var a = 'aa'; //redeclaración


//Global Scope
var fruit = 'Apple'; //global


function bestFruit(){
    console.log(fruit);
}

bestFruit();



function countries() {
    country = 'Colombia'; // global
    console.log(country);
}

countries();
console.log(country);
//Mucho cuidado con esto porque estamos asignando country como global, y puede ser accedido dentro y fuera de la función

