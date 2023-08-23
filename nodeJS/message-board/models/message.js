const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    user: { type: String, required: true},
    text: {type: String, required: true ,maxLength: 300 },
    added: { type: Date, required: true}
})

module.exports = mongoose.model('Message', MessageSchema)