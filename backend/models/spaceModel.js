const {Schema, model} = require('../connection');

const myschema = new Schema({
    title : String,
    location : String,
    description : String,
    area : Number,
    furnishingStatus : String,
    parking : String,
    washroom : Number,
    image : {type:String, default: 'default.jpeg'},
    cost : Number,
    services : Array,
    createdAt : Date
});

module.exports = model('spaces', myschema);