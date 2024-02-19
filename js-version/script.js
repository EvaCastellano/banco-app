'use stript'

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Juan Sánchez',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
}

const account2 = {
  owner: 'María Portazgo',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
}

const account3 = {
  owner: 'Estefanía Pueyo',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
}

const account4 = {
  owner: 'Javier Rodríguez',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
}

const accounts = [account1, account2, account3, account4]

// Elements
const labelWelcome = document.querySelector('.welcome')
const labelDate = document.querySelector('.date')
const labelBalance = document.querySelector('.balance__value')
const labelSumIn = document.querySelector('.summary__value--in')
const labelSumOut = document.querySelector('.summary__value--out')
const labelSumInterest = document.querySelector('.summary__value--interest')
const labelTimer = document.querySelector('.timer')

const containerApp = document.querySelector('.app')
const containerMovements = document.querySelector('.movements')

const btnLogin = document.querySelector('.login__btn')
const btnTransfer = document.querySelector('.form__btn--transfer')
const btnLoan = document.querySelector('.form__btn--loan')
const btnClose = document.querySelector('.form__btn--close')
const btnSort = document.querySelector('.btn--sort')

const inputLoginUsername = document.querySelector('.login__input--user')
const inputLoginPin = document.querySelector('.login__input--pin')
const inputTransferTo = document.querySelector('.form__input--to')
const inputTransferAmount = document.querySelector('.form__input--amount')
const inputLoanAmount = document.querySelector('.form__input--loan-amount')
const inputCloseUsername = document.querySelector('.form__input--user')
const inputClosePin = document.querySelector('.form__input--pin')

const createUsernames = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase() // juan sanchez
      .split(' ') // ['juan','sanchez']
      .map((name) => name[0]) // ['j', 's']
      .join('') // js
  })
}
createUsernames(accounts)

/* TODO: TAREAS:
- Mostrar el mensaje de bienvenida
- Cambiar opacidad
- Quitar los movimientos que hay em el html
- poner los nuevos movimientos en el html

- Hacer lo mismo desde REACT
- Subir app en REACT
- 1) Se compila: npm run build
- 2) Subir la carpeta build a certweb  // gh-pages | la carpeta no esta en la raiz !!
- 3) Al ser un subdirectorio, quizá haya que añadir un campo en el package.json "homepage": "http://certweb.com/bankist-app"  (hecho)
*/

btnLogin.addEventListener('click', function (e) {
  e.preventDefault()
  const currentAccount = accounts.find(
    (account) => account.username === inputLoginUsername.value
  )
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('login correcto')
    // Mostramos bienvenido Juan
    containerApp.style.opacity = 100
    labelWelcome.textContent = `Bienvenido ${
      currentAccount.owner.split(' ')[0]
    }`
    updateUI(currentAccount)
  } else {
    console.log('login incorrecto')
    // Mostramos Usuario o contraseña incorrectos
  }

  function updateUI(account) {
    displayMovements(account.movements)
  }

  function displayMovements(movements) {
    containerMovements.innerHTML = ''
    movements.forEach(function (mov, i) {
      const type = mov > 0 ? 'deposit' : 'withdrawal'
      const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
        i + 1
      } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
      `
      containerMovements.insertAdjacentHTML('afterbegin', html)
    })
  }

  inputLoginUsername.value = inputLoginPin.value = ''
  inputLoginPin.blur()
})
