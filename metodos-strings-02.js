// Métodos de cadenas de texto (parte 2)

let input = "Escorpio";
let db = "escorpio";

// toLowerCase() - toUpperCase()
console.log(input.toLowerCase());
console.log(input.toLowerCase === db.toLowerCase);

// Formas de concatenar dos cadenas de caracteres
let str_1 = "Hola soy la primera cadena.";
let str_2 = "Y yo soy la segunda cadena";

console.log(str_1.concat(" ", str_2));
console.log(str_1 + " " + str_2);
console.log(`${str_1} ${str_2}`);

// Eliminar espacios al inicio y al final
let str_3 = "Hola soy un string con espacios al final   ";
//trim() trimStart() trimEnd()
console.log(str_3.trim());

// Obtener el caracter que hay en cierta posición
let str_4 = "Hola soy el string número 4";

console.log(str_4.charAt(5));
console.log(str_4[5]);

// Obtener la posición de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Gorka y me gusta el surf";
console.log(str_5.indexOf("Gorka"));
