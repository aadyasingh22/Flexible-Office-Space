const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

const url = "mongodb+srv://aadyaverma2122:12345@cluster0.n1mgwtt.mongodb.net/officespacesdata?retryWrites=true&w=majority"


// console.log(process.env.DB_URL);
mongoose.connect(process.env.DB_URL)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;