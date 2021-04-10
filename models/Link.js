const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    id: {type: Number, primaryKey: true, autoIncrement: true},
    value: {type: Array, required: true, default: undefined},
    owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('Link', schema)