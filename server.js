const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');
const fs = require('fs');
const app = express();
const server = require('http').createServer(app);
require('./mutiplayer')(server);

app
.use(compression())
.use(bodyParser.json())
.use(express.static(path.join(__dirname, 'dist', 'domino')))
.use((req, res, next) => {
  if(path.extname(req.path).length > 0) {
    next();
  } else {
    res.sendFile(path.join(__dirname, 'dist', 'domino', 'index.html'));
  }
});


server.listen(process.env.PORT || 5000);
