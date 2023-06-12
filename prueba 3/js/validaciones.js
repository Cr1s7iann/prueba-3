function validar() {
    var ret_nombre = validar_nombre();
    var ret_edad = validar_edad();
    var ret_check = validar_check();
    var ret_email = validar_email();
    var ret_numero = validar_numero();
    var ret_aficion = agregar_aficion();
    var ret_contraseña = validar_contraseña();
    var ret_direccion = validar_direccion();
    var ret_ciudad = validar_ciudad();
    return ret_nombre && ret_edad && ret_check && ret_email && ret_numero && ret_check && ret_aficion  && ret_contraseña && ret_direccion && ret_ciudad; 
}
var aficiones = [];

function agregar_aficion() {
    var aficion = document.getElementById("aficiones").value;
    var ul = document.getElementById("aficiones-list");
    var div = document.getElementById("err_aficiones");

    if (aficion !== "") {
        aficiones.push(aficion);
        var li = document.createElement("li");
        li.innerText = aficion;
        ul.appendChild(li);
    }

    if (aficiones.length < 2) {
        div.innerText = "Debes ingresar al menos dos aficiones";
        div.className = "text-danger";
        return false;
    } else {
        div.innerText = "";
        return true;
    }
}

function validar_direccion() {
    var direccion = document.getElementById("direcc").value;
    var div = document.getElementById("err_direcc");
    
    if (direccion.trim() === "") {
        div.innerText = "La dirección no puede estar en blanco";
        div.className = "text-danger";
        return false;
    } else {
        div.innerText = "";
        return true;
    }
}

function validar_ciudad() {
    var ciudad = document.getElementById("ciudad").value;
    var div = document.getElementById("err_ciudad");

    if (ciudad === "Seleccione una ciudad...") {
        div.innerText = "Debe seleccionar una ciudad";
        div.className = "text-danger";
        return false;
    } else {
        div.innerText = "";
        return true;
    }
}

function validar_contraseña() {
    var password = document.getElementById("password").value;
    var confirmarContrasena = document.getElementById("confirm_password").value;
    var div = document.getElementById("err_confirm_password");

    if (password !== confirmarContrasena) {
        div.innerText = "Las contraseñas no coinciden";
        div.className = "text-danger";
        return false;
    }

    if (password.length < 3 || password.length > 6) {
        div.innerText = "La contraseña debe tener de 3 a 6 caracteres";
        div.className = "text-danger";
        return false;
    }

    var tieneLetra = false;
    var tieneDigito = false;

    for (var i = 0; i < password.length; i++) {
        var character = password.charAt(i);

        if (/[a-zA-Z]/.test(character)) {
            tieneLetra = true;
        }

        if (/\d/.test(character)) {
            tieneDigito = true;
        }

        if (tieneLetra && tieneDigito) {
            break;
        }
    }

    if (!tieneLetra || !tieneDigito) {
        div.innerText = "La contraseña debe contener al menos un dígito y una letra";
        div.className = "text-danger";
        return false;
    }

    div.innerText = "";
    return true;
}

function validar_numero() {
    var numero = document.getElementById("numero").value;
    var div = document.getElementById("err_numero");
    if (numero == "") {
        div.innerText = "El número telefónico no puede estar en blanco";
        div.className = "text-danger";
        return false;
    } else if (isNaN(numero)) {
        div.innerText = "Ingrese solo números";
        div.className = "text-danger";
        return false;
    } else if (numero.length != 9) {
        div.innerText = "El número telefónico debe tener exactamente 9 dígitos";
        div.className = "text-danger";
        return false;
    } else {
        div.innerText = "";
        return true;
    }
}

function validar_email() {
    var email = document.getElementById("email").value;
    var div = document.getElementById("err_email");
    var arroba = email.indexOf("@");
    var punto = email.lastIndexOf(".");
    if (arroba < 1) {
        div.innerText = "El correo electrónico no tiene @ (arroba) o nombre de usuario";
        div.className = "text-danger";
        return false;
    } else {
        if (arroba < 2) {
            div.innerText = "El nombre de usuario del correo no es válido";
            div.className = "text-danger";
            return false;
        } else {
            if (arroba + 3 > punto || punto + 1 >= email.length - 1 ) {
                div.innerText = "El nombre de dominio no es válido";
                div.className = "text-danger";
                return false;
            } else {
                div.innerText = "";
                return true;
            }
        }
    }
}

function validar_check() {
    var check = document.getElementById("acepto");
    var div = document.getElementById("err_acepto");
    if (!check.checked) {
        div.innerText = "Debe aceptar las condiciones";
        div.className = "text-danger";
        return false;
    } else {
        div.innerText = "";
        return true;
    }
}

function validar_nombre() {
    var nombre = document.getElementById("nombre").value;
    var div = document.getElementById("err_nombre");
    if (nombre == "") {
        div.innerText = "El nombre no puede estar en blanco";
        div.className = "text-danger";
        return false;
    } else {
        if (nombre.length > 30) {
            div.innerText = "El nombre no puede tener más de 30 caracteres";
            div.className = "text-danger";
            return false;
        } else {
            div.innerText = "";
            return true;
        }
    }
}
function validar_edad() {
    var str_edad = document.getElementById("edad").value;
    var div = document.getElementById("err_edad");
    if (isNaN(str_edad)) {
        div.innerText = "La edad no es un número válido";
        div.className = "text-danger";
        return false;
    } else {
        var edad = parseInt(str_edad);
        if (edad < 1 || edad > 99) {
            div.innerText = "La edad debe ser un número entre 1 y 99";
            div.className = "text-danger";
            return false;
        } else {
            div.innerText = "";
            return true;
        }
    }
}