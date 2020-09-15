const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('list', 'Imprime en consola la tabla de multiplicar', opts)
    .command('create', 'Crea un txt con la tabla que ingreses', opts)
    .help()
    .argv;

module.exports = {
    argv
}