function FizzBuzz(numero) {

    if (numero % 3 === 0) {
        return "Fizz";
    }
    if (numero % 5 === 0) {
        return "Buzz";
    }
    
    return numero.toString();

}
export default FizzBuzz;