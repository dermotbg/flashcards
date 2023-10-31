import { Link } from 'react-router-dom'
const Home = () => {
  return(
    <div>
      <p>Start a game:</p>
      <div>
        <Link to='/Random10'> Random 10 cards </Link>
      </div>
      <div>
        <Link to='/'> Coming Soon... </Link>
      </div>
      <Link to='/'> Coming Soon... </Link>
    </div>
  )
}
export default Home