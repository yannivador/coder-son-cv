// const database = require("./database");

const mysql = require('mysql');

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



// ***** INITIALISATION SERVER ****

const express = require('express');

const app = express();

const port = 5000;

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, OPTIONS"
    );
    next();
});

//  ******** LISTE DES ROUTES ************

const id = "1";   // Ici on place l'id de l'utilisateur : 1 pour Yann ROUSSEAU

app.get('/', (req, res) => {
    res.send('Hello man !');
})

app.get('/portfolio', (req, res) => {
    // res.send(portfolioData);
    db.query("SELECT * FROM projects WHERE user_id=? ", id, function (err, result) {       
        if (err) throw err;       
        res.send(result);
    }); 
})

app.get('/users', (req, res) => {
    db.query("SELECT * FROM users WHERE id=? ", id, function (err, result) {       
        if (err) throw err;       
        res.send(result);
    }); 
})

app.get('/experience', (req, res) => {
    db.query("SELECT * FROM experience WHERE user_id=? ", id, function (err, result) {       
        if (err) throw err;       
        res.send(result);
    }); 
})

app.get('/diplome', (req, res) => {
    db.query("SELECT * FROM diplome WHERE user_id=? ", id, function (err, result) {       
        if (err) throw err;       
        res.send(result);
    }); 
})

//  ******** LISTEN ************

app.listen(port, () => {
    console.log(`Server at running on port ${port}`)
})

