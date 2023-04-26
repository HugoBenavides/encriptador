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

    tituloMensaje = document.getElementById("tituloMensaje").textContent = "NADA QUE ENCRIPTAR";
    document.getElementById("imgEncriptado").src = "./index/muneco.png";
    document.getElementById("parrafo").textContent = "Favor de ingresar un texto";   
    }

}