const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const avatarSchema = new mongoose.Schema({
  seed: String,
  flip: { type: Boolean, default: false },
  translateX: { type: Number, default: 0 },
  translateY: { type: Number, default: 0 },
  beard: { type: Array, default: [''] },
  beardProbability: {  type: Number, default: 100 },
  eyes: { type: Array, default: [''] },
  mouth: { type: Array, default: [''] },
  moustache: { type: Array, default: [''] },
  moustacheProbability: { type: Number, default: 100 },
  nose: { type: Array, default: [''] },
  top: { type: Array, default: [''] },
  face: { type: Array, default: [''] },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

avatarSchema.plugin(uniqueValidator)

avatarSchema.set('toJSON', {
  transform: (document, returnedObj) => {
    console.log('retOB',returnedObj)
    returnedObj.id = returnedObj._id.toString()
    delete returnedObj._id
    delete returnedObj.__v
  }
})

const Avatar = mongoose.model('Avatar', avatarSchema)

module.exports = Avatar