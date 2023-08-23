const Message = require('../message-board/models/message')

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = "mongodb+srv://noaazerrad:bxrxUFSATSaI5j3Y@cluster0.v3wgqqc.mongodb.net/mo";
async function populate(){
    const messages = [
        {
            text: "Hi there!",
            user: "Amando",
            added: new Date()
        },
        {
            text: "Hello World!",
            user: "Charles",
            added: new Date()
        }
    ];

       const newMessage = await new Message({ text: "Hi there!",
           user: "Amando",
           added: new Date()})
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