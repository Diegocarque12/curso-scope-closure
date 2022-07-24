function fruits(){
    if(true){
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();//de esta forma se ve puede ver que block scope(que se agrega en ES6) es el concepto que impide que fruit2 y fruit3 puedan se accesados, 
         //porque están dentro del scope del if



//la forma en que pueden ser accesados es: 
function fruits(){
    if(true){
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana';
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
}

fruits();