const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

require('./db');
// model -> dao - > service - > controller -> index.js


app.use('/bank',require('./controller/bank-controller'));// creating base url and connectiing with route path







app.listen(3000, ()=>{
    console.log('Listening to the port 3000');
})

