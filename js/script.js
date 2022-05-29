const email = document.getElementById("usuario");
const password = document.getElementById("contrasenia");
const form = document.getElementById("formulario");
const btnEnviar =document.getElementById('btn-enviar');


form.addEventListener('submit', e=> {
    e.preventDefault();
    validateInputs();
});

function validateInputs(){
    // let entrar = false;
    if(email.value ===''){
        setErrorFor(email, 'No puede deja el email en blanco');
    }
    else if (!isEmail(email.value)){
        setErrorFor(email,'No ingresó un email válido');
    }
    else{
        setSucessFor(email);
        // entrar= true;
    }

    if(password.value ===''){
        setErrorFor(password,'La contraseña no puede ingresarse en blanco');
    }
    else{
        setSucessFor(password);
        // entrar=true;
    }
}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSucessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function isEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}
