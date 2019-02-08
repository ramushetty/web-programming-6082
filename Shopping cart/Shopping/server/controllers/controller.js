var bodyparser = require('body-parser');
var fs = require('fs');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser:true}, (err)=>{
    if(err) throw err;
    else console.log('Database Connection successfully Established');
});

// var productSchema = new mongoose.Schema({
//     Mobiles:[({
//         title: String,
//         description: String,
//         image: String,
//         price: String
//     })],
//     Apparel:[({
//         title: String,
//         description: String,
//         image: String,
//         price: String
//     })],
//     Electronics:[({
//         title: String,
//         description: String,
//         image: String,
//         price: String
//     })]
// });

var productSchema = new mongoose.Schema({
        ind:Number,
        title: String,
        description:String,
        image:String,
        quantity:Number,
        price:Number,
        rating:Number
});


var credentialsSchema = new mongoose.Schema({
    username : String,
    email : String,
    password : String
})


var reviewSchema = new mongoose.Schema({
    ind : Number,
    revName: String,
    review: String
})

var credentials = mongoose.model('credential', credentialsSchema);

var products = mongoose.model('Product', productSchema);

var reviews = mongoose.model('Review', reviewSchema);

var jsondat = fs.readFileSync('controllers/catalog.json');
var maindata = JSON.parse(jsondat);
console.log(maindata);
// var product = products(maindata).save((err)=>{
//     if(err) throw err;
//     else console.log('Item Saved');
// });

// for(var i = 0; i < maindata.prod.length; i++) {
//     var product = products(maindata.prod[i]).save((err)=>{
//         if(err) throw err;
//         else console.log('Item Saved');
//     });
// }


var urlencode = bodyparser.urlencoded({extended: false});

module.exports = function(app) {

    // app.use((req,res,next)=>{
    //     res.setHeader("Access-Control-Allow-Origin", "*");
    //     res.setHeader("Access-Control-Allow-Credentials", "true");
    //     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    //     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    //     if('OPTIONS' === req.method) {
    //         res.sendStatus(200);
    //     } else {
    //         console.log(`${req.ip} ${req.method} ${req.url}`);
    //         next();
    //     }
    
    // });
maindata;
products.find({}, (err,docs)=>{
    if(err) res.json(err);
    else maindata = docs;
});

data = [];
var jsonparser = bodyparser.json();
    app.get('/home', (req, res)=>{
        console.log('In server');
        res.send(maindata);
    });

    app.post('/login', jsonparser, (req, res, next)=>{
        console.log("hello");
        console.log(req.body);
        credentials.find({}, (err, data)=>{
            if (err) throw err;
            else {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].username === req.body.username) {
                        if (data[i].password === req.body.password) {
                            res.send(true);
                            return;
                        }
                    }
                }
                res.send(false);
            } 
        });
    });
    
    app.post('/register', jsonparser, (req, res, next)=>{
        console.log(req.body);
        var credential = credentials(req.body).save((err)=>{
            if(err) throw err;
            else console.log('Credentials saved in DB');
        });
        res.send(true);
        next();
    });


    app.put('/checkout', jsonparser,(req, res)=>{
        console.log("hello");
            products.findOne({ind:req.body.ind}, (err, docs)=>{
                var value = docs.quantity;
                if (err) console.log(err);
                else {
                    if(req.body.quantity <= docs.quantity) {
                        var num1 = parseInt(req.body.quantity);
                        var val = value-num1;
                        products.findOneAndUpdate({ind: req.body.ind}, {$set:{quantity:val, title: "Samsung updated"}}, {new:true}, (err, doc) => {
                            if(err) {
                                console.log("Error in Updating");
                            } else {
                                console.log("Product Data Updated");
                                res.send(true);
                                return;
                            }
                        })
                    } else {
                        res.send(false);
                    }
                }
            })
    })



    app.put('/review', jsonparser, (req,res)=>{
        console.log("got the review");
        reviews(req.body).save((err)=>{
            if(err) throw err;
            else console.log("Review Stored");
        })
    })

    app.get('/reviews/:i', (req, res)=>{
        console.log("In reviewwww");    
        reviews.find({ind: req.params.i}, (err, data)=>{
            if(err) console.log(err);
            else res.send(data);
        })
        console.log(req.params.i);
    })
}