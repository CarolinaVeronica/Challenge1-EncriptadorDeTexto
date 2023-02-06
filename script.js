function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    
    //i es para que afecte tanto a minúsculas como mayusculas e, E
    // g sirve para toda la linea u oración
    //m es para que afecte a múltiples lineas o párrafos
    
    
    var txtCifrado= texto.replace(/e/igm,"enter");
    var txtCifrado= txtCifrado.replace(/o/igm,"ober");
    var txtCifrado= txtCifrado.replace(/i/igm,"imes");
    var txtCifrado= txtCifrado.replace(/a/igm,"ai");
    var txtCifrado= txtCifrado.replace(/u/igm,"ufat");

    /*document.getElementById("imgDer").style.display = "none";*/
    document.getElementById("texto").style.display  = "none";
    document.getElementById("texto2").style.display = "none";
    /*document.getElementById("botonCopiar").style.display ="none";*/
    document.getElementById("textoDesencriptado").innerHTML = txtCifrado;
    document.getElementById("textoDesencriptado").style.display="show";
    document.getElementById("textoDesencriptado").style.display="inherit";
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
    document.getElementById("inputTexto").value = "";
    document.getElementById("msj").style.display = "show";
    document.getElementById("msj").style.display = "inherit";
    

}
function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    
    //i es para que afecte tanto a minúsculas como mayusculas e, E
    // g sirve para toda la linea u oración
    //m es para que afecte a múltiples lineas o párrafos
    
    
    var txtCifrado= texto.replace(/enter/igm,"e");
    var txtCifrado= txtCifrado.replace(/ober/igm,"o");
    var txtCifrado= txtCifrado.replace(/imes/igm,"i");
    var txtCifrado= txtCifrado.replace(/ai/igm,"a");
    var txtCifrado= txtCifrado.replace(/ufat/igm,"u");

    /*document.getElementById("imgDer").style.display = "none";*/
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").style.display = "none";
    document.getElementById("textoDesencriptado").innerHTML = txtCifrado;
    document.getElementById("textoDesencriptado").style.display="show";
    document.getElementById("textoDesencriptado").style.display="inherit";
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
    document.getElementById("inputTexto").value = "";
    document.getElementById("msj").style.display = "show";
    document.getElementById("msj").style.display = "inherit";
    

}

function copiar(){

    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");

}



