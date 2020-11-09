const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

//console.log(process.env.DB_URL);

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true, 
            useCreateIndex: true
        });
        console.log('Conectado con la DB');    
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = conectarDB;