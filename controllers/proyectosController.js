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

exports.nuevoProyecto = (req, res) =>{
    //res.send('Enviaste los datos');
    //Enviar a la consola los datos
    
    //.req es la forma en la que accedes a los datos
    //console.log(req.body);
    
    //validamos que tengamos algo en el input
    const { nombre } = req.body;

    let errores = [];

    if(!nombre){
        errores.push({'texto': 'No puede estar sin datos'})
    }

    // si hay errores en viamos a la vista nuevoProyecto para que los imprima
    if(errores.length > 0){
        res.render('nuevoProyecto', {
            nombrePagina : 'Nuevo Proyecto',
            errores
        })
    }else{
        
    }
}