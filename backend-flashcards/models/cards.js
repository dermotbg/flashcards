const mongoose = require('mongoose')
// const uniqueValidator = require('mongoose-unique-validator')

const cardSchema = new mongoose.Schema({
  en: {
    type:String,
    required: true,
    unique: true
  },
  bg: {
    type:String,
    required: true,
    unique: true
  },
  cat: String,
  subcat: String
}) 

// cardSchema.plugin(uniqueValidator)

cardSchema.set('toJSON', {
  transform: (document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString()
    delete returnedObj._id
    delete returnedObj.__V
  }
})

const Card = mongoose.model('Card', cardSchema)

module.exports = Card