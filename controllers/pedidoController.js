const Pedidos = require('../models/Pedido');


exports.mostrarPedidos = async (req,res) => {

    try {
      const pedidos = await Pedidos.find({}).populate('cliente');
      res.json(pedidos);

    } catch (error) {
        console(error);
    }
}

exports.buscarPedido = async (req, res) => {
    //console.log(req.params);

    const data = await Pedidos.findById( req.params.id );
    //console.log('pedido = ', data.length);
  
    if(data.length === 0 ){
        res.json({mensaje: 'pedido no existente'}); 
    }else{
        
        res.json({
            codigo:200,
            data,
            mensaje: 'Pedido encontrado'
        })
    }
}