const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

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

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, OPTIONS"
  );
  res.end(JSON.stringify(portfolioData));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});