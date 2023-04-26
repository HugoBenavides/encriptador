/*function ocultarBoton (){
    document.getElementById("btn-copiar").style.visibility = "hidden";
    document.getElementById("btn-copiar").style.display = "none";
}

window.onload = ocultarBoton;*/


function encriptar () {

    let texto = document.getElementById("texto").value.toLowerCase();
    let tituloMensaje = document.getElementById("tituloMensaje").value;
    
    let textoCifrado = texto
        .replace(/e/gim, "enter")
        .replace(/i/gim, "imes")
        .replace(/a/gim, "ai")
        .replace(/o/gim, "ober")
        .replace(/u/gim, "ufat");


        document.getElementById("texto").value = textoCifrado;
        document.getElementById("imgEncriptado").src = "./index/encriptado.jpg";
        document.getElementById("tituloMensaje").textContent = "ENCRIPTADO CORRECTAMENTE";
        document.getElementById("parrafo").textContent = "Nadie sabrá tus secretos";
        
    if (texto.length == "") {

        tituloMensaje = document.getElementById("tituloMensaje").textContent = "NADA QUE ENCRIPTAR O DESENCRIPTAR";
        document.getElementById("imgEncriptado").src = "./index/muneco.png";
        document.getElementById("parrafo").textContent = "Favor de ingresar un texto";   
    }

}

function desencriptar (){
    let texto = document.getElementById("texto").value.toLowerCase();
    let tituloMensaje = document.getElementById("tituloMensaje").value;

    let textoCifrado = texto
        .replace(/enter/gim, "e")
        .replace(/imes/gim, "i")
        .replace(/ai/gim, "a")
        .replace(/ober/gim, "o")
        .replace(/ufat/gim, "u");

        document.getElementById("texto").value =  textoCifrado;
        document.getElementById("imgEncriptado").src = "./index/desencriptado.jpg";
        document.getElementById("tituloMensaje").textContent = "CONOCERÁN TUS SECRETOS";
        document.getElementById("parrafo").textContent = "El mensaje fue desencriptado exitosamente";

        if (texto.length == ""){

            tituloMensaje = document.getElementById("tituloMensaje").textContent = "NADA QUE ENCRIPTAR O DESENCRIPTAR";
            document.getElementById("imgEncriptado").src = "./index/muneco.png";
            document.getElementById("parrafo").textContent = "Favor de ingresar un texto"; 

        } 

}

function copiar(){

    let contEncriptado = document.querySelector(".texto");
        contEncriptado.select();
        document.execCommand("copy");
        alert("Se copió el texto");

}


