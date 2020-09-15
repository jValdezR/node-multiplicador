// Requireds, tipos de requireds
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const {argv} = require('./config/yargs');
const colors = require('colors')

let comando = argv._[0];

switch (comando) {
    case 'list':
        console.log('listar'.red);
        listarTabla(argv.base,argv.limite)
        break;
    case 'create':
        console.log('crear');
        crearArchivo(argv.base,argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.rainbow))
            .catch(e => console.log(e));
        break;
    default: console.log('comando no reconocido');
}

let argv2 = process.argv;

// let parametro = argv[2];

// let base = parametro.split('=')[1];
//console.log('Limite', argv.limite);
// console.log(argv2);

//  

// console.log(process.argv);