import { PropTypes } from 'prop-types'

const MatchCard = ({ card, correct, en }) => {
  console.log(card)

  return(
    <div>
      <div>
        {en
          ?
          <div key={`${card.en}-en`} style={{ backgroundColor: correct }}>
            <input type='radio' id={`${card.en}-en`} name={card.en} disabled={false} />
            {/* onChange={matchHandler(card, event)}/> */}
            <label htmlFor={`${card.en}-en`}>{card.en}</label>
          </div> 
          : <div key={`${card.bg}-bg`} style={{ backgroundColor: correct }}>
            <input type='radio' id={`${card.bg}-bg`} name={card.bg} disabled={false} />
            {/* onChange={matchHandler(card, event)}/> */}
            <label htmlFor={`${card.bg}-bg`}>{card.bg}</label>
          </div> }
      </div>
    </div>
  )
}

MatchCard.propTypes = {
  card: PropTypes.object.isRequired
}

export default MatchCard