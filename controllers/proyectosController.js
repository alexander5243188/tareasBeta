//exports permite exportar varios modulos
//controlador define que es lo que se observa
exports.proyectosHome = (req, res) =>{
    res.render('index',{
        nombrePagina : 'Proyectos'
    });
}

exports.formularioProyecto = (req, res) =>{
    res.render('nuevoProyecto',{
        nombrePagina: 'Nuevo Proyecto'
    });
}