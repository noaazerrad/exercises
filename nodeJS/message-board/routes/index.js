var express = require('express');
var router = express.Router();

const message_controller = require('../controllers/messageController')

router.get('/', message_controller.index)

router.get('/new', message_controller.create_message_get)

router.post('/new', message_controller.create_message_post)

router.post('/delete/:id', message_controller.delete_message)

module.exports = router;
