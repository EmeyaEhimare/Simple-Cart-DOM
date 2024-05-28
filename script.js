const fav = document.querySelectorAll('.heart')
const remove = document.querySelector('.delete')
const order = document.querySelector('.order-item')



fav.forEach( favs => {
    favs.addEventListener('click', (Event) => {
        Event.target.style.backgroundColor = 'pink'
    })
})


fav.forEach( favs => {
    favs.addEventListener('dblclick', (Event) => {
        Event.target.style.backgroundColor = 'transparent'
    })
})


// remove.forEach(removes => {
//     removes.addEventListener('click', () => {
//         order.style.display = 'none'

//     })
// })

// let price = 3

const amount = document.querySelector('.price')
const checkoutAmount = document.querySelector('#total-amount')
const check = document.querySelectorAll('.check')
const orders = document.querySelector('#order-summary')
const quantity = document.querySelector('.quantity')
const addButtons = document.querySelector('.add')
const removeButtons = document.querySelector('.remove')

let totalPrice = 0
let totalQuantity = 0
let myOrders = []


const price = parseInt(amount.dataset.price)
totalPrice += price
checkoutAmount.textContent = `$${totalPrice.toFixed(2)}`

addButtons.addEventListener('click',() => {
    const quan = parseInt(quantity.dataset.quantity)
    totalQuantity += quan
    quantity.textContent = totalQuantity

    const updatedAmount = `$${price * totalQuantity}`
    checkoutAmount.textContent = `${updatedAmount}.00`
})


removeButtons.addEventListener('click',() => {
    const quan = parseInt(quantity.dataset.quantity)
    totalQuantity -= quan
    if(totalQuantity < 0){
        totalQuantity = 0
    }
    quantity.textContent = totalQuantity

  const updatedAmount = `$${price * totalQuantity}`
  const newAmount = `${updatedAmount - price}`
  checkoutAmount.textContent = newAmount;
})



remove.addEventListener('click', () => {
    // order.style.display = 'none'
    order.classList.add('hide')
    checkoutAmount = totalPrice - price
    checkoutAmount.textContent = ch
})





