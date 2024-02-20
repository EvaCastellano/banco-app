import './Summary.css'

function Summary({ movements }) {
  const ingresos = movements // sumIn
    .filter((mov) => mov > 0)
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2)
  const gastos = movements // sumOut
    .filter((mov) => mov < 0)
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2)

  return (
    <div className="summary">
      <p className="summary__label">In</p>
      <p className="summary__value summary__value--in">{ingresos}€</p>
      <p className="summary__label">Out</p>
      <p className="summary__value summary__value--out">{gastos}€</p>
      <p className="summary__label">Interest</p>
      <p className="summary__value summary__value--interest">0000€</p>
      <button className="btn--sort">&#8595; SORT</button>
    </div>
  )
}

export default Summary
