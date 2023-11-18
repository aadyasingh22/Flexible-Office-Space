const {Schema, model} = require('../connection');

const myschema = new Schema({
    title : String,
    description : String,
    area : Number,
    image : {type:String, default: 'default.jpeg'},
    cost : Number,
    services : Array,
    createdAt : Date
});

module.exports = model('spaces', myschema);