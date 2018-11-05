const descrip = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
};

const complet = {
    completado: {
        alias: 'c',
        default: true
    }
}

const argv = require('yargs')
            .command('crear','Crea una nueva tarea', descrip)
            .command('actualizar','Actualiza el estado de una tarea',{
                descripcion: {
                    demand: true,
                    alias: 'd'
                },
                completado: {
                    alias: 'c',
                    default: true
                }
            })
            .command('listar', 'Lista todas las tareas')
            .command('borrar', 'borra un elemento de la lista', descrip)
            .help()
            .argv;

module.exports = {
    argv
}