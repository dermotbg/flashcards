const bcrypt = require('bcrypt')
const Users = require('../models/users')
const User = require('../models/users')
const usersRouter = require('express').Router()

usersRouter.get('/', async (request, response) => {
  const users = await Users.find({})
  response.json(users)
})

usersRouter.post('/', async (request, response) => {
  console.log(request.body)
  try{
    const { username, password  } = request.body
  
    if(!password) return response.status(400).json({ error: 'password needed'})
    if(password.length < 8 ) return response.status(400).json({ error: 'password must be 8 characters or more'})
  
    const passwordHash = await bcrypt.hash(password, 10)
  
    const user = new User({
      username: username,
      passwordHash: passwordHash,
      score: 0
    })
  
    console.log('just before the save',user)
  
    const savedUser = await user.save()
    response.status(201).json(savedUser)
  }
  catch(err){
    console.log(err)
  }

})

module.exports = usersRouter