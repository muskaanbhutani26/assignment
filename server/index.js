const express = require('express');
const ships = require('./data/ships');
const server = express();

const port = 4000;

//CORS Middleware
server.use(function (req, res, next) {
  //Enabling CORS
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization');
  next();
  });

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});



server.get(['/api/ships', '/api/ships/:query'], (req, res) => {
    const query = req.params.query;

    if (!query) {
        return res.json(ships);
    }

    const matches = ships.filter(ship =>
        ship.name.toLowerCase().includes(query.toLowerCase())
    );

    res.header('Access-Control-Allow-Origin', '*');
  //res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  //res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization');

    res.json(matches);
});
