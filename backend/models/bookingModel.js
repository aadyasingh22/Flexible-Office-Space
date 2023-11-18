const {Schema, model, Types} = require('../connection');

const myschema = new Schema({
    user : {type:Types.ObjectId,ref:"users"},
    space : {type:Types.ObjectId,ref:"spaces"},
    createdAt : Date,
    bookDate : Date
});

module.exports = model('bookings', myschema);