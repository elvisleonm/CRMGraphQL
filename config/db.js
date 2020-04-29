const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const conectarDB = async() => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('→ DB Connnect OK');
    } catch (error) {
        console.error('Hubo un error');
        console.error(error);
        // → DETIENE LA APP
        process.exit(1);
    }
}


module.exports = conectarDB;