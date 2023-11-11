const Avatar = require('../models/avatars')
const User = require('../models/users')

const avatarRouter = require('express').Router()

avatarRouter.get('/:id', async(request, response) => {
  const avatar = await Avatar.findById(request.params.id)
  return response.status(200).send(avatar)
})

avatarRouter.put('/', async(request, response) => {
  // avatar id now gets set on user creation, all reqs will be PUT
  const avatar = request.body
  const user = await User.findById(avatar.user)
  console.log('user',user)

  const newAvatar = {
    seed: avatar.seed,
    flip: avatar.flip,
    translateX: avatar.translateX,
    translateY: avatar.translateY,
    beard: avatar.beard,
    eyes: avatar.eyes,
    mouth: avatar.mouth,
    moustache: avatar.moustache,
    nose: avatar.nose,
    top: avatar.top,
    face: avatar.face,
    user: user
  }

  await Avatar.findByIdAndUpdate(user.avatar, newAvatar)
  return response.status(201).send(newAvatar)
})

module.exports = avatarRouter