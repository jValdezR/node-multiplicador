// requireds
const fs = require('fs'); // Ya la trae node
const colors = require('colors')

/* module.exports. */crearArchivo = (base,limite) => {

    return new Promise((res, rej) => {

        if (!Number(base)) {
            rej('No es un numero');
            return;
        }


        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) {
                rej(err);
            }
            else {
                res(`tabla-${base}-al-${limite}.txt`);
            }
        });
    });

}
let listarTabla = (base, limite) => {
    let data = '';
    for (let i = 1; i <= limite; i++) {
        data += (`${base} * ${i} = ${base * i}\n`);
    }
    console.log(data.green);
}

module.exports = {
    crearArchivo,
    listarTabla
}