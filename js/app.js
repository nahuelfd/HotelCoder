const contenedorProductos = document.getElementById('contenedorProductos')
const cartContainer = document.getElementById('carritoContenedor')
const botonVaciar = document.getElementById('vaciarCarrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')


let cart = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('cart')){
        cart = JSON.parse(localStorage.getItem('cart'))
        refreshCart()
    }
})

botonVaciar.addEventListener('click', () => {
    cart.length = 0
    refreshCart()
})
rooms.forEach((room) => {
    const div = document.createElement('div')
    div.classList.add('images')
    div.innerHTML = `
    <img src=${room.img} alt="">
    <h3>Habitación: ${room.nombre}</h3>
    <p>Con vista a: ${room.vista}</p>
    <p>Precio: ${room.precio}</p>
    <button id="agregar ${room.id}" class="agregar"><strong> SELECCIONAR </strong> </button>
    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar ${room.id}`)

    boton.addEventListener('click', () => {
        addToCart(room.id)
    })
})

const addToCart = (roomId) => {
    const exist = cart.some (room => room.id === roomId)
    
    if (exist){
        const room = cart.map (room => {
            if (room.id === roomID){
                room.cantidad++
            }
        })
    }else{
        const item = rooms.find((room) => room.id === roomId)
        cart.push(item)
        refreshCart()
        console.log(cart);
}
refreshCart()    
    
}

const removeFromCart = (roomId) => {
    const item = cart.find((room) => room.id === roomId)
    const index = cart.indexOf(item)
    cart.splice(index, 1)
    refreshCart()
}

const refreshCart = () => {
    cartContainer.innerHTML = ""

    cart.forEach((room) => {
        const div = document.createElement('div')
        div.className = ('roomInCart')
        div.innerHTML = `
        <p><strong>${room.nombre}</strong></p>
        <p>Precio: ${room.precio}</p>
        <button onclick = "removeFromCart(${room.id})">Quitar</button>
        `

        cartContainer.appendChild(div)

        localStorage.setItem('cart', JSON.stringify(cart))
    })

    contadorCarrito.innerText = cart.length
    precioTotal.innerText = cart.reduce((acc, room) => acc + room.precio, 0)
}