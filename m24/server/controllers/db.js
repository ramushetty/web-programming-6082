var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser:true}, (err)=>{
    if(err) throw err;
    else console.log('Database Connection successfully Established');
});

// require('./products');