import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import functions from '../utilities/functions'
import { useDispatch, useSelector } from 'react-redux'
import { setGuessed, setHangmanWord } from '../reducers/hangmanReducer'
import hangman1 from '../assets/hangman_images/hangman_1.png'
import hangman2 from '../assets/hangman_images/hangman_2.png'
import hangman3 from '../assets/hangman_images/hangman_3.png'
import hangman4 from '../assets/hangman_images/hangman_4.png'
import hangman5 from '../assets/hangman_images/hangman_5.png'
import hangman6 from '../assets/hangman_images/hangman_6.png'
import hangman7 from '../assets/hangman_images/hangman_7.png'
import hangman8 from '../assets/hangman_images/hangman_8.png'


const Hangman = ({ cards }) => {
  const mainCard = useSelector(state => state.hangman.card)
  const guessed = useSelector(state => state.hangman.guessed)
  const dispatch = useDispatch()
  const chars = ['Я','В','Е','Р','Т','Ъ','У','И','О','П','Ш','Щ','А','С','Д','Ф','Г','Х','Й','К','Л','Ю','Ч','З','Ь','Ц','Ж','Б','Н','М']
  const images = [hangman1, hangman2, hangman3, hangman4, hangman5, hangman6, hangman7, hangman8]
  const [img, setImg] = useState(images[0])

  useEffect(() => {
    const cardDealt = functions.getRandomCards(cards.all, 1)
    dispatch(setHangmanWord(cardDealt[0]))
  },[cards])

  useEffect(() => {
    if(mainCard && mainCard.bg){
      const wordArray = mainCard.bg.split('')
      console.log(wordArray)
      let guessedArray = []
      for (let char of wordArray){
        if (char === ' '){
          guessedArray.push('\xa0'.repeat(5)) //blank space between words
        }
        else{
          guessedArray.push('_')
        }
      }
      console.log(guessedArray)
      dispatch(setGuessed(guessedArray))
    }
  },[mainCard])

  const guessHandler = (event) => {
    event.target.disabled = true
    const wordArray = mainCard.bg.toUpperCase().split('')
    if(wordArray.indexOf(event.target.value) === -1){
      console.log('incorrect')
      setImg(images[images.indexOf(img) + 1])
      //load hangman image
    }
    const indices = []
    let index = wordArray.indexOf(event.target.value)
    while (index !== -1){
      indices.push(index)
      index = wordArray.indexOf(event.target.value, index + 1)
    }
    console.log(indices)
    const updatedGuessed = [...guessed]
    for (let i of indices){
      updatedGuessed[i] = event.target.value
    }
    dispatch(setGuessed(updatedGuessed))
  }

  //handle game over reset
  const resetHandler = () => {
    const cardDealt = functions.getRandomCards(cards.all, 1)
    dispatch(setHangmanWord(cardDealt[0]))
    setImg(images[0])
  }

  if(!mainCard && guessed.length === 0) return <div>Loading...</div>
  // still needs win/lose state and points allocation
  if(img === hangman8) return <div><button onClick={resetHandler}>try again by refreshing for now</button> <img src={img} alt="hangman-image" /> </div>
  if (!guessed.includes('_')) return <div><button onClick={resetHandler}>Congrats! You have won. Start Again?</button></div>
  return(
    <div>
      <div>
        <div>Here is the EN: {mainCard.en}</div>
        <div>Here is the blank: {guessed.map(c => {
          return c !== '_'
            ? c
            :` '${c}${c}${c}${c}' `
        }
        )}</div>
      </div>
      <div>
        {chars.map((c) => {
          return <button onClick={guessHandler} key={c} value={c} disabled={false}>{c}</button>
        })}
      </div>
      <img src={img} alt="hangman-image" />
    </div>
  )
}

Hangman.propTypes = {
  cards: PropTypes.object.isRequired,
}

export default Hangman