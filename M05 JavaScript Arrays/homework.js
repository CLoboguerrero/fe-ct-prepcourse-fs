/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   // var primero = shift.array();
   var primero = array[0];
   return primero;
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
  
   var ultimo = array.pop();
   return ultimo;
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   var largo = array.length;
   return largo;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var sumarUno = array.map((masUno)=>{
      return masUno + 1;
   });
   return sumarUno;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   var agrega = array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   var comienzo = array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var frase = palabras.join(' ');
   return frase; 
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   var inc = array.includes(elemento)
   return inc;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var total = 0;
   //arrayOfNums.forEach((num4) => total = total + num4 )
   //   return total;
   for (i = 0; i < arrayOfNums.length; i++){
      total = arrayOfNums[i] + total;
   }
   return total;
   
 
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var sumaTodos = 0;
   //var prom = 0;
   //resultadosTest.forEach((numbers) => sumaTodos = sumaTodos + numbers)
   //return sumaTodos/prom;
   for (var i = 0; i < resultadosTest.length; i++){
      sumaTodos = resultadosTest[i] + sumaTodos;
   }
   return sumaTodos/resultadosTest.length;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var numeroChico = arrayOfNums[0];
   for (let i = 0; i < arrayOfNums.length; i++){
      if (arrayOfNums[i] > numeroChico){
         return arrayOfNums[i];
      }
   }
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var multiplicacion = 1;

   if (arguments.length === 0){
      return 0;
   }

   else if (arguments === [0]){
      return [0];
   }

   else if (arguments !== 0){
      for (i = 0; i < arguments.length; i++){
         multiplicacion = arguments[i] * multiplicacion;
      }
   }
   return multiplicacion;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var conteo = 0;
   for (var i = 0; i < array.length; i++){
      if (array[i] > 18){
         conteo += 1;
      }
   }
   return conteo;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
      if (numeroDeDia === 1 || numeroDeDia === 7){
         return "Es fin de semana";
      }
      else if (numeroDeDia > 1 && numeroDeDia < 7){
         return "Es dia laboral";
      }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   //var primerNumero = num.toString();
   //   if(primerNumero[0] == 9){
   //     return true;
   //   } else{
   //      return false;
   //  }
   var entero = num.toString();
   for (var i = 0; i < entero.length; i++){
      if (entero[0] == 9){
         return true;
      }
      return false;
   } 
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   //var iguales = array[+ 1];
   
   for (var i = 0; i < array.length; i++){
      if (array[i] == array[i + 1])
      return true;
   }
   return false;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var contador = [];
   for (var i = 0; i < array.length; i++){
   if (array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre'){
     contador.push(array[i]);
   }
 }
 if (contador.includes("Enero") && contador.includes("Marzo") && contador.includes("Noviembre")){
   return contador;
 }
 else{
   return "No se encontraron los meses pedidos";
 }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tablaseis = [];
   for (var i = 0; i < 11; i++){
    var resultado = 6 * i;
     tablaseis.push(resultado);
   }
   return tablaseis;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var arreglo = [];
   for (var i = 0; i < array.length; i++){
      if (array[i] > 100 && array[i] <= 200){
        arreglo.push(array[i]);
      }
   } return arreglo;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/
/* 
num = 3
[5, 7, 9, 11, 13, 15, 17, 19, 21, 23]
*/


function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var newValue = [];
   var suma = num;

   for (var i = 0; i < 10; i++){
      if (suma === i){
         break;
      }
      else {
         suma = suma + 2;
         newValue.push(suma);
      }
   }
   if (newValue.length < 10){
      return "Se interrumpió la ejecución";
   }
   else if (newValue.length === 10){
      return newValue;
   }
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var arreglo = [];
   var suma = num;
   for (let i = 0; i < 10; i++){
      if (i === 5){
         continue;
      }
      else{
         suma = suma + 2;
         arreglo.push(suma);
      }
   }
   return arreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
