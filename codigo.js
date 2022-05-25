

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

//perros
//objeto perros
const perros = { 
    raza: "caniche",
    color: "blanco",
    peso: 23,
}
console.log(perros.peso)

let gatos = {
    color: "marron",
    pelaje: "largo",
}

function animales_domesticos (bicho, tamaño, comida){
    this.bicho = bicho;
    this.tamaño = tamaño;
    this.comida = comida;
}
let perro1 = new animales_domesticos ("perro", "chico", "carnivoro");
let gatito1 = new animales_domesticos("gato", "grande", "carnivoro");
//arrays

let animales = [perro1, gatito1];
animales[0].tamaño;
animales[0].tamaño="grande";//le cambie el tamaño a perro, no vuelve a ser chico
const humanos = ["chinos", "japoneses", "argentinos", "africanos", "alemanes", 790000];
const seres_vivos = animales.concat(humanos)
seres_vivos.reverse()

humanos.includes("yankee")
humanos.includes("argentinos")

//some para humanos
console.log (humanos.some((la) => la == "brasilero")) //me devuelve false
console.log(humanos.some((la)=> la== 'argentinos')) //me devuelve true

let helados = ["chocolate", "dulce de leche", "banana split", 250];
console.log(helados)
helados.push("menta granizada"); //agregp

helados.splice(3, 2) //me saco el precio y la menta granizada

//me devuelve las clases de manejo con un descuento
let clases_manejo = [
    {id: 1, nombre: 'Teoricas', precio: 1000, tarjeta: 'si'},
    {id: 2, nombre: 'Teoricas y practicas', precio: 2000, tarjeta: 'si'},
    {id: 3, nombre: 'Practicas', precio: 1500, tarjeta: 'si'},
    {id: 4, nombre: 'Estacionamiento', precio: 1000, tarjeta: 'no'},
    {id: 5, nombre: 'Curso completo', precio: 2500, tarjeta: 'si'},
]
let precio_clases = clases_manejo.map((clase) => {
    return {
        nombre: clase.nombre,
        precio: clase.precio - 1.30,
    }
}) 

console.log(precio_clases);

const seleccionar = clases_manejo.find(nombre => nombre.id === 2)
console.log(seleccionar) 

const existe = clases_manejo.some(nombre => nombre.nombre === 'virtual')
console.log(existe ) // false

function opciones() {
    const curso_seleccionado = document.getElementById("selector_curso").value;
    if (curso_seleccionado != "00") {
     let efectivo = prompt("desea pagar en efectivo?");
     clases_manejo.map(clase =>{
        if(clase.id == curso_seleccionado) {
            if ( efectivo == "si"){
                const Descuento = (clase.precio * 30) / 100;
                const precioConDescuento =(clase.precio - Descuento);
                console.log(clase)
                alert(precioConDescuento)
            }
            else {
                const precioTarjeta = clase.precio;
                        alert(precioTarjeta)
                        console.log(clase)
                }
            }
         })
    }
 }


const datos_personales = [
    {nombre: 'pepito', apellido: 'perez', dni: 1125125},
    {nombre: 'juanita', apellido: 'gonzalez', dni: 25253},
    {nombre: 'maria', apellido: 'sanchez', dni: 25248},
    {nombre: 'juancito',apellido: 'gutierrez', dni: 25788},
    {nombre: 'victoria', apellido: 'vera', dni: 965998},
]

let nombre1 = datos_personales.find((el) => el.nombre === "juanita")
console.log(nombre1)

//ejemplo productos
const productos = [ {id: 1,  producto: "Arroz", precio: 125},
                    {id: 2,  producto: "Fideo", precio: 70},
                    {id: 3,  producto: "Pan"  , precio: 90},
                    {id: 4,  producto: "Flan" , precio: 100},
                    {id: 5,  producto: "Harina" , precio: 150},
                    {id: 6,  producto: "Leche" , precio: 140},
                    {id: 7,  producto: "Manteca" , precio: 120},]


const buscado = productos.find(producto => producto.id === 3)
console.log(buscado) //me encuentra el pan

const hay_producto = productos.some(producto => producto.nombre === 'vino')
console.log(existe ) // me daria false, tuve que re declararla porque la tenia arriba con el nombre existe

const baratos = productos.filter(producto => producto.precio < 100)
console.log(baratos)
// [{id: 2,producto:"Fideo",precio:70},{id:3,producto:"Pan",precio: 50}]
const caros = productos.filter(producto => producto.precio > 100)
alert("es un producto caro, sale más de 100")

const listaNombres = productos.map(producto => producto.nombre)
console.log(listaNombres);
//[“Arroz”, “Fideo”, “Pan”, “Flan”]
//finaliza ejemplo


