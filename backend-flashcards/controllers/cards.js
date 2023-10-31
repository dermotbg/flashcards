const Card = require('../models/cards')
const User = require('../models/users')

const flashcardsRouter = require('express').Router()


flashcardsRouter.get('/', async(request, response) => {
  const cards = await Card.find({}).populate('ratedBy', {
    username: 1,
    id: 1
  })
  return response.json(cards)
})

//  post route for later implementation on FE
flashcardsRouter.post('/', async(request, response) => {
  const card = request.body
  console.log(card)
  if (!card.en || !card.bg){
    response.status(400).end()
  }

  const newCard = new Card({
    en: card.en,
    bg: card.bg,
    cat: card.cat,
    subcat: card.subcat
  })
  console.log('newCard', newCard)

  const savedCard = await newCard.save()
  return response.status(201).send(savedCard)
})

flashcardsRouter.put('/:id', async (request, response) => {
  const body = request.body

  const updatedCard = {
    en: body.en,
    bg: body.bg,
    cat: body.cat,
    subcat: body.subcat,
    difficulty: body.difficulty,
    rating: body.rating,
    ratedBy: { user: body.ratedBy.user, rating: body.ratedBy.rating },
    id: body.id
  }

  console.log('updated card done', updatedCard)

  await Card.findByIdAndUpdate(body.id, updatedCard, {
    new: true, 
    runValidators: true,
    context: 'query'
  })
  // might need to add rating data to user in the future 
  await User.findByIdAndUpdate(body.ratedBy.user, { $push: { ratedCards: body.id } }, {
    new: true, 
    runValidators: true,
    context: 'query'
  })

  return response.status(204).end()
})

module.exports = flashcardsRouter