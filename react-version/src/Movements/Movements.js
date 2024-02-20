import './Movements.css'
import Movement from './Movement'
function Movements({ movements }) {
  return (
    <div className="movements">
      
      {movements.map((movement, index) => (
        <Movement position={index} amount={movement} />
      ))}
    </div>
  )
}

export default Movements

/* <div className="movements__row">
<div className="movements__type movements__type--deposit">
2 deposit
</div>
<div className="movements__date">3 days ago</div>
<div className="movements__value">4 000€</div>
</div>
<div className="movements__row">
<div className="movements__type movements__type--withdrawal">
1 withdrawal
</div>
<div className="movements__date">24/01/2037</div>
<div className="movements__value">-378€</div>
</div> */