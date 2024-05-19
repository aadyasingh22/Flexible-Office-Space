const {Schema, model, Types} = require('../connection');

const myschema = new Schema({
    user : {type:Types.ObjectId,ref:"users"},
    space : {type:Types.ObjectId,ref:"spaces"},
    date: Date,
    duration: String,
    createdAt : {type : Date, default: Date.now}
});

module.exports = model('bookings', myschema);