// test-connection-master.js
const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host: '10.27.240.110',
    port: 5435,
    user: 'dhportaluser',
    password: 'B1gD4t4W4r3h0u5e',
    database: 'master_data_staging',
  },
});

db.raw('SELECT NOW()')
  .then((res) => {
    console.log('Koneksi ke master_data_staging berhasil!');
    console.log('Waktu server:', res.rows[0].now);
  })
  .catch((err) => {
    console.error('Gagal konek ke master_data_staging:');
    console.error(err.message);
  })
  .finally(() => {
    db.destroy();
  });
