
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let artistSchema = Schema({
    name: String,
    description:String,
    image:String
});

module.exports =mongoose.model('artist',artistSchema);
