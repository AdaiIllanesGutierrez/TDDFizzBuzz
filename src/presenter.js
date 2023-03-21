//import sumar from "./sumador";
import {FizzBuzz,ListaFizzBuzz} from "./FizzBuss.js";

const limite = document.querySelector("#limite");
const form = document.querySelector("#FizzBuzz-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const lim = Number.parseInt(limite.value);

  div.innerHTML = "<p>"+ListaFizzBuzz(lim)+"</p>";
});
