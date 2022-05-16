

function bienvenidos(){
    let contraseña = prompt("ingresar contraseña");
    let programa = prompt("ya sos parte del programa?");
    if ((usuario !="") && (contraseña !="") && (programa = "si")){
        alert("bienvenido");
    } else if (usuario = ""){
        alert ("error, solor pueen ingresar miembros del programa");
    }
}
function mostrameOnClick(){
    let usuario = prompt("ingresar nombre usuario");
    let taller = prompt("ingresar taller");
    alert(nombre_usuario(usuario, taller));
}

function nombre_usuario(a, b){
   return ("tu usuario es " + a + " " + "tu taller es " + b);
}

    
    
//coccion minutos
let tiempo_cocina = parseInt(prompt("ingrese el tiempo total"));
let tiempo_inicial = tiempo_cocina;
let un_cuarto_tiempo = tiempo_cocina / 4;
let sacar_torta;
    for(tiempo_cocina ; tiempo_cocina >= -1; tiempo_cocina --){
        console.log("El tiempo total de coccion es " +  tiempo_cocina);
        if (tiempo_inicial / 2 == tiempo_cocina) {
            console.log(tiempo_cocina + " es la mitad de la coccion" );
        }  
        if (tiempo_cocina == un_cuarto_tiempo) {
            console.log( un_cuarto_tiempo + "este es el cuarto del tiempo");
        }
        if (tiempo_cocina == 0){
            sacar_torta = prompt("vas a sacar la torta?");

        }
        else if (sacar_torta == "no") {
            alert( "se quemo la torta");
        }
    }


    //minutos coccion con while
    
    function alarma(){
        let tiempo_usuario = prompt("en cuantos minutos suena la alarma?");
        let minutos = 0;
        let timbre = alert("lista la alarma");
        while(minutos <= tiempo_usuario){
            minutos++ ; 
            console.log(minutos)
            if (minutos == tiempo_usuario){
                timbre;
                console.log("ya pasaron " + tiempo_usuario);
            }
        }
    }

    //jubilacion

    function jubilacion(){
        let edad = prompt("ingrese su edad");
        let sexo = prompt("ingrese su sexo");
        let jubilacion = 55;
        if (sexo === "varon"){
            jubilacion = 65;
        }
        if (edad >= jubilacion){
            alert("ya te jubilaste");
        }
        else {
            for (edad; edad < jubilacion; edad ++) {
                console.log(jubilacion - edad);
                alert("te faltan " + (jubilacion - edad));
            }
        }

    }
 
    
//turnos auto mama

 function turnos() {
    let nombre_auto = prompt("ingresar nombre");
    let numero_turno = 1
    for(numero_turno; numero_turno <= 15; numero_turno ++){
        if (numero_turno =11){
            break
        }
        alert("tenes el turno N " + numero_turno + nombre_auto);
    }

 }

//tarjeta switch

function obtener_precio(){
    let formadePago = prompt("ingresar forma de pago");
    switch (formadePago) {
        case "tres cuotas":
             alert("$3.500");
             break;
         case "efectivo":
             alert("$2.500");
             break;
         case "tarjeta 1 pago":
         alert("$3.000");
         break;
    }
 }

 function motorEnMarcha() {
     let tanque = 50;
     while (tanque > 0) {
         tanque = tanque -1;
         console.log(tanque)
         switch (tanque) {
             case 10:
                alert("Estas en reserva, el tanque tiene " + tanque + " litros")
                let quiereCargar = prompt("queres cargar nafta?")
                if (quiereCargar === 'si') {
                    tanque = 50;
                }
                
                 break;
            case 0:
            alert("te quedaste sin nafta el tanque tiene  " + tanque + " litros")
                break;   
         }
     }
 }
 //nafta
function porcentaje_nafta(){
    let total = 40;
    let nafta = document.getElementById("cantNafta").value;
  if ( nafta >= total || nafta >= total/2){
      alert("estas bien de nafta");
  }
  if (nafta < 20 && nafta > 5){
    alert("Tenes menos de medio tanque");
  }
  else if (nafta <= 5 && nafta >0 ){
      alert( "estas en reserva");
  }
  else {
    alert("te quedaste sin nafta")
  }
}



function ingresarProducto() {
    let producto = prompt ("elija el producto");
    console.log(producto.replace(/ /g, ""));
    let costoProducto;
    if (producto === "producto 1") {
        costoProducto = 200;
    }
    if (producto === "producto 2") {
        costoProducto = 300;
    }
    if(producto === "producto 1" || producto === "producto 2" ){
        compras_eventos(costoProducto)
    }
    else {
        alert("le pifiaste")
    }
}

function compras_eventos(precio){
    const impuesto = precio * 21 / 100;
    let medioPago = prompt("elija medio pago");
    switch (medioPago) {
        case "tres cuotas":
             alert(precio + impuesto * 0.30);
             break;
         case "efectivo":
             alert(precio + impuesto);
             break;
         case "un pago":
         alert(precio + impuesto * 0.10);
         break;
    }
}

