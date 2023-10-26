const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    uniqueCaseInsensitive: true,
    minLength: 3,
    maxLength: 15
  },
  passwordHash: { type: String, required: true},
  score: Number
})


userSchema.plugin(uniqueValidator)

userSchema.set('toJSON', {
  transform: (document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString()
    delete returnedObj._id
    delete returnedObj.passwordHash
    delete returnedObj.__v
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User