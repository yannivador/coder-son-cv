
const portfolioData = [
    {
        id: 1,
        name: 'IRE',
        languages: ['CSS', 'HTML'],
        source: "dfgfdgfd",
        info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, animi quidem perferendis et at amet nulla dolorum natus odio ab qui pariatur eum iure cupiditate. Quis, magnam laudantium, animi aliquid esse vitae pariatur temporibus repellendus eligendi unde accusantium!z',
        picture: './IRE.png'
    },
    {
        id: 2,
        name: 'Rando',
        languages: ['CSS', 'Javascript', 'PHP', 'HTML', 'MYSQL'],
        source: "dfgfdgfd",
        info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, animi quidem perferendis et at amet nulla dolorum natus odio ab qui pariatur eum iure cupiditate. Quis, magnam laudantium, animi aliquid esse vitae pariatur temporibus repellendus eligendi unde accusantium!z',
        picture: './img-rando.png'
    },
    {
        id: 3,
        name: 'd-angle',
        languages: ['CSS', 'HTML'],
        source: "dfgfdgfd",
        info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, animi quidem perferendis et at amet nulla dolorum natus odio ab qui pariatur eum iure cupiditate. Quis, magnam laudantium, animi aliquid esse vitae pariatur temporibus repellendus eligendi unde accusantium!z',
        picture: './d-angle.png'
    },
    {
        id: 4,
        name: 'Booking',
        languages: ['CSS', 'Javascript', 'PHP', 'HTML', 'Mysql'],
        source: "dfgfdgfd",
        info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, animi quidem perferendis et at amet nulla dolorum natus odio ab qui pariatur eum iure cupiditate. Quis, magnam laudantium, animi aliquid esse vitae pariatur temporibus repellendus eligendi unde accusantium!z',
        picture: './img-booking.png'
    }
]

const userData = [
    {
        id: 1,
        username: 'Yann',
        surname: 'ROUSSEAU',
        slogan: 'Ass is better',
        mail: 'yann901@hotmail',
        description: 'Text description',
        reseau: ['linkedin', 'github']
    },
    {
        id: 2,
        username: 'Lova',
        surname: 'RAHERI',
        slogan: '',
        mail: '',
        description: 'Text description',
        reseau: ['linkedin', 'github']
    },
    {
        id: 3,
        username: 'Gilles',
        surname: 'Maillot',
        slogan: '',
        mail: '',
        description: 'Text description',
        reseau: ['linkedin', 'github']
    }
]

const mysql = require('mysql');

const db = mysql.createConnection({ 
    host: "mysql-yannivador.alwaysdata.net", 
    user: "238563", 
    password: "ibanez.sa90" ,
    database: "yannivador_coder-son-cv"
});

db.connect(function(err) {   
    if (err) throw err;   
    console.log("Connecté à la base de données MySQL!"); 
});

// const sqlQuery = db.query('SELECT * FROM projects');

db.query ('SELECT * FROM users ', (err, lignes) => {
    if (err) throw err;
  
    console.log ('Données reçues de Db:');
    console.log (lignes);
})


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

app.get('/', (req, res) => {
    res.send('Hello man !');
})

app.get('/portfolio', (req, res) => {
    res.send(portfolioData);
})

app.get('/users', (req, res) => {
    res.send(userData);
})

app.listen(port, () => {
    console.log(`Server at running on port ${port}`)
})

