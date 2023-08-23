require("dotenv").config()
const Message = require('../message-board/models/message')

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = process.env.LOCAL_DB_CONNECTION

async function populate() {
    const newMessage = await new Message({
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    })
    await newMessage.save()

}

async function run() {
    await mongoose.connect(mongoDB);
    await populate();
    console.log('Data population complete');
    mongoose.connection.close();
}

run().catch(error => {
    console.error('An error occurred:', error);
});