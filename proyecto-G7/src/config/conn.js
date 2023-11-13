import { createPool } from 'mysql2';

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'JllA37745',
    database: 'funko_test',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit:0
});

pool.getConnection((error, conection) => {
    if (error) {
        console.log(`Seprodujo un error en la consulta: ${error}`);
    } else {
        const data = conection.query('SHOW TABLES;')
        console.log('Coneccion a la base de datos Exitosa', data.rows);
        conection.release();
    }
})

export const conn = pool.promise();