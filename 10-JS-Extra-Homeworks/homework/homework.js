// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = Object.entries(objeto);
  return matriz;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  var objeto = {};

  for (var n = 0; n < string.length; n++) {
    if (objeto[string[n]] === undefined) {
      objeto[string[n]] = 1;
    } else {
      objeto[string[n]] += 1;
    }
  }
  return objeto;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var cadenaUpper = "";
  var cadenaLower = "";
  var sAChars = s.split("");
  for (var x = 0; x < sAChars.length; x++) {
    if (sAChars[x] === sAChars[x].toUpperCase()) {
      cadenaUpper += sAChars[x];
    } else {
      cadenaLower += sAChars[x];
    }
  }
  cadenaUpper = cadenaUpper + cadenaLower;
  return cadenaUpper;
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var strPalabras = str.split(" ");
  var resultado = "";
  for (var x = 0; x < strPalabras.length; x++) {
    var letras = strPalabras[x].split("");
    var letrasAlRevez = letras.reverse();
    for (var n = 0; n < letras.length; n++) {
      resultado += letras[n];
    }
    if (x + 1 < strPalabras.length) {
      resultado += " ";
    }
  }
  return resultado;
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numAStr = numero.toString();
  var strSeparado = numAStr.split("");
  var strInvertido = strSeparado.reverse();
  var strJuntado = strInvertido.join("");
  if (strJuntado === numAStr) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var charsAExcluir = ["a", "b", "c"];
  var cadenaReturn = "";
  for (var x = 0; x < cadena.length; x++) {
    if (!charsAExcluir.includes(cadena[x])) {
      cadenaReturn = cadenaReturn + cadena[x];
    }
  }
  return cadenaReturn;
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  const newArray = arr.sort((a, b) => a.length - b.length);
  return newArray;
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var newArray = [];
  for (let n = 0; n < arreglo1.length; n++) {
    if (arreglo2.includes(arreglo1[n])) {
      newArray.push(arreglo1[n]);
    }
  }
  return newArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
