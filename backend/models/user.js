const mongoose = require('mongoose')

//connect to DB
const url = process.env.MONGODB_TESTING_URI

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then( result => {
        console.log('connected to MongoDB')
    })
    .catch( error => {
        console.log('error connecting to MongoDB', error.message);
    })

const userSchema = new mongoose.Schema({
    email: String,
    zip: String,
    date: Date,
})

//export model
module.exports = mongoose.model('User', userSchema)