import { PropTypes } from 'prop-types'

const MatchCard = ({ card, correct, en, matchHandler, disabled }) => {

  return(
    <div>
      <div>
        {en
          ?
          <div key={`${card.en}-en`} style={{ backgroundColor: correct }}>
            <input type='radio' id={`${card.en}-en`} name={'en'} value={card.en} disabled={disabled} onChange={(event) => matchHandler(card, event)} />
            <label htmlFor={`${card.en}-en`}>{card.en}</label>
          </div>
          :
          <div key={`${card.bg}-bg`} style={{ backgroundColor: correct }}>
            <input type='radio' id={`${card.bg}-bg`} name={'bg'} value={card.bg} disabled={disabled} onChange={(event) => matchHandler(card, event)} />
            <label htmlFor={`${card.bg}-bg`}>{card.bg}</label>
          </div> }
      </div>
    </div>
  )
}

MatchCard.propTypes = {
  card: PropTypes.object.isRequired,
  correct: PropTypes.string,
  matchHandler: PropTypes.func.isRequired,
  en: PropTypes.bool, //this is just to print it in the right hand div
  disabled: PropTypes.bool
}

export default MatchCard