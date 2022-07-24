var firstName; //Undefined, porque solo está declarada
firstName = 'Oscar';//asignamos
console.log(forstName);//Mostramos

var lastName = "Barajas";//declarar y asignar
lastName = "Vega";//reasignar
console.log(lastName);//mostrar

var secondName = 'David';//declarar y asignar
var secondName = 'Ana';//redeclarar y reasignar
console.log(secondName);

//Estas mejoras de ES6 permite que no solo con var se asignen, si no con const y let
//Esto es más seguro
let fruit = 'Apple';//declarar y asignar
fruit = 'Kiwi';//reasignar
console.log(fruit);

//let fruit = 'Banana'; -Error-
console.log(fruit);
//let no permite la redeclaración

//const es más robusto
const animal = 'dog';//declarar y asignar
animal = 'cat';//reasignado - error - por lo tanto const no permite que se puede reasaignar ni redeclarar
console.log(animal);

const vehicles = [];
vehicles.push("🚗");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);
//no estamos reasignando ni redeclarando. Const no permite los anteriomente mencionados, pero la mutabilidad sí está permitida. Puedes trabajar con el array
//de vehicles y los métodos.