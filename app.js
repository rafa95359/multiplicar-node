
const argv= require('./config/yargs').argv;
const colors = require('colors/safe');
const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar');

let comando=argv._[0];

switch(comando){
  case 'listar':
  console.log('Listar');
  listarTabla(argv.base,argv.limite)
  .then(listado=>console.log(listado))
  .catch(err=>console.log(err))
  
  break;

  case 'crear':
  crearArchivo(argv.base,argv.limite).then(archivo=>
    console.log(`Archivo creado:`,colors.yellow(`${archivo}`)))
    .catch(e=>console.log(e))
  break;

  default:
    console.log('Comando no reconocido');
}


//let argv2=process.argv;
//console.log('limite',argv.limite);

//let parametro=argv[2];
//let base=parametro.split('=')[1]
//
//
