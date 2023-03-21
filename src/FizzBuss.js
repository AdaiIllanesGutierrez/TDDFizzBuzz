function FizzBuzz(numero) {

    if (numero % 3 === 0 && numero % 5 === 0) {
        return "FizzBuzz";
    }else
    if (numero % 3 === 0) {
        return "Fizz";
    }else
    if (numero % 5 === 0) {
        return "Buzz";
    }
    return numero.toString();
}

function ListaFizzBuzz(limite){
    let lista="";
    for(let i=1;i<limite+1;i++){
        lista += FizzBuzz(i)+" ";
        
    }
    
    return lista;

}

export {ListaFizzBuzz,FizzBuzz};