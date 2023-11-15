import { PropTypes } from 'prop-types'

const MatchCard = ({ card, correct, en, matchHandler }) => {

  return(
    <div>
      <div>
        {en
          ?
          <div key={`${card.en}-en`} style={{ backgroundColor: correct }}>
            <input type='radio' id={`${card.en}-en`} name={'en'} value={card.en} disabled={false} onChange={(event) => matchHandler(card, event)} />
            {/* onChange={matchHandler(card, event)}/> */}
            <label htmlFor={`${card.en}-en`}>{card.en}</label>
          </div>
          :
          <div key={`${card.bg}-bg`} style={{ backgroundColor: correct }}>
            <input type='radio' id={`${card.bg}-bg`} name={'bg'} value={card.bg} disabled={false} onChange={(event) => matchHandler(card, event)} />
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