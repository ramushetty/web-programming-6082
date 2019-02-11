const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    Mobiles:[new Schema({
        title: String,
        description: String,
        image: String,
        price: String
    })],
    Apparel:[new Schema({
        title: String,
        description: String,
        image: String,
        price: String
    })],
    Electronics:[new Schema({
        title: String,
        description: String,
        image: String,
        price: String
    })]
});

mongoose.model('product', productSchema);