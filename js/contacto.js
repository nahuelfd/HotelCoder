const btn = document.getElementById('button');
const form = document.getElementById('form');

    document.getElementById('form')
     .addEventListener('submit', function(event) {
       event.preventDefault();
    
       btn.value = 'Enviando...';
    
       const serviceID = 'default_service';
       const templateID = 'template_01ud9zg';
    
       emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Enviar';
          alert('Mensaje enviado con éxito!'); 
          location.reload();
        }, (err) => {
          btn.value = 'Enviar';
          alert(JSON.stringify(err));
        });
        localStorage.setItem('form', JSON.stringify(form))
    });

    