let email = prompt("ingrese su correo electronico");
let phone = parseInt(prompt("ingrese un telefono de contacto"));
const valid = () => {
    isNaN(phone) ? alert("Ingrese un numero correcto") : console.log("telefono ingresado");
}

email == "" ? alert("Debe ingresar un correo") : console.log("email ingresado");
(phone) ? valid() : console.log("numero ingresado");

let age = parseInt(prompt("ingrese su edad"));

const enter = age >18 && alert("Bienvenido al sitio");

const user = prompt("ingrese su usuario");

console.log(user?.direccion || "Direccion no registrada");

const room = {
    nombre: "Suite D",
    floor: 4,
    price: 150
}

console.log(room?.floor || null);

let cart;

let storageCart = JSON.parse(localStorage.getItem(cart)) || [];


