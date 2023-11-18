const {Schema,model}=require('../connection');

const myschema=new Schema({
    user:ObjectId,
    rating:Number,
    review:String,
    createdAt:Date
});

module.exports=model('feedbacks',myschema)