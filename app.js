
//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        //console.log('Crear tarea');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log('\n=========   Mostrar todas las tareas    ========'.cyan, '\n');
        let listado = porHacer.getListado();
        var i = 1;
        for (let tarea of listado) {
            //console.log('============ Por Hacer ==========='.green);
            console.log(i + ' --\t' + tarea.descripcion + '\t Estado: ' + tarea.completado + '\n');
            //console.log('Estado: ', tarea.completado);
            //console.log('=================================='.green,'\n');
            i++;
        }
        console.log('=================================================='.green,'\n');
        break;
    case 'actualizar':
        console.log('Actualizar tarea');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');
        break;
}