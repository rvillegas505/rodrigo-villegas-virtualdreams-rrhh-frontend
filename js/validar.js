const nombre = document.getElementById("name");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("form");
const pwarning = document.getElementById("warnings");
const warningName = document.getElementById("warningNombre");
const warningEmail = document.getElementById("warningEmail");
const warningAsunto = document.getElementById("warningAsunto");
const warningMensaje = document.getElementById("warningMensaje");
const modal = document.getElementById("vmodal");

form.addEventListener("submit", e => {
    e.preventDefault();
    pwarning.innerHTML = "";
    let warningN = "";
    let warningEm = "";
    let warningAs = "";
    let warningMen = "";
    let regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let error = false;
    if (nombre.value.length < 3) {
        warningN += "el nombre es muy corto";
        error = true;
    }

    if (!regEmail.test(email.value)) {
        warningEm += 'email no valido';
        error = true;
    }
    if (asunto.value.length < 5) {
        warningAs += "asunto no valido";
        error = true;
    }
    if (mensaje.value.length < 15) {
        warningMen += "mensaje demasiado corto";
        error = true;
    }

    if (error == true) {
        warningName.innerHTML = warningN;
        warningEmail.innerHTML = warningEm;
        warningAsunto.innerHTML = warningAs;
        warningMensaje.innerHTML = warningMen;
    } else {
        warningN = "";
        warningEm = "";
        warningAs = "";
        warningMen = "";
        warningName.innerHTML = warningN;
        warningEmail.innerHTML = warningEm;
        warningAsunto.innerHTML = warningAs;
        warningMensaje.innerHTML = warningMen;
        $('#vmodal').modal('show');
    }

});


/*$(document).on('click', '#benviar', function() {
    $('#vmodal').modal.('show');
})*/