const Card = require('../models/cards')

const flashcardsRouter = require('express').Router()


flashcardsRouter.get('/', async(request, response) => {
  const cards = await Card.find({})
  return response.json(cards)
})

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

module.exports = flashcardsRouter