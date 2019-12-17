const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');

const routers = require('./router');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

app.use(morgan('short', {stream: accessLogStream}));

app.use('/test', (req, res) => {
  res.send({
    'code': 20000,
    'msg': '测试连接'
  })
})

app.use('/v1', routers);


app.listen(6601, () => {
  console.log('Server at 6601');
})
