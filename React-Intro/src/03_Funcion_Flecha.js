const obtenerInfo = (name = 'Misael', apellido = 'Rdz') => `${name} ${apellido}`;
const sum = (a = 0, b = 0) => a + b;

const info = obtenerInfo('Marioni', 'Fernandez');

console.log(info);
console.log(sum(20, 10));