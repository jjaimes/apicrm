const Clientes = require('../models/Clientes')

// ---< AGREGA un nuevo cliente 
exports.nuevoCliente = async (req, res) => {
    //console.log(req.body);

    const cliente = new Clientes();

    cliente.nombre = req.body.nombre;
    cliente.apellido = req.body.apellido;
    cliente.empresa = req.body.empresa;
    cliente.email = req.body.email;
    cliente.telefono = req.body.telefono;
    cliente.vendedor = "5f85168a04d12bbe5c1f06bb";
    console.log(cliente);

    try {
        // Almacena el registro en la BD
        await cliente.save();
        res.json({
            mensaje: 'Agregado satisfactoriamente'
        });
    } catch (error) {
        console.log(error);
        await res.json({
            mensaje: error
        });
    }
}

//  const productos = [
//      {
//          articulo: {
//              nombre: 'artículo1',
//              precio: 1000
//          }
//      },
//      {
//          articulo: {
//              nombre: 'artículo1',
//              precio: 1000
//          }
//      }    
//  ];

exports.mostrarClientes = async (req,res) => {

      try {
        const clientes = await Clientes.find({});
        res.json(clientes);

      } catch (error) {
          console(error);
      }
} 


exports.buscarCliente = async (req, res) => {
    //console.log(req.params);

    const data = await Clientes.find( req.params );
    //console.log('cliente = ', data.length);
 
    if(data.length === 0 ){
        res.json({mensaje: 'cliente no existente'}); 
    }else{
        
        res.json({
            codigo:200,
            data,
            mensaje: 'Sí hay data'
        })
    }
}