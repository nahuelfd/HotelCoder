window.onload=function () {
    
    
    sessionStorage.setItem(`${name}, ${phone}, ${email}`);
    
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
   let details = document.getElementById("btndetails").value;
    let bookings = document.getElementById("bookings");
    let ok = document.getElementById("btnreservar").value;
    //let persons = document.querySelector("personas").value;
    //let brooms = document.querySelector("habitaciones").value;
    btnreservar.addEventListener("click", function validate(e){
        e.preventDefault();
        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let email = document.getElementById("email").value;
        if(email == "" || phone == "" || name == ""){
            alert("Todos los campos deben ser completados");
            bandera = false;
        }else if(email.includes("@") && email.includes(".")){
            let mensaje = document.createElement("div");
            mensaje.innerHTML = "Reserva ingresada";
            //formulario.innerHTML = "";
            document.body.append(mensaje);
            bandera = true;
        }else{
            alert("correo inválido");
            bandera = false;
        }
    });
   


    btndetails.addEventListener("click", showDetails);
    
    function showDetails(e) {
        e.preventDefault();
        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let email = document.getElementById("email").value;
        validate();
        if(bandera == true) {
           let details = document.createElement("div")
           details.innerHTML = `<h2> Datos para el check in: </h2>
            <p><strong> Nombre: </strong> ${name}</p>
            <p><strong> Teléfono: </strong> ${phone}</p>
            <p><strong> Correo: </strong> ${email}</p>`;
           document.body.appendChild(details);
            
        }else {
            alert("No realizaste ninguna reserva");
        }
    }

    //bookings.addEventListener("click", function showDetails(e){
     //   e.preventDefault();
     //   let name = document.getElementById("name").value;
     //   let phone = document.getElementById("phone").value;
     ///   let email = document.getElementById("email").value;
     ///   validate();
     //       let details = document.createElement("div")
      //      details.innerHTML = `<h2> Datos de tu reserva: </h2>
      //      <p><strong> Nombre: </strong> ${name}</p>
      //      <p><strong> Teléfono: </strong> ${phone}</p>
      //      <p><strong> Correo: </strong> ${email}</p>`;
     //       document.body.appendChild(details);
     //       
     //   }else {
     //       alert("No realizaste ninguna reserva");
     //   }

  //  })
    //bookings.addEventListener("submit", function validate(e){
        //e.preventDefault();
       // let name = document.getElementById("name").value;
       /// let phone = document.getElementById("phone").value;
       // let email = document.getElementById("email").value;
      //  if(email == "" || phone == "" || name == ""){
      //      alert("Todos los campos deben ser completados");
      //      bandera = false;
      //  }else if(email.includes("@") && email.includes(".")){
      //      let mensaje = document.createElement("div");
      //      mensaje.innerHTML = "Reserva ingresada";
      //      //formulario.innerHTML = "";
      //      document.body.append(mensaje);
      //      bandera = true;
      //  }else{
     //       alert("correo inválido");
     ///       bandera = false;
      //  }
   // })


}
