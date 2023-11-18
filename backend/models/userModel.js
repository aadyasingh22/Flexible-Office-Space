const {Schema,model}=require('../connection');

const myschema=new Schema({
    name:{type:String,require:true},
    email: {type:String,require:true,unique:true},
    password:{type:String,require:true},
    avatar:{type:String, default: 'default.jpeg'},
    createdAt:Date
});

module.exports=model('users',myschema)