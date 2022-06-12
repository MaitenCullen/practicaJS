function bienvenidos(){
    let contraseña = prompt("ingresar contraseña");
    let programa = prompt("ya sos parte del programa?");
    if ((usuario !="") && (contraseña !="") && (programa = "si")){
        alert("bienvenido");
       } else if (usuario = ""){
         alert ("error, solor pueen ingresar miembros del programa");
       }
}

function bienvenidos(){ //aca use un ternario
    let usuario = prompt("ingrese nombre de usuario")
    let contraseña = prompt("ingresar contraseña");
    let programa = prompt("ya sos parte del programa?");  
    return usuario !="" && contraseña !="" && programa == "si" ? alert("bienvenido") : alert ("error, solor pueen ingresar miembros del programa");
}

function mostrameOnClick(){
    Swal.fire({
        title: 'Ingrese el monto que paga el usuario:',
        input: 'number',
        inputLabel: 'Monto',
        inputValue: "value",
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return 'Debe ingresar un monto!'
          }
        }
      })

}



function nombre_usuario(a, b){
   return ("tu usuario es " + a + " " + "tu taller es " + b);
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
