const Pedidos = require('../models/Pedido');
const mongoose = require('mongoose');


exports.mostrarPedidos = async (req,res) => {
    
    try {
      const pedidos = await Pedidos.find({}).populate('cliente');
      res.json(pedidos);

    } catch (error) {
        console(error);
    }
}

exports.buscarPedido = async (req, res) => {
    // console.log(req.params);

    if (mongoose.isValidObjectId(req.params.id)) {
        // console.log('id válido');
        await Pedidos.findOne({_id:  req.params.id}, function(err, data) {
             if (err) 
                 throw err;
            if (data === null ) {
                data ='';
                // console.log('pedido no existente')
                res.status(200);
                res.json({
                    codigo:205,
                    data,
                    mensaje: 'Nro.Pedido no existente'
                });
            }else {
                 res.status(200);
                 res.json({
                     codigo:200,
                     data,
                     mensaje: 'Pedido encontrado'
                 });}                
         }).populate('cliente');    
    }else {
        // console.log('id inválido'); 
        await res.status(400);
        res.json({
            codigo: 400,
            mensaje: 'Nro.Pedido inválido.'
        });         
    }

    // try {
    //     await Pedidos.findOne({_id:  req.params.id}, function(err, data) {
    //         if (err) 
    //             throw err;
    //             res.status(200);
    //             res.json({
    //                 codigo:200,
    //                 data,
    //                 mensaje: 'Pedido encontrado'
    //             });                
    //     }).populate('cliente');
        // console.log('data = ', data);            

        // if(data.length === 0 ){
        //     res.json({
        //         codido: 400,
        //         mensaje: 'pedido no existente'
        //     }); 
        // }else{
    
        // }
    // } catch (error) {
    //     console.log(error);
    // }
  

}
