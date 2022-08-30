window.onload=function () {
    let res = document.getElementById('bookings');
    
    const okdate = () => {
        let ing = new Date(document.getElementById('in').value);
        let egr = new Date(document.getElementById('out').value);
        const today = new Date();
       
    if (ing.valueOf() > egr.valueOf()) {
        return false;
    }else if (ing <= today) {
        return false;
    }else {
        return true;
    }
    }

    
    btnreservar.addEventListener("click", function validate(e){
        e.preventDefault();
        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let email = document.getElementById("email").value;
        okdate()
        if(email == "" || phone == "" || name == ""){
            alert("Todos los campos deben ser completados");
            bandera = false;
        }else if (isNaN(phone)){
            alert("Ingrese un número de contacto válido");
            bandera = false;
        }else if(!okdate()){
            alert("fecha inválida, ingresela nuevamente")
        }else if(email.includes("@") && email.includes(".")){
            let mensaje = document.createElement("div");
            mensaje.innerHTML = `<h2>Reserva ingresada</h2>
            <a href="../pages/rooms.html" style="text-decoration: none;"><strong> Seleccionar habitación disponible </strong> </a>
            `;
            //formulario.innerHTML = "";
            document.body.append(mensaje);
            bandera = true;
        }else {
            alert("error")
        }
    });

    btndetails.addEventListener("click", showDetails);
    
    function showDetails(e) {
        e.preventDefault();
        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let email = document.getElementById("email").value;
        //validate();
        const newdiv = document.getElementsByClassName('newdiv')
        okdate()
        if((okdate) && bandera == true) {
           let details = document.createElement("div")
           details.innerHTML = ""
           details.innerHTML = `<h2> <strong> Datos para el check in: </strong> </h2>
            <p><h3><strong> Nombre: </strong> ${name}</h3></p>
            <p><h3><strong> Teléfono: </strong> ${phone}</h3></p>
            <p><h3><strong> Correo: </strong> ${email}</h3></p>
            `;
            details.className = "newdiv";
           document.body.appendChild(details);
        }else {
            alert("No hay reserva realizada");
        }
        localStorage.setItem('res', JSON.stringify(res))
    }
    
}
