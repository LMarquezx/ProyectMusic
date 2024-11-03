
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let UserSchema = Schema({
    name: String,
    surmane:String,
    email:String,
    password:String,
    role:String,
    image:String
});

module.exports =mongoose.model('user',UserSchema);
