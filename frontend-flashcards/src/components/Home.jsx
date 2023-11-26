import { Link } from 'react-router-dom'
const Home = () => {
  return(
    <div>
      <p>Start a game:</p>
      <div>
        <Link to='/random10'> Random 10 cards </Link>
      </div>
      <div>
        <Link to='/match5'> Match 5 </Link>
      </div>
      <Link to='/hangman'> Hangman </Link>
    </div>
  )
}
export default Home