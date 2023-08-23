const Message = require('../models/message')
const asyncHandler = require('express-async-handler')


exports.index = asyncHandler(async (req, res) => {
    const messages = await Message.find()
    res.render('index', {title: "Mini Messageboard", messages: messages});
})

exports.create_message_get = asyncHandler(async (req, res) => {
    res.render('form')
})

exports.create_message_post = asyncHandler(async (req, res) => {
    const data = req.body
    console.log(req.body.messageText)
    const newMessage = new Message({text: data.messageText, user: data.userName, added: new Date()})
    await newMessage.save()
    res.redirect('/')
})

exports.delete_message = asyncHandler(async (req, res) => {
    console.log('clicked on delete')
    const messageId = req.params.id
   await Message.findByIdAndRemove(messageId)
    res.redirect('/')
})