
function obtenerInfo(name = 'Misael', apellido = 'Lomas') { //Por default
    const info = `${name} ${apellido}`;
    return info;
}

const info = obtenerInfo('Marioni');
console.log(info);