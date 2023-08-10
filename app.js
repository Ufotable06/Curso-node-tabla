const { CrearArchivo } = require('./helpers/multiplicar')
const  argv  = require('./config/yargs')

console.clear();



console.log( argv );






//const [, , arg3 = 'base=5'] = process.argv;
//const [, base = 5 ] = arg3.split('=');







CrearArchivo( argv.b , argv.l, argv.h )
   .then( nombreArchivo => console.log( nombreArchivo, 'creada' ))
   .catch( err => console.log(err)); 







