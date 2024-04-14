const {Schema,model}=require('../connection');

const myschema=new Schema({
    firstName:{type:String,require:true},
    lastName:{type:String,require:true},
    email: {type:String,require:true,unique:true},
    password:{type:String,require:true},
    avatar:{type:String, default: 'default.jpeg'},
    createdAt:Date,
    email_verified: {type:Boolean,default:false},
    blocked: {type:Boolean,default:false},
    createdAt : Date
});



module.exports=model('users',myschema)