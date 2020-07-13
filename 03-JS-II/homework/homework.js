// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  let mayor = x ;
  if (y > x){
    mayor = y;
  }
  return mayor;
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  let saludo = "Hola!";
  if (idioma === "aleman"){
    saludo = "Guten Tag!"
  }
  else if (idioma === "mandarin"){
    saludo = "Ni Hao!"
  }
  else if (idioma === "ingles"){
    saludo = "Hello!"
  }
  return saludo;
}

function esDiezOCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
    let S = false;
    if (numero == 5 || numero == 10){
      S = true;
    }
    return S;
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  let S = false;
  if (numero > 20 && numero < 50){
    S = true;
  }
  return S;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  let S = false;
  if ((numero % 1) == 0){
    S = true;
  }
  return S;
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  let S = numero;
  if ((numero % 3) == 0 && (numero % 5) != 0){
    S = "fizz";
  }
  else if ((numero % 3) != 0 && (numero % 5) == 0){
    S = "buzz";
  }
  else if ((numero % 3) == 0 && (numero % 5) == 0){
    S = "fizzbuzz";
  }
  return S;
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  let S = true;
  if (numero == 0 || numero == 1){
    S = false;
  }
  else {
    for (var i = 2; i < numero; i++){
      if (numero % i == 0){
        S = false;
      }
    }
  }
  return S;
}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  saludo,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  esPrimo
};
