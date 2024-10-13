const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'JMC-SALON DE BELLEZA', 
    password: '1100551975',
    database: 'salon_belleza'
});

connection.connect(err => {
    if (err) {
        console.error('Error conectando a la base de datos:', err.stack);
        return;
    }
    console.log('Conectado a la base de datos como id ' + connection.threadId);
});