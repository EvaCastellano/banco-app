import './Movement.css'
function Movement({ position, amount }) {
  const type = amount > 0 ? 'deposit' : 'withdrawal'
  return (
    <p>
      <div className="movements__row">
        <div className={`movements__type movements__type--${type}`}>
          {position+1} {type}
        </div>
        <div className="movements__date">{} days ago</div>
        <div className="movements__value">{amount}€</div>
      </div>
    </p>
  )
}

export default Movement
/* <div className="movements__row">
        <div className="movements__type movements__type--withdrawal">
          1 withdrawal
        </div>
        <div className="movements__date">24/01/2037</div>
        <div className="movements__value">-378€</div>
      </div> */
