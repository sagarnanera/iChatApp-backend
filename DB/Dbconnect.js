const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

mongoose.connect(
    "mongodb://localhost:27017/",
    {
        dbName: "real-time-chat-app-db",
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: true,
    },
    (err) => {
        err ? console.log(err) : console.log(
            "Connected to database 🔗")
    }
);

const conn = mongoose.connection;

module.exports = conn;