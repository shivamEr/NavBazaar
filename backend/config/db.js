const mongoose = require('mongoose')


function connectDB() {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("DB connected")
        })
        .catch(() => {
            console.log("Error while DB connection");
        })
}

module.exports = connectDB;