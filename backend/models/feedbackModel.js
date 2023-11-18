const {Schema,model,Types}=require('../connection');

const myschema=new Schema({
    user:{type:Types.ObjectId,ref:"users"},
    rating:Number,
    review:String,
    createdAt:Date
});

module.exports=model('feedbacks',myschema)