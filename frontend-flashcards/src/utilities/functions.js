// shuffle cards
const shuffle = (array) => {
  // define variables
  let capacity = array.length, current, random
  // while there are no remaining elements
  while (capacity) {
    // pick an element
    random = Math.floor(Math.random() * capacity--)
    // swap it with the current element
    current = array[capacity]
    array[capacity] = array[random]
    array[random] = current
  }
  return array
}

// random card
const randomArrayIndex = (min, max) => {
  return Math.floor(Math.random() * ((max - min + 1) + min))
}

// full get/shuffle cards function
const getRandomCards = (cards, amount) => {
  const output = []
  const shuffled = shuffle([...cards])
  for (let i = 0; i < amount; i++){
    let randomIndex = randomArrayIndex(0, shuffled.length -1)
    output.push(shuffled[randomIndex])
    shuffled.splice(randomIndex, 1)
  }
  return output
}

export default { getRandomCards }