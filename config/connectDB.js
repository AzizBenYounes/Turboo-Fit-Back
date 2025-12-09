//require of mongoose
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("connected database .....")
    } catch (error) {
        console.log("impossible to connect the BD",error)
        process.exit(1)//exit if we cannot connect to the BD
    }
}

module.exports = connectDB