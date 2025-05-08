const {Schema, model}=require('../connection');

const mySchema =new Schema({
    name : String,
    CPU : {type: Number },
    RAM : {type: String , required:true},
    Storage :{type: Number},
    purchaseddAt : { type:Date, default:Date.now()},

})
module.exports = model('plans',mySchema);