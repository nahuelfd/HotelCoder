let subscribe = document.getElementById('subscribe').value;
let butSubs = document.getElementById('button-addon2');

const refresh = () => {
    subscribe.innerHTML = ""
}

butSubs.addEventListener('click', () => {
    if (subscribe == "") {
        alert("debe ingresar un correo")
    }else if (subscribe.includes("@") && subscribe.includes(".")) {
        alert("Suscripción exitosa")
        refresh()
        return true;
    }else {
        alert("debe ingresar un correo válido");
        return false;
    }
    refresh()
})

