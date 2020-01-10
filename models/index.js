const { model, Schema } = require('mongoose')

const ToDo = require('./ToDo.js')(model, Schema)


module.exports = { ToDo }