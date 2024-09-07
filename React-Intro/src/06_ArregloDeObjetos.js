
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
    inventarios: [
        {
            id: 1,
            color: 'Rojo',
            cantidad: 5,
            precio: 50000000
        },
        {
            id: 2,
            color: 'Azul',
            cantidad: 2,
            precio: 50000000
        },
        {
            id: 3,
            color: 'Dorado',
            cantidad: 1,
            precio: 70000000
        },
    ],
    totalInventario: function () {
        let total = 0;
        this.inventarios.forEach(inventario => {
            total = total + inventario.cantidad;
        });
        return total;
    },
    saludo: function () {
        return `Soy el ${this.nombre} de ${this.marca.nombre}, y valgo muchoxd`;
    }
}

console.log(carro)
console.log(`${carro.totalInventario()} Autos en Stock de ${carro.marca.nombre} ${carro.nombre}`);