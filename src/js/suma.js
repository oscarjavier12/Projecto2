let num1 = prompt("Introduce el primer número");
let num2 = prompt("Introduce el segundo número");
//alert(`La suma de ${num1} y ${num2} es ${num1 + num2}`); //covertir los numeros a enteros
//covertir los numeros a enteros
//alert(`La suma de ${num1} y ${num2} es ${parseInt(num1) + parseInt(num2)}`);
// Con el + delante de num1 y num2, los convierte a número
//alert(`La suma de ${num1} y ${num2} es ${+num1 + +num2}`);
// Con Number() convierte a número
alert(`La suma de ${num1} y ${num2} es ${Number(num1) + Number(num2)}`);
