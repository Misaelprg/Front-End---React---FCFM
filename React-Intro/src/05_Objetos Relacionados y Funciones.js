
const carro = {
    id: 1,
    nombre: 'Terzo Millenio', //Uno exotico porque no?
    date: new Date(),
    marca: {
        id: 1,
        nombre: 'Lamborguini',
        ubicacion: 'Italia',
        age: 61
    },
    costo: 50000000,
    saludo: function () {
        return `Soy el ${this.nombre} de ${this.marca.nombre}, y valgo muchoxd`;
    }
}

carro.costo = 666666666;

console.log(carro)
const saludo = carro.saludo();
console.log(saludo);