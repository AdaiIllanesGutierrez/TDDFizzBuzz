import FizzBuzz from "./FizzBuss.js";

describe("Fizz Buss", () => {
  it("retorne un numero en cadena", () => {
    //expect(sumar(3, 2)).toEqual(5);
    expect(FizzBuzz(1)).toEqual("1")
  });
  it("retorne un numero en cadena", () => {
    //expect(sumar(3, 2)).toEqual(5);
    expect(FizzBuzz(2)).toEqual("2")
  });
  it("retorne Fizz si es multiplo de 3", () => {
    //expect(sumar(3, 2)).toEqual(5);
    expect(FizzBuzz(3)).toEqual("Fizz")
  });
  it("retorne fizz si es multiplo de 3", () => {
    expect(FizzBuzz(9)).toEqual("Fizz")
  });
  it("retorne Buzz si es multiplo de 5", () => {
    expect(FizzBuzz(5)).toEqual("Buzz")
  });
  it("retorne FizzBuzz si es multiplo de 3 y 5", () => {
    expect(FizzBuzz(15)).toEqual("FizzBuzz")
  });
  it("retorne FizzBuzz si el numero es 30", () => {
    expect(FizzBuzz(30)).toEqual("FizzBuzz")
  });
  
  

});