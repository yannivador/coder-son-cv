const mysql = require('mysql2');

const db = mysql.createConnection({ 
    host: "mysql-yannivador.alwaysdata.net", 
    user: "238563", 
    password: "ibanez.sa90" ,
    database: "yannivador_coder-son-cv"
});

// Connexion à la base de données
db.connect(function(err) {   
    if (err) throw err;   
    console.log("Connecté à la base de données MySQL!");
});

// db.query("SELECT * FROM users ", function (err, result) {       
//     if (err) throw err;       
//     a = result;
// }); 

// console.log(a);     


// const a = db.query('SELECT * FROM users ', (err, lignes) => {
//     if (err) throw err;
    
//     // console.log (lignes);
//     // users = lignes;

//     // Afficher les lignes de requetes
//     lignes.forEach((row) => {
//         console.log(`C'est le CV de ${row.name}  ${row.surname}`);
//     });
//     return lignes;

// })

    
// exports.getUsers = async () => {
//     const result = db.query("SELECT * FROM users", (err, rows) => {
//         exports.rows;
//     });
// };






