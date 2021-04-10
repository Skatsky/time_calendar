const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    id: {type: Number, primaryKey: true, autoIncrement: true},
    login: {type: String, unique: true, required: true},
    password: {type: String, required: true}
})

module.exports = model('User', schema)