const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const pedidoController = require('../controllers/pedidoController');

module.exports = function() {

    router.route('/clientes')
        .get(clientController.mostrarClientes)
        .post(clientController.nuevoCliente);

    //router.post('/clientes', clientController.nuevoCliente)
    //router.get('/clientes', clientController.mostrarClientes);

    router.route('/clientes/:email')
        .get(clientController.buscarCliente);   
        
    router.route('/pedidos')
        .get(pedidoController.mostrarPedidos)
    router.route('/pedidos/:id')
        .get(pedidoController.buscarPedido);  

    return router;
}