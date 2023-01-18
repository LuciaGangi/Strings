// Strings
let str = "Hola soy un texto con comillas dobles";
let str_sng = "Hola soy un texto con comillas simples";

console.log(str);
console.log(str_sng);

// Comillas invertidas _(backticks)
let str_backticks = `Hola esto es un string con backticks`;
console.log(str_backticks);

let nombre = "Iñigo";
let saludo = `Hola, ${nombre} bienvenido!`;

console.log(saludo);

//Plantillas HTML
let plantilla = `
<html>
    <h1>Página web de ${nombre}</h1>
    <p>Este es un párrafo</p>
</html>
`;

console.log(plantilla);
