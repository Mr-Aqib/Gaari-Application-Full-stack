// first require mongoose for mongodb coonection
const mongoose = require('mongoose')

// Function for connection with mongooDB
const connectDB = async () =>
{
    await mongoose.connect(process.env.MONGO_URL)
    console.log(`MongoDB connected AT HOST...${mongoose.connection.host.red}`)
}
module.exports = connectDB