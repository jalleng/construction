'use strict';

let port = process.env.PORT || 3000;
let http = require('http');
let https = require('https');
let express = require('express');
let app = express();
let cors = require('cors');

app.use(cors());
app.use(express.static(__dirname + '/app/'));


app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(port);
console.log('Express server started on port ' + port);