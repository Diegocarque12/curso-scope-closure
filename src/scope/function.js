function greeting(){
    let userName = 'Ana';
    console.log(userName);

    if(userName === 'Ana') {
        console.log(`Hello ${userName}`);
    }
}

greeting();
console.log(userName);//Esto da error porque el function scope es que userName pertenece a la función greeting