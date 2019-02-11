var express = require('express');

var controller = require('./controllers/controller');

var app = express();


var cor=require('cors');

var corsOptions = {
    origin: 'http://127.0.0.1',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(express.static('./public'));

app.use(cor());

controller(app);


app.listen(3000, '127.0.0.1',(err)=>{
    if (err) console.log(err);
    else console.log("Listening on Port 3000..")
});

