

    let usuario = prompt("ingresar nombre usuario");
    let contraseña = prompt("ingresar contraseña");
    let programa = prompt("ya sos parte del programa?");

    if ((usuario !="") && (contraseña !="") && (programa = "si")){
        alert("bienvenido");
    } else if (usuario = ""){
        alert ("error, solor pueen ingresar miembros del programa");
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

    //jubilacion

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
    

    
//turnos auto mama
let nombre_auto = prompt("ingresar nombre");
let numero_turno = 1
for(numero_turno; numero_turno <= 15; numero_turno ++){
    if (numero_turno =11){
        break
    }
    alert("tenes el turno N " + numero_turno + nombre_auto);
}

//tarjeta switch
let tarjeta = prompt("Ingresa tipo tarjeta");
while(tarjeta != "salir" ){
   switch (tarjeta) {
       case "Banco Santa Fe":
            alert("tenes 6 cuotas");
            break;
        case "Maestro":
            alert("tenes 10 cuotas");
            break;
        case "Santander":
        alert("tenes 3 cuotas");
        break;
       default:
           alert("Tu tarjeta acá no sirve")
           break;
   }
}
